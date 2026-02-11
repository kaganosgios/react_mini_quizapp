import React from "react";
import "./dropdown.css";

const Dropdown = ({ data, setDiffuciltyChanged }) => {
  return (
    <div className="dropdown">
      <select onChange={e => setDiffuciltyChanged(e.target.value)} name="" id="" defaultValue="">
        <option value="" disabled>Zorluk Seçin</option>
        {data.map((dt, index) => {
            return <option key={index} value={dt}>{dt}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;