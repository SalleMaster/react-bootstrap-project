import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Images
import Laptop from '../../img/laptop.png';

const Home = () => {
  // Video Modal Controls
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Gallery Modal Controls
  const [galleryModalShow, setGalleryModalShow] = useState({
    show: false,
    img: ''
  });

  const handleGalleryShow = e => {
    setGalleryModalShow({
      show: true,
      img: e.target.src
    });
  };

  const handleGalleryClose = () =>
    setGalleryModalShow({
      show: false,
      img: ''
    });

  return (
    <div id='home'>
      {/* Showcase */}
      <section className='showcase'>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption className='d-none d-sm-block text-center mb-5'>
              <h1 className='display-3'>Heading One</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                aperiam vel ullam deleniti reiciendis ratione quod aliquid
                inventore vero perspiciatis.
              </p>
              <NavLink to='/about' className='btn btn-danger btn-lg'>
                Learn More
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption className='d-none d-sm-block text-center mb-5'>
              <h1 className='display-3'>Heading Two</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                aperiam vel ullam deleniti reiciendis ratione quod aliquid
                inventore vero perspiciatis.
              </p>
              <NavLink to='/about' className='btn btn-primary btn-lg'>
                Learn More
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption className='d-none d-sm-block text-center mb-5'>
              <h1 className='display-3'>Heading Three</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                aperiam vel ullam deleniti reiciendis ratione quod aliquid
                inventore vero perspiciatis.
              </p>
              <NavLink to='/about' className='btn btn-success btn-lg'>
                Learn More
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Icon Section */}
      <section className='home-icons py-5'>
        <Container>
          <Row>
            <Col md={4} className='mb-4 text-center'>
              <i className='fas fa-cog fa-3x mb-2'></i>
              <h3>Turning Gears</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, veniam.
              </p>
            </Col>
            <Col md={4} className='mb-4 text-center'>
              <i className='fas fa-cloud fa-3x mb-2'></i>
              <h3>Sending Data</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, veniam.
              </p>
            </Col>
            <Col md={4} className='mb-4 text-center'>
              <i className='fas fa-cart-plus fa-3x mb-2'></i>
              <h3>Making Money</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, veniam.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Heading Section */}
      <section className='home-heading p-5'>
        <div className='dark-overlay'>
          <Row>
            <Col>
              <Container className='pt-5 text-center'>
                <h1>Are You Ready To Get Started</h1>
                <p className='d-none d-md-block'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                  eaque magni sit dolores. Nisi, dolor nam modi perspiciatis
                  consequatur soluta.
                </p>
              </Container>
            </Col>
          </Row>
        </div>
      </section>

      {/* Home Info */}
      <section className='info py-3'>
        <Container>
          <Row>
            <Col md={6} className='align-self-center'>
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus labore hic aliquid quos sunt sed atque sit natus ipsa
                rem.
              </p>
              <NavLink to='/about' className='btn btn-outline-danger btn-lg'>
                Learn More
              </NavLink>
            </Col>
            <Col md={6} className='align-self-center'>
              <img src={Laptop} alt='' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Play */}
      <section className='video-play text-center'>
        <div className='dark-overlay'>
          <Row>
            <Col>
              <Container className='p-5'>
                <Button className='play-button' onClick={handleShow}>
                  <i className='fas fa-play fa-3x'></i>
                </Button>
                <h1>See What We Do</h1>
              </Container>
            </Col>
          </Row>
        </div>
      </section>

      {/* Gallery */}
      <section className='gallery py-5'>
        <Container>
          <h1 className='text-center'>Photo Gallery</h1>
          <p className='text-center'>Check out our photos</p>
          <Row>
            <Col md={4} className='p-2'>
              <img
                className='img-fluid'
                src='https://source.unsplash.com/random/560x560'
                alt=''
                onClick={e => handleGalleryShow(e)}
              />
            </Col>
            <Col md={4} className='p-2'>
              <img
                className='img-fluid'
                src='https://source.unsplash.com/random/561x560'
                alt=''
                onClick={e => handleGalleryShow(e)}
              />
            </Col>
            <Col md={4} className='p-2'>
              <img
                className='img-fluid'
                src='https://source.unsplash.com/random/562x560'
                alt=''
                onClick={e => handleGalleryShow(e)}
              />
            </Col>
            <Col md={4} className='p-2'>
              <img
                className='img-fluid'
                src='https://source.unsplash.com/random/563x560'
                alt=''
                onClick={e => handleGalleryShow(e)}
              />
            </Col>
            <Col md={4} className='p-2'>
              <img
                className='img-fluid'
                src='https://source.unsplash.com/random/564x560'
                alt=''
                onClick={e => handleGalleryShow(e)}
              />
            </Col>
            <Col md={4} className='p-2'>
              <img
                className='img-fluid'
                src='https://source.unsplash.com/random/565x560'
                alt=''
                onClick={e => handleGalleryShow(e)}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Grimes - REALiTi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            style={{ width: '100%' }}
            title='Grimes - REALiTi'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/N9XKLqGqwLA'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      {/* Gallery Modal */}
      <Modal
        show={galleryModalShow.show}
        onHide={handleGalleryClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Gallery Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{ width: '100%' }} src={galleryModalShow.img} alt='' />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Home;
