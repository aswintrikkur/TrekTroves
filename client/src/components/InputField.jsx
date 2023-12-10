import React from 'react'

export const InputField = ({ placeholder, onChange, value, name }) => {
    return (
        // <div >
            <input className='w-52 h-9 border p-1 m-2 text-start'
                type="text" placeholder={placeholder} onChange={onChange} value={value} name={name} />

        // </div>
    )
}
