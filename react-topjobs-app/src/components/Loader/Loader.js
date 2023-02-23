import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  // function for Looping any component n times
  function Looper({ children, times }) {
    const keys = [...Array(times).keys()];
    return (
      <>
        {keys.map((item) => (
          <div className="col-md-3" key={item}>
            {children}
          </div>
        ))}
      </>
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Looping skeleton component n number of times as in looper times = {n} */}

        <h1 className="text-center">
          <i className="fa fa-spinner fa-spin p-3"></i>Loading...
        </h1>
        <Looper times={4}>
          <Skeleton height={200} width={200} />
        </Looper>
      </div>
    </div>
  );
};

export default Loader;
