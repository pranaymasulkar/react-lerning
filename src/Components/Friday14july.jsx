import React from "react";
import { useState } from "react";

const Friday14july = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [ison, setIson] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectop, setSelectop] = useState("");
  const [check, setCheck] = useState([]);

  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  const handleonchange = (e) => {
    setText(e.target.value);
  };

  const handleonTogle = () => {
    setIson(!ison);
  };

  const handleAddTodo = () => {
    setTodos([...todos, "Add New Todo"]);
  };
  const handeleSelect = (e) => {
    setSelectop(e.target.value);
  };

  const handleoncheckbox = (e) => {
    const option = e.target.value;
    if (check.include(option)) {
      setCheck(check.filter((item) => item !== option));
    } else {
      setCheck([...check, option]);
    }
  };
  return (
    <>
      <button onClick={add} className="btn btn-primary">
        Add
      </button>
      <div>{count}</div>
      <button onClick={minus} className="btn btn-primary">
        Minus
      </button>
      <div>
        <input type="text" value={text} onChange={handleonchange} />
        <p>{text}</p>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleonTogle}>
          {ison ? "On" : "Off"}
        </button>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add Todo
        </button>
        {todos.map((todo, i) => (
          <p key={i}>{todos}</p>
        ))}
      </div>
      <div>
        <select name="" value={selectop} onChange={handeleSelect} id="">
          <option value="red">red</option>
          <option value="black">black</option>
          <option value="gold">gold</option>
          <option value="white">white</option>
          <option value="green">green</option>
          <option value="pink">pink</option>
        </select>
        <div>{selectop}</div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            value="option1"
            checked={check.includes("option1")}
            onChange={handleoncheckbox}
          />
          Option 1
        </label>
        <label>
          <input
            type="checkbox"
            value="option2"
            checked={check.includes("option2")}
            onChange={handleoncheckbox}
          />
          Option 2
        </label>
        <label>
          <input
            type="checkbox"
            value="option3"
            checked={check.includes("option3")}
            onChange={handleoncheckbox}
          />
          Option 3
        </label>
        <p>Selected options: {check.join(", ")}</p>
      </div>
    </>
  );
};

export default Friday14july;
