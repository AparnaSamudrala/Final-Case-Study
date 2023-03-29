import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import SuccessAlert from '../../../components/Alerts/SuccessAlert'
import ErrorAlert from "../../../components/Alerts/ErrorAlert";
import ApplyFormBtns from "./ApplyFormBtns";

const ApplyForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isShown, setIsshown] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    await axios
      .post("https://jsonapi-nine.vercel.app/applications", { ...data, id })
      .then((res) => {
        let value = [res.data];
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.includes("duplicate id")) setIsDuplicate(true);
      });
    setIsshown(true);
    reset();
    setTimeout(() => {
      setIsshown(false);
      navigate("/jobs");
    }, 5000);
  };
  return (
    <div className="col-md-8">
      <h1 className="text-center text-light bg-primary p-3 rounded">
        <i className="fa fa-briefcase pe-2"></i>You are applying for {id}
      </h1>

      <form
        className="w-100 rounded-1 p-4 border bg-cadet"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="d-block mb-4">
          <span className="form-label d-block">Name</span>
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
        </label>

        <label className="d-block mb-4">
          <span className="form-label d-block">Email Address</span>
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <span role="alert" className="text-danger">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="d-block mb-4">
          <span className="form-label d-block">Phone</span>
          <input
            type="text"
            className="form-control"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number should be 10 digit number",
              },
            })}
            placeholder="Phone"
          />
          {errors.phone && (
            <span role="alert" className="text-danger">
              {errors.phone.message}
            </span>
          )}
        </label>

        <label className="d-block mb-4">
          <span className="form-label d-block">Address</span>
          <input
            name="address"
            type="text"
            className="form-control"
            placeholder="Address"
          />
        </label>

        <label className="d-block mb-4">
          <span className="form-label d-block">Years of Experience</span>
          <input
            name="experience"
            type="experience"
            className="form-control"
            placeholder="Experience"
            {...register("experience", {
              required: "Experience is required",
              minLength: {
                value: 10,
                message: "min length is 10",
              },
              maxLength: {
                value: 150,
                message: "max length is 150",
              },
            })}
          />
          {errors.experience && (
            <span role="alert" className="text-danger">
              {errors.experience.message}
            </span>
          )}
        </label>

        {isShown ? (
          !isDuplicate ? (
            <SuccessAlert text="You have successfully submitted for this job.!!" />
          ) : (
            <ErrorAlert text="You have already applied for this job !!!" />
          )
        ) : null}

        <ApplyFormBtns />
      </form>
    </div>
  );
};

export default ApplyForm;
