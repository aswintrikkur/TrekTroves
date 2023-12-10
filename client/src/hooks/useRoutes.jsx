import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

export const useRoutes = () => {

    // const fetchRoute = (start,end)=>{


    //     const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    //     // console.log(GOOGLE_API_KEY);

    //     const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${GOOGLE_API_KEY}`
    //     // const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyCCoqMRfUyqdaf5tLSIG_NsDlCWCKxOO5g`
    //     // const gmapURL = `https://maps.googleapis.com/maps/api/directions`






    //     const client = new Client({});

    //     client
    //         .elevation({
    //             url: gmapURL,
    //             params: {
    //                 locations: [{ lat: 45, lng: -110 }],
    //                 key: GOOGLE_API_KEY
    //             },
    //             timeout: 1000 // milliseconds
    //         }, defaultAxiosInstance)
    //         .then(r => {
    //             console.log(r.data.results[0].elevation);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });;


    // }
    const API = 'http://localhost:3006/api/fetchDirection';


    const fetchDirections = async (start, end) => {

        console.log({start:start,end:end});
        try {
            const response = await axios({
                url: API,
                method: 'POST',
                body:{
                    start:start,
                    end:end
                }
            })
        } catch (error) {

        }

    }

    return { fetchDirections }
}