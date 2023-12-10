import React from 'react'
import { useDispatch } from 'react-redux'
import { addRoute } from '../../redux/features/routesSlice'

export const FetchLocationButton = ({ text }) => {

    const dispatch = useDispatch()
    const {fetchDirections}= useRoutes();


    const handleClick = async() => {

       const dirResponse = await fetchDirections()
       
        // dispatch(addRoute(response))
    }

    return (

        <button className='px-2 py-1 border bg-slate-500 text-red-950 font-bold hover:bg-slate-400 '
         onClick={handleClick} > {text} </button>
    )
}
