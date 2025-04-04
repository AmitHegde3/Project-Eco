import React, { useState } from 'react';
import CarbonMetricsTile from './components/CarbonMetricsTile';
import AlternativeProducts from './components/AlternativeProducts';
import InputSection from './components/InputSection';
import './styles.css';

function App() {
  const [productData, setProductData] = useState(null);
  const [alternatives, setAlternatives] = useState([]);

  const handleNewData = async (inputData) => {
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: inputData,
      });
      const data = await response.json();
      setProductData(data.product);
      setAlternatives(data.alternatives);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <CarbonMetricsTile product={productData} />
      <AlternativeProducts alternatives={alternatives} />
      <InputSection onNewData={handleNewData} />
    </div>
  );
}

export default App;