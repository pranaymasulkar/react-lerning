import React from "react";
import { useState } from "react";

const Toogle = () => {
  const [ison, setIson] = useState(false);
  const [msg, setMsg] = useState("");
  const onTogle = (e) => {
    setIson(!ison);
    setMsg(msg ? "The light is on" : "The light is off");
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={onTogle}>
        {ison ? "Light On" : "Light Off"}
      </button>
      <p>{msg}</p>
    </div>
  );
};

export default Toogle;
