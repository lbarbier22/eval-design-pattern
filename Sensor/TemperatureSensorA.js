export default class TemperatureSensorA {
    constructor(location, threshold) {
        this.location = location;
        this.threshold = threshold;
    }

    onDetect(callback) {
        callback("Temperature hit here");
    }
}
