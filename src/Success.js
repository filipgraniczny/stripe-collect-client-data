import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container, Row, Col } from "react-bootstrap";

function Success() {
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
                <b>Thank you!</b>
              </h1>
              <br></br>
              <h4>
                Your payment information has been received by <br></br>
                <b>{process.env.REACT_APP_COMPANY_NAME}</b>.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Success;
