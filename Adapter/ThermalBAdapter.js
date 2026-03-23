export default class ThermalBAdapter {
    
    constructor(sensor) { 
        this.sensor = sensor;
    }
    
    onDetect(callback) {
        this.sensor.triggerHeatSignature((rawJson) => {
            const data = JSON.parse(rawJson);
            callback(data.detection+" | J'ai senti qql'n à "+data.date);
        });
    }
}
