import Room from "./Room.js";
import SensorAAdapter from "./Adapter/SensorAAdapter.js";
import CameraA from "./CameraA.js";
import ThermalBAdapter from "./Adapter/ThermalBAdapter.js";
import ThermalSensorB from "./ThermalSensorB.js";
import TemperatureSensorA from "./TemperatureSensorA.js";



const salon = new Room('Salon');

salon.addSensor(new SensorAAdapter(new CameraA('Salon')));
salon.addSensor(new SensorAAdapter(new TemperatureSensorA('Salon')));
salon.addSensor(new ThermalBAdapter(new ThermalSensorB('Salon')));
