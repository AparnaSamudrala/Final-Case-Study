import useAxios from "../../components/customhook/useAxios";
import ErrorAlert from "../../components/Alerts/ErrorAlert";
import LoadComp from "../../components/Loader/LoadComp";


const ContactInfo = () => {
    
    const baseURL = "http://localhost:5000/contactData";
    const [data,loading] = useAxios(baseURL);

  return (
    <>  
    {(!data.length && !loading) ? (<div className="container-row p-5"><ErrorAlert text="Currently, No Contact Data to Display."/></div>) : null}  
    {(!loading) ? (
      (data.map((item, index) => (
      <div key={index}>
        <div className="container  p-5 bg-cadet mt-5">
          <div className="row">
            <div className="col-md-4 text-center">
              <p className="fw-bolder">
                <i className="fa fa-map-marker me-2"></i>ADDRESS
              </p>
              <p className="text-secondary">{item.address}</p>
            </div>

            <div className="col-md-4 text-center">
              <p className="fw-bolder">
                <i className="fa fa-phone me-2"></i>PHONES
              </p>
              <p className="text-secondary p-0 m-0">{item.phone[0]}</p>
              <p className="text-secondary p-0 m-0">{item.phone[1]}</p>
              
            </div>
            <div className="col-md-4 text-center">
              <p className="fw-bolder">
                <i className="fa fa-envelope me-2"></i>EMAIL
              </p>
              <p className="text-secondary">{item.email}</p>
            </div>
          </div>
        </div>
      </div>)))):(<LoadComp/>)}
      </>

  )
}

export default ContactInfo