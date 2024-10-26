import Welcome from './Welcome';
import HOW from './HOW.jpeg';
import greencat from './greencat.jpg';
import React, { useState, useEffect } from 'react';

function App() {
  const [dog, setAnimalImage] = useState('');

  const fetchAnimalFact = async () => {
    try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setAnimalImage(data.message);
    } catch(error) {
      console.error('Error, something went wrong with image', error);
    }
  };
  useEffect(() => {
    fetchAnimalFact();
  }, []);

  return (
    <div>  
      <div>
      <Welcome />
      <div style={{ display: 'flex', gap: '5px'}}>
      <div 
        style={{
          width: '1200px',
          height: '500px',
          backgroundImage: `url(${HOW})`,
          backgroundSize: 'cover'
        }}
      ></div>
      <div 
        style={{
          width: '1200px',
          height: '500px',
          backgroundImage: `url(${greencat})`,
          backgroundSize: 'cover'
        }}
      ></div>
      </div>
      <div style={{ display: 'flex', gap: '5px'}}>

        <ul>
          <li>doudou</li>
          <li>oye</li>
          <li>Ichigoat</li>
        </ul>

        <ol>
          <li>Menos Grande</li>
          <li>Arrancar</li>
          <li>Vizard</li>
        </ol>

      </div>

    </div>
    <center><hi>image of fool.</hi>
    <div><button id="fetchButton" onClick={(fetchAnimalFact)} > show me fool </button></div>
    <div>
      <img id="dog" src={dog} alt="Random dog" style= {{
        maxWidth: '300px',
        maxHeight: '300px'
      }} />
      </div>
      </center>
  </div>
  );
}


export default App;
