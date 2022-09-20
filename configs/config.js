require('dotenv').config()

var devConfig = {
    GOOGLE_GEOCODE_PROVIDER: {
        API_KEY: process.env.GOOGLE_MAP_API_KEY,
    },
    INPUT_FILE_PATH: process.env.INPUT_FILE_PATH
}

var prodConfig = {
    GOOGLE_GEOCODE_PROVIDER: {
        API_KEY: process.env.GOOGLE_MAP_API_KEY,
    },
    INPUT_FILE_PATH: process.env.INPUT_FILE_PATH
}

var Config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig

module.exports = {Config};