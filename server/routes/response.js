//! ============= Samples =============


//tollguru request body ============== tst to ekm ( SUCCESS )
const TSR_TO_EKM_TOLLGURU_REQUEST_BODY={
    "mapProvider": "google",
    "polyline": "ydg_AosdpMPCAg@Aw@PqBVcAv@}BPWTSNGXIhF[`DJ~CPhB@?mA?eC?eEJyCP}ENcENuAFMGcBOuAGaAA}BBe@NuAHqABwBAAAC?GBKJGJ@B@@@BB`@@ZBx@?jBBZD|@C@?B?B?D@@?f@BXC`@@zAB`@?TEFGHa@NgDRgCHy@RqAX_CZmC`@mDl@aDDSJI`Be@xA_@VMr@o@dAiALSBSDs@LiCT{@Pc@Bq@DiAF_DR}Db@eG?]LmATgEFu@Je@Pi@tBqEtDuHnDkH`D{Gz@gBZ}@FyABeCN}MDmGAqAEw@c@cF[sDc@{GAg@D]vBeFjBeEfAqBHUh@?zA@jED|BHvDA`MJrQP`IFrD@hFHjIBjOHpD?~OPlHDzd@PdHE`HDhJH~G?bI@nG@rHBhGDxBClVG~UIdHI`WOtNKjDGlV]nHOxBC|EQ~Eg@jCa@bDy@rBm@|BaAnCqA|D{BjBsAzAoA`@]tAsAjBwBnBaCv@}@lBsBl@i@r@i@r@_@|Ak@vBi@~Bo@~DeAhB]tAKp@Gx@ChFAnDMvEYtD_@|Eu@lKmBnE}@t@UpAk@tAaAnByApCwBfAs@l@Uj@SPAn@E~Fi@bGi@hAK?I"
}


//tollguru response ============== tst to ekm ( SUCCESS )
const TSR_TO_EKM_TOLLSGURU_RESPONSE={
    "status": "OK",
    "summary": {
        "countries": [
            "IND"
        ],
        "currency": "INR",
        "vehicleType": "2AxlesAuto",
        "vehicleDescription": "Car/Jeep/Van and mini light commercial vehicles with gross weight <7,500 kgs",
        "units": {
            "currencyUnit": "INR",
            "fuelEfficiencyUnit": "km/L",
            "fuelUnit": "liter"
        },
        "departure_time": "2023-12-10T11:36:23.497252735Z",
        "departureTime": "2023-12-10T11:36:23.497252735Z",
        "share": {
            "name": "Tollguru Route",
            "prefix": "Tollguru+Route",
            "uuid": "9209c1c3-d404-42b1-95ea-8819acb58b4d",
            "timestamp": "2023-12-10T11:36:23.497248787Z",
            "client": "polylineAPI"
        }
    },
    "route": {
        "hasTolls": true,
        "distance": {
            "text": "10 mi",
            "metric": "16 km",
            "value": 16484
        },
        "costs": {
            "fuel": 98.12,
            "tag": 110,
            "cash": 220,
            "licensePlate": null,
            "prepaidCard": null,
            "tagAndCash": 110,
            "minimumTollCost": 110
        },
        "tolls": [
            {
                "id": 910114000,
                "lat": 10.442534,
                "lng": 76.259558,
                "name": "Paliyekkara",
                "road": "Santhi Nagar - Kuttumuck - Kuttiyal Rd",
                "state": "Kerala",
                "country": "India",
                "type": "barrier",
                "tagCost": 110,
                "tagCostReturn": 165,
                "tagCostMonthly": 3320,
                "cashCost": 220,
                "cashCostReturn": null,
                "cashCostMonthly": null,
                "currency": "INR",
                "arrival": {
                    "distance": 13512.71,
                    "time": "2023-12-10T11:36:23Z"
                },
                "timestamp_formatted": "2023-12-10T11:36:23Z",
                "timestamp_localized": "2023-12-10T17:06:23+05:30",
                "point": {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            76.259558,
                            10.442534
                        ]
                    }
                }
            }
        ],
        "polyline": ""
    },
    "meta": {
        "userId": "aswin.trikkur@gmail.com",
        "customerId": "cus_P9cgR0FiS1IL0p",
        "tx": 1,
        "type": "api",
        "client": "polylineAPI",
        "source": ""
    }
}




