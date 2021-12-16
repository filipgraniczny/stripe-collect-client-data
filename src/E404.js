import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Container, Row, Col } from "react-bootstrap";

function E404() {
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
                <b>Error 404</b>
              </h1>
              <br></br>
              <h4>
                This page does not exist. Please ensure you've entered the
                correct URL.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default E404;
