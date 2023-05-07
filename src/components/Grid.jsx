import { Col, Container, Row } from "react-bootstrap";

export default function Grid () {
    
    return(
        <section>
            <Container className="grid-container">
                <Row >
                    <Col sm={12} md={4}>
                    <h2>Why Boca Code?</h2>
                    <p> I had been considering a career move into Tech for a while, but I was hesitant about online bootcamps due to mixed reviews. However, enrolling in Boca Code was a no-brainer for me. As soon as I learned about their program, I was convinced and enrolled the very next day.</p>
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Exciting project</h2>
                    <p>Right now, I'm really interested in AI and would be thrilled to work on a project or with a team that explores and expands our knowledge in this field and really push it's boundaries. </p>
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Ideal Workplace</h2>
                    <p> For me, the perfect work environment is one where my colleagues feel like family, and where creativity and out-of-the-box ideas are not only encouraged, but also valued. I believe that a company that works to bring out the best in everyone on the team creates an ideal atmosphere for productivity and success.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}