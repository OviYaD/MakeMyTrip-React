import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

export const Footer = () => {
  return (
    <>
      <div class="footer" style={{ width: "100%" }}>
        <div class="multimedia">
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </div>
        <div class="copyright">
          <p>
            <b>© 2022 MAKEMYTRIP PVT. LTD.</b> <br />
            <span style={{ fontSize: "13px" }}>Country</span>{" "}
            <b>India USA UAE</b>
          </p>
        </div>
      </div>
    </>
  );
};
