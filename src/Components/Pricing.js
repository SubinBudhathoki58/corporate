import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
            <h2>Pricing &amp; plans</h2>
            <div className="subtitle">check our pricing &amp; plans</div>
        </div>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </section>
  );
}
