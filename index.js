import Room from "./Room.js";
import SensorAAdapter from "./SensorAAdapter.js";
import CameraA from "./CameraA.js";


const salon = new Room('Salon', 1);

salon.addSensor(new SensorAAdapter(new CameraA('Salon'), 'Caméra'));
