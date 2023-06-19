import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


function Donation() {
  let navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mobno: "",
    gmail: "",
    donation: "",
  });

  let HandlerFirstnameAction = (e) => {
    let newuser = { ...user, firstname: e.target.value };
    setUser(newuser);
  };

  let HandlerLastnameAction = (e) => {
    let newuser = { ...user, lastname: e.target.value };
    setUser(newuser);
  };

  let HandlerMobnoAction = (e) => {
    let newuser = { ...user, mobno: e.target.value };
    setUser(newuser);
  };

  let HandlerGmailAction = (e) => {
    let newuser = { ...user, gmail: e.target.value };
    setUser(newuser);
  };
  let HandlerDonationAction = (e) => {
    let newuser = { ...user, donation: e.target.value };
    setUser(newuser);
  };

  let donationAction = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:9000/adduserDonation?firstname=${user.firstname}&lastname=${user.lastname}&mobno=${user.mobno}&gmail=${user.gmail}&donation=${user.donation}`;
      let res = await fetch(url);
      if (res.status !== 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      let newuser = {
        firstname: "",
        lastname: "",
        mobno: "",
        gmail: "",
        donation: "",
      };
      setUser(newuser);
      formRef.current.classList.remove("was-validated");
      alert("Success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
    navigate("/RealHome");
  };
  return (
    <>
      <div className=" container-fluid">
        <form
          ref={formRef}
          className="needs-validation"
          noValidate
          onSubmit={donationAction}
        >
          <div className="row  align-text-center justify-content-center ">
            <div className="col-sm-12 col-md-4 p-3 bg-light m-5 ">
              <div className="form-hover">
                <h2 style={{ textAlign: "center" }}>Donation</h2>

                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  pattern="^[a-zA-Z]{3,}$"
                  className="form-control my-2 border-warning"
                  value={user.firstname}
                  onChange={HandlerFirstnameAction}
                />
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  className="form-control  my-2 border-warning"
                  value={user.lastname}
                  pattern="^[a-zA-Z]{3,}$"
                  onChange={HandlerLastnameAction}
                />
                <label htmlFor="mobileno">Mobile no</label>
                <input
                  type="tel"
                  placeholder="Mobile No."
                  id="mobileno"
                  className="form-control  my-2 border-warning"
                  value={user.mobno}
                  onChange={HandlerMobnoAction}
                  pattern="^(?!91)[0-9]{10}$"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="form-control  my-2 border-warning"
                  value={user.gmail}
                  onChange={HandlerGmailAction}
                  required
                />

                <fieldset>
                  <div className="mt-2">
                    <label htmlFor="Type of donation">Type Of Donation:</label>

                    <div
                      className="form-control  my-2 border-warning"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        id="donationChoice1"
                        name="donation"
                        defaultChecked
                        style={{ marginRight: "5px" }}
                      />
                      <label htmlFor="donationChoice1">
                        Village Development
                      </label>

                      <input
                        type="radio"
                        id="donationChoice2"
                        name="donation"
                        style={{ marginLeft: "15px", marginRight: "5px" }}
                      />
                      <label htmlFor="donationChoice2">Social Cause</label>

                      <input
                        type="radio"
                        id="donationChoice3"
                        name="donation"
                        style={{ marginLeft: "15px", marginRight: "5px" }}
                      />
                      <label htmlFor="donationChoice3">School Building</label>
                    </div>
                  </div>
                </fieldset>

                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  placeholder="Donation Amount"
                  min={1}
                  id="donationamount"
                  className="form-control my-2 mb-2 border-warning"
                  value={user.donation}
                  onChange={HandlerDonationAction}
                  required
                  pattern="[0-9]+([.][0-9]{1,2})?"
                  
                />

                <div class="btndiv">
                  <input
                    type="button"
                    value="Submit"
                    onClick={donationAction}
                    className="btn btn-primary mt-2 w-50 fs-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}

        <div className="row bg-dark justify-content-center p-2">
          <div className="col-12 col-md-6">
            <p className="page">
              Content on this website is owned, updated and managed by the Gram
              Panchayat, Government of India
            </p>
            <p className="page">Designed and Developed by CDAC Mumbai</p>
            <p className="page">Follow Us On</p>
            <div className="row justify-content-center">
              <div className="col-2">
                <img src="twi.jpeg" alt="Twitter" className="follow" />
              </div>
              <div className="col-2">
                <img src="insta.jpeg" alt="Instagram" className="follow" />
              </div>
              <div className="col-2">
                <img src="imdb.jpeg" alt="IMDb" className="follow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;