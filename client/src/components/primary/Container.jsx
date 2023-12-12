import React from 'react'
import { Header } from '../Header'

export const Container = ({ isShow='true',    children}) => {
  return (
    
    <div className='w-screen h-fit  bg-neutral-300 z-5' >
      <Header />
        {  isShow &&  children }
      
    </div>
  )
}
