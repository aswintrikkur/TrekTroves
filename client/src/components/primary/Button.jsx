import React, { useRef } from 'react'
import { useSelector } from 'react-redux'



// ======== Button for Fetching Route/Tolls ==========
export const FetchButton = ({text,onClick}) => {
  return (
      <button id='fetchButton'  className='w-3/5 min-w-fit self-center m-2 px-2 py-1 border bg-slate-500 text-red-950 font-bold hover:bg-slate-400 ' onClick={onClick} >{text}</button>
  )
}


// ======== button for locating the user on the map ===========
export const LocateMeButton = () => {
    const {showLocateMeButton}= useSelector(state=>state.toggle)
    const text = showLocateMeButton? 'Locate Me' : "Hide"
    return (
        <div id='locateMeButtonContainer'>
            <button id="locateMeButton"   className="px-2 py-1 z-50 m-1 text-slate-900 font-bold bg-slate-500 ">{text}</button>
        </div>
    )
}
