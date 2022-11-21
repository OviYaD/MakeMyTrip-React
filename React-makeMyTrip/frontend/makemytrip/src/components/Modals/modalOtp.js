import React from "react";

export const ModalOtp = ({ handleBack, handleVerifyLogin ,isError}) => {
  const [inputData, setInput] = React.useState();
  const [isDisabled, setDisability] = React.useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    e.target.value.length !== 0 ? setDisability(false) : setDisability(true);
    setInput(e.target.value);
  };

  return (
    <>
      <div className="makeFlex hrtlCenter appendBottom20">
        <a className="modalBack capText font12 latoBlack" onClick={handleBack}>
          Back
        </a>
      </div>
      <div className="appendBottom25">
        <p
          data-cy="commonModal"
          className="modalTitle makeFlex hrtlCenter font26 latoBold appendBottom5"
        >
          Verify Your E-mail ID
        </p>
        <p className="font14 darkGreyText makeFlex">OTP has been sent to EMAIL</p>
      </div>
      <form>
        <div className="modalField makeFlex column appendBottom30">
          <p className="makeFlex hrtlCenter spaceBetween appendBottom10">
            <label for="otp" className="font14 latoBold">
              ENTER OTP
            </label>
          </p>
          <label for="otp" className="font14 latoBold appendBottom10">
            &nbsp;&nbsp;
          </label>
          <div className="modalFieldInner makeFlex hrtlCenter">
            <input
              type="text"
              id="otp"
              name="otp"
              autocomplete="off"
              placeholder="Enter OTP"
              maxlength="6"
              data-cy="otp"
              value={inputData}
              onChange={handleChange}
            />
            <a className="pushRight modalResetBtn font12 appendRight5"   >
              Resend OTP
            </a>
          </div>
          {isError?<span data-cy="errorMsg" className="validity font12 redText appendTop5 makeFlex"><span className="appendRight5 popupSprite errorCross"></span>Incorrect OTP Entered. Please try again.</span>:<></>}

        </div>
        <div className="btnContainer appendBottom25">
          <button
            className={`capText font16 ${isDisabled ? "disabled" : "enabled"}`}
            data-cy="continueBtn"
            type="button"
            disabled={isDisabled ? true : false}
            onClick={()=>handleVerifyLogin(inputData)}
          >
            <span style={{ color: "white" }}>Verify &amp; Create Account</span>
            <span style={{ color: "white" }}>Login</span>
          </button>
        </div>
      </form>
    </>
  );
};
