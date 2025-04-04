import React from 'react';

const CarbonMetricsTile = ({ product }) => {
  if (!product) return <div className="card">Awaiting Input...</div>;
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Carbon Footprint: {product.carbon_footprint}</p>
    </div>
  );
};

export default CarbonMetricsTile;