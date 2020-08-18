const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXRob21wc29uMTkiLCJhIjoiY2tkb2xwdHZ1MWY0NTJxa3l4bmo2eHExdiJ9.xAx_L6g6d7DQhHp6D0hXbA&limit=1'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Geocode API', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode