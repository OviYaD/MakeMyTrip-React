import React from "react";
import googleStore from "../assets/googleStore.png";
import appStore from "../assets/appstore.png";
import qr from "../assets/qr.jpeg";
import img from "../assets/downloadpic.jpeg";
export const Download = () => {
  return (
    <div class="appDnldCnt appendBottom20" data-test="appDownloadWrapper" id="appDownloadWrapper">
    <h3 class="appDnldCnt__heading" data-test="appDownloadWrapper_heading">Download App Now !</h3>
    <p class="appDnldCnt__subHeading" data-test="appDownloadWrapper_subHeading">Get India's #1 travel super app, join 100 Million+ happy travellers!</p>
    <div class="appDnldCnt__content" data-test="appDownloadWrapper_content">
        <div class="appDnldCnt__contentLeft">
            <span class="appSprite icAppDownload"></span>
            <div class="flexOne">
                <p class="font14 lineHeight18 appendBottom15">Use code <b>WELCOMEMMT</b> and get upto <b>Rs 5000</b> off on your first domestic hotel booking</p>
                <div class="makeFlex">
                    <div class="makeRelative inputFlag" >
                        <p class="makeFlex hrtlCenter" style={{paddingTop:"-15px"}}>
                            <span class="flag__wrap appendLeft5 appendRight5 appendLeft10">
                                <picture class="">
                                    <source srcset="https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/in_v2.webp" type="image/webp" />
                                    <source srcset="https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/in_v2.png" type="image/jpeg" />
                                    <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/in_v2.png" width="23px" height="19px" />
                                </picture>
                            </span>
                            <span class="font14 latoBold placeholderNumber">+91</span>
                        </p>
                    </div>
                    <input class="topbarInputBox footerInput" type="text" placeholder="Enter Mobile number " data-test="appDownloadWrapper_input" value="" />
                    <button class="getAppLinkBtn" type="submit" data-test="submitBtnWrapper" data-testid="submitBtnWrapper">GET APP LINK</button>
                </div>
            </div>
        </div>
        <div class="appDnldCnt__contentRight">
            <p class="font14 lineHeight18 blackText capText appendBottom10" data-test="appDownloadWrapper_subText">MORE WAYS TO GET THE APP</p>
            <div class="makeFlex spaceBetween">
                <div class="appDnldCnt__lft">
                    <span data-test="appDownloadWrapper_webp_google_img" class="appSprite icPlayStore pointer"></span><span data-test="appDownloadWrapper_webp_apple_img" class="appSprite icAppStore pointer"></span>
                </div>
                <div class="appDnldCnt__rht">
                    <div class="scanQR">
                        <img class="appSprite icQRCode" src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg" alt="QR Scanner" />
                        <p class="font14 latoBlack">Scan QR</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    // <>
    //   <div className="container-card">
    //     <h1>Download App Now !</h1>
    //     <p style={{ color: "rgb(56, 55, 55)" }}>
    //       Get India's #1 travel super app, join 100 Million+ happy travellers!
    //     </p>
    //     <div className="download-content">
    //       <span className="dwnld">
    //         <span>
    //           <img src={img} alt="" />
    //         </span>
    //         <span
    //           style={{
    //             fontSize: "13px",
    //             color: "rgb(48, 48, 48)",
    //             marginTop: "25px"
    //           }}
    //         >
    //           Use code <b>WELCOMEMMT </b> and get upto <b>Rs 1200</b> off on
    //           your first domestic flight booking
    //           <br />
    //           <input type="text" name="phone" />
    //           <input
    //             type="submit"
    //             value="GET APP LINK"
    //             style={{
    //               color: "rgb(79, 140, 231)",
    //               // fontSize: "1px",
    //               fontWeight: "700",
    //               width: "150px",
    //               padding: "10px"
    //             }}
    //           />
    //         </span>
    //       </span>
    //       <span className="dwnld2">
    //         <p>MORE WAYS TO GET THE APP</p>
    //         <span className="dwnld-store">
    //           <span style={{ flexDirection: "column" }}>
    //             <span className="g-store">
    //               <img src={googleStore} alt="" />
    //             </span>
    //             <br />
    //             <span className="a-store">
    //               <img src={appStore} alt="" />
    //             </span>
    //           </span>
    //           <span className="qr">
    //             <img src={qr} alt="" />
    //             <p>Scan QR</p>
    //           </span>
    //         </span>
    //       </span>
    //     </div>
    //   </div>
    // </>
  );
};
