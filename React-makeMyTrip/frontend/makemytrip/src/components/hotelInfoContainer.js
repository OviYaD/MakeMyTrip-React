import React,{useState,useEffect} from 'react';
import { Rating } from './rating';
import { useSelector } from 'react-redux';
import {fetchRulesList} from "../services/filters"
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '20%',
      left: '20%',
      right: 'auto',
      bottom: 'auto',
      width:"660px",
      marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
      
    },
  };
export const HotelInfocontainer = ({hotelDes}) => {
    const params = useSelector((state)=>state.param);
    const [inputField,setInputs] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [rulesList,setRulesList] = useState([]);
    let subtitle;
    function openModal() {
        setIsOpen(true);
    }
 
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
 
    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() =>{
        params.checkIn ? getDate():setInputs(["01","Sep","22","Sunday","02","Sep","22","Monday","1"]);
        getRulesList();
      },[params]);

    const getRulesList = async() => {
        let rules = await fetchRulesList();
        setRulesList(rules);

    }
    function getDate(){
        let date = params.checkIn;
        let inputs=[];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        inputs.push(date.slice(3,5))
        inputs.push(months[(+date.slice(0,2))-1]);
        inputs.push(date.slice(8))
        inputs.push(days[new Date(date).getDay()]);
        date = params.checkOut;
        inputs.push(date.slice(3,5))
        inputs.push(months[(+date.slice(0,2))-1]);
        inputs.push(date.slice(8))
        inputs.push(days[new Date(date).getDay()]);
        var date1 = new Date(params.checkIn);
        var date2 = new Date(params.checkOut);
        var Difference_In_Time = date2.getTime() - date1.getTime(); 
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        inputs.push(Difference_In_Days);
        setInputs(inputs);
    }
    return <>
    <div className="htlInfoContainer appendBottom20">
    <div className="accordHead">
        <div>
            <p className="accordHead__text">
                <span className="capText">Hotel Information</span>
            </p>
        </div>
        <div>
            <span className="accordBtn appendLeft20 up"></span>
        </div>
    </div>

    <div className="htlInfo__wrapper">
        <div className="htlInfo__dtl">
            <div className="htlInfo__dtlLeft">
                <div className="makeFlex appendBottom10">
                    <div className="makeFlex appendTop10">
                        <span class="rmTypeTag" style={{ color: "rgb(74, 74, 74)", borderColor: "rgb(231, 231, 231)", backgroundColor: "rgb(241, 241, 241)" }}>
                            Couple Friendly
                        </span>
                    </div>
                </div>
                <div className="makeFlex appendBottom5">
                    <h1 className="font26 blackText latoBlack appendBottom10">
                        {hotelDes.name} | {hotelDes.address.city}
                        <Rating rating={hotelDes.rating}></Rating>
                        
                    </h1>
                </div>
                <p className="font12 grayText"></p>
            </div>
            <div className="htlInfo__dtlRight">
                <div className="htlInfo__dtlRightImg">
                    <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201309021636532583-2ee35cbe818711ebabe20242ac110004.jpg" alt="" />
                    ''
                </div>
            </div>
        </div>
        <div className="chkCont">
            <div className="chkCont__col">
                <div className="makeFlex column">
                    <span className="font10 grayText appendBottom3">CHECK IN </span>
                    <span className="latoBlack font24 blackText appendBottom3">{inputField[0]} {inputField[1]} 20{inputField[2]}</span>
                    <span className="font10 grayText 444">{inputField[3]}, 3 PM</span>
                </div>
                <div className="chkCont__night">
                    <span>{inputField[8]} Night</span>
                </div>
                <div className="makeFlex column">
                    <span className="font10 grayText appendBottom3">CHECK OUT</span>
                    <span className="latoBlack font24 blackText appendBottom3">{inputField[4]} {inputField[5]} 20{inputField[6]}</span>
                    <span className="font10 grayText">{inputField[7]}, 12 PM</span>
                </div>
            </div>
            <div className="chkCont__col">
                <p className="font16 blackText">
                    <span className="latoBlack">{params.adultCount?params.adultCount:"1"}</span>&nbsp;Adults 
                </p>
               {params.childCount>0 &&  <p className="font16 blackText" style={{marginLeft:"10px"}}>
                    <span className="latoBlack">{params.childCount}</span>&nbsp;Children
                </p>}
            </div>
        </div>
        <div className="entireVl">
            <p className="entireVl__hdng">1 Room</p>
            <p className="entireVl__subHdng">1 bedroom | 1 Double Bed, 1 Mattress</p>
        </div>
    </div>
    <div className="htlInfo__content">
        <div className="rmDtl appendBottom15">
            <div className="roomDtlCard">
                <div className="roomDtlCard__head">
                    <div className="makeFlex column" style={{ width: "80%" }}>
                        <div className="makeFlex">
                            <p className="latoBlack font14 blackText capText makeFlex" style={{ maxWidth: "82%", lineHeight: "1.2" }}>
                                Deluxe Room Twin
                            </p>
                        </div>
                        <p className="grayText appendTop5">{params.adultCount?params.adultCount:"1"} Adults</p>
                    </div>
                    <a className="latoBlack font12 pointer">View All Room Inclusions</a>
                </div>
                <div className="roomDtlCard__content">
                    <p className="font16 latoBold blackText appendBottom10">Price Includes</p>
                    <ul className="roomDtlCard__list">
                        <li className="roomDtlCard__listItem">
                            <span className="roomDtlCard__listIcon">
                                <span className="sprite icRedCross"></span>
                            </span>
                            <div className="makeFlex column">
                                <p className="">No meals included</p>
                            </div>
                        </li>
                        <li className="roomDtlCard__listItem">
                            <span className="roomDtlCard__listIcon">
                                <span className="blackDot"></span>
                            </span>
                            <div className="makeFlex column">
                                <p className="">Flexible Rate</p>
                            </div>
                        </li>
                    </ul>
                    <div className="appendTop10 appendBottom10">
                        <div className="makeFlex hrtlCenter">
                            <span className="roomDtlCard__listIcon">
                                <span className="sprite icZc"></span>
                            </span>
                            <div>
                                <span className="latoBold greenText">Free Cancellation before ‪25-Oct-2022 14:59‬</span>
                                <a className="latoBlack font12 pointer appendLeft10 cancelPolicy">Cancellation policy details</a>
                            </div>
                        </div>
                    </div>

                    <div className="fcDetails dtHotelReviewNew">
                        <div className="fcDetails__bar">
                            <div className="fcDetails__bar--complete fcWidth80">
                                <span className="fcDetails__bar-oval"></span>
                                <span className="fcDetails__bar-text whiteText">Free Cancellation till ‪25 Oct 02:59 PM‬</span>
                                <span className="fcDetails__bar-oval"></span>
                            </div>
                        </div>
                        <div className="fcDetails__bottom">
                            <div className="fcDetails__bottom--left">
                                <span className="latoBlack font11 blackText">NOW</span>
                                <span className="barLine latoBlack font11 blackText capText">25 Oct</span>
                            </div>
                            <div className="fcDetails__bottom--right">
                                <span className="latoBlack font11 blackText appendBottom3 capText">27 Oct</span>
                                <span className="font10 darkGreyText">Check-in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="impInfoCard appendTop15">
            <div className="impInfoCard__head">Important information</div>
            <div className="impInfoCard__details">
                <p className="latoBlack font14 blackText appendBottom12">Hotel Rules</p>
                <ul className="impInfoCard__list">
                {rulesList.slice(0,4).map((rule,index)=>{
                    return <>
                    <li>
                        <span className="impInfoCard__listIcon" key={index}>
                            <span className="appendLeft3 blackDot"></span>
                        </span>
                        <span className="font12">{rule.title}</span>
                    </li>
                    </>
                })}
                    
                </ul>
                <p onClick={openModal}>
                    <a className="impInfoCard__btn latoBold font12">Read All Hotel Rules</a>
                </p>
                <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div class="cm__modalHeader">
    <h3 class="latoBlack font24 blackText">All Hotel Rules</h3>
    <h4 class="latoBold font16 appendTop5">Check-In: 3 PM | Check-Out: 12 PM</h4>
</div>
<div class="cm__modalContent">
    <div class="rsrtRules">
        <div class="rsrtRules__row">
            <h4>Must read</h4>
            <ul class="rsrtRules__list">
            {rulesList.map((rule,index)=>{
                return <li class="" key={index}>{rule.title}</li>

            })}
                
            </ul>
        </div>
        
       
    </div>
</div>

      </Modal>
            </div>
        </div>
    </div>
</div>;

    </>
}