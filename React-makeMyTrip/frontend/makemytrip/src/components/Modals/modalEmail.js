import React from "react";

export const ModalEmail = ({ handleSubmit }) => {
  const [inputData, setInput] = React.useState();
  const [isDisabled, setDisability] = React.useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    e.target.value.length !== 0 ? setDisability(false) : setDisability(true);
    setInput(e.target.value);
  };

  const handleClick = () => {
    console.log("clicked");
    handleSubmit(inputData);
  };
  //   console.log(handleSubmit("hi"));
  return (
    <>
      {/* <h1>jhdjaiusdoiuwi</h1> */}
      <div className="tertiaryBg">&nbsp;</div>
      <div className="appendBottom25">
        <ul className="makeFlex textCenter latoBlack font16 capText noSelection">
          <li
            className="active"
            data-acctype="personal"
            data-cy="personalLogin"
          >
            Personal Account
          </li>
          <li className="" data-acctype="myBiz">
            MyBiz Account
          </li>
        </ul>
      </div>
      <div className="appendBottom25 ">
        <div className="animateTitle appendBottom30 ">
          <div className="titleList font22 latoBold appendBottom30 scroller ">
            <div className="titleItem">
              Login for great deals and offers
              <br />
              Book your 1st international trip
              <br />
              Join the club of 10 crore+ happy travellers
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="modalField makeFlex column appendBottom20">
          <label for="username" className="font14 latoBold appendBottom10">
            Email or Mobile Number
          </label>
          <div className="modalFieldInner makeFlex hrtlCenter">
            <input
              type="text"
              className="font14 fullWidth"
              id="username"
              name="username"
              autocomplete="off"
              placeholder="Enter email or mobile number"
              data-cy="userName"
              value={inputData}
              onChange={handleChange}
              style={{ border: "none", outlineWidth: "0", width: "100%" }}
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
            <span style={{ color: "white" }}>Continue</span>
          </button>
        </div>
      </form>
      <p className="googleLoginBar">
        <span> Or Login/Signup With </span>
      </p>
      <div className="makeFlex socialBtnContainer loginPopup vrtlCenter">
        <div data-cy="googleLogin" className="googleBtnNew">
          <span className="popupSprite gIcon"></span>
        </div>
      </div>
      <div className="makeFlex column hrtlCenter loginFooter">
        <p className="textCenter appendBottom5 appendTop20 font12 blackText lineHeight18">
          By proceeding, you agree to MakeMyTrip's &nbsp;
          <a>Privacy Policy</a>, <a>User Agreement</a>&nbsp;and&nbsp;
          <a>T&amp;Cs</a>
        </p>
      </div>
    </>
  );
};
