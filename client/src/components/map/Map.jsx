import React, { useMemo, useState } from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { tolls } from '../../data/tolls/tolls'
import { polylineEncoded } from "../../data/directions/directions";
import { decodeString } from "../../utils/polylines";
import { Icon } from "leaflet";
import { Button } from "../Button";


// import MapInfo from "./MapInfo";
// import Routing from "./RoutingMachine";

const youIcon = new Icon({
    iconUrl: "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/shooting-target-color-icon.png",
    iconSize: [38, 38]

})

export const MapPage = () => {

    // console.log(tolls);

    const path = useMemo(() => {
        return decodeString(polylineEncoded);
    }, [])


    console.log('path====', path);


    return (

        <div id="mapContainer" className="      bg-slate-800 p-2 " style={{ height: "500px", minWidth: "800px" }}>

            <button id="LocateMeButton" className="px-2 py-1 z-50 m-1 text-slate-400 bg-slate-900 ">
                Locate Me </button>

            <MapContainer
                style={{ width: "100%", height: "100%" }}
                center={path[100]}
                zoom={12}
                scrollWheelZoom={false} >

                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Polyline positions={path} pathOptions={{ color: "red" }} />

                <Marker position={path[0]}  >
                    <Popup>
                        Start
                    </Popup>
                </Marker>

                <Marker position={[10.4195, 76.27022]}>
                    <Popup>
                        Destination
                    </Popup>
                </Marker>

                <LocationMarker />
            </MapContainer>
        </div>

    )
}

// Find current Location========
function LocationMarker() {
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
        <Marker position={position} icon={youIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}





// class MapComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             lat: 17.4,
//             lng: 78.4,
//             zoom: 7,
//             isMapInit: false
//         };
//     }

//     saveMap = map => {
//         this.map = map;
//         this.setState({
//             isMapInit: true
//         });
//     };

//     render() {
//         const { lat, lng, zoom } = this.state;
//         const position = [lat, lng];

//         return (
//             <Map center={position} zoom={zoom} ref={this.saveMap}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {this.state.isMapInit && <Routing map={this.map} />}
//             </Map>
//         );
//     }
// }

// export default MapComponent;
