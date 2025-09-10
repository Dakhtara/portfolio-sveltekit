import { RECAPTCHA_PRIVATE_KEY } from '$env/static/private';

export default class Recaptcha {
	static async verify(token: string): Promise<{ success: boolean; score?: number }> {
		// Verify reCAPTCHA
		const secretKey = RECAPTCHA_PRIVATE_KEY;
		if (!secretKey) {
			console.error('RECAPTCHA_PRIVATE_KEY is not set.');
			throw new Error('reCAPTCHA verification failed. Please try again.');
		}

		const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				secret: secretKey,
				response: token
			})
		});

		const recaptchaData = await recaptchaResponse.json();
		if (!recaptchaData.success) {
			console.error('reCAPTCHA verification failed:', recaptchaData);
			throw new Error('reCAPTCHA verification failed. Please try again.');
		}
		if (recaptchaData.score < 0.5) {
			// Adjust threshold as needed
			console.error('reCAPTCHA score too low:', recaptchaData.score);
			throw new Error('reCAPTCHA verification failed. Please try again.');
		}

		return { success: true, score: recaptchaData.score };
	}
}
