import axios from 'axios';
import { SERVER_API } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addTolls } from '../redux/features/tollsSlice';

export const useTolls = () => {

    const dispatch = useDispatch();
    const { currentEncodedPolyline } = useSelector(state => state.routes);
    
    const fetchTolls = async () => {
        
        const polyline = currentEncodedPolyline;
        try {
            const response = await axios({
                method: 'POST',
                url: `${SERVER_API}/api/tolls`,
                data: {
                    polyline: polyline
                }
            })
            console.log(response);
            const { route } = response?.data;
            dispatch(addTolls({ route: route }))

        } catch (error) {
            console.log(error);
        }

    }

    return { fetchTolls }
}