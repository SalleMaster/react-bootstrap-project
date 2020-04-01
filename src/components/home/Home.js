import React from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div id='home'>
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
    </div>
  );
};

export default Home;
