import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { getCheckUser, getVerificationOtp,loginPassword,loginOtp, getUserDetails } from "../services/user";
import { ModalEmail } from "./Modals/modalEmail";
import { ModalPassword } from "./Modals/modalPassword";
import { ModalResetPassword } from "./Modals/modalResetPassword";
import { ModalOtp } from "./Modals/modalOtp";
import { UserContext } from '../api/user';



export default function LoginModal() {
  // const {userInfo,setUserInfo} = React.useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [isEmailEnabled, setEmailEnabler] = React.useState(true);
  const [isPasswordEnabled, setPasswordEnabler] = React.useState(false);
  const [isRestPasswordEnabled, setResetPasswordEnabler] = React.useState(false);
  const [isOtpEnabled, setOtpEnabler] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [otp, setOpt] = React.useState();
  const [password, setPassword] = React.useState();
  const [isError, setError] = React.useState(false);
  // const [isDisabled, setDisability] = React.useState(false);



  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    setEmailEnabler(true);
    setPasswordEnabler(false);
    setOtpEnabler(false);
    setResetPasswordEnabler(false);
  };

  const handleVerifyLogin= async(otp)=>{
    const user=await loginOtp(email,otp);
    if(!user){
      setError(true);
    }
    else{
      getUserDetails();
      handleClose();
    }


  }
  const handleLogin = async(password) => {
    const user=await loginPassword(email,password);
    if(!user){
      setError(true);
    }
    else{
      const user=getUserDetails();
      handleClose();
    }
  };


  const handleReset = () => {
    setEmailEnabler(false);
    // setUser(false);
    setResetPasswordEnabler(true);
  };
  const handleOtp = () => {
    console.log("handle otp");
    loginOtp(email);
    setEmailEnabler(false);
    setPasswordEnabler(false);
    setOtpEnabler(true);
    setResetPasswordEnabler(false);

  };
  const handleSubmit = async (data) => {
    const user = await getCheckUser(data);
    setEmail(data);
    console.log(user);
    if(user){
      setEmailEnabler(false);
      setPasswordEnabler(true);
      setOtpEnabler(false);
      setResetPasswordEnabler(false);
    }
    else{
      setEmailEnabler(false);
      setPasswordEnabler(false);
      setOtpEnabler(true);
      setResetPasswordEnabler(false);
    }
    // user ? setPasswordEnabler(true) : setOtpEnabler(true);
    console.log(isEmailEnabled,isPasswordEnabled,isOtpEnabled,isRestPasswordEnabled);
    getVerificationOtp(data);
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        className="makeFlex hrtlCenter font10 makeRelative lhUser userLoggedOut"
      >
        <span className="userNameIcon whiteText makeFlex perfectCenter latoBlack appendRight10">
          <span data-cy="myIconWhite" className="landingSprite myIconWhite">
            &nbsp;
          </span>
        </span>

        <div className="makeFlex column flexOne whiteText latoBold">
          <p
            data-cy="LoginHeaderText"
            style={{ color: "white", marginRight: "35px" }}
          >
            Login or Create Account
          </p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box>
          <section className=" modal displayBlock modalLogin dynHeight personal modalMain tcnFooter">
          {isEmailEnabled && <ModalEmail handleSubmit={handleSubmit} email={email}></ModalEmail>}
          {isPasswordEnabled && <ModalPassword
                email={email}
                handleBack={handleBack}
                handleLogin={handleLogin}
                handleReset={handleReset}
                handleOtp={handleOtp}
                isError={isError}
                setEmail={setEmail}
              ></ModalPassword>}
            {isRestPasswordEnabled &&  <ModalResetPassword handleBack={handleBack}></ModalResetPassword>}
            {isOtpEnabled &&  <ModalOtp
                handleBack={handleBack}
                // handleLogin={handleLogin}
                handleVerifyLogin={handleVerifyLogin}
                handleOtp={handleOtp}
                isError={isError}
              ></ModalOtp>}


            {/* {isEmailEnabled ? (
              <ModalEmail handleSubmit={handleSubmit}></ModalEmail>
            ) : userExist ? (
              <ModalPassword
                email={email}
                handleBack={handleBack}
                handleLogin={handleLogin}
                handleReset={handleReset}
                handleOtp={handleOtp}
              ></ModalPassword>
            ) : isRestPasswordEnabled ? (
              <ModalResetPassword handleBack={handleBack}></ModalResetPassword>
            ) : (
              <ModalOtp
                handleBack={handleBack}
                handleLogin={handleLogin}
                isError={isError}
              ></ModalOtp>
            )} */}
          </section>
        </Box>
      </Modal>
    </div>
  );
}
