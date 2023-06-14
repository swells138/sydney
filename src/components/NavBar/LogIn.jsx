import { TextField, Button } from "@mui/material";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

function LogIn() {
  return (
    <React.Fragment>
      <Form>
        <Container className="col-6 mt-5">
          <Card className="d-flex justify-content-center shadow">
            <h1 className="mt-3">Log In</h1>
            <Col className="mx-5 mb-4 pt-2">
              <Row>
                <TextField
                  color="secondary"
                  label="Username"
                  variant="standard"
                ></TextField>
              </Row>
              <Row>
                <TextField
                  color="secondary"
                  label="Password"
                  variant="standard"
                ></TextField>
              </Row>
            </Col>
            <Col className=" d-flex justify-content-end me-4 mb-2">
              <Button color="secondary" variant="contained">
                Submit
              </Button>
            </Col>
          </Card>
        </Container>
      </Form>
    </React.Fragment>
  );
}
export default LogIn;
