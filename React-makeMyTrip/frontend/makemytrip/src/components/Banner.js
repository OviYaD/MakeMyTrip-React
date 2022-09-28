import React from "react";
import { NavBar } from "./navBar/navBar";
import { Ticket } from "./ticketCounter/Ticket";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const Banner = () => {
  return (
    <>
      <div className="container">
        <img
          className="logo"
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          alt=""
        />
        <button>LOGIN</button>
        <NavBar></NavBar>
        {/* <Ticket></Ticket> */}
      </div>
    </>
  );
};
