class ThermalSensorB {
    constructor(position) {} // position = id de la pièce
    triggerHeatSignature(process) {

    } // Déclenche une donnée complexe json, voir ci dessous
}



// Le format de retour pour le capteur B est en json :
// {
//     "sensor" : "<name>",
//     "detection" : "<detection type>", // "thermal" pour le capteur que nous utilisons
//     "date":"<current date and time>"
// }
