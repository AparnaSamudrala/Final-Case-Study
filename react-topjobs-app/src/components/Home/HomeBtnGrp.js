import { useNavigate } from "react-router-dom";

const HomeBtnGrp = () => {
  const navigate = useNavigate();
  return (
    <div className="display-2 py-5 text-center">
      <button
        type="button"
        className=" btn-skew py-3"
        onClick={() => 
          
          navigate("/jobs")
        }
      >
        Jobs
      </button>

      <button
        type="button"
        className=" btn-skew mx-4 py-3"
        onClick={() => 
          
          navigate("/contact")
        }
      >
        ContactUs
      </button>

      <button type="button" className=" btn-skew py-3">
        Coming Soon
      </button>
    </div>
  );
};

export default HomeBtnGrp;
