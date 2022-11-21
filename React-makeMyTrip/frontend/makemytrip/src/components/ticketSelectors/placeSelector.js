import React,{useState} from "react";
import { CitySelector } from "../Modals/citySelector";
import { useSelector,useDispatch } from "react-redux";
import {setParam} from "../../redux/slices/paramSlice"

// import "../../assets/css/style.css";
export const  PlaceSelector = () => {
  const dispatch = useDispatch();
  const [enable,setEnabler] = useState(false);
  const [selectedCity,setSelectedCity ] = useState("Ooty");
  const handleEnabler = ()  => {
    setEnabler((enable)=>!enable)
  }
  const handleSetCity = (city) => {
    setSelectedCity(city);
    dispatch(setParam({city}))
    handleEnabler();

  }

  return (
    <>
    <div className={`hsw_inputBox selectHtlCity ${enable?"activeWidget":""}`} onClick={()=>handleEnabler()}>
                  <label for="city">
                      <span data-cy="hotelCityLabel" className="lbl_input latoBold appendBottom5">City, Property name or Location</span>
                      <input data-cy="city" id="city" type="text" className="hsw_inputField lineHeight36 latoBlack font30" dir="ltr" readonly="" value={selectedCity} />
                      <p data-cy="hotelCountryLabel" className="code">India</p>
                  </label>
              </div>
      {/* <div className="flight latoBold" style={{width:"30%"}} onClick={()=>handleEnabler()}>
        <span>{props.caption}</span>
        <h1 className="latoBlack lineHeight36 " style={{ fontSize: "30px",textTransform:"capitalize",marginTop:"5px",marginBottom:"5px" }}>
          {props.city}
        </h1>
        <p style={{ margin: "0px" }}>{props.airport}</p>
      </div> */}
      {enable && <CitySelector enable={enable} handleEnabler={handleEnabler} handleSetCity={handleSetCity} style={{position:"absolute",top:"30px",left:"0px",zIndex:"100"}}></CitySelector>}

    </>
  );
};
