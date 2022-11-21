import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { setParam } from "../../redux/slices/paramSlice";
// import "../../assets/css/style.css";
export const TimeSelector = (props) => {
  const [inputField,setInputs] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    props.date ? getDate(props.date):setInputs(["01","Sep","22","Sunday"]);
    props.caption=="check-in"?dispatch(setParam({checkIn:props.date})):dispatch(setParam({checkOut:props.date}))
  },[props])


  function getDate(date){
    let inputs=[];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    inputs.push(+date.slice(3,5))
    inputs.push(months[(+date.slice(0,2))-1]);
    inputs.push(+date.slice(8))
    inputs.push(days[new Date(date).getDay()]);
    console.log(inputs);
    setInputs(inputs);
}

  return (
    <>
    <div class="hsw_inputBox dates">
                  <label for="checkin">
                      <span class="lbl_input latoBold appendBottom5">{props.caption}</span><input data-cy="checkin" id="checkin" type="text" readonly="" />
                      <p data-cy="checkInDate" class="blackText font20 code"><span class="font30 lineHeight36 latoBlack">{inputField[0]}</span><span> {inputField[1]}</span><span class="shortYear">{inputField[2]}</span></p>
                      <p class="code">{inputField[3]}</p>
                  </label>
              </div>
      
    </>
  );
};
