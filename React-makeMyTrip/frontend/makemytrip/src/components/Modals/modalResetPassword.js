import React from "react";

export const ModalResetPassword = ({ handleBack, handleOtp }) => {
  const [inputData, setInput] = React.useState();
  const [isDisabled, setDisability] = React.useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    e.target.value.length !== 0 ? setDisability(false) : setDisability(true);
    setInput(e.target.value);
  };

  const handleClick = () => {
    console.log("clicked");

    handleOtp();
    // handleLogin();
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
          Reset Password
        </p>
        <p className="font14 darkGreyText makeFlex">
          We will send you a reset OTP on your registered E-mail ID or Mobile
          Number
        </p>
      </div>
      <form>
        <div className="modalField makeFlex column appendBottom30">
          <p className="makeFlex hrtlCenter spaceBetween appendBottom10">
            <label for="resetEmailPass" className="font14 latoBold">
              Registered Email or Mobile Number
            </label>
          </p>
          <div className="modalFieldInner makeFlex hrtlCenter">
            <input
              type="text"
              className="font14"
              autocomplete="off"
              id="resetEmailPass"
              name="resetEmailPass"
              placeholder="eg. john@mmt.com or +91 - 99999 - 99999"
              value={inputData}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btnContainer appendBottom25">
          <button
            className={`capText font16 ${isDisabled ? "disabled" : "enabled"}`}
            data-cy="continueBtn"
            type="button"
            disabled={isDisabled ? true : false}
            onClick={handleClick}
          >
            <span style={{ color: "white" }}>SEND OTP</span>
          </button>
        </div>
      </form>
    </>
  );
};
