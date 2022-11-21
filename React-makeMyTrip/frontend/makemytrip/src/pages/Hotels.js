import React from "react";
import { ImageBanner } from "../components/ImageBanner";
import { Banner } from "../components/Banner";
import { Download } from "../components/Downloads";
import { Footer } from "../components/footer";
import { LuxeSel } from "../components/LuxeSel";
import ImageCardHori from "../components/imageCardHori";
import Slider from "../components/slider";
import { Description } from "../components/description";
import { AboutSite } from "../components/aboutSite";
import {UserContext} from "../api/user";
import {useSelector,useDispatch } from 'react-redux';
import ToggleButton from '../components/ToggleButton';

export const Hotels = () => {
  const user=useSelector((state)=>state.user);
  const {userInfo,setUserInfo} = React.useContext(UserContext);

  return (
    <>
    {console.log(user)}
    
      <Banner></Banner>
      <LuxeSel></LuxeSel>
      {/* <ImageCardHori></ImageCardHori> */}
      <Download></Download>
      <Description></Description>
      <AboutSite></AboutSite>
      <Footer></Footer>
      {/* <ImageBanner
        topCollection="true"
        description="Romatic destination"
        url="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_romantic44_p_540_417.jpg"
      ></ImageBanner> */}
    </>
  );
};
