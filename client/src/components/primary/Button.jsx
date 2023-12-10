import React from 'react'
import { useDispatch } from 'react-redux'
import { addRoute } from '../../redux/features/routesSlice'

export const Button = ({ text, onClick }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        const response = onClick();
        console.log(response);
        // dispatch(addRoute(response))
    }

    return (

        <button className='px-2 py-1 border bg-slate-500 text-red-950 font-bold hover:bg-slate-400 '
         onClick={onClick} > {text} </button>
    )
}
