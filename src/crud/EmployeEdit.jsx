import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import EmployeData from "./EmployeData";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EmployeEdit = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = EmployeData.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmite = (e) => {
    e.preventDefault();

    let a = EmployeData[index];
    a.uname = name;
    a.position = position;
    history("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setId(localStorage.getItem("id"));
    setPosition(localStorage.getItem("position"));
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Add Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Add Position</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </Form.Group>
              <Button type="submite" onClick={(e) => handleSubmite(e)}>
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmployeEdit;
