var GeoCodingOperation = require("../geo-coding/GeoCodingOperation")
var {googleLocationProvider} = require("../../provider/google")

class GoogleLocation extends GeoCodingOperation {
    constructor(address) {
        super(address);
    }

    async Response() {
        try {
            return await googleLocationProvider.getGeoCoding(this.address);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = GoogleLocation;