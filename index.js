import Room from "./Room.js";
import SensorAAdapter from "./Adapter/SensorAAdapter.js";
import CameraA from "./Sensor/CameraA.js";
import ThermalBAdapter from "./Adapter/ThermalBAdapter.js";
import ThermalSensorB from "./Sensor/ThermalSensorB.js";
import TemperatureSensorA from "./Sensor/TemperatureSensorA.js";
import NotificationFactory from "./Notification/NotificationFactory.js";

const salon = new Room('Salon', 1);

const camera = salon.addCamera();
const temp = salon.addTemperature(50);
const thermal = salon.addThermal();

salon.addNotifier(NotificationFactory.create('email', 'email@gmal.com'));
salon.addNotifier(NotificationFactory.create('log', 'log.txt'));
salon.addNotifier(NotificationFactory.create('discord', '#alertes'));

// camera.trigger();
thermal.trigger();
temp.trigger();
