const express = require("express");
const router = express.Router();
require("dotenv").config();


router.get("/", async (req, res) => {

    try {

        const { start, end } = req.params;
        // if(start!=='' && end!==""){

        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
        const gmapURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${GOOGLE_API_KEY}`
        const response = await axios(gmapURL);
        // }

        res.json({
            response
        })

    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

);

module.exports = { directionRoute: router }