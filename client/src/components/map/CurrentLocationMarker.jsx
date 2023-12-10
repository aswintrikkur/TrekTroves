import React, { useState } from "react";
import { iconMe } from "./MarkerIcons";
import { Marker, Popup, useMapEvents } from "react-leaflet";


// Find current Location========
export function CurrentLocationMarker() {
    const [position, setPosition] = useState(null)

    const locateMe = document.getElementById('LocateMeButton');
    locateMe.addEventListener('click', () => map.locate());

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
