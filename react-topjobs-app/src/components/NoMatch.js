import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-warning">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you're looking for doesn' t exist.</p>

        <button
          type="button"
          className="btn-skew px-3 rounded-3"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NoMatch;
