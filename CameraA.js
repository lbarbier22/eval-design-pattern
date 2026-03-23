export default class CameraA {
    constructor(location) {
        this.location = location;
    }

    onDetect(callback) {
        console.log("Oulala je vois une personne je crois : " + this.location);
    } // Déclenche un message d’alerte (string)
}
