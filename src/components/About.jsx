import { Col, Container, Row,  } from "react-bootstrap";

export default function About () {

    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                    <img src="https://picsum.photos/300/300"
                    className="rounded-circle"
                    alt="profile"/>
                    </Col>

                    <Col>
                        <h1 className="mt-3">Aaron Agosto</h1>
                        <p>Put some info here about yourself, see question 1 for the project </p>
                        
                    </Col>

                </Row>
            </Container>
        </main>
    )
}