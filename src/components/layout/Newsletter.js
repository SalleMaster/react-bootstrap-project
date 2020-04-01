import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Newsletter = () => {
  return (
    <section className='newsletter text-center p-5 bg-dark text-white'>
      <Container>
        <Row>
          <Col>
            <h1>Sign Up For Our Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident inventore quam mollitia minima, distinctio dolorum
              eveniet obcaecati animi reiciendis. Obcaecati assumenda similique
              atque quam voluptatibus nostrum totam quos officia alias.
            </p>
            <Form className='form-inline justify-content-center align-items-baseline'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  className='mb-2 mr-2'
                  type='text'
                  placeholder='Enter Name'
                />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  className='mb-2 mr-2'
                  type='email'
                  placeholder='Enter Email'
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
