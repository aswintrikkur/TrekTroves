import React, { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { CurrentLocationMarker, DropMarker, TollMarkers, iconMarkerEnd, iconMarkerStart } from "../components";
import { polylineEncoded } from "../data/directions/directions";
import { decodeString } from "../utils/polylines";
import uuid from "react-uuid";
import { LocateMeButton } from "../components/primary/Button";

// let uuidKey;
export const MapPage = () => {
	const { startPoint, endPoint, currentDecodedPolyline } = useSelector((state) => state.routes);
	const { hasTolls } = useSelector((state) => state.tolls);

	// const staticPath = useMemo(() => {
	//     return decodeString(polylineEncoded);
	// }, [])

	// let path = currentDecodedPolyline || false;
	let	path = currentDecodedPolyline || false;
		// uuidKey = uuid();

	// const mapCenter = useMemo(() => {
	//     return path[Math.floor(path.length - 1 / 2)];
	// }, [])

	return (
		<div id="mapContainer" className="bg-neutral-500   rounded-lg p-2 mt-1 h-fit min-w-[350px] ">
			<LocateMeButton />

			<MapContainer
				// style={{ width:"max(300px,100%)", height: "max(100px,65vh)" }}
				style={{ width: "100%", minHeight: "400px" }}
				// style={{ width:"300px", height: "300px" }}
				center={path ? path[0] : [10.05635, 76.32969]}
				// center={path[100]}
				zoom={9}
				scrollWheelZoom={false}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				{path && (
					<>
						<Polyline positions={path} pathOptions={{ color: "red" }}  />
						<Marker position={path[0]} icon={iconMarkerStart} key='start' eventHandlers={{}}>
							<Popup>start</Popup>
						</Marker>
						<Marker position={path[path?.length - 1]} icon={iconMarkerEnd} key='end'>
							<Popup>Destination</Popup>
						</Marker>
					</>
				)}

				<CurrentLocationMarker  />
				<DropMarker  />

				{hasTolls && <TollMarkers  />}
			</MapContainer>
		</div>
	);
};
