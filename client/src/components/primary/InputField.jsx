import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../../redux/features/inputSlice";
import { addEndPoint, addStartPoint, clearRoute } from "../../redux/features/routesSlice";

export const InputField = ({ placeholder, name, type }) => {
	const dispatch = useDispatch();
	const { startPoint, endPoint } = useSelector((state) => state.routes);

	const state = { startPoint, endPoint };

	const handleChange = (event) => {
		if (name === "startPoint") {
			dispatch(addStartPoint(event.target.value));
		} else {
			dispatch(addEndPoint(event.target.value));
		}
	};

	return (
		<input
			className="flex h-10 w-full min-w-[280px] rounded-md border border-black/30 bg-transparent m-1 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
			type={type}
			placeholder={placeholder}
			name={name}
			value={state[name]}
			onChange={handleChange}
			autoComplete="off"
		/>
	);
};

export const InputStartTime = ({ name }) => {
	const dispatch = useDispatch();
	const { startTime } = useSelector((state) => state.input);

	return (
		<input
			className="flex h-10 w-full min-w-[280px] rounded-md border  before:content-['Time:'] before:text-gray-600 focus:before:content-['']  border-black/30 bg-transparent m-1 px-3 py-2 text-sm text-gray-600   focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
			type="time"
			name={name}
			value={startTime}
			onChange={(event) => dispatch(onChange({ name, value: event.target.value }))}
			autoComplete="off"
		/>
	);
};

export const InputVehicle = ({ name }) => {
	const dispatch = useDispatch();
	const { vehicle } = useSelector((state) => state.input);

	return (
		<select
			className="flex h-10 w-full min-w-[280px] rounded-md border text-gray-600 border-black/30 bg-transparent m-1 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
			id="vehicle"
			name={name}
			onChange={(event) => dispatch(onChange({ name, value: event.target.value }))}
			value={vehicle}
		>
			<option value="">Choose Vehicle</option>
			<option value="2w">2 Wheeler</option>
			<option value="4w">4 Wheeler</option>
			<option value="truck">Truck</option>
		</select>
	);
};
