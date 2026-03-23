export default class Room {

    constructor(name) {
            this.name = name;
            this.sensors= [];
    }

    addSensor(adapter) {
        adapter.onDetect((message) => {
            console.log("["+this.name+"] : "+message);
        });
        this.sensors.push(adapter);
    }
}
