import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  // ...rest of the code
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [allUniversities, setAllUniversities] = useState([]);

  const handleSearch = () => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch('http://universities.hipolabs.com/search')
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
        setAllUniversities(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClear = () => {
    setCountry('');
    setUniversities(allUniversities);
  };
  return (
    <div>
      <div className='search bar'>
      <input
        type="text"
        placeholder="Enter a country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button className='search' onClick={handleSearch}>Search</button>
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
      </div>
     
      <h2>All Universities: {universities.length}</h2>
      {universities.map((university) => (
        <div key={university.name} className="container">
          <h3>{university.name}</h3>
          <p>
            <span className="label">Country:</span> {university.country}
          </p>
          <p>
            <span className="label">Alpha Two Code:</span> {university.alpha_two_code}
          </p>
          <p>
            <span className="label">Web Pages:</span>
            <span className="web-pages">
              {university.web_pages.map((webPage, index) => (
                <a key={index} href={webPage} target="_blank" rel="noopener noreferrer">
                  {webPage}
                </a>
              ))}
            </span>
          </p>
          <p>
            <span className="label">State/Province:</span> {university['state-province']}
          </p>
          <p>
            <span className="label">Domains:</span> {university.domains.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App
