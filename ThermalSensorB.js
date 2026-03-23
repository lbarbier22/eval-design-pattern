export default class ThermalSensorB {

    constructor(position) {
        this.position = position;
    }

    triggerHeatSignature(process) {
        process(JSON.stringify({
            sensor: this.position,
            detection: 'thermal',
            date: new Date().toISOString(),
        }));
    }
}


