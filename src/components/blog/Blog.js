import React from 'react';

const Blog = () => {
  return (
    <div id='blog'>
      <header className='page-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto text-center'>
              <h1>Read Our Blog</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia,
                exercitationem.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Section */}
      <section className='blog py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card'>
                <img
                  src='https://source.unsplash.com/random/300x200'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='card-body'>
                  <h4 className='card-title'>Blog Post One</h4>
                  <small className='text-muted'>Written by Jeff on 05/20</small>
                  <hr />
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, fuga odit ipsa, quae in suscipit temporibus
                    inventore eveniet expedita numquam nam recusandae aliquid
                    corrupti maxime natus saepe eos voluptate cumque.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <img
                  src='https://source.unsplash.com/random/300x201'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='card-body'>
                  <h4 className='card-title'>Blog Post Two</h4>
                  <small className='text-muted'>Written by Jeff on 05/20</small>
                  <hr />
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, fuga odit ipsa, quae in suscipit temporibus
                    inventore eveniet expedita numquam nam recusandae aliquid
                    corrupti maxime natus saepe eos voluptate cumque.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card'>
                <img
                  src='https://source.unsplash.com/random/300x202'
                  alt=''
                  className='img-fluid card-img-top'
                />
                <div className='card-body'>
                  <h4 className='card-title'>Blog Post Three</h4>
                  <small className='text-muted'>Written by Jeff on 05/20</small>
                  <hr />
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, fuga odit ipsa, quae in suscipit temporibus
                    inventore eveniet expedita numquam nam recusandae aliquid
                    corrupti maxime natus saepe eos voluptate cumque.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card p-3'>
                <div className='card-body'>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod vero itaque dolores voluptatibus facilis sunt!
                  </p>
                  <blockquote className='blockquote-footer text-muted'>
                    <small>
                      Someone Famous in
                      <br />
                      <cite title='Source Title'>Source Title</cite>
                    </small>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card p-3 bg-danger text-white'>
                <div className='card-body'>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod vero itaque dolores voluptatibus facilis sunt!
                  </p>
                  <blockquote className='blockquote-footer text-white'>
                    <small>
                      Someone Famous in
                      <br />
                      <cite title='Source Title'>Source Title</cite>
                    </small>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card p-3'>
                <div className='card-body'>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod vero itaque dolores voluptatibus facilis sunt!
                  </p>
                  <blockquote className='blockquote-footer text-muted'>
                    <small>
                      Someone Famous in
                      <br />
                      <cite title='Source Title'>Source Title</cite>
                    </small>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
