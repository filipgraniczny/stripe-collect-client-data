import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Image, Container, Row, Col } from "react-bootstrap";

function App() {
  const [showError, setShowError] = useState(false);

  return (
    <div className="App-header">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <div className="box">
              <Image
                src={process.env.REACT_APP_LOGO}
                fluid
                className="logo"
              ></Image>
              <br></br>
              <br></br>

              <Alert
                variant="danger"
                style={{ marginBottom: "20px" }}
                show={showError}
              >
                An error occured. Please try again later.
              </Alert>
              <h4>Please enter your payment information for</h4>
              <h1>
                <b>{process.env.REACT_APP_COMPANY_NAME}</b>
              </h1>

              <br></br>
              <div className="d-grid">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleClick(setShowError)}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

async function handleClick(setShowError) {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const result = await response.text();
    setShowError(false);
    window.location.href = result;
  } catch (err) {
    setShowError(true);
  }
}

export default App;
