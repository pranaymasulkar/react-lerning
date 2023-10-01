import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import EmployeData from "./EmployeData";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeAdd = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  let history = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqid = ids.slice(0, 9);
    let a = name,
      b = position;

    EmployeData.push({ id: uniqid, uname: a, position: b });
    history("/");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Add Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Add Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Position"
                  required
                  onChange={(e) => setPosition(e.target.value)}
                />
              </Form.Group>
              <Button type="submite" onClick={(e) => handleSubmite(e)}>
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeAdd;
