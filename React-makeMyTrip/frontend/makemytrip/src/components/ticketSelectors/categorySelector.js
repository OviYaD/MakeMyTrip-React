import React,{useState,useEffect} from "react";
import { RoomSelector } from "../Modals/roomSelector";

export const CategorySelector = (props) => {
  const [enabler,setEnabler] = useState(false);
  const [category,setCategory] = useState({room:1,adultCount:1,childCount:0})
  const handleEnabler = () => {
    setEnabler((enabler)=> !enabler)
  }

  return (
    <>
   <div onClick={handleEnabler} style={{cursor:"pointer" ,width:"100%",height:"100px"}}>
   <div class={`hsw_inputBox roomGuests  ${enabler?"activeWidget":""}`}  style={{padding:"10px"}}>
                      <span data-cy="guestLabel" class="lbl_input latoBold appendBottom5">ROOMS &amp; GUESTS</span><input data-cy="guest" id="guest" type="text" class="hsw_inputField guests font20" readonly="" />
                      <p data-cy="roomGuestCount" class="blackText font20 code truncate">
                          <span class="appendRight10">
                              <span class="font30 lineHeight36 latoBlack"> {category.room}</span><span> Room </span><span class="font30 lineHeight36 latoBlack appendRight5">{category.adultCount}</span><span class="appendRight5">Adults</span>
                              {category.childCount>0 && <><span class="font30 lineHeight36 latoBlack appendRight5">{category.childCount}</span><span>Children</span></>}
                          </span>
                      </p>
    </div>
   </div>
      {/* <div
        className={`departure latoBold ${enabler?"activeWidget":""}`}
        style={{ border: "none", width: "40%" ,cursor:"pointer"}}
        onClick={handleEnabler}

      >
        <span>
          ROOMS &amp; GUESTS
          <i className="fa-solid fa-chevron-down"></i>
        </span>
        <h1>
          {category.room}
          <span
            className="blackText"
            style={{ fontSize: "20px", marginLeft: "5px", marginRight: "5px" }}
          >
            Room
          </span>
          {category.adultCount}
          <span
            className="blackText"
            style={{ fontSize: "20px", marginLeft: "5px", marginRight: "5px" }}
          >
            Adults
          </span>
          {category.childCount>0 && 
          <>
          {category.childCount}
          <span
            className="blackText"
            style={{ fontSize: "20px", marginLeft: "5px", marginRight: "5px" }}
          >
            Children
          </span></>}
        </h1>
        <span>{props.type}</span>
        <br />
        <span
          style={{
            fontSize: "12px",
            color: "rgb(255, 136, 0)",
            fontWeight: "600"
          }}
        >
          Group Booking Now Available!
        </span>
      </div> */}
      <RoomSelector category={category} setCategory={setCategory} enabler={enabler} handleEnabler={handleEnabler} style={{top:"30px",left:"600px",zIndex:"50"}} />
    </>
  );
};
