import { useState, useRef } from "react";
import "./ContsctUs.css";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  let formRef = useRef();
  let navigate = useNavigate();
  let [contact, setContact] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    msg: "",
  });

  let changeFname = (e) => {
    let newFname = { ...contact, fname: e.target.value };
    setContact(newFname);
  };
  let changeLname = (e) => {
    let newlname = { ...contact, lname: e.target.value };
    setContact(newlname);
  };
  let changeMobile = (e) => {
    let newMobile = { ...contact, mobile: e.target.value };
    setContact(newMobile);
  };
  let changeEmail = (e) => {
    let newEmail = { ...contact, email: e.target.value };
    setContact(newEmail);
  };
  let changeMsg = (e) => {
    let newMsg = { ...contact, msg: e.target.value };
    setContact(newMsg);
  };

  let addContactMsg = () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }
    let url = `http://localhost:1000/contactMsg?fname=${contact.fname}&lname=${contact.lname}&mobile=${contact.mobile}&email=${contact.email}&msg=${contact.msg}`;
    fetch(url);
    alert("Submitted Successfully...");

    let newContact = { fname: "", lname: "", mobile: "", email: "", msg: "" };
    setContact(newContact);
    formRef.current.classList.remove("was-validated");
    navigate("/RealHome");
  };

  
  return (
    <>
      <div className="container-fluid">
       
          <div className="row  align-text-center justify-content-center">
            <div className="col-sm-12 col-md-4 p-3 bg-light m-5">
            <h2 id="idh1">Contact Us</h2>
            <form
          ref={formRef}
          className="needs-validation"
          noValidate
          onSubmit={addContactMsg}
        >
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                placeholder="eg. Mohit"
                required
                id="fname"
                pattern="^[a-zA-Z]{3,}$"
                value={contact.fname}
                onChange={changeFname}
                className="form-control  my-2 border-warning"
              />
              <span id="ffname" className="text-danger"></span>
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                placeholder="eg. Raut"
                required
                id="lname"
                pattern="^[a-zA-Z]{3,}$"
                value={contact.lname}
                onChange={changeLname}
                className="form-control  my-2 border-warning"
              />
              <span id="llname" className="text-danger"></span>
              <label htmlFor="mobile">Mobile no</label>
              <input
                type="tel"
                placeholder="eg. 8828260026"
                required
                pattern="^(?!91)[0-9]{10}$"
                id="mobile"
                value={contact.mobile}
                onChange={changeMobile}
                className="form-control  my-2 border-warning"
              />
              <span id="mmobile" className="text-danger"></span>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="eg. pankaj@gmail.com"
                required
                id="email"
                value={contact.email}
                onChange={changeEmail}
                className="form-control  my-2 border-warning"
              />
              <span id="eemail" className="text-danger"></span>
              <label htmlFor="query">Comments</label>
              <textarea
                id="query"
                className="d-block mt-2 border-warning w-100"
                cols="30"
                rows="5"
                placeholder="Please enter your comments..."
                value={contact.msg}
                onChange={changeMsg}
                minLength={10}
                required
              ></textarea>
              </form>
              <div class="btndiv">
                <input
                  type="button"
                  value="Submit"
                  onClick={addContactMsg}
                  className="btn btn-primary mt-2 w-50 fs-5"
                />
              </div>
            </div>
          </div>
        
      </div>

      <div className="container-fluid">
        <div className="row bg-dark" style={{ height: "8vh" }}>
          <div className="col">
            <h3 className="ps-2 pt-1 text-light">GET IN TOUCH</h3>
            <br />
          </div>
        </div>

        <div className="row bg-dark justify-content-center">
          <div className="col-9 col-sm-4 text-light">
            <h6>Mohit Raut</h6>
            <hr className="text-light" />
            <ul>
              <li>&#9993; raut@gmail.com</li>
              <li>
                <span>&#128241;</span>9561227225
              </li>
              <li>Shivaji Colony, Panchadhara Road,</li>
              <li>Pulgaon- 442302</li>
            </ul>
          </div>
          <div className="col-9 col-sm-4 text-light">
            <h6>Pankaj Bhagat</h6>
            <hr className="text-light" />
            <ul>
              <li>
                <span>&#9993; </span> bhagatp@gmail.com
              </li>
              <li>
                <span>&#128241;</span>8161228205
              </li>
              <li>Shivaji Colony, Panchadhara Road,</li>
              <li>Pulgaon- 442302</li>
            </ul>
          </div>
          <div className="col-9 col-sm-4 text-light">
            <h6>Vinod Tambe</h6>
            <hr className="text-light" />
            <ul>
              <li>
                <span>&#9993;</span> vtambe@gmail.com
              </li>
              <li>
                <span>&#128241; </span>8581767425
              </li>
              <li>Shivaji Colony, Panchadhara Road,</li>
              <li>Latur - 442302</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}