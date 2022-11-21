import React,{useEffect,useState} from "react";
import { useSelector } from 'react-redux';

export const TopHeaderSticky = () => {
    const [inputField,setInputs] = useState([]);
    const params = useSelector((state)=>state.param);

  useEffect(() =>{
    params.checkIn ? getDate():setInputs(["01","Sep","22","Sunday","02","Sep","22","Monday","1"]);
  },[params]);


  function getDate(){
    let date = params.checkIn;
    let inputs=[];
    let days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Satur"];
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    inputs.push(date.slice(3,5))
    inputs.push(months[(+date.slice(0,2))-1]);
    inputs.push(date.slice(8))
    inputs.push(days[new Date(date).getDay()]);
    date = params.checkOut;
    inputs.push(date.slice(3,5))
    inputs.push(months[(+date.slice(0,2))-1]);
    inputs.push(date.slice(8))
    inputs.push(days[new Date(date).getDay()]);
    var date1 = new Date(params.checkIn);
    var date2 = new Date(params.checkOut);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    inputs.push(Difference_In_Days);
    setInputs(inputs);
}

  return (
    <>
      <header style={{ position: "sticky", top: "0",zIndex:"10" }}>
        <div
          className="hsw minWidth1200 topHeaderSticky"
          style={{ marginLeft: "-10px" }}
        >
          <div className="hsw_inner" id="hsw_inner_components">
            <div className="hsw_inputBox" id="hsw_inputBox_city">
              <label for="city" className="lbl_input latoBold font12 blueText">
                CITY, AREA or PROPERTY
              </label>
              <input
                type="text"
                id="city"
                className="hsw_inputField font16 whiteText"
                value={`${params.city}, India`}
                readonly
              />
            </div>
            <div className="hsw_inputBox" id="hsw_inputBox_check_in">
              <label
                for="checkin"
                className="lbl_input latoBold font12 blueText capText"
              >
                Check-In:
              </label>
              <input
                type="text"
                id="checkin"
                className="hsw_inputField font16 whiteText"
                value={`${inputField[3]}, ${inputField[0]} ${inputField[1]} 20${inputField[2]}`}
                readonly=""
              />
            </div>
            <div className="hsw_inputBox" id="hsw_inputBox_check_out">
              <label
                for="checkout"
                className="lbl_input latoBold font12 blueText capText"
              >
                Check-Out:
              </label>
              <input
                type="text"
                id="checkout"
                className="hsw_inputField font16 whiteText"
                value={`${inputField[7]}, ${inputField[4]} ${inputField[5]} 20${inputField[6]}`}
                readonly=""
              />
              <p className="dateErrorMsg whiteText" id="range_error">
                You are booking hotel for more than 30 days
              </p>
            </div>
            <div className="hsw_inputBox" id="hsw_inputBox_room_guests">
              <label
                for="guest"
                className="lbl_input latoBold font12 blueText capText"
              >
                Rooms &amp; Guests
              </label>
              <input
                type="text"
                id="guest"
                className="hsw_inputField guests font16 whiteText"
                value={`1 Room, ${params.adultCount} Adults`}
                readonly=""
              />
            </div>
            <button className="primaryBtn hsw_searchButton" id="hsw_search_button">
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
