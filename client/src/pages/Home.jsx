import React, { useState } from "react";
import { Container } from "../components/primary/Container";
import { InputField } from "../components/primary/InputField";
import { FetchLocationButton } from "../components/primary/Button";
import { MapPage } from "./Map";

export const Home = () => {


	return (
		<Container>
			<div className=" flex flex-col h-5/6 w-screen items-center">
				<h2 className=" text-4xl   pt-5 ">TOLL Calculator</h2>

				<div className="  h-full   px-10 mt-10 flex gap-2 justify-between">

					<div className=" flex flex-col justify-center items-center ">
						<InputField name='Departure' placeholder='Departure' />
						<InputField name='Destination' placeholder='Destination' />

						<FetchLocationButton text='Fetch Route' />
					</div>
					<MapPage />

				</div>
			</div>
		</Container>
	);
};
