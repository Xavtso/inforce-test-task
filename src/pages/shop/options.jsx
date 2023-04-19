import React, { useState } from "react";
import "./options.css";

const Options = ({ onColorSelect, onCancel }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedColor) {
      onColorSelect(selectedColor);
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Select color</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="radio"
              name="color"
              value="black"
              checked={selectedColor === "black"}
              onChange={handleColorChange}
            />
            Black
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="color"
              value="red"
              checked={selectedColor === "red"}
              onChange={handleColorChange}
            />
            Red
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="color"
              value="white"
              checked={selectedColor === "white"}
              onChange={handleColorChange}
            />
            White
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={selectedColor === "blue"}
              onChange={handleColorChange}
            />
            Blue
          </label>
          <br />
          <button type="submit">Select</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Options;
