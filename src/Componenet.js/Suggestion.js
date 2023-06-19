import React, { useState, useRef } from "react";
import "./Suggestion.css";
import { useNavigate } from "react-router-dom";

function Suggestion() {
  let navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mobno: "",
    gmail: "",
    suggestion: "",
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
  let HandlerSuggestionAction = (e) => {
    let newuser = { ...user, suggestion: e.target.value };
    setUser(newuser);
  };

  let suggestionAction = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:9000/adduserSuggestion?firstname=${user.firstname}&lastname=${user.lastname}&mobno=${user.mobno}&gmail=${user.gmail}&suggestion=${user.suggestion}`;
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
        suggestion: "",
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
      <div className="container-fluid">
        <form
          ref={formRef}
          className="needs-validation"
          noValidate
          onSubmit={suggestionAction}
        >
          <div className="row  align-text-center justify-content-center ">
            <div className="col-sm-12 col-md-4 p-3 bg-light m-5 ">
              <div className="form-hover">
                <h2 id="idh1">Suggestions</h2>

                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  className="form-control my-2 border-warning"
                  value={user.firstname}
                  onChange={HandlerFirstnameAction}
                  pattern="^[a-zA-Z]{3,}$"
                  required
                />
                <label htmlFor="lastname">Last name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  className="form-control my-2 border-warning"
                  value={user.lastname}
                  pattern="^[a-zA-Z]{3,}$"
                  onChange={HandlerLastnameAction}
                  required
                />
                <label htmlFor="mobno">Mobile no</label>
                <input
                  type="tel"
                  placeholder="Mobile No.(Excluding country code)"
                  id="mobno"
                  className="form-control my-2 border-warning"
                  value={user.mobno}
                  onChange={HandlerMobnoAction}
                  pattern="^(?!91)[0-9]{10}$"
                  required
                />
                <label htmlFor="gmail">Email id</label>
                <input
                  type="email"
                  placeholder="Gmail@xyz.com"
                  id="gmail"
                  className="form-control  my-2 border-warning"
                  value={user.gmail}
                  onChange={HandlerGmailAction}
                  required
                />
                <label htmlFor="suggestions">Suggestions</label>
                <textarea
                  id="suggestions"
                  className="d-block my-2 border-warning w-100"
                  cols="30"
                  rows="5"
                  minLength={3}
                  required
                  value={user.suggestion}
                  onChange={HandlerSuggestionAction}
                  placeholder="Please enter your suggestions..."
                ></textarea>

                <div class="btndiv">
                  <input
                    type="button"
                    value="Submit"
                    onClick={suggestionAction}
                    className="btn btn-primary mt-2 w-50 fs-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}

        <div className="row bg-dark justify-content-center">
          <div className="col-12 col-md-6">
            <p className="page">
              Content on this website is owned, updated, and managed by the Gram
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

export default Suggestion;
