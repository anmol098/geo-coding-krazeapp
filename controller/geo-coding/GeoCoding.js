var constants = require("../../constants")
const GoogleLocation = require("../google/GoogleLocation");
var Redis = require("redis");
var redisClient = Redis.createClient();

class GeoCoding {
    async makeRequest(address) {

    }

    cacheCurrentResponse(cacheUid, data) {
        // Setting the redis cache with key as given address response will be servered form the cache
        // cache is stored for 6000 seconds
        redisClient.setex(cacheUid, 6000, JSON.stringify(data));
    }

    async isDataInCache(address) {
        return new Promise(async (resolve, reject) => {
            await redisClient.get(address, async (err, data) => {
                if (data) {
                    resolve(JSON.parse(data));
                } else {
                    reject();
                }
            });
        })

    }
}

class GoogleGeoCoding extends GeoCoding {
    async makeRequest(address) {
        // Checking if Data is available in Cache if yes serve from cache if not then make the request to api to get fresh data
        try {
            return await this.isDataInCache(address)
        } catch (e) {
            try {
                var response = await new GoogleLocation(address).Response()
            } catch (e) {
                throw e;
            }

            // Taking the first value of the result in case of multiple result
            var geocode = response.results[0].geometry.location;
            this.cacheCurrentResponse(address, geocode);
            return geocode
        }
    }
}

class PositionStackGeoCoding extends GeoCoding {
    makeRequest(address, serviceProvider) {
        try {
            return constants.SERVICE_NOT_IMPLEMENTED_MESSAGE
        } catch (e) {
            throw e;
        }
    }
}

module.exports = {GoogleGeoCoding, PositionStackGeoCoding}