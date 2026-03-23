import EmailNotification from './EmailNotification.js';
import LogNotification from './LogNotification.js';
import DiscordNotification from './DiscordNotification.js';

export default class NotificationFactory {

    static create(type, config) {
        if (type === 'email') return new EmailNotification(config);
        if (type === 'log') return new LogNotification(config);
        if (type === 'discord') return new DiscordNotification(config);
        throw new Error("Unknown type : "+type);
    }

}
