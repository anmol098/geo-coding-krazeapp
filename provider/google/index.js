const {Config} = require("../../configs/config")
var axios = require('axios');

const googleLocationProvider = {};

const HOST = "https://maps.googleapis.com/maps/api/geocode/json"

googleLocationProvider.getGeoCoding = async (address) => {
    var config = {
        method: 'get',
        url: `${HOST}?address=${address}&key=${Config.GOOGLE_GEOCODE_PROVIDER.API_KEY}`,
        headers: {}
    };
    try {
        var response =  await axios(config);
        return response.data
    } catch (e) {
        throw e;
    }
}

module.exports = {googleLocationProvider}