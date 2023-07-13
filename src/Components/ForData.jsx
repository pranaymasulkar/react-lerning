import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrayState from "./ArrayState";
import ArrayStateTwo from "./ArrayStateTwo";
import DropdownExamples from "./DropdownExamples";
import InputFeild from "./InputFeild";
import Toogle from "./Toogle";

const ForData = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   example first
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  //   /example second

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12">
            <button onClick={add} className="btn btn-danger">
              add
            </button>
            <button
              onClick={() => {
                setCount(count + 2);
              }}
              className="btn btn-primary"
            >
              add 2
            </button>
            <div>{count}</div>
            <button onClick={minus} className="btn btn-danger">
              delete
            </button>
            <button
              onClick={() => {
                setCount(count - 2);
              }}
              className="btn btn-danger"
            >
              minus 2
            </button>
          </Col>
          <Col xs="12" className="my-4">
            <input type="text" value={text} onChange={handleChange} />
            <p>your typed text is this : - {text}</p>
          </Col>
          <Col>
            <InputFeild />
          </Col>
          <Col>
            <Toogle />
          </Col>
          <Col>
            <ArrayState />
          </Col>
          <Col>
            <ArrayStateTwo />
          </Col>
          <Col xs={12}>
            <DropdownExamples />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForData;
