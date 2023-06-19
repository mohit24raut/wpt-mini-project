import "./AboutUs.css";


function AboutUs() {
  return (
    <>
      <div className="container-fluid">
        <section className="hero">
          <div className="heading">
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              About Us
            </h1>
          </div>
          <div className="row">
            <div
              className="col-sm-12 col-md-5 my-5 border"
              style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
            >
              <h2 className="hero-content-h2">What is Gram E-App</h2>
              <p style={{ textAlign: "justify" }} className="hero-content-p">
                Gram E-App is an app showing the working of the basic governing
                institution of Indian villages. It describes Gram Panchayat, a
                political institution acting as the cabinet of the village. The
                Gram Sabha works as the general body of the Gram Panchayat. The
                members of the Gram Panchayat are elected directly by the
                people. The President of the Gram Panchayat is called Pradhan or
                Sarpanch. There are about 250,000 Gram Panchayats in India.
              </p>
            </div>
            <div className="col-sm-12 col-md-7   ">
              <img
                src="IMG_8461_Seva_Mandir_Large.jpg"
                alt=""
                className="imgOldPerson"
                style={{ height: "300px", width:"100%" }}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid">
        <div className="row my-4">
          <div
            className="col-md-4 border"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="details">
              <h2>Aim</h2>
              <p style={{ textAlign: "justify" }}>
                Gram E App is an application that showcases the progress of
                various activities taken up by the Panchayati Raj Institutions
                (PRIs). It has been developed with an emphasis on extending
                greater transparency and access to information to the citizens
                of India. This application acts as a natural extension to the
                eGramSwaraj web portal.
              </p>
              <a href="https://egramswaraj.gov.in/">read more</a>
            </div>
          </div>
          <div
            className="col-md-4 border"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="details">
              <h2>Mission</h2>
              <p style={{ textAlign: "justify" }}>
                The Gram E Panchayat program aims at equipping rural India with
                updated information online and thus enables Gram Panchayats to
                be computerized. For this purpose, the e-Panchayat MMP is aimed
                at automating internal workflow processes of approximately 2.45
                lakh Panchayats across India.
              </p>
              <a href="https://egramswaraj.gov.in/">read more</a>
            </div>
          </div>
          <div
            className="col-md-4 border"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="details">
              <h2>Vision</h2>
              <p style={{ textAlign: "justify" }}>
                Under the National e-Governance Plan (NeGP) in 2006, the
                government planned to introduce technology to improve efficiency
                in the functioning of Gram Panchayats in India. In 2018, the
                e-Panchayat mission was launched by the Ministry of Panchayati
                Raj as a component of the Mission Mode Projects (MMP) to meet
                this objective.
              </p>
              <a href="https://egramswaraj.gov.in/">read more</a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div
        className="details"
        style={{ display: "flex", justifyContent: "center", color: "Coral" }}
      >
        <h1 style={{ height: "10px" }}>OUR TEAM</h1>
      </div>
      <br />
      <br />
      <div
        className="row justify-content-center p-5 border border-5 border-shadow p-3 mb-5 bg-dark-subtle rounded"
        style={{
          boxSizing: "border-box",
          margin: "0%",
          padding: "0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="col-sm-12 col-md-3">
          <div className="card">
            <img
              src="WhatsApp Image 2023-06-11 at 23.30.08.jpeg"
              className="card-img-top imgUs"
              alt=""
            />
            <div className="card-body">
              <h5>Mohit Raut (Founder)</h5>
              <p className="card-text">
                Currently Pursuing PGDAC from CDAC MUMBAI
              </p>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-sm-12 col-md-3">
          <div className="card">
            <img
              src="IMG_20220206_133448_673.jpg"
              className="card-img-top imgUs"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Vinod Tambe (Chair)</h5>
              <p className="card-text">
                Currently Pursuing PGDAC from CDAC MUMBAI
              </p>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-sm-12 col-md-3">
          <div className="card">
            <img
              src="IMG_20200411_131612_581.jpg"
              className="card-img-top imgUs"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Pankaj Bhagat (Dev)</h5>
              <p className="card-text">
                Currently Pursuing PGDAC from CDAC MUMBAI
              </p>
            </div>
          </div>
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div
        className="row bg-dark justify-content-center"
        style={{
          boxSizing: "border-box",
          margin: "0%",
          padding: "0%",
        }}
      >
        <div className="col-12 col-md-6">
          <p className="page">
            Content on this website is owned, updated, and managed by the Gram
            Panchayat, Government of India.
          </p>
          <p className="page">Designed and Developed by CDAC Mumbai</p>
          <p className="page">Follow Us On</p>
          <div className="row justify-content-center">
            <div className="col-2">
              <img src="twi.jpeg" className="follow" alt="" />
            </div>
            <div className="col-2">
              <img src="insta.jpeg" className="follow" alt="" />
            </div>
            <div className="col-2">
              <img src="imdb.jpeg" className="follow" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;