 const data = {
    
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

export const route = data.route;