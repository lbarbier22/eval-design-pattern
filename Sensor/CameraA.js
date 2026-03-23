export default class CameraA {
    constructor(location) {
        this.location = location;
    }

    onDetect(callback) {
        callback("Oulala I saw someone I think");
    }
}
