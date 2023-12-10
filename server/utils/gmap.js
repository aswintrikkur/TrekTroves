// import axios from 'axios'; 
const axios = require('axios')
const { Client } = require("@googlemaps/google-maps-services-js");


// const start = 'Thrissur'
// const end = 'Pudukad'

// console.log(GOOGLE_API_KEY);

// const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${GOOGLE_API_KEY}`
// const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Thrissur`

const fetchRoute = async (start, end) => {

    try {

        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
        const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${GOOGLE_API_KEY}`
        const response = await axios(gmapURL);

        res.json({
            response
        })
    
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}


const fetchElevation = () => {

    //fetch polylilne form google map directin API
    let gmapPolyline


    const client = new Client({});

    client
        .elevation({
            // url: gmapURL,
            params: {
                locations: [{ lat: 45, lng: -110 }],
                key: GOOGLE_API_KEY
            },
            timeout: 1000 // milliseconds
        },)
        .then(r => {
            console.log(r.data.results[0].elevation);
        })
        .catch(e => {
            console.log(e);
        });;


    // return gmapPolyline;


}

module.exports = { fetchRoute, fetchElevation }