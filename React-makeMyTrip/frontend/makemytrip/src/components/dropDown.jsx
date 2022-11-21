import React from 'react';
import {useNavigate,Link} from "react-router-dom";

export const DropDown = () => {
    return <>

                        <div className="userDropdown fadeInDown makeFlex column" style={{padding:"10px",zIndex:"650"}}>
                            <p className="font12 paddingLR20 appendTop15 appendBottom10 blueText" style={{marginTop:"10px",marginBottom:"10px"}}>You are viewing your personal profile oviyad.19cse@kongu.edu</p>
                            <Link to="/profile"  rel="noopener noreferrer" className="userItems makeFlex">
                                <span className="landingSprite userItemMyProfile appendRight20"></span>
                                <div >
                                    <p className="font16 latoBold blackText appendBottom5 makeFlex hrtlCenter" style={{margin:"0px",marginBottom:"5px"}}>My Profile</p>
                                    <p className="font12 lineHeight16 blackText" style={{lineHeight:"16px"}}>Manage your profile, traveller details, login details and password</p>
                                </div>
                            </Link>
                            <Link to="/mytrip"  rel="noopener noreferrer" className="userItems makeFlex">
                                <span className="landingSprite userItemMyTrips appendRight20"></span>
                                <div>
                                    <p className="font16 latoBold blackText appendBottom5" style={{margin:"0px",marginBottom:"5px"}}>My Trips</p>
                                    <p className="font12 lineHeight16 blackText" style={{lineHeight:"16px"}}>See booking details, Print e-ticket, Cancel Booking, Modify Booking, Check Refund Status &amp; more.</p>
                                </div>
                            </Link>
                            <a data-cy="userMenuWallet" className="userItems makeFlex" href="https://www.makemytrip.com/myWallet/">
                                <span className="landingSprite userItemMyWallet appendRight20"></span>
                                <div>
                                    <p className="font16 latoBold blackText appendBottom5 makeFlex hrtlCenter" style={{margin:"0px",marginBottom:"5px"}}>My Wallet<span className="myWalletTag font12 whiteText appendLeft5 latoBold"> ₹ 0</span></p>
                                    <p className="font12 lineHeight16 blackText " style={{lineHeight:"16px"}}>Use your wallet money to avail even greater discounts</p>
                                </div>
                            </a>
                            <a data-cy="userMenuPayement" className="userItems makeFlex" href="//payments.makemytrip.com/ui/easypay/">
                                <span className="landingSprite userItemMakePayment appendRight20"></span>
                                <div>
                                    <p className="font16 latoBold blackText appendBottom5 makeFlex hrtlCenter" style={{margin:"0px",marginBottom:"5px"}}>Make a payment</p>
                                    <p className="font12 lineHeight16 blackText" style={{lineHeight:"16px"}}>Complete your pending payments here</p>
                                </div>
                            </a>
                        </div>
    </>;
}
