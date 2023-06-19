import { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);
  let [user, setUser] = useState({ username: "", password: "" });
  let changeUname = (e) => {
    let newUname = { ...user, username: e.target.value };
    setUser(newUname);
  };
  let changePass = (e) => {
    let newPass = { ...user, password: e.target.value };
    setUser(newPass);
  };

  let addUserLogin = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      const url = `http://localhost:9000/login-by-get?username=${user.username}&password=${user.password}`;

      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }
      localStorage.setItem("loginStatus", "true");

      navigate("/RealHome", { replace: true });
      setUser({ username: "", password: "" });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
    //    let url =`http://localhost:9000/addLogin?uname=${logDeatil.uname}&pass=${logDeatil.pass}`;
    // fetch(url);

    //  alert("Done");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row " style={{ height: "100%" }}>
          <div className="col-4 w-10">
            <video
              src="vecteezy_the-farmer-is-working-out-of-his-farm_8670264_419.mp4"//LoginSidePic1.jpg
              autoPlay
              loop
              style={{
                width: "110%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-8">
            <div class="row align-text-center justify-content-center bg-light">
              <div class="col-sm-9 col-md-6 p-3 " style={{ margin: "16vh" }}>
                <h2 id="idh111">Login</h2>
                <form ref={formRef} className="needs-validation " novalidate>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="username"
                    value={user.username}
                    onChange={changeUname}
                    class="form-control my-2 border-warning"
                  />
                  <span id="ffname" class="text-danger"></span>
                  <label htmlFor="pass">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={changePass}
                    required
                    id="password"
                    class="form-control  my-2 border-warning"
                  />
                  <span id="ppword" class="text-danger"></span>
                </form>
                {isSuccess && (
                  <div className="alert alert-success">Success</div>
                )}
                {isError && <div className="alert alert-danger">Error</div>}
                <div class="btndiv">
                  <input
                    type="button"
                    value="Login"
                    onClick={addUserLogin}
                    class="btn btn-primary mt-2 w-50 fs-4"
                  />
                </div>
                <div class="btndiv">
                  <p class="m-3">
                    Don't have an account ?
                    <Link to={"/Registration"}>Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}