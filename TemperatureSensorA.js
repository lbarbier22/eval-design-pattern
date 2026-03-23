class TemperatureSensorA {
    constructor(location, threshold) {} // location = nom de la pièce, threshold = température de déclenchement
    onDetect(callback) {
        console.log("Capteur température ici : "+location);

    } // Déclenche un message d’alerte (string)
}
