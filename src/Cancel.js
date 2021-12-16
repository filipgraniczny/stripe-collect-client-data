import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image, Container, Row, Col } from "react-bootstrap";

function Cancel() {
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

              <h1>
                <b>Operation Cancelled</b>
              </h1>
              <br></br>
              <h4>
                Your payment information has not been received by <br></br>
                <b>{process.env.COMPANY_NAME}</b>.
              </h4>
              <br></br>
              <div className="d-grid">
                <Button variant="primary" size="lg" href="/">
                  Return
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cancel;
