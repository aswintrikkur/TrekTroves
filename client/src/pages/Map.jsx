import React, { useMemo } from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { polylineEncoded } from "../data/directions/directions";
import { decodeString } from "../utils/polylines";
import { iconMarkerEnd, iconMarkerStart } from "../components/map/MarkerIcons";
import { DropMarker } from "../components/map/DropMarkers";
import { CurrentLocationMarker } from "../components/map/CurrentLocationMarker";




export const MapPage = () => {

    const path = useMemo(() => {
        return decodeString(polylineEncoded);
    }, [])


    // console.log('path====', path);



    return (

        <div id="mapContainer" className="      bg-slate-800 p-2 " style={{ height: "500px", minWidth: "800px" }}>

            <button id="LocateMeButton" className="px-2 py-1 z-50 m-1 text-slate-400 bg-slate-900 ">Locate Me</button>

            <MapContainer
                style={{ width: "100%", height: "100%" }}
                center={path[100]}
                zoom={12}
                scrollWheelZoom={false} >

                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Polyline positions={path} pathOptions={{ color: "red" }} />

                <Marker position={path[0]} icon={iconMarkerStart} eventHandlers={{}} >
                    <Popup >start</Popup>
                </Marker>

                <Marker position={[10.4195, 76.27022]} icon={iconMarkerEnd} >
                    <Popup>Destination</Popup>
                </Marker>

                <CurrentLocationMarker />
                <DropMarker />

            </MapContainer>

        </div>

    )
}


