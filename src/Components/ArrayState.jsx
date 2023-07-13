import React from "react";
import { useState } from "react";

const ArrayState = () => {
  const [todoos, setTodoos] = useState([]);

  const handleAddToodo = () => {
    setTodoos([...todoos, "New Todo"]);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleAddToodo}>
        Add Todo
      </button>
      {todoos.map((todo, index) => (
        <ul key={index}>
          <li className="d-block">{todoos}</li>
        </ul>
      ))}
    </div>
  );
};

export default ArrayState;
