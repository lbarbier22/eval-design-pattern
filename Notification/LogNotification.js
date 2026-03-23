export default class LogNotification {

    constructor(filename) {
        this.filename = filename;
    }

    send(message) {
        console.log("Log | "+this.filename+" : "+message);

    }
}
