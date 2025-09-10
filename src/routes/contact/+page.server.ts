import { Notify } from '$lib/server/ntfy/Notify';
import Recaptcha from '$lib/server/recaptcha/Recaptcha.js';
import { checkMessageValidity } from '$lib/utils/FirewallMessage';
import z from 'zod';

export const prerender = false;

const Schema = z.object({
	name: z.string().min(1),
	email: z.email(),
	subject: z.string().min(1),
	message: z.string().min(1),
	lastname: z.string().optional(), // honeypot field
	token: z.string().min(1)
});

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		// Honeypot check
		if (data.lastname) {
			return { success: true }; // pretend it was successful
		}

		const parsed = Schema.safeParse(data);

		// Basic validation

		if (!parsed.success) {
			return { success: false, error: 'All fields are required.' };
		}

		const { name, email, subject, message, token } = parsed.data;

		if (checkMessageValidity(message) === false || checkMessageValidity(subject) === false) {
			//This is scam so we just send success
			return { success: true };
		}

        try {
			Recaptcha.verify(token);
		} catch (error) {
			console.error('reCAPTCHA verification error:', error);
			return { success: false, error: 'reCAPTCHA verification failed. Please try again.' };
		}

		// Send notification using ntfy
		await Notify.send(
			`New contact:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
			'New Contact',
			'high'
		);

		return { success: true };
	}
};
