export default class DiscordNotification {

    constructor(channel) {
        this.channel = channel;
    }

    send(message) {
        console.log("Discord | "+this.channel+" : "+message);
    }
}
