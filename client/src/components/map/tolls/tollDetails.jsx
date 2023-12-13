import React from "react";
import { useSelector } from "react-redux";
import { route } from "../../../data/tolls/tolls";

export const TollDetails = () => {
	const { hasTolls, distance, costs, tolls, polyline } = useSelector((state) => state.tolls);
	// route
	let ticketSystem;

	return !hasTolls ? null : (
		<div id="tollDetails" className="max-w-2xl   p-2  bg-neutral-500  text-slate-800 rounded-md  ">
			<h4 className="font-bold text-4xl text-center py-4">Toll Details </h4>
			<div className=" flex flex-col gap-2  max-h-[400px]  overflow-scroll  ">
				{hasTolls && (
					<>
						{tolls.map((data, index) => (
							<div
								className="  mx-2 h-fit p-3  bg-neutral-400 rounded-lg justify-around mb-2 sm:flex   "
								key={index}
							>
								{/* <h5 className='font-bold'>Toll:</h5> */}
								<div className=" flex self-start mb-4  ">
									<div className="font-bold ">
										<h5>Name </h5>
										<h5>Type </h5>
										<h5>Road </h5>
										<h5>Location </h5>
									</div>
									<div className="  [&>h5]:before:content-[':'] [&>h5]:before:mx-2 [&>h5]:before:font-bold ">
										<h5> {data?.name || [data?.start?.name, data?.end?.name] }</h5>
										<h5> {data?.type}</h5>
										<h5> {data?.road}</h5>
										<h5>
											{data?.state || data?.start?.state },{data?.country || data?.start?.country }
										</h5>
									</div>
								</div>
								<div className=" flex   ">
									<div className="font-bold mr-3 ">
										<h5>tag cost </h5>
										<h5>cash cost </h5>
										<h5>tag cost return </h5>
									</div>
									<div className="  [&>*]:after:content-['Rs'] [&>*]:after:ml-1   [&>h5]:before:content-[':'] [&>h5]:before:mx-2 [&>h5]:before:font-bold ">
										<h5>{data?.tagCost}</h5>
										<h5>{data?.cashCost}</h5>
										<h5>{data?.tagCostReturn}</h5>
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
};
