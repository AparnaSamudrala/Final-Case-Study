import { useNavigate } from "react-router-dom";
import useAxios from "../../components/customhook/useAxios";
import LoadComp from "../../components/Loader/LoadComp";
import ErrorAlert from "../../components/Alerts/ErrorAlert";

const JobCards = () => {
  const navigate = useNavigate();
  const baseURL = "https://jsonapi-nine.vercel.app/joblists";
  const [data, loading] = useAxios(baseURL);
  return (
    <div className="m-5 bg-light p-5 border border-3 rounded">
      <h1 className="text-center mb-5 text-primary text-uppercase">
        
        Job Openings
      </h1>
      {!data.length && !loading ? (
        <div className="container-row p-5">
          <ErrorAlert text="Currently, there are no jobs listed!!!" />
        </div>
      ) : null}
      {data.length > 0 ? (
        <p className="shadow-lg mb-3 card p-3 fs-3">{data.length} Jobs Found</p>
      ) : null}
      {!loading ? (
        data.map((item, index) => (
          <div className="card text-dark shadow-lg mb-3" key={index}   style={{cursor: 'pointer'}} onClickCapture = {() => navigate(`/applyjob/${item.id}`)}>
            <div className="card-body row">
              <div className="col-md-10">
                <h5 className="card-title">{item.desg}</h5>

                <p className="card-text text-jobtitle">{item.title}</p>
                <p>
                  JOB ID :
                  <span className="border border-2 rounded-pill bg-info text-white p-1">
                    {item.id}
                  </span>
                </p>
                <p className="card-text text-secondary font-small">
                  <i className="fa fa-suitcase"></i>
                  <span className="ps-1  pe-5">{item.exp}</span>
                  <i className="fa fa-rupee"></i>
                  <span className="ps-1 pe-5">{item.sal}</span>
                  <i className="fa fa-map-marker"></i>
                  <span className="ps-1">{item.location}</span>
                </p>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center">
                <button
                  className="btn-skew"
                 
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <LoadComp />
      )}
    </div>
  );
};

export default JobCards;
