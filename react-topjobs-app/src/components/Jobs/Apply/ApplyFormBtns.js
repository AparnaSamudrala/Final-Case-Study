import { useNavigate } from "react-router-dom";

const ApplyFormBtns = () => {
  const navigate = useNavigate();
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-md-4 mb-3">
        <button type="submit" className="btn-skew px-3 rounded-3">
          Submit Job
        </button>
      </div>

      <div className="col-md-4 mb-3">
        <button
          type="submit"
          className="btn-skew px-3 rounded-3"
          onClick={() => navigate("/jobs")}
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
};

export default ApplyFormBtns;
