import React,{ useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Table from "react-bootstrap/Table";
import "./Fund.css";


function Fund() {

    let [allUser, setAllUser] = useState([]);
    let [allWaterUser, setAllWaterUser] = useState([]);

    useEffect(()=>{UserDetail();}, []);
    useEffect(()=>{waterUserDetail();}, []);

    /** Get all Tax Payer  */
    let UserDetail= async ()=>{
        try{
            let url=`http://localhost:9000/readAllTaxPayer`;
            let res = await fetch(url);
            
            if(res.status != 200)
            {
                let serverMsg = await res.text();
                throw new Error(serverMsg);
            }

            let list = await res.json();
            setAllUser(list);
            
        }catch(err)
        {
            alert("Please enter valid House Number");
        }
        
    }  
/** Get all Water user  */
    let waterUserDetail= async ()=>{
        try{
            let url=`http://localhost:9000/readAllWaterUser`;
            let res = await fetch(url);
            
            if(res.status != 200)
            {
                let serverMsg = await res.text();
                throw new Error(serverMsg);
            }

            let list = await res.json();
            setAllWaterUser(list);
            console.log(list);
            
        }catch(err)
        {
            alert("Please enter valid House Number");
        }
        
    }  

    let sum = allUser.reduce((acc, cur) => {
        return acc + parseInt(cur.Amount); // Convert each amount to a number
      }, 0);

      let sumWater = allWaterUser.reduce((acc, cur) => {
        return acc + parseInt(cur.Amount); // Convert each amount to a number
      }, 0);
      console.log(sumWater);



    const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["WaterTax", "PropertyTax", "ZilaFund", "StateFund"],
      },
    },
    series: [
      {
        name: "Amount-in-Lakhs",
        data: [3000, 4000, 5000, 7000],
      },
    ],
  });


  return (
    <>
      <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Funds For Panchayat</h1>
        <div>
          <div style={{height:"70vh"}} className="row d-flex align-item-center justify-content-center ">
            <div className="col-sm-12 col-md-6  graph">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="500"
                />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8">
            <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#Fund Name</th>
                      <th>State Fund</th>
                      <th>Zila Fund</th>
                      <th>Property Tax</th>
                      <th>Water Collection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Amount</td>
                      <td>70000</td>
                      <td>50000</td>
                      <td>{sum}</td>
                      <td>{sumWater}</td>
                    </tr>
                   
                  </tbody>
            </Table>
          </div>
        </div>

        <div
            className="row bg-dark justify-content-center"
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
      </div>
    </>
  );
}
export default Fund;