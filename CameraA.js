export default class CameraA {
    constructor(location) {
        this.location = location;
    }

    onDetect(callback) {
        callback("Oulala je vois une personne je crois");
    }
}
