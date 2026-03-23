import Room from "./Room.js";
import NotificationFactory from "./Notification/NotificationFactory.js";

const entry = new Room('Entry', 1);

const bedroom = new Room('Bedroom', 2);


const cameraEntry = entry.addCamera();
const thermalEntry = entry.addThermal();

const tempEntry = bedroom.addTemperature(50);


entry.addNotifier(NotificationFactory.create('email', 'email@gmal.com'));
entry.addNotifier(NotificationFactory.create('log', 'log.txt'));

bedroom.addNotifier(NotificationFactory.create('discord', '#alertes'));

cameraEntry.trigger();
thermalEntry.trigger();

tempEntry.trigger();
