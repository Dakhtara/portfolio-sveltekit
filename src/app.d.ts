// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '$env/static/private' {
		const NTFY_API_URL: string;
		const NTFY_TOPIC: string;
		const NTFY_AUTH_TOKEN: string;
}

export {};
