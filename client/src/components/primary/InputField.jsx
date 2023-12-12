import React from "react";

export const InputField = ({ placeholder, onChange, value, name,type }) => {
	return (
		<input
			className=" h-9 border p-1 m-2 text-start"
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
		<select  name="vehicle" id="vehicle" className=" h-9 border p-1 m-2 text-start">
			<option value="">Choose Vehicle</option>
			<option value="2w">2 Wheeler</option>
			<option value="4w">4 Wheeler</option>
			<option value="truck">Truck</option>
		</select>
	);
};
