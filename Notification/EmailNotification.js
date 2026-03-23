export default class EmailNotification {

    constructor(address) {
        this.address = address;
    }

    send(message) {
        console.log("Email | "+this.address+" : "+message);
    }
}
