import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  let navigate = useNavigate();
  let formRef = useRef();
  let [passMatch, setPassMatch] = useState("Password Not Match");
  let [isPassMatch, setIsPassMatch] = useState(false);
  let [color, setColor] = useState("red");
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gmail: "",
    mobno: "",
    password: "",
    confirmpassword: "",
  });

  let HandlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  let HandlerFirstnameAction = (e) => {
    let newuser = { ...user, firstname: e.target.value };
    setUser(newuser);
  };
  let HandlerLastnameAction = (e) => {
    let newuser = { ...user, lastname: e.target.value };
    setUser(newuser);
  };
  let HandlerGmailAction = (e) => {
    let newuser = { ...user, gmail: e.target.value };
    setUser(newuser);
  };
  let HandlerMobnoAction = (e) => {
    let newuser = { ...user, mobno: e.target.value };
    setUser(newuser);
  };
  let HandlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };
  let HandlerConfirmPasswordAction = (e) => {
    let newuser = { ...user, confirmpassword: e.target.value };
    
    if(e.target.value != user.password)
    {
      setIsPassMatch(true);
    }else{
      setPassMatch("Password Match"); 
      setColor("green");
    }
    setUser(newuser);

  };
  let registerAction = async () => {
    try {
      setIsPassMatch(false);
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:9000/adduser?username=${user.username}&firstname=${user.firstname}&lastname=${user.lastname}&gmail=${user.gmail}&mobno=${user.mobno}&password=${user.password}&confirmpassword=${user.confirmpassword}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        firstname: "",
        lastname: "",
        gmail: "",
        mobno: "",
        password: "",
        confirmpassword: "",
      };
      setUser(newuser);
      formRef.current.classList.remove("was-validated");
      alert("success");
      setIsSuccess(true);
      navigate("/Login");
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 d-flex align-item-center">
            <img src="d031de662d94f078d9fb1b9fe44cfd9f.jpg" alt="" />
          </div>
          <div className="col-8">
            <form ref={formRef} className="needs-validation">
              <div className="row align-text-center justify-content-center">
                <div className="col-sm-12 col-md-6 p-3 bg-light m-5">
                  <h2 style={{ textAlign: "center" }}>Register</h2>
                  <label htmlFor="User Name">User name</label>
                  <input
                    type="text"
                    placeholder="eg. rautmohit"
                    required
                    pattern="^(?![0-9]*$)[a-z0-9]{3,}$"
                    className="form-control my-2 border-warning"
                    value={user.username}
                    onChange={HandlerUsernameAction}
                  />

                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    placeholder="eg. Mohit"
                    required
                    pattern="^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$"
                    className="form-control my-2 border-warning"
                    value={user.firstname}
                    onChange={HandlerFirstnameAction}
                  />

                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    placeholder="eg. Raut"
                    required
                    pattern="^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$"
                    className="form-control  my-2 border-warning"
                    value={user.lastname}
                    onChange={HandlerLastnameAction}
                  />

                  <label htmlFor="mob">Mobile no</label>
                  <input
                    type="tel"
                    placeholder="eg. 8828260026"
                    className="form-control  my-2 border-warning"
                    value={user.mobno}
                    onChange={HandlerMobnoAction}
                    minLength={10}
                    maxLength={10}
                    pattern="^[6789]\d{0,9}$"
                    required
                  />
                  <label htmlFor="gmail">Gmail</label>
                  <input
                    type="email"
                    placeholder=" eg. Gmail@xyz.com"
                    className="form-control  my-2 border-warning"
                    value={user.gmail}
                    onChange={HandlerGmailAction}
                    required
                    pattern="^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)*@gmail\.(com|in)$"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="eg. 1Ab@"
                    className="form-control my-2 border-warning"
                    value={user.password}
                    onChange={HandlerPasswordAction}
                    required
                    pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()])[a-zA-Z\d!@#$%^&()]{4,}$"
                    minLength={3}
                  />
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="eg. 1Ab@"
                    className="form-control  my-2 border-warning"
                    value={user.confirmpassword}
                    
                    onChange={HandlerConfirmPasswordAction}
                    required
                    
                    pattern={
                      user.password !== "" ? `^${user.password}$` : undefined
                    }
                    minLength={3}
                  />
                  {isPassMatch && <span style={{ color: color }}>{passMatch}</span>}
                  <div class="btndiv">
                    <input
                      type="button"
                      value="Register"
                      className="w-100 mt-3"
                      onClick={registerAction}
                      class="btn btn-primary mt-2 w-50 fs-5"
                    />
                  </div>
                  <div class="btndiv">
                    <p class="m-2">
                      If u are already Registered ?
                      <Link to={"/Login"}>Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>

            {isSuccess && <div className="alert alert-success">Success</div>}
            {isError && <div className="alert alert-danger">Error</div>}
          </div>
        </div>
      </div>
    </>
  );
}
