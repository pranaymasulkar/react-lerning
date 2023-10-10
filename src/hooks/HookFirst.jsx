import React, { useState } from "react";

const HookFirst = () => {
  const [count, setCount] = useState(0);

  const Clickcount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <h1>Click {count} Time.</h1>
        <button onClick={Clickcount}>Click</button>
      </div>
    </>
  );
};

export default HookFirst;
