import React from "react";
import { useState } from "react";

const InputFeild = () => {
  const [text, setText] = useState("");

  const hand = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={hand} />
      <p>check below : </p>
      <p>{text}</p>
    </div>
  );
};

export default InputFeild;
