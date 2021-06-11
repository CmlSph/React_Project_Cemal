// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const WeatherInfo = ({ weatherData, setWeatherData, setCityName }) => {
//   const CityInfo = ({ city }) => {
//     return (
//       <div className="city_card">
//         <h3>{`${city.docs[0].title} `}</h3>

//         <p>{city.docs[0].first_sentence}</p>
//         <div className="info">
//           <h5>{city.docs[0].author_name}</h5>

//           <p>{`Min Temp : ${city.docs[0].first_publish_year} °C`}</p>
//           <p>{` Max Temp : ${city.docs[0].edition_count} °C`}</p>
//           <p>{`Location : ${city.docs[0].title}`}</p>
//           <Link to={`/${city.id}`}>
//             <p>Get 5 days forecast for {city.docs[0].key}</p>
//           </Link>
//           <p>{city.id}</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {weatherData.map((city) => (
//         <CityInfo key={city.id} city={city} />
//       ))}
//     </>
//   );
// };

// export default WeatherInfo;
