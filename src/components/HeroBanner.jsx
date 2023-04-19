import { Container, Row, Col } from "react-bootstrap";

export default function HeroBanner () {

    return(
        <section>
            <Container className="bg-danger">
                <Row>
                    <Col className="text-center">
                    Hi
                    </Col>
                </Row>
            </Container>
        </section>
    )
}