import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEndPoint, addStartPoint } from '../../redux/features/routesSlice';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { iconMarkerDrop } from './MarkerIcons';
import uuid from 'react-uuid';


// drop pin =============================
export function  DropMarker() {
    const [display, setDisplay] = useState({ start: false, end: false })

    const dispatch = useDispatch();
    const { startPoint, endPoint, currentDecodedPolyline } = useSelector(state => state.routes)

    const map = useMapEvents({
        dblclick(e) { //set START point
            dispatch(addStartPoint([e?.latlng?.lat, e?.latlng?.lng]))
            setDisplay(prev => ({ ...prev, start: true }))
        },
        click(e) { //set END point
            dispatch(addEndPoint([e?.latlng?.lat, e?.latlng?.lng]))
            setDisplay(prev => ({ ...prev, end: true }))
        }

    })

    return (
        <>
            {display.start && < Marker position={startPoint} icon={iconMarkerDrop} key='start'  >
                <Popup>  Start Point</Popup>
            </Marker >}

            {display.end && <Marker position={endPoint} icon={iconMarkerDrop} key='end' >
                <Popup>End Point</Popup>
            </Marker>}
        </>

    )
}



