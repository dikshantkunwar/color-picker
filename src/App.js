import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import ColorDisplay from './components/ColorDisplay';

function App() {
  const [colors, setColors] = useState([]);
  const [bgColor, setbgColor] = useState('#0000')

  useEffect(() => {
    memoizedCallback();
  }, []);

  const memoizedCallback = useCallback(
    () => {
      getNewColors();
    },[colors]
  );

  const getNewColors = () => {
    axios
    .get('https://random-data-api.com/api/color/random_color?size=10')
    .then((res) => {
      const colorData = res.data;
      setColors(colorData);
    })
    .catch((err) => {
      console.log("Error fetching from Random Data API: ", err);
    });
  };

  const setBackgroundColor = (value) => {
    setbgColor(value);
  }; 

  return (
    <div style={{textAlign: 'center', backgroundColor: `${bgColor}`}}>
      <h1>Background Color Picker</h1>
      <button onClick={memoizedCallback}>Get New Colors</button>
      <main>
        {colors.map((color) =>
          <ColorDisplay 
            key={color.id}
            hex_value={color.hex_value}
            hsl_value = {color.hsl_value}
            setBackgroundColor = {setBackgroundColor}
          /> 
        )}
      </main>
    </div>
  );
}

export default App;
