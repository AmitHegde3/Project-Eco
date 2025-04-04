import React from 'react';

const InputSection = ({ onNewData }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    onNewData(formData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const formData = new FormData();
    formData.append('text', productName);
    onNewData(formData);
  };

  return (
    <div className="bottom-row">
      <input type="file" accept="image/*" capture="camera" onChange={handleImageUpload} />
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="productName" placeholder="Enter product name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputSection;