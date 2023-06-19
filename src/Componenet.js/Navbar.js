
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/Login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="container-fluid">
          <h1 className="navbar-brand gram-app fs-1" style={{ color: "coral" }}>
            Gram E-App
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "aliceblue" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "coral" }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/RealHome"}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                }}
              >
                Home
              </Link>

              <Link
                className="nav-link"
                to={"/Registration"}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                }}
              >
                Registration
              </Link>
              <Link
                className="nav-link"
                to={"/aboutUs"}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                  cursor: "pointer",
                }}
              >
                About Us
              </Link>
              <Link
                className="nav-link"
                to={"/contactUs"}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Link>

              <Link
                className="nav-link"
                to={"/Login"}
                style={{
                  color: "aliceblue",
                  fontWeight: "lighter",
                  fontSize: "large",
                }}
              >
                <input type="button" value="Log Out" className="bg-danger text-light" onClick={logOutAction}/>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
