import React from "react";
import { useState } from "react";

const ArrayStateTwo = () => {
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    setList([...list, "This Is New Item"]);
  };

  return (
    <div>
      <div>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
        <button onClick={handleAddItem} className="btn btn-primary">
          add List Item
        </button>
      </div>
    </div>
  );
};

export default ArrayStateTwo;
