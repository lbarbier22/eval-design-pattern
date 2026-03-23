export default class ThermalBAdapter {
    
    constructor(sensor) { 
        this.sensor = sensor;
        this.callbackList = [];
    }

    trigger() {
        this.sensor.triggerHeatSignature((rawJson) => {
            const data = JSON.parse(rawJson);
            const message = `[${data.detection}] ${data.sensor} — ${data.date}`;
            for (let event of this.callbackList.filter(e => e.event === 'detect')) {
                event.callback({ message, sensor: this });
            }
        });
    }

    addEvent(event, callback) {
        this.callbackList.push({ event, callback });
    }
}
