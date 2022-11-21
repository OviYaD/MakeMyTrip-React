import React from 'react';
import {NavBar} from "./../components/navBar"

export const MyTrip = () => {
    return <>

    <NavBar></NavBar>

        <div>
            <div className="myTripRoute">
                <div className="myTripsBannerWrapper upcoming" id="myTripsBannerWrapper">
                    <div className="myTripsBannerWrapper__myTripsBannerContainer">
                        <ul className="makeFlex myTripsBannerWrapper__myTripsBannerMenu">
                            <li className="makeFlex spaceBetween hrtlCenter font16"><span className="latoBold">My Account</span></li>
                            <li className="makeFlex spaceBetween hrtlCenter whiteText font16"><span className="arrow right appendRight10"></span><span>My Trips</span></li>
                        </ul>
                    </div>
                </div>
                <div className="tripStatusContainer upcoming">
                    <div className="tripStatusWrap" id="tripStatusWrap">
                        <div className="tripStatusInnerWrap">
                            <ul className="">
                                <li className="active">
                                    <span className="cm__myTripSprt--tabUpcoming cm__myTripSprt appendRight10"></span><span className="tripStatusWrap__statusText"><span className="font16 latoBlack capText">Upcoming</span></span>
                                </li>
                                <li className="">
                                    <span className="cm__myTripSprt--tabCancelled--inactive cm__myTripSprt appendRight10"></span><span className="tripStatusWrap__statusText"><span className="font16 latoBlack capText">Cancelled</span></span>
                                </li>
                                <li className="">
                                    <span className="cm__myTripSprt--tabCompleted--inactive cm__myTripSprt appendRight10"></span><span className="tripStatusWrap__statusText"><span className="font16 latoBlack capText">Completed</span></span>
                                </li>
                            </ul>
                            <div className="txtFild makeFlex">
                                <div className="txtFild__fieldContanr txtFild__fieldContanr--search"><input id="focus" type="text" placeholder="Search for a booking" className="font14 txtFild__inputFld" value="" /></div>
                                <button className="font14 makeFlex vrtlCenter hrtlCenter latoBold blueText myTripBtn--primary"><span className="cm__myTripSprt cm__myTripSprtFlight--search"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contentWrapper myTrips">
                    <div className="tripListingWrap" id="tripListingWrap">
                        <div className="myTripLstngLobCrd forUpcoming" id="upcomingTripListingWrap">
                            <div className="emptyErr">
                                <div className="emptyErr--imgCont"><img src="https://imgak.mmtcdn.com/mima/images/Desktop/upcoming-empty.png" alt="Upcoming Image" /></div>
                                <div>
                                    <p className="emptyErr--heading font22 latoBlack appendBottom15">Looks empty, you've no upcoming bookings.</p>
                                    <p className="emptyErr--subHeading fomt14 darkGreyText appendBottom25">When you book a trip, you will see your itinerary here.</p>
                                    <p>
                                        <a href="https://www.makemytrip.com/" to="/Mimaundefined"><button className="font14 latoBold blueText myTripBtn myTripBtn--primary">Plan a trip</button></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btt-wrap pushRight">
                        <button className="scrollBtn hrtlCenter makeFlex" style={{border:"none"}}>
                            <span className="makeFlex appendRight20 column" style={{marginRight:"20px"}}><span className="cm__upArrowNoLine" style={{marginTop: "3px"}}></span><span className="cm__upArrowNoLine" style={{marginTop: "-3px"}}></span></span>
                            <span className="font16 latoBlack blueText">Back To Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>;

}