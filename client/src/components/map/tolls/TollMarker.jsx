import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { iconToll } from "../MarkerIcons";

export const TollMarkers = () => {
	const { hasTolls, distance, costs, tolls, polyline } = useSelector((state) => state.tolls);

	let point = [];
	let start;
	let end;
	//  ((start = [data?.lat || data?.start?.lat, data?.lng || data?.start?.lng]),
	//   (end = [data?.lat || data?.end?.lat, data?.lng || data?.end?.lng]),

	return !hasTolls ? null : (
		<div id="tollMarkers">
			{tolls.map((data, index) => (
				< >
					{data.type !== "barrier" 
						? ((start = [data?.start?.lat, data?.start?.lng]),
						  (end = [data?.end?.lat, data?.end?.lng]),
						  (point = null))
						: (point = [data?.lat, data?.lng])}

					<Marker position={point || start} icon={iconToll} key={index}>
						<Popup>
							<h3> {data?.name}</h3>
						</Popup>
					</Marker>
				</>
			))}
		</div>
	);
};
