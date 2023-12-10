import { decode, encode } from "@googlemaps/polyline-codec";

export const encodePath=(path)=>{
    const result = encode(path,5);
    return result
}

//================================
export const decodeString=(string)=>{
    const result = decode(string,5)
    return result
}
