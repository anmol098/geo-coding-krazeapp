const constants = require("./constants")
const fs = require("fs");
const {Config} = require("./configs/config");
const {GoogleGeoCoding} = require("./controller/geo-coding/GeoCoding");

var main = async () => {
    const data = fs.readFileSync(Config.INPUT_FILE_PATH, {encoding: 'utf8', flag: 'r'})
    // IT is assumed that input file will always contain each city in new line
    let cities = data.split("\n")
    let result = [];
    for (let city of cities) {
        try {
            var geoCode = await new GoogleGeoCoding().makeRequest(city)
            result.push(Object.values(geoCode));
        } catch (e) {
            console.error(`ERROR: Not able to fetch GeoCode for  ${city} due to ${e}`);
        }
    }
    fs.writeFileSync("output.txt", result.join("\n"));
    return "OK";
}

console.time("Time Taken")
main().then(r => {
    console.log(r)
}).catch(e => {
    console.error(e)
}).finally(() => {
    console.timeEnd("Time Taken");
    process.exit();
});