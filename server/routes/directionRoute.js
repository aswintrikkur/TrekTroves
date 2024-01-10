const express = require("express");
const router = express.Router();
const axios = require("axios")
require("dotenv").config();


router.post("/", async (req, res) => {

    try {
        //* start and end are two arrays with [lat,lng]
        const { start, end, departure, destination } = req.body;

        let startString, endString;
        if (typeof (start) !== String || typeof (end) !== String) {
            startString = start.toString()
            endString = end.toString()
        }

        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
        // const URL = `https://maps.googleapis.com/maps/api/directions/json?origin=[10.535070460167107,76.1953353881836]&destination=[10.056754930151309,76.32923126220705]&key=AIzaSyCCoqMRfUyqdaf5tLSIG_NsDlCWCKxOO5g`
        // const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${departure}&destination=${destination}&key=${GOOGLE_API_KEY}`
        const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${startString || departure}&destination=${endString || destination}&key=${GOOGLE_API_KEY}`

        const response = await axios(gmapURL);

        res.json(response.data)

    } catch (error) {
        res.json(error)
    }
}

);

module.exports = { directionRoute: router }