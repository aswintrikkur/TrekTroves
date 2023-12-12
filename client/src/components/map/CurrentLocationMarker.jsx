import React, { useEffect, useState } from "react";
import { iconMe } from "./MarkerIcons";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { toggleLocateMe } from "../../redux/features/toggleSlice";
import { useDispatch } from "react-redux";


// Find current Location========
export function CurrentLocationMarker() {
    const dispatch = useDispatch();
    const [position, setPosition] = useState(null)

    const locateMe = document.getElementById('locateMeButton');
    locateMe.addEventListener('click', () => { map.locate()})

    // useEffect(() => {
    //     //event listener attching on useEffect to avoid accumulation.
    //     const mount = locateMe.addEventListener('click', () => {
    //         setPosition(prev => {
    //             if (prev !== null) {
    //                 return null
    //             }
    //             else {
    //                 map.locate()
    //                 return prev
    //             }
    //         })
    //         dispatch(toggleLocateMe());
    //     })
    //     return () => {
    //         removeEventListener(mount);
    //     }
    // }, [])


    const map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })


    return position === null ? null : (
        <Marker position={position} icon={iconMe}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
