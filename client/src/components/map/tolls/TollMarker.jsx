import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux'
import { iconToll } from '../MarkerIcons'

export const TollMarkers = () => {

    const { hasTolls, distance, costs, tolls, polyline } = useSelector(state => state.tolls)


    return (
        !hasTolls ? null :
        <div id='tollMarkers'>
            {tolls.map((data,index) => (

                <Marker position={[data?.lat, data?.lng]} icon={iconToll} key={data?.id}   >
                    <Popup><h3> {data?.name}</h3>
                    </Popup>
                </Marker>
            ))}
        </div>
    )

}