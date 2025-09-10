import { NTFY_AUTH_TOKEN } from "$env/static/private";
import { NTFY_API_URL, NTFY_TOPIC } from "$env/static/private";


export class Notify {
    static async send(message: string, title?: string, priority: 'min' | 'low' | 'default' | 'high' | 'max' = 'default') {
        const apiUrl = NTFY_API_URL;
        const topic = NTFY_TOPIC;
        const authToken = NTFY_AUTH_TOKEN;


        if (!apiUrl || !topic || !authToken) {
            console.warn('NTFY_API_URL, NTFY_TOPIC or NTFY_AUTH_TOKEN is not set. Notification not sent.');
            return;
        }

        const url = `${apiUrl}/${topic}`;

        const headers: Record<string, string> = {
            'Title': title || 'Notification',
            'Priority': priority,
            'Tags': 'portfolio,notification',
            'Authorization': `Bearer ${authToken}`
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: message
            });

            if (!response.ok) {
                console.error(`Failed to send notification: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }
}