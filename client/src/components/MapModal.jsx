import React, { useEffect, useMemo, useState } from 'react'
import { Circle, CircleMarker, MapContainer, Marker, Polyline, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { decodeString } from '../utils/polylines';
import { findRoute, markPoint } from '../utils/react-leaflet';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import leafletCss from '!isomorphic-style-loader!css-loader?modules=false!leaflet/dist/leaflet.css'; //if use isomorphic-style-loader
// import s from './GenerateMap.css';



const path = [
	[38.5, -120.2],
	[40.7, -120.95],
	[43.252, -126.453],
]

const polyline = '_f`GwjixRSe@MIIEICGAIA_Al@MHIDe@VKFm@f@SLKLCFEHCF?HAF?NTH\\N`Ab@x@b@`@TZTPLTPZXDFBFXVZTrB~ARDLF~@ZJDTDPBVFJ@X@P@j@?N?d@ERC`@KhB{Al@i@f@Y~BaCPQJKbA_At@s@RSDEBEBCVU~A{ATW~@{@`@_@v@q@p@o@rA_ATSXSJIv@g@~@m@HEROTO@?rA{@VQ^UZSPMHGDEj@g@h@k@f@m@^g@vAqBTYp@_Ab@m@Va@R[Xg@b@u@^{@R]Pc@Vm@Re@ZcA`@mAn@iB^aAp@aBn@cBt@yAFMP_@rC_GdBsDbAwBRc@hAyB`@y@Te@pAaCxAqCf@_An@mAjBcE`BoD`@w@To@P[Ze@HQ`@m@PULQh@o@\\_@n@m@p@m@pAeA`CoBxAoA\\YbAy@?An@i@~AqA`@a@VY^_@V[PSX_@T]T[f@y@JMHMtAcCd@}@h@_AjBoDb@y@r@sAd@{@R]\\o@h@y@Zc@n@_ABENQZc@VY?C\\_@RWFKPURYR]BCDGl@_Af@w@^u@P_@j@sAh@mAVk@^s@^s@n@kA?Ad@u@fAeBl@eAZg@|@yA`BoCf@_AXo@Z}@L]Lg@DQHe@F_@DSBMDk@H{AFiAHmDHgDHwADiBF_D@[?EB]?c@BgANuE@cABkA@]D{AB_BBa@DaCJkCHiALyAPoAN_ALo@R}@Le@ZkAb@oATo@\\{@HK`@}@^w@lA{BxAoC`BwCFOZm@l@eAHO^s@n@kAp@qANYL[L]J[Rs@FWNu@Jq@Fc@JiABw@@aBDaDDaA?m@B]\\cCLi@Lg@Ni@Xy@BGFMRg@BIHMFQFMJOr@qAZc@v@mAtAcB|@eALS`BuBtDoEd@m@dBoBj@o@V[LQFGjC{Cn@{@Za@LUJSHOJ[Pe@F]Fc@?AD_@Dg@@e@?I?M?M?aA?{@A}BCwA?oA?YCuB?k@Cg@A{@?A?EEs@AyA?m@ASC{CEmCA}@AYAW?KA}@CcBA{A?cA?WCUGiI?S?QAU?W?c@CgA?_@Ba@?y@@e@@UBU@UVaD@MFaABc@@YBG?i@Ck@Gk@EUI_@IY?AIUKUISQc@s@}AMWi@uAM[EOKa@I_@EYCQGm@Co@A]?M?O@]@UF[Da@D]FWLk@Rg@L]R_@L[dBaDpBkD@AdCsEbAkBf@_ANa@JUFUVaAES?E?E?E?EH_ADk@@W@UEaA?OKm@M_ADCMa@CMESA?EMK[IWEIACAAKWs@sAo@gAGIEGS[S]GMEKYa@g@mAc@eA_@OSIEAG?UAI@OBGBIDGF[b@GJMFk@`Au@pA}@~AMXcC~E}AnC[`@KT';

//=================== MAPMODAL =========================
export const MapModal = () => {
	// const [route, setRoute] = useState(null);

	// findRoute()
	markPoint()

	const MemoisedRoute = useMemo(() => {
		return decodeString(polyline)
	}, [])

	return (
		<div id="map" className="h-96 w-3/4 bg-slate-800 p-2 mt-5">
			<MapContainer
				style={{ width: "100%", height: "100%" }}
				center={path[0]}
				// center={MemoisedRoute[0]}
				zoom={5}
				scrollWheelZoom={false}
			>
				{/* <h2 className='text-red ' >polyline</h2> */}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{/* <Polyline positions={MemoisedRoute} pathOptions={{ color: 'red' }} /> */}

				<Polyline positions={path} pathOptions={{ color: "red" }} />



			</MapContainer>
		</div>

	)
}

//======= find current location ===========
{/* current location */ }
{/* <LocationMarker />  */ }
function LocationMarker() {
	const [position, setPosition] = useState(null)
	const map = useMapEvents({
		click() {
			map.locate()
		},
		locationfound(e) {
			setPosition(e.latlng)
			map.flyTo(e.latlng, map.getZoom())
		},
	})

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	)
}


// ================		===================

// const center = [51.505, -0.09]
// const polyline = [
// 	[51.505, -0.09],
// 	[51.51, -0.1],
// 	[51.51, -0.12],
// ]
// const multiPolyline = [
// 	[
// 		[51.5, -0.1],
// 		[51.5, -0.12],
// 		[51.52, -0.12],
// 	],
// 	[
// 		[51.5, -0.05],
// 		[51.5, -0.06],
// 		[51.52, -0.06],
// 	],
// ]


{/* <Polyline positions={polyline} pathOptions={{ color: 'purple' }} /> */ }
{/* <Polyline positions={multiPolyline} pathOptions={{ color: "lime" }} /> */ }

{/* <Circle center={center} pathOptions={{color:'blue'}} radius={200} /> */ }
{/* <CircleMarker center={[51.51, -0.12]} pathOptions={{color:"red"}} radius={20}> */ }
{/* <Popup>Toll ahead</Popup> */ }
{/* </CircleMarker> */ }