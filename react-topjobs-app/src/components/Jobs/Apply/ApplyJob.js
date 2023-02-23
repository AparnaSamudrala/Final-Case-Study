import "../../../App.css";
import ApplyForm from "./ApplyForm";
import ApplyBanner from "./ApplyBanner";

const ApplyJob = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <ApplyForm />
        <ApplyBanner />
      </div>
    </div>
  );
};

export default ApplyJob;
