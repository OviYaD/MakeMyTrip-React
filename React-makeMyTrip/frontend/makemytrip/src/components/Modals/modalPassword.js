import React from "react";
export const ModalPassword = ({
  handleReset,
  email,
  handleBack,
  handleLogin,
  handleOtp,
  isError,
  setError
}) => {
  const [inputData, setInput] = React.useState();
  const [isDisabled, setDisability] = React.useState(true);
  
  
  const handleChange = (e) => {
    e.preventDefault();
    // setError(false);
    e.target.value.length > 6 ? setDisability(false) : setDisability(true);
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
          <span className="font26 latoBlack"> Login With Password </span>
        </p>
        <p className="font14 darkGreyText makeFlex">For account {email}</p>

        {isError && <p className="font12 redText appendTop5 makeFlex serverError hrtlCenter" >
  <span className="appendRight5 popupSprite errorCross"></span>
  <span data-cy="serverError" style={{color:"red"}}>Either Username or Password is incorrect.</span>
</p>}

      </div>
      <form>
        <div className="modalField makeFlex column appendBottom30">
          <p className="makeFlex hrtlCenter spaceBetween appendBottom10">
            <label for="password" className="font14 latoBold">
              Password
            </label>
          </p>
          <div className="modalFieldInner makeFlex hrtlCenter">
            <input
              autocomplete="off"
              maxLength="100"
              type="password"
              className="font14"
              id="password"
              name="password"
              placeholder="Minimum 6 characters."
              data-cy="password"
              style={{ border: "none" }}
              value={inputData}
              onChange={handleChange}
            />
            <a
              onClick={handleReset}
              data-cy="resetPassword"
              className="pushRight modalResetBtn font12 appendRight5"
            >
              Reset Password
            </a>
          </div>
          <span className="validity"></span>
        </div>
        <div className="btnContainer appendBottom25">
          <button
            className={`capText font16 ${isDisabled ? "disabled" : "enabled"}`}
            data-cy="continueBtn"
            type="button"
            disabled={isDisabled ? true : false}
            onClick={()=>handleLogin(inputData)}
          >
            <span style={{ color: "white" }}>Login</span>
          </button>
        </div>
      </form>
      <div data-cy="switchLoginFlow" className="switchLoginFlow">
        <a onClick={handleOtp}>or Login via OTP</a>
      </div>
      <div className="makeFlex column hrtlCenter loginFooter">
        <p className="textCenter appendBottom5 appendTop20 font12 blackText lineHeight18">
          By proceeding, you agree to MakeMyTrip's &nbsp;<a>Privacy Policy</a>,{" "}
          <a>User Agreement</a>&nbsp;and&nbsp;<a>T&amp;Cs</a>
        </p>
      </div>
    </>
  );
};
