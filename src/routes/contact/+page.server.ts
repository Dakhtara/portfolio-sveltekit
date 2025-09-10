import { Notify } from '$lib/server/ntfy/Notify';
import z from 'zod';

const Schema = z.object({
	name: z.string().min(1),
	email: z.email(),
	subject: z.string().min(1),
	message: z.string().min(1),
	lastname: z.string().optional() // honeypot field
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

		const { name, email, subject, message } = parsed.data;

		// Send notification using ntfy
		await Notify.send(
			`New contact:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
			'New Contact',
			'high'
		);

		return { success: true };
	}
};
