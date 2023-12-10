const { decode, encode } = require ("@googlemaps/polyline-codec");



const encoded = "_p~iF~ps|U_ulLnnqC_mqNvxq`@";
console.log(decode(encoded, 5));


const path = [
  [38.5, -120.2],
  [40.7, -120.95],
  [43.252, -126.453],
];
console.log(encode(path, 5));


//===============================
const encodePath=(path)=>{
    const result = encode(path,5);
    console.log(result);
}

//================================
const decodeString=(string)=>{
    const result = decode(string,5)
    console.log(result);
}


module.exports ={encodePath,decodeString}