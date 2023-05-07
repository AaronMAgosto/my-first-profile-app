import { Col, Container, Row } from "react-bootstrap";

export default function Quote () {

    return ( 
        <section>
            <Container className="quote-container">
                <Row className="text-center">
                    <Col>
                    <p><q>Never half-ass two things, whole-ass one thing</q></p> - Ron Swanson 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

