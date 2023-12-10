import axios from 'axios'
import { Client, defaultAxiosInstance } from "@googlemaps/google-maps-services-js";


export const fetchRoute = async () => {

    const start = 'Dallas, TX'
    const end = 'addison, TX'

    const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    console.log(GOOGLE_API_KEY);

    // const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${GOOGLE_API_KEY}`
    // const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyCCoqMRfUyqdaf5tLSIG_NsDlCWCKxOO5g`
    const gmapURL = `https://maps.googleapis.com/maps/api/directions`

    //fetch polylilne form google map directin API
    let gmapPolyline





    const client = new Client({});

    client
        .elevation({
            url: gmapURL,
            params: {
                locations: [{ lat: 45, lng: -110 }],
                key: GOOGLE_API_KEY
            },
            timeout: 1000 // milliseconds
        }, defaultAxiosInstance)
        .then(r => {
            console.log(r.data.results[0].elevation);
        })
        .catch(e => {
            console.log(e);
        });;


    // return gmapPolyline;


}

// export const fetchRoute = async () => {

//     const start = 'Dallas, TX'
//     const end = 'addison, TX'

//     const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
//     console.log(GOOGLE_API_KEY);

//     // const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${GOOGLE_API_KEY}`
//     const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyCCoqMRfUyqdaf5tLSIG_NsDlCWCKxOO5g`

//     //fetch polylilne form google map directin API
//     const gmapPolyline = await axios({
//         url: gmapURL,
//         method: 'GET',
//     })
//     console.log(gmapPolyline);

//     return gmapPolyline;


// }

