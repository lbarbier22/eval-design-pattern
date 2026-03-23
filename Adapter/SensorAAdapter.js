export default class SensorAAdapter {

    constructor(sensor) {
        this.sensor = sensor;
        this.callbackList = [];
    }

    trigger() {
        this.sensor.onDetect((message) => {
            for (let event of this.callbackList.filter(e => e.event === 'detect')) {
                event.callback({ message, sensor: this });
            }
        });
    }

    addEvent(event, callback) {
        this.callbackList.push({ event, callback });
    }
}
