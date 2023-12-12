import React from "react";

export const InputField = ({ placeholder, onChange, value, name,type }) => {
	return (
		<input
			// className=" h-9 border p-1 m-2 text-start"
            className="flex h-10 w-full min-w-[280px] rounded-md border border-black/30 bg-transparent m-1 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			name={name}
		/>
	);
};

export const ChooseVehicle = ({ placeholder, onChange, value, name }) => {
	return (
		// <input className=' h-9 border p-1 m-2 text-start'
		//     type="text" placeholder={placeholder} onChange={onChange} value={value} name={name} />
		<select  name="vehicle" id="vehicle" className="flex h-10 w-full min-w-[280px] rounded-md border text-gray-600 border-black/30 bg-transparent m-1 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" >
			<option value="">Choose Vehicle</option>
			<option value="2w">2 Wheeler</option>
			<option value="4w">4 Wheeler</option>
			<option value="truck">Truck</option>
		</select>
	);
};
