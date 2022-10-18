import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { getCheckUser, getVerificationOtp } from "../services/user";
import { ModalEmail } from "./Modals/modalEmail";
import { ModalPassword } from "./Modals/modalPassword";
import { ModalResetPassword } from "./Modals/modalResetPassword";
import { ModalOtp } from "./Modals/modalOtp";
export default function LoginModal() {
  const [isEmailEnabled, setEmailEnabler] = React.useState(true);
  const [isPasswordEnabled, setPasswordEnabler] = React.useState(false);
  const [isResetPassword, setResetPasswordEnabler] = React.useState(false);
  const [isOtpEnabled, setOtpEnabler] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [userExist, setUser] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [isDisabled, setDisability] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin = () => {
    console.log("login");
  };
  const handleReset = () => {
    setEmailEnabler(false);
    setUser(false);
    setResetPasswordEnabler(true);
  };
  const handleBack = () => {
    setEmailEnabler(true);
    setUser(false);
    setResetPasswordEnabler(false);
  };
  const handleOtp = () => {
    console.log("handle otp");
    setEmailEnabler(false);
    setUser(false);
    setResetPasswordEnabler(false);
  };
  const handleSubmit = async (data) => {
    const user = await getCheckUser(data);
    setEmailEnabler(false);
    console.log(data);
    setEmail(data);
    getVerificationOtp(data);
    user ? setUser(true) : setUser(true);
    console.log(userExist);
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

        <div class="makeFlex column flexOne whiteText latoBold">
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
            {isEmailEnabled ? (
              <ModalEmail handleSubmit={handleSubmit}></ModalEmail>
            ) : userExist ? (
              <ModalPassword
                email={email}
                handleBack={handleBack}
                handleLogin={handleLogin}
                handleReset={handleReset}
                handleOtp={handleOtp}
              ></ModalPassword>
            ) : isResetPassword ? (
              <ModalResetPassword handleBack={handleBack}></ModalResetPassword>
            ) : (
              <ModalOtp
                handleBack={handleBack}
                handleLogin={handleLogin}
              ></ModalOtp>
            )}
          </section>
        </Box>
      </Modal>
    </div>
  );
}
