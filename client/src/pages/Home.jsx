import React, { useState } from "react";
import { Container } from "../components/primary/Container";
import { MapModal } from "../components/ref/MapModal";
import { MapModalTest } from "../components/ref/MapModalTest";
import { InputField } from "../components/primary/InputField";
import { decode, encode } from "@googlemaps/polyline-codec";
import { Button } from "../components/primary/Button";
import { fetchRoute } from "../utils/gmap";
import { MapPage } from "./Map";

export const Home = () => {

	// const encoded = "_p~iF~ps|U_ulLnnqC_mqNvxq`@";
	// console.log(decode(encoded, 5));

	return (
		<Container>
			<div className=" flex flex-col h-5/6 w-screen items-center">
				<h2 className=" text-4xl   pt-5 ">TOLL Calculator</h2>

				<div className="  h-full   px-10 mt-10 flex gap-2 justify-between">

					<div className=" flex flex-col justify-center items-center ">
						<InputField name='Departure' placeholder='Departure' />
						<InputField name='Destination' placeholder='Destination' />

						<Button onClick={fetchRoute} text='Fetch Route' />
						{/* <MapModal /> */}

					</div>
					<MapPage />
					{/* <MapModalTest /> */}
				</div>
			</div>
		</Container>
	);
};
