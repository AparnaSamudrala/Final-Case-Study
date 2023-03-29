import  { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import SuccessAlert from "../../components/Alerts/SuccessAlert";

const GetInTouch = () => {
  const unique_id = uuid(); //unique id generator from uuid library
  const id = unique_id.slice(0, 8); //slicing the unique id to length of 8 characters.
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isShown, setIsshown] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post("https://jsonapi-nine.vercel.app/messages", { ...data, id })
      .then((res) => {
        let value = [res.data];
        console.log(value);
      })
      .catch((err) => {
        console.log(err.response.data);
        // throw new Error();
      });
    setIsshown(true);
     setTimeout(() => {
      setIsshown(false);
    }, 5000);

    reset();
  };
  return (
    <div className="container my-5">
      <div className="row text-white">
        <div className="col-md-12 mb-2">
          <div className="wrapper">
            <div className="row no-gutters bg-cadet p-2">
              <div className="col-md-6 d-flex ">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4 text-center text-danger">Get In Touch</h3>
                  <div id="form-message-warning" className="mb-4"></div>

                  <form
                    id="contactForm"
                    name="contactForm"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {isShown ? (
                      <SuccessAlert text='Your data is saved with us and we will reach you soon!!'/>
                    ) : null}
                    
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            {...register("firstName", {
                              required: true,
                              pattern: /^[a-zA-Z]+$/i,
                            })}
                            placeholder="Name"
                          />

                          {errors.firstName?.type === "required" && (
                            <span role="alert" className="text-danger">
                              Name is required.
                            </span>
                          )}
                          {errors.firstName?.type === "pattern" && (
                            <span role="alert" className="text-danger">
                              Name cannot contian special characters/numbers.
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            id="email"
                            {...register("email", {
                              required: "Email Address is required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                  "Entered value does not match email format",
                              },
                            })}
                          />
                          {errors.email && (
                            <span role="alert" className="text-danger">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            {...register("phone", {
                              required: "Phone Number is required",
                              pattern: {
                                value: /^\d{10}$/,
                                message:
                                  "Phone number should be 10 digit number",
                              },
                            })}
                            placeholder="Phone"
                          />
                          {errors.phone && (
                            <span role="alert" className="text-danger">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="col-md-12 mb-2">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            cols="30"
                            rows="3"
                            placeholder="Message"
                            {...register("subject", {
                              required: "Message is required",
                              minLength: {
                                value: 10,
                                message: "min length is 10",
                              },
                              maxLength: {
                                value: 150,
                                message: "max length is 150",
                              },
                            })}
                          ></textarea>
                          {errors.subject && (
                            <span role="alert" className="text-danger">
                              {errors.subject.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="form-group text-center">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-danger"
                          />
                          <div className="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <img
                alt='contactUsimg'
                  src="./../images/contactUs.jpg"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
