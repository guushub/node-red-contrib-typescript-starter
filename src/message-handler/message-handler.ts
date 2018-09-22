export class MessageHandler {
    static lowerCase(payload: string): string {
        return payload.toLowerCase();
    }

    static upperCase(payload: string): string {
        return payload.toUpperCase();
    }
}