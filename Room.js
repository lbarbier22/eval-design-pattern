import SensorAAdapter from "./Adapter/SensorAAdapter.js";
import CameraA from "./Sensor/CameraA.js";
import TemperatureSensorA from "./Sensor/TemperatureSensorA.js";
import ThermalSensorB from "./Sensor/ThermalSensorB.js";
import ThermalBAdapter from "./Adapter/ThermalBAdapter.js";

export default class Room {

    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.notifierList = [];
    }

    addCamera() {
        const adapter = new SensorAAdapter(new CameraA(this.name));
        adapter.addEvent('detect', ({ message }) => this.onDetect({ message }));
        return adapter;
    }

    addTemperature(threshold) {
        const adapter = new SensorAAdapter(new TemperatureSensorA(this.name, threshold));
        adapter.addEvent('detect', ({ message }) => this.onDetect({ message }));
        return adapter;
    }

    addThermal() {
        const adapter = new ThermalBAdapter(new ThermalSensorB(this.id));
        adapter.addEvent('detect', ({ message }) => this.onDetect({ message }));
        return adapter;
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
