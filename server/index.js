const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { tollGuruAPI } = require("./routes/tollGuruAPI");
const { encodePath, decodeString } = require("./utils/polyline");
const { directionRoute } = require("./routes/directionRoute");

app.use(cors());
app.use(express.json());



const PORT = 3006;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);

app.get('/', (req,res) => {
    res.json(`You are connected to ${PORT}`);
})

app.use("/api/toll", tollGuruAPI);
app.use("/api/fetchDirection", directionRoute);


app.all("*", (req, res) => {
    res.status(404).json("This page does not exist");
});



