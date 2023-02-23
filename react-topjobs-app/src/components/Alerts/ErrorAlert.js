const ErrorAlert = (props) => {
  return (
    <p className="bg-danger p-2 border border-2 text-white rounded">
      <i className="fa fa-exclamation-circle pe-2"></i>{props.text}
    </p>
  );
};

export default ErrorAlert;
