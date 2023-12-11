# Toll Calculation Application <img src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/country-location-icon.png" width="40" height="40" />


This project is an advanced Toll Calculator application developed using React, Node.js, Hooks, Redux, and memoization. Its primary purpose is to calculate toll costs between two waypoints via the TollGuru API, providing users with a comprehensive understanding of toll calculations.

[Live Link](https://toll-calculator-react-two.vercel.app)  


## Project Overview

This Toll Calculator application, envisioned for development by a Frontend Engineer, aims to provide users with a comprehensive tool for calculating toll costs between two waypoints. The application will offer the following essential functionalities:

- **Route Visualization:** Utilizing React-Leaflet to visualize the calculated route and sending a polyline to the TollGuru API using Route Encoded Polyline. It will also incorporate markers along the route, showcasing detailed toll information.

- **Polyline Decoding:** Employing the @googlemaps/polyline-codec library to decode polylines retrieved from the TollGuru API. Accurate decoding is crucial for precise route visualization.

- **Toll Details Display:** Integrating toll details on markers along the route, displaying cost, and additional relevant information to provide users with comprehensive toll insights.

Additionally, the application is hosted on Vercel, ensuring accessibility and ease of use for users.

### Technologies Used

- React
- Node.js
- React-Leaflet
- Hooks
- Redux

### Getting Started

To run the project locally, follow these steps:

<h6> 1. Clone this repository:</h6>

      git clone https://github.com/aswintrikkur/Toll_calculator__react.git
      cd Toll_calculator__react/client
   
   
<h6> 2. Install dependencies: </h6>

      npm i


<h6>3. Configure the application by setting up environment variables and API keys as required </h6>

      - VITE_TOLLGURU_API_KEY = ######################
      - VITE_SERVER_API = ############################
      - VITE_GOOGLE_API_KEY=##########################


<h6> 4. Run the development server: <h6>
  
     npm run dev


<br>

### Note
     Please note that some of the mentioned features are currently under development and are expected to be completed by today. Thank you for your patience and understanding.


