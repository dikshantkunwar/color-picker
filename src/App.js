import { useEffect, useState } from 'react';
import axios from 'axios';
import ColorDisplay from './components/ColorDisplay';

function App() {
  let [colors, setColors] = useState([]);

  useEffect( () => {
    axios.get('https://random-data-api.com/api/color/random_color?size=10')
    .then((res) => {
      const colorData = res.data;
      setColors(colorData);
    })
    .catch((err) => {
      console.log("Error fetching from Random Data API: ", err);
    });
  }, []);

  return (
    <div className="App">
      <h1>Background Color Picker</h1>
      <button>Get New Colors</button>

      <div>
        {colors.map((color) =>
          <ColorDisplay 
            hex_value={color.hex_value}
            hsl_value = {color.hsl_value}
          /> 
        )}
      </div>
    </div>
  );
}

export default App;
