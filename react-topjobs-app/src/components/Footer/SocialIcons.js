const SocialIcons = () => {
  const socialIcons = [
    "fa-facebook",
    "fa fa-twitter",
    "fa fa-google",
    "fa fa-instagram",
    "fa fa-linkedin",
    "fa fa-github",
  ];
  return (
    <div className="container pt-4">
      <section className="mb-4">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className={`fa ${item}`}></i>
          </a>
        ))}
      </section>
    </div>
  );
};

export default SocialIcons;
