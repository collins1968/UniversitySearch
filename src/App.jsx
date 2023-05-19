import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [country, setCountry] = useState('');
//   // const [searchParam, setSearchParam] = useState('');
//   const [universities, setUniversities] = useState([]);
//   const [countries, setCountries] = useState([]);
  
// //   const fetchCountry = async () => { 
// //     try {
// //       // const response = await fetch(`http://universities.hipolabs.com/search?country=${searchParam}`)
// //       const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`)
// //       const country = await response.json().then((data) => setCountries(data));

// //       setCountry(response); 
// //     } catch (error) {
// //       console.log("error fetching data", error);
// //     }
// //   }

// //   useEffect(() => {
// //     fetchCountry();
// //   }, [])

// // const handleClear = () => {
// //   setCountry('');
// //   setUniversities([]);
// // }

// // const handleSearch = () => {
// //   setUniversities([]);
// //   if(country){
// //     fetchCountry();
// // }
// //   }
// useEffect(() => {
//   fetch('http://universities.hipolabs.com/countries')
//     .then((response) => response.json())
//     .then((data) => setCountries(data))
//     .catch((error) => console.log(error));
// }, []);
  
// const handleSearch = () => {
//     setUniversities([]);
//     if (country) {
//       fetch(`http://universities.hipolabs.com/search?country=${country}`)
//         .then((response) => response.json())
//         .then((data) => setUniversities(data))
//         .catch((error) => console.log(error));
//     }
//   };

  

//   return (
//     <div>
//     <input type="text"
//     value={country} 
//      onChange={(e) => setCountry(e.target.value)} />
//         <button onClick={handleSearch}>Add</button>
//         {/* <button onClick={handleClear}>Clear</button> */}


//         <h2>All University:</h2>
//         {universities.length === 0 ?(
//         <p>No University</p>) : (
//           <ul>
//           {universities.map((university) => (
//             <li key={university.name}>
//               {university.name}
//             </li>)
//             )}
//         </ul>
          
//         )}
//       {/* <ul>
//         {countries.map((country) => (
//           <li key={country.name}>{country.name}</li>
//         ))}
//       </ul> */}
     
      
      
//           </div>
//         )       
// }



const App = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch('http://universities.hipolabs.com/search')
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (country) => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a country name"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>All Universities:</h2>
      <ul>
        {universities.map((university) => (
          <li key={university.name}>{university.name}</li>
        ))}
      </ul>
    </div>
  );
};





export default App
