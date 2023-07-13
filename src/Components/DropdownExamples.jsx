import React from "react";
import { useState } from "react";

const DropdownExamples = () => {
  const [selectitem, setSelectitem] = useState("");

  const handleselectitem = (e) => {
    setSelectitem(e.target.value);
  };

  return (
    <div className="my-4">
      <select value={selectitem} onChange={handleselectitem}>
        <option value="red color">red color</option>
        <option value="gold color">gold color</option>
        <option value="lime color">lime color</option>
        <option value="pink color">pink color</option>
        <option value="green color">green color</option>
        <option value="orange color">orange color</option>
        <option value="black color">black color</option>
        <option value="white color">white color</option>
      </select>
      <div>
        <p>
          My car color will be <h6>{selectitem}</h6>
        </p>
      </div>
    </div>
  );
};

export default DropdownExamples;
