import React,{useState,useMemo,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { parse, stringify } from "query-string";
import { Hotels } from "./pages/Hotels";
import HotelSearch from "./pages/HotelSearch";
import "./assets/css/style.scss";
import "./assets/css/hotel-style.scss";
import "./App.css"
import {HotelDetails} from "./pages/HotelDetails";
import { Booking } from "./pages/Booking";
import {Profile} from "./pages/profile";
import { UserContext } from "./api/user";
import { SearchContext } from "./api/search";
import { getUserDetails } from './services/user';
import { MyTrip } from './pages/myTrip';
import {useSelector,useDispatch } from 'react-redux';
import {setUser} from './redux/slices/userSlice';


function App() {
  const user=useSelector((state)=>state.user);
  const theme = useSelector((state)=>state.theme);
  const dispatch = useDispatch()
  const [userInfo ,setUserInfo] = useState();
  const [searchInfo ,setSearchInfo] = useState({checkIn:"2022-09-25",checkOut:"2022-09-27",city:"Ooty",hotelId:null,roomid:null});
  const userProvider = useMemo(()=>({userInfo,setUserInfo}),[userInfo,setUserInfo]);
  const searchInfoProvider = useMemo(()=>({searchInfo,setSearchInfo}),[searchInfo,setSearchInfo]);

  useEffect(()=>{
    const fetchUser=async()=>{
      const user=await getUserDetails();
      dispatch(setUser(user))
      // setUserInfo(user);
    }
    fetchUser();

  },[]);


  return (
    
    <div className={`${theme?"dark":"white"}`}>
    {console.log("theme",theme)}
      <UserContext.Provider  value={userProvider}>
        <BrowserRouter>
          <QueryParamProvider
            adapter={ReactRouter6Adapter}
            options={{
              searchStringToObject: parse,
              objectToSearchString: stringify
            }}
          >
            <SearchContext.Provider value={searchInfoProvider}>
              <div className="website">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <div className="background">
                          <Hotels></Hotels>
                        </div>
                      }
                    />
                      <Route path="/search" element={<HotelSearch></HotelSearch>} />
                      <Route path="/profile" element={<Profile></Profile>} />
                      <Route path="/mytrip" element={<MyTrip></MyTrip>} />
                      <Route path="/hoteldetails" element={<HotelDetails></HotelDetails>}/>
                      <Route path="/bookingconfirmation" element={<Booking></Booking>}/>
                      
                  </Routes>
              </div>
            </SearchContext.Provider>
          </QueryParamProvider>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
