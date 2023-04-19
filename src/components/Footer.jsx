import { Col, Container, Row } from "react-bootstrap";

export default function Footer () {

    const currentYear = new Date().getFullYear();
    const gitHubUrl = "https://github.com/aaronmagosto"

    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                    <p>&copy; {currentYear}</p>
                    <p> <a href={gitHubUrl} target="blank"
                    rel ="noreferrer">Code in GitHub</a></p>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}