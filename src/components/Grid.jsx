import { Col, Container, Row } from "react-bootstrap";

export default function Grid () {

    return(
        <section>
            <Container className="grid-container">
                <Row>
                    <Col sm={12} md={4}>
                    <h2>Why Boca Code?</h2>
                    <p> in this part put the reaosn why you chose BOCA CODE </p>
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Exciting project</h2>
                    <p>put what youre interest in working with pretty much</p>
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Ideal Workplace</h2>
                    <p> fill this part out woth what kind of work place youd like to be apart of</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}