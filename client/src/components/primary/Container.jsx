import React from 'react'

export const Container = ({ isShow='true',    children}) => {
  return (
    <div className='w-screen h-fit bg-slate-900' >

        {  isShow &&  children }
      
    </div>
  )
}
