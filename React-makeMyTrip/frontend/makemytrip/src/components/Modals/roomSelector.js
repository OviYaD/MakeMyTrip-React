import React,{useState} from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch } from "react-redux";
import {setParam } from "../../redux/slices/paramSlice"


export const RoomSelector = ({enabler,handleEnabler,style,setCategory,category}) => {
    const dispatch = useDispatch();
    const [adultCount,setAdultCount] = useState(1);
    const [childCount,setChildCount] = useState(0);
    const [childAge,setChildAge] = useState([]);
    const [ages,setAges] = useState([]);


    const adultcount=[1,2,3,4,5,6,7,8,9,10,11,12];
    const childcount=[0,1,2,3,4];
    const handleSetAdultCount = (count) => {
        dispatch(setParam({adultCount: count}))
        setAdultCount(count);
        
    } 
    const handleSetChildCount = (count) => {
        setChildCount(count);
        dispatch(setParam({childCount: count}))

        

        let age=[];
            for(var i=1; i<=count; i++){
                age.push(i);
            }
            setAges(age);
        
    } 
    const handleApply = () => {
        setCategory({...category,childCount:childCount,adultCount:adultCount});
        handleEnabler();
    }

    return <>
        { enabler && <OutsideClickHandler
      onOutsideClick={() => {
        handleEnabler();
      }} 
    >

    <div className="roomsGuests" style={{...style}}>
    <div className="roomsGuestsTop">
        <div data-cy="roomRow1" className="addRoomRow">
            <div className="addRoomLeft"><p data-cy="roomNum1" className="darkText font16 latoBlack capText" style={{marginBottom:"10px"}}>Room 1</p></div>
            <div className="addRoomRight">
                <div className="addRooomDetails">
                    <p className="appendBottom15 makeFlex spaceBetween" style={{marginBottom:"15px"}}><span data-cy="adultRange" className="latoBold font12 grayText" >ADULTS (12y +)</span></p>
                    <ul data-cy="adultCount" className="guestCounter font12 darkText">
                    {adultcount.map((count,index)=>{
                        return <li key={index} data-cy="adults-1" className={`${adultCount===count?"selected":""}`} onClick={()=> handleSetAdultCount(count)}>{count}</li> 
                    })}
                    </ul>
                    <p data-cy="childrenRange" className="latoBold font12 grayText appendBottom10" style={{marginBottom:"10px"}}>CHILDREN (Age 12y and below)</p>
                    <ul className="guestCounter font12 darkText">
                    {childcount.map((count,index)=>{
                        return <li key={index} data-cy="children-0" className={`${childCount===count?"selected":""}`} onClick={()=> handleSetChildCount(count)}>{count}</li>
                    })}
                    </ul>
                    <ul class="childAgeList appendBottom10">
                    { ages.map((age,index)=> {
                        return  <li>
                            <span data-cy="childAgeLabel-1" class="latoBold font12 grayText appendBottom10" style={{marginRight:"10px",marginBottom:"10px"}}>CHILD {age} AGE</span>
                            <label class="lblAge" for="0">
                                <select data-cy="childAge-0" id="0" class="ageSelectBox">
                                    <option value="Select" data-cy="childAgeValue-Select">Select</option>
                                    <option value="1" data-cy="childAgeValue-1">1</option>
                                    <option value="2" data-cy="childAgeValue-2">2</option>
                                    <option value="3" data-cy="childAgeValue-3">3</option>
                                    <option value="4" data-cy="childAgeValue-4">4</option>
                                    <option value="5" data-cy="childAgeValue-5">5</option>
                                    <option value="6" data-cy="childAgeValue-6">6</option>
                                    <option value="7" data-cy="childAgeValue-7">7</option>
                                    <option value="8" data-cy="childAgeValue-8">8</option>
                                    <option value="9" data-cy="childAgeValue-9">9</option>
                                    <option value="10" data-cy="childAgeValue-10">10</option>
                                    <option value="11" data-cy="childAgeValue-11">11</option>
                                    <option value="12" data-cy="childAgeValue-12">12</option>
                                </select>
                            </label>
                        </li>
                    })}
                    </ul>
                    {/* <ul class="childAgeList appendBottom10">
                        <li>
                            <span data-cy="childAgeLabel-1" class="latoBold font12 grayText appendBottom10">CHILD 1 AGE</span>
                            <label class="lblAge" for="0">
                                <select data-cy="childAge-0" id="0" class="ageSelectBox">
                                    <option value="Select" data-cy="childAgeValue-Select">Select</option>
                                    <option value="1" data-cy="childAgeValue-1">1</option>
                                    <option value="2" data-cy="childAgeValue-2">2</option>
                                    <option value="3" data-cy="childAgeValue-3">3</option>
                                    <option value="4" data-cy="childAgeValue-4">4</option>
                                    <option value="5" data-cy="childAgeValue-5">5</option>
                                    <option value="6" data-cy="childAgeValue-6">6</option>
                                    <option value="7" data-cy="childAgeValue-7">7</option>
                                    <option value="8" data-cy="childAgeValue-8">8</option>
                                    <option value="9" data-cy="childAgeValue-9">9</option>
                                    <option value="10" data-cy="childAgeValue-10">10</option>
                                    <option value="11" data-cy="childAgeValue-11">11</option>
                                    <option value="12" data-cy="childAgeValue-12">12</option>
                                </select>
                            </label>
                        </li>
                    </ul> */}

                </div>
            </div>
        </div>
    </div>
    <div className="roomsGuestsBottom" style={{marginTop:"-20px"}}><button data-cy="addAnotherRoom" type="button" className="btnAddRoom">+ ADD ANOTHER ROOM</button><button data-cy="submitGuest" type="button" className="primaryBtn btnApply" onClick={handleApply}>APPLY</button></div>
</div>
</OutsideClickHandler>}
    </>;
}