import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcons } from "../../components/Social/SocialIcons";

export const Home = () => {
  return (
    <section className="py-5 container d-flex flex-column min-vh-100">
      <Container className="d-flex flex-column justify-content-center flex-grow-1">
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4 fw-bold mb-3 text-light">Hi, I'm Dipika!</h1>
            <p className="lead mb-4">
              Crafting clean code and smarter solutions for over 7 years, engineer by title, problem solver by nature.
              Let's connect!
            </p>

            <hr className="my-4 w-50" />
            <SocialIcons/>
          </Col>

          <Col md={5} className="text-center mt-4 mt-md-0">
            <img
              alt="Home Image"
              className="img-fluid"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
