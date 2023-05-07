
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
export default function Quote () {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const videoLink = "https://www.youtube.com/watch?v=rTVjnBo96Ug";
  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
  }
  return (
    <section>
      <Container className="video-container">
        <Row fade className="text-center">
          <Col>
          <Button className="button" onClick={handleClick}>“ Otis Redding - (Sittin' On) The Dock Of The Bay (Official Music Video) ”</Button>
      <div className="video-container">
      {isButtonClicked && <iframe width="560" height="315" src="https://www.youtube.com/embed/rTVjnBo96Ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> }
      </div>
          </Col>
        </Row>
      </Container>
      <h2></h2>
    </section>
  )
}
