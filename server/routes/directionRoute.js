const express = require("express");
const router = express.Router();
require("dotenv").config();


router.post("/", async (req, res) => {

    try {

        console.log(req.body);
        // console.log(res);
        const { start, end } = req.body;
        // if(start!=='' && end!==""){


        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
        // const URL = `https://maps.googleapis.com/maps/api/directions/json?origin=[10.535070460167107,76.1953353881836]&destination=[10.056754930151309,76.32923126220705]&key=AIzaSyCCoqMRfUyqdaf5tLSIG_NsDlCWCKxOO5g`
        const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start[0]},${start[1]}&destination=${end[0]},${end[1]}&key=${GOOGLE_API_KEY}`

        console.log(gmapURL);
        const response = await axios(gmapURL);
        // }

        console.log(response);

        res.json({
            response
        })

    } catch (error) {
        res.json(error)
    }
}

);

module.exports = { directionRoute: router }