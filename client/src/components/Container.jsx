import React from 'react'

export const Container = ({ isShow='true',    children}) => {
  return (
    <div className=' h-screen bg-slate-900' >

        {  isShow &&  children }
      
    </div>
  )
}
