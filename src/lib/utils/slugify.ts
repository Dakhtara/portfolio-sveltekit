import type { Snippet } from "svelte";

export default function slugify(text: string|Snippet): string {
    if (typeof text !== 'string') {
        text = text?.toString() || '';
    }
    return text
		?.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]/g, '') ||
		'';
}