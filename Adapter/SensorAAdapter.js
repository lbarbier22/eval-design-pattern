export default class SensorAAdapter {

    constructor(sensor) {
        this.sensor = sensor;
    }

    onDetect(callback) {
        this.sensor.onDetect(callback);
    }
}
