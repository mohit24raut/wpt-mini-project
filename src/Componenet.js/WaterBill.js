import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WaterBill() {
  let navigate=useNavigate();
  let formRef = useRef();
  let [waterBillInfo, setWaterBillInfo] = useState({
    fname: "",
    lname: "",
    meterNumber: "",
    mobile: "",
    amount:""
  });
  let [dis, setDis] = useState(false);
  let [house, setHouse] = useState(false);

  let changeFname = (e) => {
    let newFname = { ...waterBillInfo, fname: e.target.value };
    setWaterBillInfo(newFname);
  };
  let changeLname = (e) => {
    let newLname = { ...waterBillInfo, lname: e.target.value };
    setWaterBillInfo(newLname);
  };
  let changeMeterNumber = (e) => {
    let newMeterNumber = { ...waterBillInfo, meterNumber: e.target.value };
    setWaterBillInfo(newMeterNumber);
  };
  let changeMobileNumber = (e) => {
    let newMobileNumber = { ...waterBillInfo, mobile: e.target.value };
    setWaterBillInfo(newMobileNumber);
  };
  let changeAmount = (e) => {
    let newAmount = { ...waterBillInfo, amount: e.target.value };
    setWaterBillInfo(newAmount);
  };

  let onPay = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      let url = `http://localhost:9000/addWaterBillUser?fname=${waterBillInfo.fname}&lname=${waterBillInfo.lname}&meterNumber=${waterBillInfo.meterNumber}&mobile=${waterBillInfo.mobile}&amount=${waterBillInfo.amount}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newTaxInfo = { fname: "", lname: "", meterNumber: "", mobile: "" };
      setWaterBillInfo(newTaxInfo);

      setDis(true);
      setTimeout(() => setDis(false), 2000);
      alert("Done");
    } catch (err) {
      setHouse(true);
      setTimeout(() => setHouse(false), 5000);
      let newTaxInfo = { fname: "", lname: "", meterNumber: "", mobile: "" };
      setWaterBillInfo(newTaxInfo);
      alert(err.message);
    }
    navigate("/RealHome");

  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="row align-text-center justify-content-center"
          
        >
          <div
            className="col-sm-12 col-md-4 p-3 bg-light"
            style={{ margin: "9vh" }}
          >
            <h2 id="texh2">Water Bill</h2>
            <form ref={formRef} className="needs-validation" novalidation>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                placeholder="First Namer"
                required
                id="fname"
                value={waterBillInfo.fname}
                onChange={changeFname}
                className="form-control my-2 border-warning"
              />
              <span id="ffname" className="text-danger"></span>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                placeholder="Last Namer"
                required
                id="lname"
                value={waterBillInfo.lname}
                onChange={changeLname}
                className="form-control my-2 border-warning"
              />
              <span id="llname" className="text-danger"></span>
              <label htmlFor="email">Meter Number</label>
              <input
                type="text"
                placeholder="Meter No. 10 digits"
                required
                id="email"
                value={waterBillInfo.meterNumber}
                onChange={changeMeterNumber}
                className="form-control my-2 border-warning"
              />
              <span id="mmeter" className="text-danger"></span>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                placeholder="Mobile No."
                required
                id="mobile"
                value={waterBillInfo.mobile}
                onChange={changeMobileNumber}
                className="form-control my-2 border-warning"
              />
              <span id="mmobile" className="text-danger"></span>
              <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  placeholder="Donation Amount"
                  min={1}
                  id="donationamount"
                  className="form-control my-2 mb-2 border-warning"
                  value={waterBillInfo.amount}
                  onChange={changeAmount}
                  required
                  pattern="[0-9]+([.][0-9]{1,2})?"
                  
                />
            </form>
            <div className="btndiv">
              <input
                type="button"
                value="Pay"
                onClick={onPay}
                className="btn btn-primary my-2 w-50 fs-5"
              />
            </div>
            <div class="btndiv">
              {dis && (
                <h5 className="text-success">* Pay Successfully *</h5>
              )}
              {house && (
                <h5 className="text-success">* Bill Is Already Paid *</h5>
              )}
            </div>
            <h6 id="h6hed">
              &#128591;Thank you for Digital Payment and supporting Digital
              India as well as creating Digital Record at Gram Panchayat level.
            </h6>
          </div>
              </div>
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