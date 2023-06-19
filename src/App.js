import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ContactUs from "./Componenet.js/ContactUs";

import Tax from "./Componenet.js/Tax";
import Navbar from "./Componenet.js/Navbar";
import WaterBill from "./Componenet.js/WaterBill";
import MeetingInfo from "./Componenet.js/MeetingInfo";
import MeetingDetail from "./Componenet.js/MeetingDetail";
import Suggestion from "./Componenet.js/Suggestion";
import Login from "./Componenet.js/Login";
import RealHome from "./Componenet.js/RealHome";
import Register from "./Componenet.js/Register";
import Donation from "./Componenet.js/Donation";
import AboutUs from "./Componenet.js/AboutUs";
import Fund from "./Componenet.js/Fund";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Fund" element={<Fund />} />
          <Route
            path="/contactUs"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route path="/Registration" element={<Register />} />
          <Route
            path="/Tax"
            element={
              <ProtectedRoute>
                <Tax />
              </ProtectedRoute>
            }
          />
          <Route
            path="/WaterBill"
            element={
              <ProtectedRoute>
                <WaterBill />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MeetingInfo"
            element={
              <ProtectedRoute>
                <MeetingInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MeetingDetail"
            element={
              <ProtectedRoute>
                <MeetingDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Suggestion"
            element={
              <ProtectedRoute>
                <Suggestion />
              </ProtectedRoute>
            }
          />

          <Route
            path="/RealHome"
            element={
              <ProtectedRoute>
                <RealHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Donation"
            element={
              <ProtectedRoute>
                <Donation />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/Login"} replace={true} />;
  }
  return children;
}

export default App;
