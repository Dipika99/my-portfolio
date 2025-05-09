import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-2">
        <Row className="text-center mt-4">
          <Col>
          < p>&copy; {currentYear} Dipika Valvi. All Rights Reserved.</p>
          </Col>
        </Row>
    </footer>
  );
};
