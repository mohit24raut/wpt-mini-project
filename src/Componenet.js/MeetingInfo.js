import "./MeetingInfo.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function MeetingInfo()
{
    
    let navigate=useNavigate();
    let [meetingInfo, setMeetingInfo] = useState([]);
    let [srNoForConnection, setSrNoForConnection] = useState("");
    let [newDate, setNewDate] = useState("");
    let [newMonth, setNewMonth] = useState("");
    let [newLocation, setNewLocation] = useState("");
    let [isDisplayUpdBox, setIsDisplayUpdBox] = useState(false);

    useEffect(()=>{onEnter();}, []);
    let onEnter= async ()=>{
        let url = "http://localhost:9000/readMeetingDate";
        let res = await fetch(url);
        let list = await res.json();

        setMeetingInfo(list);
        console.log(list);
    }
    
    let onChangeUpdateDate=(e)=>{
        let newUpdatedDate = e.target.value;
        setNewDate(newUpdatedDate);
    }
    let onChangeUpdateMonth=(e)=>{
        let newUpdatedMonth = e.target.value;
        setNewMonth(newUpdatedMonth)
    }
    let onChangeUpdateLocation=(e)=>{
        let newUpdatedLocation = e.target.value;
        setNewMonth(newUpdatedLocation)
    }

    let goTOMeetingDetail=()=>{
        navigate("/MeetingDetail");
    }

    const deleteSingleMeeting = async(item)=>{
        try{
            let url =`http://localhost:9000/deleteMeetingRecord?date=${item.Date}`;
            let res = await fetch(url);

            if(res.status == 500){
                let erroMessage = await res.text();
                throw new Error(erroMessage);
              }
        
              alert("success");
              onEnter();
        }catch(err)
        {
            alert(err.message);
        }
    };

    let editSingleMeeting=(item)=>{
        setSrNoForConnection( item.SrNo );
        setNewDate( item.Date );
        setNewMonth( item.Month );
        setNewLocation( item.Location );
        setIsDisplayUpdBox(true);
    }

    let updateAllColumn=()=>{

        let url =`http://localhost:9000/updateSingleRecord?srno=${srNoForConnection}&date=${newDate}&month=${newMonth}&location=${newLocation}`;
        fetch(url);
        alert("Update SuccessFully");
        setIsDisplayUpdBox(false);
        onEnter();
    }
    
    return(
        <>
            <div className="container" >
                <div className="imgMeeting">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRoZYXOpvysRQzEb4ypUZoOvgbQJsubuUH9sK7Gkz1Q&usqp=CAU&ec=48600112"
                        id="img"
                    />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-10 bg-warning divsabha">
                        <h3 id="h3sabha">ABOUT VIBRANT GRAM SABHA</h3>
                        <p id="pinfo">
                        Vibrant Gram Sabha portal is an integrated real time online monitoring
                        system, where all the major performance parameters of the key focus
                        areas at the GP/ Village levels are tracked and displayed in the
                        public domain. It facilitates a completely automated online workflow
                        configurable Gram Sabha management system, substituting paper-based
                        manual process. The primary objective of “Vibrant Gram Sabha” portal
                        is to make the Gram Sabha meetings more participatory, transparent and
                        vibrant.
                        </p>
                    </div>
                </div>
                <div className="row align-text-center justify-content-center">
                    <div className="col-sm-12 col-md-7 p-3 bg-dark-subtle pb-5" style={{margin: "9vh"}}>
                        
                        <h2 id="texh2">Meeting Schedule</h2>

                        <div className="row">
                            <div className="col">
                                <table style={{width: "100%"}}>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Date</th>
                                    <th>Month</th>
                                    <th>Place</th>
                                    <th>Agenda & Conclusion</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {meetingInfo.map((item, index)=>(
                                    <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{item.Date}</td>
                                            <td>{item.Month}</td>
                                            <td>{item.Location}</td>
                                            <td>
                                                <input type="button" value="Click Here" class="bg-success text-light" onClick={goTOMeetingDetail}/>
                                            </td>
                                            <td>
                                                <input type="button" value="&#9998;" onClick={()=>editSingleMeeting(item)}/>
                                            </td>
                                            <td>
                                               <input type="button" value="&#128465;" onClick={()=>deleteSingleMeeting(item)}/>
                                            </td>
                                        </tr> 
                                    </>
                                ))}
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>


                {isDisplayUpdBox &&    <div className="row justify-content-center">
                                        <div className="col-sm-3 bg-dark-subtle">
                                            <h2 className="btndiv">Update Form</h2>
                                            <label htmlFor="date">Date</label>
                                            <input 
                                                type="text" 
                                                id="date" 
                                                className="form-control my-2 border-warning" 
                                                value={newDate}
                                                onChange={onChangeUpdateDate}
                                            />
                                            <label htmlFor="month">Month</label>
                                            <input 
                                                type="text" 
                                                id="month" 
                                                className="form-control my-2 border-warning" 
                                                value={newMonth}
                                                onChange={onChangeUpdateMonth}
                                            />
                                            <label htmlFor="place">Location</label>
                                            <input 
                                                type="text" 
                                                id="place" 
                                                className="form-control my-2 border-warning" 
                                                value={newLocation}
                                                onChange={onChangeUpdateLocation}
                                            />
                                            <div className="btndiv">
                                                <input
                                                    type="button"
                                                    value="Update"
                                                    className="btn btn-primary my-2 w-25"
                                                    onClick={updateAllColumn}
                                                />
                                            </div>
                                        </div>
                                    </div>
                }

               <div className="row bg-dark justify-content-center p-2 mt-3">
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
    )
}