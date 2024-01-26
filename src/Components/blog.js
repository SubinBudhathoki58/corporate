import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
            <h2>Latest Form Blog</h2>
            <div className="subtitle">
                get our latest from blog
            </div>
        </div>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </section>
  );
}
