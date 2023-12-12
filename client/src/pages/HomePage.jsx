import React, { useState } from "react";
import { ChooseVehicle, Container, FaqComponent, FetchButton, InputField, TollDetails } from "../components";
import { MapPage } from "./MapPage";
import uuid from "react-uuid";
import { useSelector } from "react-redux";
import { useRoutes } from "../hooks/useRoutes";
import { useTolls } from "../hooks/useTolls";

export const HomePage = () => {
	const { hasTolls } = useSelector((state) => state.tolls);
	const { fetchDirections } = useRoutes();
	const { fetchTolls } = useTolls();

	return (
		<Container>
			<div id="homeContainer" className=" h-fit flex flex-col py-4 px-6 items-center ">
				<h2 className=" text-3xl py-4 font-bold leading-tight text-black sm:text-4xl lg:text-5xl ">TOLL Calculator</h2>

				<div className="  flex justify-between gap-6 flex-wrap w-full px-2 py-5   ">
					<div className="  flex-[2] flex-shrink pt-5    flex flex-col items-center ">
						<div className=" flex flex-col w-10/12  ">
							<InputField placeholder="Departure" type="text" />
							<InputField placeholder="Destination" type="text" />
							<InputField placeholder="Start Time" type="number" />
							<ChooseVehicle />
						</div>

						<div className="flex w-9/12 sm:flex-col ">
							<FetchButton text="Fetch Routes" onClick={fetchDirections} />
							<FetchButton text="Fetch Tolls" onClick={fetchTolls} />
						</div>
					</div>
					<div className=" flex-[4]  ">
						<MapPage />
					</div>
				</div>
				<div id="tollDetailsContainer" className="max-w-2xl h-full mt-3 sm:w-full  self-end">
					{hasTolls && <TollDetails key={uuid()} />}
				</div>

				<div className="w-full">
					<FaqComponent />
				</div>
			</div>
		</Container>
	);
};
