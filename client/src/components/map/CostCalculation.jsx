import React from "react";
import { useSelector } from "react-redux";

export const CostCalculation = () => {
	const { hasTolls, costs, distance } = useSelector((state) => state.tolls);

	let totalExpense = {
		withTag: costs.fuel + costs.tag,
		withCash: costs.fuel + costs.cash,
	};

	return !hasTolls ? null : (
		<div id="costCalculation" className=" my-12  md:w-4/12 text-slate-800  [&]:text-lg ">
			<h2 className="text-4xl py-3 font-semibold pb-10">Expense Calculations </h2>

			<div className="flex justify-between ">
				<div className="[&>h5]:font-semibold     pr-20">
					<h5>Distance</h5>
					<h5>Fuel Charge</h5>
					<h5>Tolls Charge <span>if tag</span></h5>
					<h5>Tolls Charge <span>if cash</span></h5>
				</div>
				<div className=" flex flex-col pr-5 [&>h5]:before:content-[':'] [&>h5]:before:font-semibold [&>h5]:before:mx-5 ">
					<h5>{distance.metric}</h5>
					<h5>{costs.fuel} Rs</h5>
					<h5>{costs.tag} Rs</h5>
					<h5>{costs.cash} Rs</h5>
				</div>
			</div>
			<hr className=" bg-slate-950 p-[1px] my-5    stroke-slate-950 " />
			<div className="flex justify-between">
				<h4 className="font-bold ">Total Expense  </h4>
				<div  className="[&>h4]:font-semibold pr-5">
					<h4>{totalExpense.withCash} Rs <span>(cash)</span></h4>
					<h4>{totalExpense.withTag} Rs <span>(tag)</span></h4>
				</div>
			</div>
		</div>
	);
};
