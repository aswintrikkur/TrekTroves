import axios from 'axios';
import { SERVER_API } from '../api';

export const useRoutes = () => {

    const fetchDirections = async (start, end) => {

        console.log({ start: start, end: end });
        try {
            const response = await axios({
                url: `${SERVER_API}/api/fetchDirection` ,
                // url: `http://localhost:3006/api/fetchDirection` ,
                method: 'POST',
                data: {
                    start: start,
                    end: end
                }
            })
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return error
        }

    }

    return { fetchDirections }
}