import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoute } from '../../redux/features/routesSlice'
import { useRoutes } from '../../hooks/useRoutes'

export const FetchLocationButton = ({ text }) => {

    const dispatch = useDispatch()
    const { fetchDirections } = useRoutes();
    const { startPoint, endPoint } = useSelector(state => state.routes)


    const handleClick = async () => {

        const dirResponse = await fetchDirections(startPoint, endPoint);
           console.log(dirResponse);

        // dispatch(addRoute(response))
    }

    return (

        <button className='px-2 py-1 border bg-slate-500 text-red-950 font-bold hover:bg-slate-400 '
            onClick={handleClick} > {text} </button>
    )
}
