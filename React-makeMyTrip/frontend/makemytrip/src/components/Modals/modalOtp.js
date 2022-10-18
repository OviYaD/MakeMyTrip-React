import React from "react";

export const ModalOtp = ({ handleBack, handleLogin }) => {
  const [inputData, setInput] = React.useState();
  const [isDisabled, setDisability] = React.useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    e.target.value.length !== 0 ? setDisability(false) : setDisability(true);
    setInput(e.target.value);
  };

  return (
    <>
      <div class="makeFlex hrtlCenter appendBottom20">
        <a class="modalBack capText font12 latoBlack" onClick={handleBack}>
          Back
        </a>
      </div>
      <div class="appendBottom25">
        <p
          data-cy="commonModal"
          class="modalTitle makeFlex hrtlCenter font26 latoBold appendBottom5"
        >
          Verify Your E-mail ID
        </p>
        <p class="font14 darkGreyText makeFlex">OTP has been sent to EMAIL</p>
      </div>
      <form>
        <div class="modalField makeFlex column appendBottom30">
          <p class="makeFlex hrtlCenter spaceBetween appendBottom10">
            <label for="otp" class="font14 latoBold">
              OTP
            </label>
          </p>
          <label for="otp" class="font14 latoBold appendBottom10">
            &nbsp;&nbsp;
          </label>
          <div class="modalFieldInner makeFlex hrtlCenter">
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
            <a class="pushRight modalResetBtn font12 appendRight5 ">
              Resend OTP
            </a>
          </div>
          <span class="validity"></span>
        </div>
        <div className="btnContainer appendBottom25">
          <button
            className={`capText font16 ${isDisabled ? "disabled" : "enabled"}`}
            data-cy="continueBtn"
            type="button"
            disabled={isDisabled ? true : false}
            onClick={handleLogin}
          >
            <span style={{ color: "white" }}>Login</span>
          </button>
        </div>
      </form>
    </>
  );
};
