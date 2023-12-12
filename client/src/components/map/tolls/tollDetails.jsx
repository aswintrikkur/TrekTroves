import React from "react";
import { useSelector } from "react-redux";
import { route } from "../../../data/tolls/tolls";

export const TollDetails = () => {
	const { hasTolls, distance, costs, tolls, polyline } = useSelector((state) => state.tolls);
	// route

	return !hasTolls ? null : (
		<div id="tollDetails" className="max-w-2xl  p-2  bg-slate-800  text-slate-300 rounded-md  ">
			<h4 className="font-bold text-xl text-center py-4">Toll Details </h4>
			<div className="h-60 flex flex-col gap-2    overflow-scroll  ">
				{tolls.map((data, index) => (
					<div key={data?.id} className="  mx-2 h-fit p-3  bg-slate-600 rounded-lg justify-around mb-2 sm:flex   " >
						{/* <h5 className='font-bold'>Toll:</h5> */}
						<div className=" flex self-start mb-4  ">
							<div className="font-bold ">
								<h5>name </h5>
								<h5>road </h5>
								<h5>Location </h5>
							</div>
							<div className="  [&>h5]:before:content-[':'] [&>h5]:before:mx-2 [&>h5]:before:font-bold ">
								<h5> {data?.name}</h5>
								<h5> {data?.road}</h5>
								<h5>
									{data?.state},{data?.country}
								</h5>
							</div>
						</div>
						<div className=" flex   ">
							<div className="font-bold mr-3 ">
								<h5>tag cost </h5>
								<h5>cash cost </h5>
								<h5>tag cost return </h5>
							</div>
							<div className=" text-slate-200 [&>*]:after:content-['Rs'] [&>*]:after:ml-1   [&>h5]:before:content-[':'] [&>h5]:before:mx-2 [&>h5]:before:font-bold ">
								<h5>{data?.tagCost}</h5>
								<h5>{data?.cashCost}</h5>
								<h5>{data?.tagCostReturn}</h5>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
