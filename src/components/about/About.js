import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='about'>
      {/* Header */}
      <header className='page-header'>
        <Container>
          <Row>
            <Col className='col-md-6 m-auto text-center'>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                eligendi.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* About Section */}
      <section className='about py-3'>
        <Container>
          <Row>
            <Col md={6}>
              <h1>What We Do</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, odit? Mollitia quisquam necessitatibus quia culpa,
                debitis libero at delectus porro repudiandae dolorem blanditiis
                incidunt harum voluptatum modi repellat atque magnam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a
                voluptatum eius velit nihil earum voluptas debitis magni!
                Voluptatem nam rerum, recusandae molestiae suscipit architecto
                facilis? Quo enim voluptatem exercitationem.
              </p>
            </Col>
            <Col md={6}>
              <img
                src='https://source.unsplash.com/random/700x700/?technology'
                alt=''
                className='img-fluid rounded-circle d-none d-md-block about-img'
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Icon Boxes */}
      <section className='icon-boxes p-5'>
        <Container>
          <Row>
            <Col md={4} className='mb-4'>
              <div className='card bg-danger text-white text-center'>
                <div className='card-body'>
                  <i className='fas fa-building fa-3x'></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, eos.
                </div>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div className='card bg-dark text-white text-center'>
                <div className='card-body'>
                  <i className='fas fa-bullhorn fa-3x'></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, eos.
                </div>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div className='card bg-danger text-white text-center'>
                <div className='card-body'>
                  <i className='fas fa-comments fa-3x'></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, eos.
                </div>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div className='card bg-dark text-white text-center'>
                <div className='card-body'>
                  <i className='fas fa-box fa-3x'></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, eos.
                </div>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div className='card bg-danger text-white text-center'>
                <div className='card-body'>
                  <i className='fas fa-credit-card fa-3x'></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, eos.
                </div>
              </div>
            </Col>
            <Col md={4} className='mb-4'>
              <div className='card bg-dark text-white text-center'>
                <div className='card-body'>
                  <i className='fas fa-coffee fa-3x'></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, eos.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className='testimonials p-4 bg-dark text-white'>
        <div className='container'>
          <h2 className='text-center'>testimonials</h2>
          <div className='row text-center'>
            <div className='col'>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <blockquote className='blockquote mx-5 px-5'>
                    <p className='mb-0'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, reiciendis.
                    </p>
                    <footer className='blockquote-footer'>
                      Sam Smith From Company 1
                    </footer>
                  </blockquote>
                </Carousel.Item>
                <Carousel.Item>
                  <blockquote className='blockquote mx-5 px-5'>
                    <p className='mb-0'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, reiciendis.
                    </p>
                    <footer className='blockquote-footer'>
                      Sam Smith From Company 2
                    </footer>
                  </blockquote>
                </Carousel.Item>
                <Carousel.Item>
                  <blockquote className='blockquote mx-5 px-5'>
                    <p className='mb-0'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, reiciendis.
                    </p>
                    <footer className='blockquote-footer'>
                      Sam Smith From Company 3
                    </footer>
                  </blockquote>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
