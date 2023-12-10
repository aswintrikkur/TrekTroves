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

app.get('/', (req, res) => {
    res.json(`You are connected to ${PORT}`);
})


// const num = {new:'data'};
// const startString = `${num[0].toString()},${num[0].toString()}`;
// const numString = num.toString()
// console.log(Array.isArray(num))
// console.log(JSON.stringify(num))
// console.log(typeof(num))
// console.log(`?origin=${num[0],num[1]}`);
// console.log('numstring=====',numString);


app.use("/api/toll", tollGuruAPI);
app.use("/api/fetchDirection", directionRoute);


app.all("*", (req, res) => {
    res.status(404).json("This page does not exist");
});



