import React, { useState } from "react";

const DemoUsest = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [on, setOn] = useState(false);

  const Addtion = () => {
    setCount(count + 1);
  };
  const subst = () => {
    setCount(count - 1);
  };
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const togleCLick = (e) => {
    setOn(!on);
  };
  return (
    <div>
      <button onClick={Addtion}>addd</button>
      <p>{count}</p>
      <button onClick={subst}>substract</button>
      <input type="text" value={text} onChange={handlechange} />
      <p>{text}</p>

      <button onClick={togleCLick}>{on ? "On" : "Off"}</button>
    </div>
  );
};

export default DemoUsest;
