export default class Room {

    constructor(name, id) {
            this.name = name;
            this.id = id;
            this.sensors= [];
    }

    addSensor(adapter) {
        this.sensors.push(adapter);
    }
}
