import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";

const ForData = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="4">
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="p-5 mt-5">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">submit</Button>{" "}
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForData;
