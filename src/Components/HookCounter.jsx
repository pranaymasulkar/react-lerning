import React, { useState } from "react";
import { Button } from "react-bootstrap";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Hooks Count {count}</Button>
    </div>
  );
};

export default HookCounter;
