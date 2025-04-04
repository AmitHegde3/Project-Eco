import React from 'react';

const AlternativeProducts = ({ alternatives }) => {
  return (
    <div className="row">
      {alternatives.map((alt, index) => (
        <div key={index} className="col-md-4">
          <div className="card">
            <h5>{alt.alternative_name}</h5>
            <p>{alt.description}</p>
            <p>{alt.carbon_savings}</p>
            <span className="badge">Available at EcoBrand</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternativeProducts;