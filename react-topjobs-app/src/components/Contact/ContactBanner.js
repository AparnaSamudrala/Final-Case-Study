const ContactBanner = () => {
  return (
    <div className="card bg-dark text-white border-radius-0">
        <img
          src='./../images/banner.jpg'
          className="opacity-50 img-banner"
          alt="Background"
         
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container text-white ">
            <h5 className="card-title display-6 fw-bolder mb-0">CONTACT US</h5>
            <hr />
            <p className="card-text lead fs-4">You can reach out here!!</p>
          </div>
        </div>
    </div>
  )
}

export default ContactBanner