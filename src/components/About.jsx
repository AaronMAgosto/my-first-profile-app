import { Col, Container, Row,  } from "react-bootstrap";

export default function About () {

    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                    <img src="./images/bp.jpg"
                    className="rounded-circle"
                    alt=""/>
                    </Col>

                    <Col>
                        <h1 className="mt-3">Aaron Agosto</h1>
                        <p>Currently a student at Boca Code who enjoys fishing, traveling, and supporting the Miami Dolphins, I'm always up for new adventures. After working as an electrician, I've decided to set my sights on a new goal for software engineering and am currently studying towards that goal. My aim is to land a junior engineer position after completing the course, and I'm excited to start my career in this field </p>
                        
                    </Col>

                </Row>
            </Container>
        </main>
    )
}