//tollguru request body ============== tst to ekm ( TIME STAMP ERROR )
const tollGURU_Request_body={
    "mapProvider": "google",
    "polyline": "ydg_AosdpMPCAg@Aw@PqBVcAv@}BPWTSNGXIhF[`DJ~CPhB@?mA?eC?eEJyCP}ENcENuAFMGcBOuAGaAA}BBe@NuAHqABwBAAAC?GBKJGJ@B@@@BB`@@ZBx@?jBBZD|@C@?B?B?D@@?f@BXC`@@zAB`@?TEFGHa@NgDRgCHy@RqAX_CZmC`@mDl@aDDSJI`Be@xA_@VMr@o@dAiALSBSDs@LiCT{@Pc@Bq@DiAF_DR}Db@eG?]LmATgEFu@Je@Pi@tBqEtDuHnDkH`D{Gz@gBZ}@FyABeCN}MDmGAqAEw@c@cF[sDc@{GAg@D]vBeFjBeEfAqBHUh@?zA@jED|BHvDA`MJrQP`IFrD@hFHjIBjOHpD?~OPlHDzd@PdHE`HDhJH~G?bI@nG@rHBhGDxBClVG~UIdHI`WOtNKjDGlV]nHOxBC|EQ~Eg@jCa@bDy@rBm@|BaAnCqA|D{BjBsAzAoA`@]tAsAjBwBnBaCv@}@lBsBl@i@r@i@r@_@|Ak@vBi@~Bo@~DeAhB]tAKp@Gx@ChFAnDMvEYtD_@|Eu@lKmBnE}@t@UpAk@tAaAnByApCwBfAs@l@Uj@SPAn@E~Fi@bGi@hAK?I",
    "locTimes": [
        [
            0,
            1660110342
        ],
        [
            30,
            1660110642
        ],
        [
            60,
            1660110942
        ],
        [
            232,
            1660111182
        ]
    ],
    "vehicle": {
        "type": "2AxlesTaxi",
        "weight": {
            "value": 20000,
            "unit": "pound"
        },
        "height": {
            "value": 7.5,
            "unit": "meter"
        },
        "length": {
            "value": 7.5,
            "unit": "meter"
        },
        "axles": 4,
        "emissionClass": "euro_5"
    },
    "fuelOptions": {
        "fuelCost": {
            "value": 1.305,
            "units": "mpg",
            "currency": "USD",
            "fuelUnit": "mpg"
        },
        "fuelEfficiency": {
            "city": 28.57,
            "hwy": 22.4,
            "units": "mpg"
        }
    },
    "departure_time": 1609507347  // 
}
//tollguru response ============== tst to ekm ( NO TOLLS-- ERROR )
const tstToEkmTollGuruResponse = {
    "status": "OK",
    "summary": {
        "countries": [
            "IND"
        ],
        "currency": "USD",
        "vehicleType": "2AxlesTaxi",
        "vehicleDescription": "Taxi - Car, SUV or Pickup truck",
        "fuelPrice": {
            "value": 1.31,
            "currency": "USD",
            "units": "mpg",
            "fuelUnit": "liter"
        },
        "fuelEfficiency": {
            "city": 28.57,
            "hwy": 22.4,
            "units": "mpg",
            "fuelUnit": "liter"
        },
        "units": {
            "currencyUnit": "USD",
            "fuelEfficiencyUnit": "mpg",
            "fuelUnit": "liter"
        },
        "departureTime": "2022-08-10T05:45:42Z",
        "share": {
            "name": "Tollguru Polyline with Timestamps",
            "prefix": "Tollguru+Polyline+with+Timestamps",
            "uuid": "e770cf7d-ae2d-40bd-9e5b-ddfcb6c5f905",
            "timestamp": "2023-12-10T11:24:04.924511544Z",
            "client": "polylineAPITimestamps"
        }
    },
    "route": {
        "hasTolls": false,
        "distance": {
            "text": "10 mi",
            "metric": "16 km",
            "value": 16487
        },
        "costs": {
            "fuel": 0.58,
            "tag": null,
            "cash": null,
            "licensePlate": null,
            "prepaidCard": null,
            "tagAndCash": null,
            "minimumTollCost": null
        },
        "tolls": [],
        "polyline": "ydg_AmsdpMPEAe@Ay@PoBVeAv@}BPWTSNGXIhF[`DJ~CPhBB?oA?eC?eEJwCP_FNcENuAFKGeBOuAG_AA_CBe@NsAHsABwBAAAC?GBKJGJ@B@@@BB`@BZ@x@?jBBZD|@C@?B?B?D@@?f@BXC`@@zAD`@?TGFGHa@NgDRgCHy@RoAXaCZmC`@mDl@aDDSJG`Bg@xA_@VMr@o@dAgALUBSDs@LiCT{@Pc@Bo@DkAF_DR}Db@eG?[LoATeEFu@Jg@Pg@tBsEtDsHnDmH`D{Gz@gBZ}@FyABeCN}MDmGAqAEw@c@cF[sDc@yGAi@D]vBeFjBeEfAqBHUh@?zA@jEF|BFvD?`MHrQP`IFrD@hFHjIDjOFpD?~OPlHDzd@PdHEbHDfJJ~G?bI?nG@rHBjGDxBAlVI|UGdHK`WOtNKjDGlV]nHOxBC|EQ~Eg@jC_@bD{@rBm@|B_ApCsAzDyBjBuAzAoA`@]tAqAjByBnB_Cv@_AlBsBl@i@r@i@r@_@|Ak@vBi@~Bo@~DeAhB]tAKp@Gx@ChFApDMvEYrD_@~Eu@jKmBnE{@t@WpAk@tAaAnByApCwBfAq@l@Wl@SP?n@G|Fi@dGg@hAM?I"
    },
    "meta": {
        "userId": "aswin.trikkur@gmail.com",
        "customerId": "cus_P9cgR0FiS1IL0p",
        "tx": 1,
        "type": "api",
        "client": "polylineAPITimestamps",
        "source": "google"
    },
    "warnings": [
        {
            "type": "locTimes_error",
            "message": "LocTimes may not be accurate given that some sections have really high speeds. We suggest you check locTimes"
        },
        {
            "type": "missing_old_toll_data",
            "message": "the queried date is earlier than our available toll data for this location. An error occurred for Start ID: 910114000, End ID: -1, and Timestamp: \"2022-08-10T05:53:32Z\". If you need older data, email api@tollguru with this response"
        }
    ]
}


