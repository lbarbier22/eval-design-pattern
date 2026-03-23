import Room from "./Room.js";
import SensorAAdapter from "./Adapter/SensorAAdapter.js";
import CameraA from "./Sensor/CameraA.js";
import ThermalBAdapter from "./Adapter/ThermalBAdapter.js";
import ThermalSensorB from "./Sensor/ThermalSensorB.js";
import TemperatureSensorA from "./Sensor/TemperatureSensorA.js";
import NotificationFactory from "./Notification/NotificationFactory.js";

const camera = new SensorAAdapter(new CameraA('Salon'));
const temp = new SensorAAdapter(new TemperatureSensorA('Salon', 50));
const thermal = new ThermalBAdapter(new ThermalSensorB(1));

const salon = new Room('Salon');

salon.addSensor(camera);
salon.addSensor(temp);
salon.addSensor(thermal);

salon.addNotifier(NotificationFactory.create('email', 'admin@safehome.com'));
salon.addNotifier(NotificationFactory.create('log', 'safehome.log'));
salon.addNotifier(NotificationFactory.create('discord', '#alertes'));

// camera.trigger();
thermal.trigger();
temp.trigger();
