  import axios from "axios";
import { SERVER_API } from "../api";
import { addAllRoutes, addCurrentRoute } from "../redux/features/routesSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearTolls } from "../redux/features/tollsSlice";

export const useRoutes = () => {
	const dispatch = useDispatch();
	const { startPoint, endPoint } = useSelector((state) => state.routes);
	const { departure, destination, vehicle, startTime } = useSelector((state) => state.input);

	const fetchDirections = async () => {
		try {
			const response = await axios({
				url: `${SERVER_API}/api/directions`,
				method: "POST",
				data: {
					start: startPoint,
					end: endPoint,
					departure,
					destination,
				},
			});

			const encodedPolyline = response?.data?.routes[0]?.overview_polyline?.points;
			dispatch(addCurrentRoute({ route: encodedPolyline }));
			dispatch(addAllRoutes({ routes: response?.data?.routes }));
			dispatch(clearTolls());
		} catch (error) {
			console.log(error);
		}
	};

	return { fetchDirections };
};
