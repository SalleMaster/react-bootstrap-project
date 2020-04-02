import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Services = () => {
  return (
    <div id='services'>
      <header className='page-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1>Our Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                repellat.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className='services py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card text-center'>
                <div className='card-header bg-dark text-white'>
                  <h3>Service Plan One</h3>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>$59.99/Month</h4>
                  <p className='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus, temporibus?
                  </p>
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature One
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Two
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Three
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Four
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Five
                    </li>
                  </ul>
                  <button className='btn btn-danger btn-block mt-2'>
                    Get It
                  </button>
                </div>
                <div className='card-footer text-muted'>1 Year Plan</div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card text-center'>
                <div className='card-header bg-dark text-white'>
                  <h3>Service Plan One</h3>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>$59.99/Month</h4>
                  <p className='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus, temporibus?
                  </p>
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature One
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Two
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Three
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Four
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Five
                    </li>
                  </ul>
                  <button className='btn btn-danger btn-block mt-2'>
                    Get It
                  </button>
                </div>
                <div className='card-footer text-muted'>1 Year Plan</div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card text-center'>
                <div className='card-header bg-dark text-white'>
                  <h3>Service Plan One</h3>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>$59.99/Month</h4>
                  <p className='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus, temporibus?
                  </p>
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature One
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Two
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Three
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Four
                    </li>
                    <li className='list-group-item'>
                      <i className='fas fa-check'></i> Feature Five
                    </li>
                  </ul>
                  <button className='btn btn-danger btn-block mt-2'>
                    Get It
                  </button>
                </div>
                <div className='card-footer text-muted'>1 Year Plan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='faq p-5 bg-dark text-white'>
        <div className='container'>
          <h1 className='text-center'>Frequently Asked Questions</h1>
          <hr />
          <div className='row'>
            <div className='col-md-6'>
              <Accordion>
                <Card style={{ background: '#333' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                      Question One
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint accusamus voluptates veritatis porro qui impedit,
                        distinctio iusto minus sit dolore minima, eaque velit
                        quam odit quod dicta dolorem aperiam nemo.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ background: '#333' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                      Question Two
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint accusamus voluptates veritatis porro qui impedit,
                        distinctio iusto minus sit dolore minima, eaque velit
                        quam odit quod dicta dolorem aperiam nemo.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ background: '#333' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                      Question Three
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint accusamus voluptates veritatis porro qui impedit,
                        distinctio iusto minus sit dolore minima, eaque velit
                        quam odit quod dicta dolorem aperiam nemo.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className='col-md-6'>
              <Accordion>
                <Card style={{ background: '#333' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                      Question Four
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='3'>
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint accusamus voluptates veritatis porro qui impedit,
                        distinctio iusto minus sit dolore minima, eaque velit
                        quam odit quod dicta dolorem aperiam nemo.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ background: '#333' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='4'>
                      Question Five
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='4'>
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint accusamus voluptates veritatis porro qui impedit,
                        distinctio iusto minus sit dolore minima, eaque velit
                        quam odit quod dicta dolorem aperiam nemo.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card style={{ background: '#333' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='5'>
                      Question Six
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='5'>
                    <Card.Body>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint accusamus voluptates veritatis porro qui impedit,
                        distinctio iusto minus sit dolore minima, eaque velit
                        quam odit quod dicta dolorem aperiam nemo.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
