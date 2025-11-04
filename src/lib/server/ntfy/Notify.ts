import { env } from "$env/dynamic/private";


export class Notify {
    static async send(message: string, title?: string, priority: 'min' | 'low' | 'default' | 'high' | 'max' = 'default') {
        const apiUrl = env.NTFY_API_URL;
        const topic = env.NTFY_TOPIC;
        const authToken = env.NTFY_AUTH_TOKEN;


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