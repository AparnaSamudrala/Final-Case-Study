const Carousel = () => {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src='./../images/carousel_1.jpg'
              alt="dreamjob"
              className="d-block"
              width="100%"
            />
            <div className="carousel-caption text-white bg-dark bg-gradient">
              <h3>FIND YOUR DREAM JOB</h3>
              <p>
                You are not limited to your city for boring jobs. You can use
                TopJobs portal for suitable jobs in easy way across the country.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img  src='./../images/carousel_2.jpg' className="d-block" width="100%" alt='carouselimg2'/>
            <div className="carousel-caption text-white bg-dark bg-gradient">
              <h3>Talent Hire </h3>
              <p>Build a future you believe in</p>
            </div>
          </div>
          <div className="carousel-item">
            <img  src='./../images/carousel_3.jpg' className="d-block" width="100%" alt='carouselimg3'/>
            <div className="carousel-caption text-white bg-dark bg-gradient">
              <h3>Looking for a Job?</h3>
              <p>We are hiring</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

  )
}

export default Carousel