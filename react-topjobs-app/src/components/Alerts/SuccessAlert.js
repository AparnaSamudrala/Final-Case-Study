const SuccessAlert = (props) => {
  return (
    <p className="border border-2 rounded bg-success text-white p-2">
      <i className="fa fa-check-circle me-2"></i>{props.text}
    </p>
  );
};

export default SuccessAlert;
