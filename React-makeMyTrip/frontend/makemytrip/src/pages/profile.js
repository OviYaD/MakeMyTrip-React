import React,{useState,useEffect,useRef} from "react";
import {NavBar} from "./../components/navBar"
import { useSelector } from 'react-redux';
export const Profile = () => {
    const user = useSelector((state) => state.user);
    const [currentHeight,setCurrentHeight] = useState();
    const profile = useRef();
    const travellers = useRef();
    const loginDetails = useRef();
    console.log("user details...",user)
    useEffect(() => {
        const handleScroll = event => {
            setCurrentHeight(window.pageYOffset);
            console.log("profile",profile.current.offsetHeight)
            console.log("travellers",travellers.current.offsetHeight)
            console.log("loginDetails",loginDetails.current.offsetHeight)
            
        };
    
        window.addEventListener('scroll', handleScroll,{passive:true});
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return <>
    <NavBar></NavBar>
        <div className="minContainer">
            <div>
                <div className="myProfilePage" id="myProfilePage" style={{backgroundColor: "#f6f6f6"}}>
                    <div className="myPofilBanrWrap">
                        <div className="myPofilBanrWrap__contntWrapper">
                            <ul className="font16 myPofilBanrWrap__list">
                                <li className="myPofilBanrWrap__itm myPofilBanrWrap__itm--contanr">
                                    My Account
                                    <div className="walletMenuSection borderRadius4">
                                        <ul>
                                            <a href="//supportz.makemytrip.com/MyAccount/BookingSummary/">
                                                <li className="makeFlex paddingB20">
                                                    <span className="myPrfilSprit__tripIcon menuIcon myPrfilSprit"></span>
                                                    <div>
                                                        <p className="latoBold font16 blackText">My Trips</p>
                                                        <p className="font12 darkGreyText lineHeight14">See booking details, Print e-ticket, Cancel Booking, Modify Booking, Check Refund Status &amp; more.</p>
                                                    </div>
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                </li>
                                <li className="myPofilBanrWrap__itm">My Profile</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contentWrapper contentWrapper--myProfile">
                        <div className="leftSecWrapper">
                            <div className="profilSdeBar profilSdeBar--sticky">
                                <div className="proflPicContanr">
                                    <div className="proflPicContanr__nmeIniContanr"><span className="myPrfilSprit myPrfilSprit__personGreen"></span></div>
                                    <span className="myPrfilSprit myPrfilSprit__editGreyBg proflPicContanr__editGreyBgIcn">
                                        <input type="file" name="userDisplayPic" accept=".jpg,.jpeg,.bmp,.gif,.png,.PNG,.JPG,.JPEG,.BMP,.GIF" className="proflPicContanr__inputUpload" value="" />
                                    </span>
                                </div>
                                <div className="profilSdeBar__contntWrap">
                                    <p className="font20 latoBlack blackText"></p>
                                    <p className="font12 darkGreyText appendTop10">PERSONAL PROFILE</p>
                                </div>
                                <ul className="sdeBarNav">
                                    <li className={`font14 darkGreyText latoBold sdeBarNav__navItm ${currentHeight>=0 && currentHeight<655?"sdeBarNav__navItm-active":""}`} onClick={() => profile.current.scrollIntoView({  behavior: 'smooth' })}>
                                        <span className="sdeBarNav__iconContnr"><span className="myPrfilSprit myPrfilSprit__person"></span></span>Profile
                                    </li>
                                    <li className={`font14 darkGreyText latoBold sdeBarNav__navItm ${currentHeight>=655 && currentHeight<855?"sdeBarNav__navItm-active":""}`} onClick={() => loginDetails.current.scrollIntoView({  behavior: 'smooth' })}>
                                        <span className="sdeBarNav__iconContnr"><span className="myPrfilSprit myPrfilSprit__login"></span></span>Login Details
                                    </li>                                                                                                                                                                                                                                                           
                                    <li className={`font14 darkGreyText latoBold sdeBarNav__navItm ${currentHeight>=855 ?"sdeBarNav__navItm-active":""}`} onClick={() => travellers.current.scrollIntoView({                                                                                                                                             behavior: 'smooth' })}>
                                        <span className="sdeBarNav__iconContnr"><span className="myPrfilSprit myPrfilSprit__traveller"></span></span>Save Travellers
                                    </li>
                                    <li className={`font14 darkGreyText latoBold sdeBarNav__navItm `}>
                                        <span className="sdeBarNav__iconContnr"><span className="myPrfilSprit myPrfilSprit__logout"></span></span>Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightSecWrapper">
                            <div className="proflCmpltonStats cm__myProfileTheme">
                                <div className="darkGreyText proflCmpltonStats__prcntagSec">
                                    <p className="latoBold makeFlex spaceBetween"><span>Complete your Profile</span><span className="latoBlack blackText">30%</span></p>
                                    <div className="proflCmpltonStats__progrsBar"><div className="proflCmpltonStats__progrsBarFill proflCmpltonStats__progrsBarFill--complete30"></div></div>
                                </div>
                                <p className="darkGreyText appendTop10">Get the best out of MakeMyTrip by adding the remaining details!</p>
                                <ul className="font16 latoBold proflCmpltonStats__stpsStatusLst">
                                    <li className="proflCmpltonStats__stpsStatusItm"><span className="myPrfilSprit appendRight10 appendLeft5 myPrfilSprit__verifiedBig"></span>Verified Email ID</li>
                                    <li className="proflCmpltonStats__stpsStatusItm blueText cursorPointer"><span className="myPrfilSprit appendRight10 appendLeft5 myPrfilSprit__addBlueBg"></span>Add your mobile number</li>
                                    <li className="proflCmpltonStats__stpsStatusItm blueText cursorPointer"><span className="myPrfilSprit appendRight10 appendLeft5 myPrfilSprit__addBlueBg"></span>Complete Basic Info</li>
                                </ul>
                            </div>
                            <div className="profilCompont cm__myTripSideBar cm__myProfileTheme" id="profilePageComponent0" ref={profile}>
                                <div className="detalCrdHadr undefined">
                                    <div className="appendRight10">
                                        <h3 className="font30 latoBold blackText">Profile</h3>
                                        <p className="font18 darkGreyText appendTop10">Basic info, for a faster booking experience</p>
                                    </div>
                                    <div>
                                        <button type="button" className="font16 latoBold blueText btn__dtailAdEdt"><span className="myPrfilSprit myPrfilSprit__edtIcn noShrink appendRight5"></span>Edit</button>
                                    </div>
                                </div>
                                <ul className="profilCompont__dtalLst">
                                    <li className="profilCompont__dtalLstItm">
                                        <div className="profilCompont__dtalLstItmContnt">
                                            <span className="font11 darkGreyText profilCompont__detalkey">NAME</span><span className="font16 blackText latoBold appendRight5"></span>
                                            <span className="font14 latoBold blueText appendRight30 cursorPointer">+ Add</span>
                                        </div>
                                    </li>
                                    <li className="profilCompont__dtalLstItm">
                                        <div className="profilCompont__dtalLstItmContnt">
                                            <span className="font11 darkGreyText profilCompont__detalkey">BIRTHDAY</span><span className="font16 blackText latoBold appendRight5"></span>
                                            <span className="font14 latoBold blueText appendRight30 cursorPointer">+ Add</span>
                                        </div>
                                    </li>
                                    <li className="profilCompont__dtalLstItm">
                                        <div className="profilCompont__dtalLstItmContnt">
                                            <span className="font11 darkGreyText profilCompont__detalkey">GENDER</span><span className="font16 blackText latoBold appendRight5"></span>
                                            <span className="font14 latoBold blueText appendRight30 cursorPointer">+ Add</span>
                                        </div>
                                    </li>
                                    <li className="profilCompont__dtalLstItm">
                                        <div className="profilCompont__dtalLstItmContnt">
                                            <span className="font11 darkGreyText profilCompont__detalkey">MARITAL STATUS</span><span className="font16 blackText latoBold appendRight5"></span>
                                            <span className="font14 latoBold blueText appendRight30 cursorPointer">+ Add</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="lognDtalComp cm__myTripSideBar cm__myProfileTheme" id="profilePageComponent1" ref={loginDetails}> 
                                <div className="detalCrdHadr undefined">
                                    <div className="appendRight10">
                                        <h3 className="font30 latoBold blackText">Login Details</h3>
                                        <p className="font18 darkGreyText appendTop10">Manage your email address mobile number and password</p>
                                    </div>
                                </div>
                                <ul className="lognDtalComp__dtalLst">
                                    <li className="lognDtalComp__dtalLstItm">
                                        <div className="lognDtalComp__dtalLstItmContnt">
                                            <span className="font11 darkGreyText lognDtalComp__detalkey">MOBILE NUMBER</span><span className="font16 blackText latoBold">‎</span>
                                            <span className="font14 latoBold blueText appendRight30 cursorPointer">+ Add your mobile number</span>
                                        </div>
                                    </li>
                                    <li className="lognDtalComp__dtalLstItm">
                                        <div className="lognDtalComp__dtalLstItmContnt">
                                            <span className="font11 darkGreyText lognDtalComp__detalkey">EMAIL ID</span><span className="font16 blackText latoBold">‎oviyad.19cse@kongu.edu</span>
                                            <span className="font14 latoBold greenText makeFlex hrtlCenter noShrink appendLeft10"><span className="myPrfilSprit myPrfilSprit__verified appendRight5"></span>Verified </span>
                                        </div>
                                    </li>
                                    <li className="lognDtalComp__dtalLstItm">
                                        <div className="lognDtalComp__dtalLstItmContnt">
                                            <span className="font11 darkGreyText lognDtalComp__detalkey">PASSWORD</span><span className="blacktext latoBold lognDtalComp__pswrdTxt">......</span>
                                            <span className="font14 latoBold blueText appendRight30 cursorPointer pushRight">Change Password?</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="travlrInfoCompt cm__myTripSideBar cm__myProfileTheme" id="profilePageComponent2" ref={travellers}>
                                <div className="detalCrdHadr undefined">
                                    <div className="appendRight10">
                                        <h3 className="font30 latoBold blackText">Save Traveller(s)</h3>
                                        <p className="font18 darkGreyText appendTop10">You have 0 Traveller(s)</p>
                                    </div>
                                    <div>
                                        <button type="button" className="font16 latoBold blueText btn__dtailAdEdt"><span className="myPrfilSprit myPrfilSprit__edtIcn noShrink appendRight5"></span>Add Traveller</button>
                                    </div>
                                </div>
                                <ul className="travlrInfoCompt__trvlrLst"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}