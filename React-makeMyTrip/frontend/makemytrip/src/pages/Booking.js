import React,{useRef} from 'react';
import { TopHeaderSticky } from '../components/topHeaderSticky';
import {NavBar } from '../components/navBar';
import { SearchContext } from "../api/search";
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHotel } from '../services/hotel';
import { HotelInfocontainer } from '../components/hotelInfoContainer';
import {GuestDetailContainer} from '../components/guestDetailContainer';
import { SpecialRequestContainer } from '../components/specialRequestContainer';
import { SecurityContainer } from '../components/securityContainer';
import { PriceBreakUpCard } from '../components/priceBreakUp';
import { DealCode } from '../components/dealCode';
import { ShimmerPostDetails } from "react-shimmer-effects";

export const Booking = () =>{
  const {searchInfo,setSearchInfo} =useContext(SearchContext);
  const [hotelDes,setHotelDes] = useState();
  const booking = useRef();
  const [loading,setLoading] = useState(false);

  // useEffect(()=>{
  //   const scrollTop = () => {
  //     booking.current.scrollIntoView();
  //   }
  //   scrollTop()
  // })

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1500);
    const fecthDetails=  async() => {
        const hotelInfo= await getHotel(searchInfo.hotelId)
        await setHotelDes(hotelInfo);
    }
    fecthDetails();
    
},[hotelDes])


   if(hotelDes){
    return <>
    <NavBar></NavBar>
    <div style={{marginTop:"-25px"}} ref={booking}>
      <div className="rvwNew">
        <div className="rvHeader minWidth1200">
          <div className="rvHeader__inner">
            <p className="rvHeader__heading">Review your Booking</p>
          </div>
        </div>
        {loading?<ShimmerPostDetails card cta variant="EDITOR" />:
        <>
        <div className="reviewContainer">
          <div className="reviewContainer__left">
            <HotelInfocontainer hotelDes={hotelDes}></HotelInfocontainer>
            <GuestDetailContainer></GuestDetailContainer>
            <SpecialRequestContainer></SpecialRequestContainer>
            <SecurityContainer></SecurityContainer>
            <div className="tncCard appendBottom15">
              <p className="font12 lineHight16">
                By proceeding, I agree to MakeMyTrip’s
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.makemytrip.com/legal/in/eng/user_agreement.html#1"
                  >User Agreement</a>,
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.makemytrip.com/legal/in/eng/user_agreement.html#tos-hotels"
                  >Terms of Service</a>
                and
                <a href=""
                  >Cancellation &amp; Property Booking Policies</a>.
              </p>
            </div>
            <div className="makeFlex hrtlCenter campaignTooltipParent">
              <div className="">
                <a className="btnContinuePayment primaryBtn capText" target="_BLANK" href='https://checkout.stripe.com/c/pay/cs_test_a12qOioAqUX5fyVCgueo8RjwlmQR2fOHMYvOfRgXfZxyiPlbr4qwXkeEMm#fidkdWxOYHwnPyd1blpxYHZxWjA0SXVoVTJWRGB1TDZON29cdW9KTmF%2FQW1JMjNMakgwQ0FUT30waXBjYGB%2FQHEybjNyT0k0c2EyVHVTf389d2A1akg8YDVCU09hcDRtZFZRSTNRXEh1YkduNTVRYE9wX0N0SycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'>Pay Now</a>
                {/* <div
                  className="cstmTooltip top"
                  style={{
                    width: "200px",
                    height: "auto",
                    position: "absolute",
                    backgroundColor: "rgb(0, 0, 0)",
                    borderRadius: "4px",
                    padding: "16px",
                    borderWidth: "0px",
                    borderStyle: "initial",
                    borderImage: "initial",
                    top: "40px",
                    left: "55px",
                    zIndex: "2"}}
                  
                >
                  <p className="whiteText lineHeight18">
                    Your organisation does not allow to book out of policy
                    bookings.
                  </p>
                </div> */}
              </div>
              <div
                className="cstmTooltip left campaignAlert"
                style={{
                    width: "200px",
                    height: "auto",
                    position: "absolute",
                    backgroundColor: "rgb(0, 0, 0)",
                    borderRadius: "4px",
                    padding: "16px",
                    borderWidth: "0px",
                    borderStyle: "initial",
                    borderImage: "initial",
                    top: "40px",
                    left: "55px",
                    zIndex: "2"}}
              >
                
              </div>
            </div>
          </div>
          <div className="reviewContainer__right">
            <PriceBreakUpCard></PriceBreakUpCard>
            <DealCode></DealCode>
          </div>
        </div>

        </>}
      </div>
    </div>
    </>;
   }
   else{
    <></>
   }
}