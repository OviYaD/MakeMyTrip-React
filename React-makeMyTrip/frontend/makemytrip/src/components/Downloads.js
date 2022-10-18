import React from "react";
import googleStore from "../assets/googleStore.png";
import appStore from "../assets/appstore.png";
import qr from "../assets/qr.jpeg";
import img from "../assets/downloadpic.jpeg";
export const Download = () => {
  return (
    <>
      <div class="container-card">
        <h1>Download App Now !</h1>
        <p style={{ color: "rgb(56, 55, 55)" }}>
          Get India's #1 travel super app, join 100 Million+ happy travellers!
        </p>
        <div class="download-content">
          <span class="dwnld">
            <span>
              <img src={img} alt="" />
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "rgb(48, 48, 48)",
                marginTop: "25px"
              }}
            >
              Use code <b>WELCOMEMMT </b> and get upto <b>Rs 1200</b> off on
              your first domestic flight booking
              <br />
              <input type="text" name="phone" />
              <input
                type="submit"
                value="GET APP LINK"
                style={{
                  color: "rgb(79, 140, 231)",
                  // fontSize: "1px",
                  fontWeight: "700",
                  width: "150px",
                  padding: "10px"
                }}
              />
            </span>
          </span>
          <span class="dwnld2">
            <p>MORE WAYS TO GET THE APP</p>
            <span class="dwnld-store">
              <span style={{ flexDirection: "column" }}>
                <span class="g-store">
                  <img src={googleStore} alt="" />
                </span>
                <br />
                <span class="a-store">
                  <img src={appStore} alt="" />
                </span>
              </span>
              <span class="qr">
                <img src={qr} alt="" />
                <p>Scan QR</p>
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