//dummy
const response = {
    status: 'OK',
    summary: {
        countries: ['SGP'],
        currency: 'USD',
        vehicleType: '2AxlesTaxi',
        vehicleDescription: '',
        fuelPrice: { value: 1.31, currency: 'USD', units: 'mpg', fuelUnit: 'liter' },
        fuelEfficiency: { city: 28.57, hwy: 22.4, units: 'mpg', fuelUnit: 'liter' },
        units: {
            currencyUnit: 'USD',
            fuelEfficiencyUnit: 'mpg',
            fuelUnit: 'liter'
        },
        departureTime: '2022-08-10T05:45:42Z',
        share: {
            name: 'Tollguru Polyline with Timestamps',
            prefix: 'Tollguru+Polyline+with+Timestamps',
            uuid: '84c19b7b-aa7b-4b13-a0a0-1c95609a0151',
            timestamp: '2023-12-09T16:29:44.023794048Z',
            client: 'polylineAPITimestamps'
        }
    },
    route: {
        hasTolls: true,
        distance: { text: '8 mi', metric: '14 km', value: 14396 },
        costs: {
            fuel: 0.49,
            tag: 0,
            cash: null,
            licensePlate: 0,
            prepaidCard: 0,
            tagAndCash: 0,
            minimumTollCost: 0
        },
        tolls: [[Object]],
        polyline: '_f`GwjixRSe@MIIEICGAIA_Al@MHIDe@VKFm@f@SLKLCFEHCF?HAF?NTH\\N`Ab@x@b@`@TZTPLTPZXDFBFXVZTrB~ARDLF~@ZJDTDPBVFJ@X@P@j@?N?d@ERC`@KhB{Al@i@f@Y~BaCPQJKbA_At@s@RSDEBEBCVU~A{ATW~@{@`@_@v@q@p@o@rA_ATSXSJIv@g@~@m@HEROTO@?rA{@VQ^UZSPMHGDEj@g@h@k@f@m@^g@vAqBTYp@_Ab@m@Va@R[Xg@b@u@^{@R]Pc@Vm@Re@ZcA`@mAn@iB^aAp@aBn@cBt@yAFMP_@rC_GdBsDbAwBRc@hAyB`@y@Te@pAaCxAqCf@_An@mAjBcE`BoD`@w@To@P[Ze@HQ`@m@PULQh@o@\\_@n@m@p@m@pAeA`CoBxAoA\\YbAy@?An@i@~AqA`@a@VY^_@V[PSX_@T]T[f@y@JMHMtAcCd@}@h@_AjBoDb@y@r@sAd@{@R]\\o@h@y@Zc@n@_ABENQZc@VY?C\\_@RWFKPURYR]BCDGl@_Af@w@^u@P_@j@sAh@mAVk@^s@^s@n@kA?Ad@u@fAeBl@eAZg@|@yA`BoCf@_AXo@Z}@L]Lg@DQHe@F_@DSBMDk@H{AFiAHmDHgDHwADiBF_D@[?EB]?c@BgANuE@cABkA@]D{AB_BBa@DaCJkCHiALyAPoAN_ALo@R}@Le@ZkAb@oATo@\\{@HK`@}@^w@lA{BxAoC`BwCFOZm@l@eAHO^s@n@kAp@qANYL[L]J[Rs@FWNu@Jq@Fc@JiABw@@aBDaDDaA?m@B]\\cCLi@Lg@Ni@Xy@BGFMRg@BIHMFQFMJOr@qAZc@v@mAtAcB|@eALS`BuBtDoEd@m@dBoBj@o@V[LQFGjC{Cn@{@Za@LUJSHOJ[Pe@F]Fc@?AD_@Dg@@e@?I?M?M?aA?{@A}BCwA?oA?YCuB?k@Cg@A{@?A?EEs@AyA?m@ASC{CEmCA}@AYAW?KA}@CcBA{A?cA?WCUGiI?S?QAU?W?c@CgA?_@Ba@?y@@e@@UBU@UVaD@MFaABc@@YBG?i@Ck@Gk@EUI_@IY?AIUKUISQc@s@}AMWi@uAM[EOKa@I_@EYCQGm@Co@A]?M?O@]@UF[Da@D]FWLk@Rg@L]R_@L[dBaDpBkD@AdCsEbAkBf@_ANa@JUFUVaAES?E?E?E?EH_ADk@@W@UEaA?OKm@M_ADCMa@CMESA?EMK[IWEIACAAKWs@sAo@gAGIEGS[S]GMEKYa@g@mAc@eA_@OSIEAG?UAI@OBGBIDGF[b@GJMFk@`Au@pA}@~AMXcC~E}AnC[`@KT'
    },
    meta: {
        userId: 'aswin.trikkur@gmail.com',
        customerId: 'cus_P9cgR0FiS1IL0p',
        tx: 1,
        type: 'api',
        client: 'polylineAPITimestamps',
        source: 'here'
    }
}
