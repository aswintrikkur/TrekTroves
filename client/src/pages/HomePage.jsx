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
			<div id="homeContainer" className=" h-fit flex flex-col py-4 px-3  sm:px-6 items-center relative">
				<div className="self-start mx-5 pt-5 mb-10">
					<h1 className=" text-slate-900 text-2xl py-4 font-bold leading-tight text- sm:text-4xl  ">
						Welcome to Toll Calculator
					</h1>
					<h3 className="w-full md:w-8/12 text-xl text-slate-800 font-medium">
						Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Minima modi <br/> non quo ut sequi perferendis
						maiores? Facilis, amet.<br/> Aut explicabo, placeat nulla cupiditate ab provident quas illum
						voluptatibus. Tenetur, recusandae.
					</h3>
				</div>

				<div className="  flex justify-between gap-6 flex-wrap w-full px-2 py-5   ">
					<div className="   flex-[2]  pt-5 max-w-[300px] mx-auto sm:max-w-full  sm:flex  md:flex-col  ">
						<div className=" flex flex-col w-10/12  ">
							<InputField placeholder="Departure" type="text" />
							<InputField placeholder="Destination" type="text" />
							<InputField placeholder="Start Time" type="number" />
							<ChooseVehicle />
						</div>

						<div className=" flex flex-col w-9/12  ">
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
