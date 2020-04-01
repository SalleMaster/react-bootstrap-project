import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer
      style={{ background: '#000' }}
      className='main-footer text-center text-light p-4'
    >
      <Container>
        <Row>
          <Col>
            <p>Copyright &copy; {new Date().getFullYear()} Glozzom</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
