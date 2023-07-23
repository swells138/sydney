import { TextField, Button } from "@mui/material";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

function Register() {
  return (
    <React.Fragment>
      <Form>
        <Container className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-5">
          <Card className="d-flex justify-content-center shadow">
            <h1 className="mt-3">Register</h1>
            <Col className="mx-5 mb-4 pt-2">
              <Row>
                <TextField
                  color="secondary"
                  label="First Name"
                  variant="standard"
                ></TextField>
                <TextField
                  color="secondary"
                  label="Middle Name"
                  variant="standard"
                ></TextField>
                <TextField
                  color="secondary"
                  label="Email"
                  variant="standard"
                ></TextField>
                <TextField
                  color="secondary"
                  label="Phone"
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
export default Register;
