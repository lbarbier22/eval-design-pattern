export default class Room {

    constructor(name) {
        this.name = name;
        this.notifierList = [];
    }

    addSensor(sensor) {
        sensor.addEvent('detect', ({ message }) => this.onDetect({ message }));
    }

    addNotifier(notifier) {
        this.notifierList.push(notifier);
    }

    onDetect({ message }) {
        console.log("[" + this.name + "]");
        for (let notifier of this.notifierList) {
            notifier.send(message);
        }
    }
}
