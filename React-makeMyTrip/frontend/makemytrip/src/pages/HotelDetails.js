import React,{useState,useEffect,useContext, useRef} from "react";
import { LandingContainer } from "../components/landingContainer";
import {Map} from "../components/map";
import {NavBar} from "../components/navBar";
import { TopHeaderSticky } from '../components/topHeaderSticky';
import {getHotel} from "../services/hotel";
import { SearchContext } from "../api/search";
import {getTax} from "../services/tax";
import SimpleImageSlider from "react-simple-image-slider";
import { StoryContent } from "../components/storyContent";
import { useNavigate } from 'react-router-dom';
import { PhotoGallery } from "../components/photoGallery";
import { Amenity } from '../components/amenity';
import {setHotelDescInfo} from "../redux/slices/hotelDescSlice"
import { useSelector,useDispatch } from "react-redux";
import { setParam } from "../redux/slices/paramSlice";
import { HotelDetailsLoader } from "../components/loaders/hotelDetailsLoader";
import { PropertyRules } from "../components/propertyRules";
import { UserReviews } from '../components/userReviews';


export const HotelDetails = () =>{
    
    const dispatch = useDispatch();
    const params = useSelector((state) => state.param);
    const hotelDes = useSelector((state)=>state.hotelDesc)
    const [showGallery,setShowGallery] = useState(false);
    // const [hotelDes,setHotelDes] = useState();
    const [currentHeight,setCurrentHeight] = useState();
    const [photoList,setPhotoList] = useState([]);
    const overview = useRef();
    const roomType = useRef();
    const location = useRef();
    const amenity = useRef();
    const propertyRule = useRef();
    const review = useRef();
    const {searchInfo,setSearchInfo} =useContext(SearchContext);
    const images=[];
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();
    // useEffect(()=>{
    // const getImages=()=>{
    //     hotelDes.pictures.forEach((item,index)=>{
    //         images.push({url:item.url});
    //     })
    //     console.log(images)
    // },[]);

    useEffect(() => {
        const handleScroll = event => {
            setCurrentHeight(window.pageYOffset)
            
        };
    
        window.addEventListener('scroll', handleScroll,{passive:true});
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000);
        // const getImages=(hotelInfo) => {
        //     setPhotoList((hotelInfo)=>{
        //         hotelInfo.pictures.foreach((item,index)=>{
        //             return {url:item,tag:item.tag.title}
        //         })
        //     })
        // }
        const fecthDetails=  async() => {
            const hotelInfo= await getHotel(params.hotelId)
            // setHotelDes(hotelInfo);
            dispatch(setHotelDescInfo(hotelInfo));
            // getImages(hotelInfo);
            // console.log(photoList);
            
        }
        fecthDetails();
        
    },[params.hotelId])

    const handleChangeShowGallery = () => {
        setShowGallery((showGallery)=> !showGallery)
    }
    
    const handleSelectRoom = (roomid) =>{

        console.log("roomid",roomid);
        if(hotelDes.rooms.length>=1 ){
            setSearchInfo({...searchInfo,roomid:1});
            dispatch(setParam({roomid}))
            navigate("/bookingconfirmation");
            
        } 
        else{
            setSearchInfo({...searchInfo,roomid:null});
        }

    }
    if(Object.keys(hotelDes).length>0){
        return  <>
        
        <NavBar></NavBar>
        <TopHeaderSticky></TopHeaderSticky>
        {loading? <>
            <HotelDetailsLoader></HotelDetailsLoader>
        </>:
        <><div className="dtNewDetailsPage" style={{ margin: "0px" }} >
            <div className="hotelDetailsPage__container">
                <div>
                    <div className="_Hlisting" style={{ margin: "0px" }}>
                        <div className="topHeader appendBottom30 minWidth1200 topHeaderSticky" style={{ top: "-4px" }}>
                            <div className="container makeFlex column">
                                <ul className="_BreadCrumbs breadCrumbs font12">
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Hotels and more in {searchInfo.city}</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            {hotelDes.name} | {hotelDes.address.city}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="baseHeaderContiner">
                        <div className="baseLeft">
                            <div className="accoDtlHdr">
                                <div className="accoDtlHdr__left" >
                                    <div className="accoDtlHdr__left--info" onClick={handleChangeShowGallery}>{hotelDes.pictures.length} PHOTOS &amp; VIDEOS</div>
                                    <div style={{ zIndex: "10" }}>
                                        <SimpleImageSlider
                                            width="100%"
                                            height="100%"
                                            images={hotelDes ? hotelDes.pictures.map((image) => `${image.url}?random=${Math.round(Math.random() * 1000)}`) : []}
                                            // images={images}
                                            showNavs={true}
                                        />
                                    </div>
                                </div>
                                <div className="accoDtlHdr__right" onClick={handleChangeShowGallery} style={{cursor:"pointer"}}>
                                    <div className="accoHdr__itemTop">
                                        <div className="accoHdr__itemTop">
                                            <div className="prmPhotoThumb">
                                                <div className="prmPhotoThumb__dtl">
                                                    <p className="font14 latoBlack whiteText capText">Room</p>
                                                </div>
                                                <img
                                                    src={hotelDes.pictures[0].url}
                                                    alt="Room"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accoHdr__itemBottom" onClick={handleChangeShowGallery} style={{cursor:"pointer"}}>
                                        <div className="prmPhotoThumb">
                                            <div className="prmPhotoThumb__dtl">
                                                <p className="font14 latoBlack whiteText capText">Entrance</p>
                                            </div>
                                            <img
                                                src={hotelDes.pictures[0].url}
                                                alt="Entrance"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="baseLeft__cont">
                                <div className="prmProperty">
                                    <h1 className="font26 blackText latoBlack appendBottom10">
                                        {hotelDes.name} | {hotelDes.address.city}
                                        <span className="sRating" style={{ display: "inline-flex" }}>
                                            <span className="sRating__row sRating__row--active">
                                                {hotelDes.rating}
                                                {Array.from({ length: hotelDes.rating }, (i) => (
                                                    <img width="11" height="11" src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/ic_star_selected.png" alt={i} />
                                                ))}
                                            </span>
                                            <span className="sRating__row">
                                                <img width="11" height="11" src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/ic_star_default.png" alt="0" />
                                                <img width="11" height="11" src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/ic_star_default.png" alt="1" />
                                                <img width="11" height="11" src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/ic_star_default.png" alt="2" />
                                                <img width="11" height="11" src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/ic_star_default.png" alt="3" />
                                                <img width="11" height="11" src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/ic_star_default.png" alt="4" />
                                            </span>
                                        </span>
                                    </h1>
                                    <p className="latoBold makeFlex">
                                        <span className="dtlSprite icLocationBlack appendRight5"></span>
                                        <span>
                                            {hotelDes.address.state}, {hotelDes.address.country}{" "}
                                            <span>
                                                {" "}
                                                | <span>4.3 km from Indira Gandhi International Airport</span>
                                            </span>
                                        </span>
                                    </p>
                                </div>
                                <StoryContent></StoryContent>
                            </div>
                        </div>
                        <div className="baseRight">
                            <div className="baseRight__sticky">
                                <div className="prmRoomDtlCard appendBottom10">
                                    <div className="prmRoomDtlCard__inner">
                                        <a className="inlineBlock font16 latoBlack blackText truncate appendBottom7" data-testid="baseSrRoomName">
                                            {hotelDes.rooms[0].bedType}
                                        </a>
                                        <div className="makeFlex">
                                            <div className="prmRoomDtlCard__left">
                                                <p className="makeFlex hrtlCenter appendBottom12" style={{ marginBottom: "12px" }}>
                                                    <span className="dtlSprite icAdults appendRight6"></span>
                                                    <span className="font12 latoBold">For 2 Adults</span>
                                                </p>
                                                <ul className="prmRoomFacilities">
                                                    <li className="" style={{ display: "flex" }}>
                                                        <span className="" style={{ alignItem: "center" }}>
                                                            {" "}
                                                            <span className="dtlSprite icRedClose"></span>
                                                        </span>
                                                        <p className="prmRoomFacilities__item--text" style={{ marginLeft: "10px" }}>
                                                            <span className="latoBold redText">Non-Refundable</span>
                                                        </p>
                                                    </li>
                                                    <li className="" style={{ display: "flex" }}>
                                                        <span className="" style={{ alignItem: "center" }}>
                                                            {" "}
                                                            <span className="dtlSprite icSmallGreyTickThick"></span>
                                                        </span>
                                                        <p className="prmRoomFacilities__item--text" style={{ marginLeft: "10px" }}>
                                                            Room Only
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="prmRoomDtlCard__right">
                                                <p className="font12 appendBottom5" style={{ marginBottom: "10px" }}>
                                                    Per Night
                                                </p>
                                                <p className="grayText font16 lineThrough" style={{ marginBottom: "2px" }}>
                                                    ₹ {hotelDes.rooms[0].price}
                                                </p>
                                                <div className="cstmTooltipHover">
                                                    <p className="font20 blackText latoBlack" style={{ marginBottom: "7px" }}>
                                                        ₹ {hotelDes.rooms[0].price - 999}
                                                    </p>
                                                    <div
                                                        className="cstmTooltip top"
                                                        style={{
                                                            width: "275px",
                                                            height: "auto",
                                                            position: "absolute",
                                                            backgroundColor: "rgb(0, 0, 0)",
                                                            borderRadius: "4px",
                                                            padding: "16px 20px",
                                                            borderWidth: "0px",
                                                            borderStyle: "initial",
                                                            borderImage: "initial",
                                                            top: "30px",
                                                            right: "-65px",
                                                            zIndex: "1",
                                                        }}
                                                    >
                                                        <div className="rmPriceInfo">
                                                            <p className="font12 latoBold whiteText appendBottom10 textLeft" style={{ marginBottom: "10px" }}>
                                                                Per Night
                                                            </p>
                                                            <div className="rmPriceInfo__row">
                                                                <div className="rmPriceInfo__row--left">
                                                                    <p className="font12 latoBold whiteText">For 2 Adults</p>
                                                                </div>
                                                                <div className="rmPriceInfo__row--right">
                                                                    <p className="font12 latoBold whiteText">₹ 5,999</p>
                                                                </div>
                                                            </div>
                                                            <div className="rmPriceInfo__row rmPriceInfo__rowDeal">
                                                                <div className="rmPriceInfo__rowDealrow">
                                                                    <div className="rmPriceInfo__row--left">
                                                                        <p className="font12 latoBold whiteText">Discount by the Property</p>
                                                                    </div>
                                                                    <div className="rmPriceInfo__row--right">
                                                                        <p className="font12 latoBold whiteText directionLtr">- ₹ 3,400</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rmPriceInfo__row">
                                                                <div className="rmPriceInfo__row--left">
                                                                    <p className="font14 latoBold whiteText">Total (Taxes Extra)</p>
                                                                </div>
                                                                <div className="rmPriceInfo__row--right">
                                                                    <p className="font16 latoBold whiteText">₹ 2,599</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="font12 latoBold appendTop5 grayText" style={{ marginTop: "5px" }}>
                                                    + ₹ {getTax(hotelDes.rooms[0].price)} taxes &amp; fees
                                                </p>
                                                <p className="font12 redText appendTop5" style={{ marginTop: "5px" }}>
                                                    Saving ₹ 3,400
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prmRoomDtlCard__footer">
                                        <a className="prmRoomDtlCard__link">VIEW OTHER ROOMS</a>
                                        <span className="bookNowBtn" style={{ fontSize: "12px" }}>
                                            <a className="primaryBtn">BOOK THIS NOW</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="baseRight__item appendTop10">
                                    <div className="altViewOnMap">
                                        <span className="altViewOnMap__cta">View On Map</span>
                                        <img src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-bg-new.png" alt="map" />
                                    </div>
                                    <div className="prmRatingCard">
                                        <div className="prmRatingCard__rating makeRelative greenBg">
                                            <p className="font28 latoBlack">{hotelDes.rating}</p>
                                        </div>
                                        <p className="font16 latoBlack">{hotelDes.rooms[0].averageRatings > 4.5 ? "Excellent" : hotelDes.rating > 4 ? "Very Good" : hotelDes.rooms[0].averageRatings > 3 ? "Good" : "Poor"}</p>
                                        <p className="font12 appendTop3" style={{ marginTop: "-10px" }}>
                                            Based on <b> {hotelDes.reviewsCount} Ratings</b>
                                        </p>
                                        <p className="prmRatingCard__cta" style={{ marginTop: "10px" }}>
                                            <a className="font14 latoBlack capText">Read all Reviews</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="altVs appendTop10">
                                    <div className="altVs__header">
                                        <span className="altVs__header--left">
                                            <img src="https://promos.makemytrip.com/Hotels_product/Value_Stays/App/listing/inlinecards/icon-hdpi.png" alt="" />
                                        </span>
                                        <div className="flexOne" style={{ marginLeft: "5px" }}>
                                            <p className="font18 latoBlack blackText">MMT ValueStays</p>
                                            <p className="appendTop3">
                                                <font color="#000000">Top Rated Affordable Properties</font>
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="altVs__list">
                                        <li className="altVs__list--item">
                                            <span className="altVs__list--itemLeft">
                                                <img src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/tick.png" alt="" />
                                            </span>
                                            <div className="altVs__list--itemRight">
                                                <p className="font14">100% Money Back Guarantee*</p>
                                            </div>
                                        </li>
                                        <li className="altVs__list--item">
                                            <span className="altVs__list--itemLeft">
                                                <img src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/tick.png" alt="" />
                                            </span>
                                            <div className="altVs__list--itemRight">
                                                <p className="font14">Hassle-Free Check-in</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="font11 greyText appendTop10">* if you don’t get clean rooms with TV, AC &amp; Free Wi-Fi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prmDtl__bottom" >
                        <div id="prmDtl__bottom--nav" className="prmDtl__bottom--nav" style={{zIndex:"500"}}>
                            <ul id="navSticky">
                                <li id="overview">
                                    <a className={`navLink ${currentHeight>=0 && currentHeight<1189?"active":""}`}    onClick={() => overview.current.scrollIntoView({  behavior: 'smooth' })}>OVERVIEW</a>
                                </li>
                                <li>
                                    <a className={`navLink ${currentHeight>=1189 && currentHeight<2000?"active":""}`} onClick={() => roomType.current.scrollIntoView({  behavior: 'smooth' })}>ROOMS</a>
                                </li>
                                <li>
                                    <a className={`navLink ${currentHeight>=2000 && currentHeight<2500?"active":""}`} onClick={() => location.current.scrollIntoView({  behavior: 'smooth' })}>LOCATION</a>
                                </li>
                                <li>
                                    <a className={`navLink ${currentHeight>=2500 && currentHeight<3300?"active":""}`} onClick={() => amenity.current.scrollIntoView({  behavior: 'smooth' })}>AMENITIES</a>
                                </li>
                                <li>
                                    <a className={`navLink ${currentHeight>=3300 && currentHeight<4000?"active":""}`} onClick={() => propertyRule.current.scrollIntoView({  behavior: 'smooth' })}>PROPERTY RULES</a>
                                </li>
                                <li>
                                    <a className={`navLink ${currentHeight>=4000?"active":""}`} onClick={() => review.current.scrollIntoView({  behavior: 'smooth' })}>USER REVIEWS</a>
                                </li>
                            </ul>
                        </div>
                        <div className="prmDtl__bottom--content" >
                            <section className="page__section appendBottom35" ref={overview}>
                                <div className="sectionHeader"></div>
                                <div><div className="abtPptDtls">
                                <p className="latoBlack font22 lackTest appendBottom5">
                                    About Welcome {hotelDes.name} | {hotelDes.address.city}, {hotelDes.address.state}
                                </p>
                                <p className="font14 latoBold lineHeight25 appendBottom10" >
                                    <b>{hotelDes.bio}</b>
                                </p><ul className="abtPptDtls__list">
                                    <li className="abtPptDtls__list--item">
                                    Features an outdoor pool and a full-service spa for complete rejuvenation. 
                                    </li>
                                    <li className="abtPptDtls__list--item">Houses multiple dining venues with a range of global delicacies and thoughtfully curated beverages.</li>
                                    <li className="abtPptDtls__list--item">Offers customized cooking classes and cocktail-making sessions with expert in-house chefs.</li>
                                </ul>
                                <ul className="abtPptDtlsTags">
                                    <li className="abtPptDtlsTags__item" >
                                    <img src="https://promos.makemytrip.com/hoteldescription/Restaurantsdesktop.png" alt=""/><span className="abtPptDtlsTags__txt" >Food and Dining</span>
                                    </li>
                                    <li className="abtPptDtlsTags__item"  >
                                    <img src="https://promos.makemytrip.com/hoteldescription/Locationdesktop.png" alt=""/><span className="abtPptDtlsTags__txt" >Location & Surroundings</span>
                                    </li>
                                    <li className="abtPptDtlsTags__item"  >
                                    <img src="https://promos.makemytrip.com/hoteldescription/Propertydesktop.png" alt=""/><span className="abtPptDtlsTags__txt"  >Property Highlights</span>
                                    </li>
                                    <li className="abtPptDtlsTags__item"  >
                                    <img src="https://promos.makemytrip.com/hoteldescription/Accomodationdesktop.png" alt=""/><span className="abtPptDtlsTags__txt"  >Room Details & Amenities</span>
                                    </li>
                                    <li className="abtPptDtlsTags__item"  >
                                    <img src="https://promos.makemytrip.com/hoteldescription/Activitiesdesktop.png" alt=""/><span className="abtPptDtlsTags__txt"  >Activities & Nearby Attractions</span>
                                    </li>
                                    <li className="abtPptDtlsTags__item"  >
                                    <img src="https://promos.makemytrip.com/hoteldescription/Reachdesktop.png" alt=""/><span className="abtPptDtlsTags__txt"  >How to Reach the property</span>
                                    </li>

                                </ul>
                                </div></div>
                            </section>
                            <section className="page__section appendBottom35" ref={roomType}>
                                <div className="sectionHeader"></div>
                                <div id="packageroomcontainer"></div>
                                <div className="latoBlack font20 appendBottom15" id="selectroomcontainer">Select Rooms</div>
                                <div className="rmTypeFilter appendBottom20">
                                    <ul className="rmTypeFilter__list">
                                        <li className="rmTypeFilter__list--item">
                                            <div className="checkmarkOuter">
                                                <input type="checkbox" id="NON_LUXE_PACKAGE" />
                                                <label for="NON_LUXE_PACKAGE">
                                                    <span className="latoBold font14">MMT Package</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="rmTypeFilter__list--item">
                                            <div className="checkmarkOuter">
                                                <input type="checkbox" id="NON_LUXE_PACKAGE" />
                                                <label for="NON_LUXE_PACKAGE">
                                                    <span className="latoBold font14">Free Cancellation</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="rmTypeFilter__list--item">
                                            <div className="checkmarkOuter">
                                                <input type="checkbox" id="NON_LUXE_PACKAGE" />
                                                <label for="NON_LUXE_PACKAGE">
                                                    <span className="latoBold font14">Breakfast Included</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="rmTypeFilter__list--item">
                                            <div className="checkmarkOuter">
                                                <input type="checkbox" id="NON_LUXE_PACKAGE" />
                                                <label for="NON_LUXE_PACKAGE">
                                                    <span className="latoBold font14">Breakfast & Lunch/Dinner Included</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="rmTypeFilter__list--item">
                                            <div className="checkmarkOuter">
                                                <input type="checkbox" id="NON_LUXE_PACKAGE" />
                                                <label for="NON_LUXE_PACKAGE">
                                                    <span className="latoBold font14">All Meals Included</span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rmSelectRooms" id="RoomType" >
                                    <div className="rmHeader ">
                                        <div className="rmHeader__item">
                                            <div className="rmTypeDropDown hdr">
                                                <p className="rmTypeDropDown__heading" data-testid="rmTypeDropDown__heading">{hotelDes.rooms.length} Room Types</p>
                                            </div>
                                        </div>
                                        <div className="rmHeader__item">
                                            <span className="font14 latoBlack capText">Options</span>
                                        </div>
                                        <div className="rmHeader__item">
                                            <span className="font14 latoBlack capText">Price</span>
                                        </div>
                                    </div>
                                    <div className="rmSelectCont appendBottom20">
                                        <div className="rmSelect__card">
                                            <div className="rmSelect__card--wrap">
                                                <div className="rmSelect__card--wrapRow" id="room0">
                                                    <div className="rmSelect__card--left">
                                                        <div className="rmType ">
                                                            <div className="rmPhotos appendBottom15 ">
                                                                <span className="rmPhotos__tag" data-testid="6002-roomPhotosCta">5 photos <span className="dtlSprite icArowBlue appendLeft10"></span></span>
                                                                <div className="slick-slider slick-initialized" dir="ltr">
                                                                    <div className="slick-arrow slick-prev slick-disabled" style={{display: "block"}}></div>
                                            
                                                                    <div className="slick-list">
                                                                        <div className="slick-track" style={{width: "1885px", opacity: "1" ,transform: "translate3d(0px, 0px, 0px)"}} onClick={handleChangeShowGallery}>
                                                                            <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{outline: "none", width: "377px"}}>
                                                                                <div>
                                                                                    <div className="rmPhotos__item pointer" tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                                                                        <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201309021636532583-3281312-e71f687002c411e99f450242ac110003.jpg?downsize=377:200&amp;crop=377:200" alt=""/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-index="1" className="slick-slide" tabindex="-1" aria-hidden="true" style={{outline:"none",width:"377px"}}>
                                                                            </div>
                                                                            <div data-index="2" className="slick-slide" tabindex="-1" aria-hidden="true" style={{outline:"none",width:"377px"}}></div>
                                                                            <div data-index="3" className="slick-slide" tabindex="-1" aria-hidden="true" style={{outline:"none",width:"377px"}}></div>
                                                                            <div data-index="4" className="slick-slide" tabindex="-1" aria-hidden="true" style={{outline:"none",width:"377px"}}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h2 className="rmType__roomName" data-testid="rmType__roomName">Deluxe Room Double</h2>
                                                            <ul className="rmTypeList appendTop10 vertical">
                                                            <li className="rmTypeList__item"><span className="rmTypeList__item--icon appendRight10"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/size.png" alt="336 sq.ft"/></span>
                                                                <span className="makeFlex column column-text"><span className="rmTypeList__item--text">336 sq.ft</span></span></li>
                                                                <li className="rmTypeList__item"><span className="rmTypeList__item--icon appendRight10"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/view.png" alt="City View"/></span><span className="makeFlex column column-text"><span className="rmTypeList__item--text">City View</span></span></li><li className="rmTypeList__item"><span className="rmTypeList__item--icon appendRight10"><img src="https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/bed.png" alt="Double Bed"/></span><span className="makeFlex column column-text"><span className="rmTypeList__item--text">Double Bed</span></span></li>
                                                            </ul>
                                                            <ul className="rmAmnt appendTop20">
                                                                <li>Free Wi-Fi</li>
                                                                <li>Air Conditioning</li>
                                                                <li>Heater</li>
                                                                <li>Electric Kettle</li>
                                                                <li>Room Service</li>
                                                                <li>Mineral Water</li>
                                                            </ul>
                                                            <p className="appendTop20">
                                                                <a className="latoBlack font14 capText">More Details</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="rmSelect__card--right">
                                                        <div className="rmSelect__card--row ">
                                                            <div className="rmSelect__card--rowLeft">
                                                                <div className="rmRatePlan ">
                                                                    <div className="makeFlex end flexWrap">
                                                                        <span className="rmRatePlan__rec appendRight3">RECOMMENDED</span>
                                                                    </div>
                                                                    <h3 className="rmRatePlan__heading">Room Only</h3>
                                                                    <ul className="rmRatePlan__list">
                                                                        <li className="rmRatePlan__list--item">
                                                                            <span className="rmRatePlan__list--itemIcon">
                                                                                <span className="dtlSprite icCircularRedCross"></span>
                                                                            </span>
                                                                            <div className="flexOne rmRatePlan__list--dtl">
                                                                                <p className="flexOne rmRatePlan__list--text">
                                                                                    <span>Non-Refundable</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rmRatePlan__list--item">
                                                                            <span className="rmRatePlan__list--itemIcon">
                                                                                <span className="dtlSprite icCircularRedCross"></span>
                                                                            </span>
                                                                            <div className="flexOne rmRatePlan__list--dtl">
                                                                                <p className="flexOne rmRatePlan__list--text">
                                                                                    <span>No meals included</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rmRatePlan__list--item">
                                                                            <span className="rmRatePlan__list--itemIcon">
                                                                                <span className="dtlSprite icCircularTick"></span>
                                                                            </span>
                                                                            <div className="flexOne rmRatePlan__list--dtl">
                                                                                <p className="rmRatePlan__list--text">Early Bird offer</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <p className="rmRatePlan__link appendTop15">
                                                                        <a className="latoBlack font12 capText" id="detpg_options_read_more_btn" data-testid="990579539805:MSE:1126:MSE:INGO-readMore">More Details</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="rmSelect__card--rowRight">
                                                                <div className="rmPayable ">
                                                                    <div className="rmPayable__offer " id="dealOfTheDay">
                                                                        <p>Last minute deal! This a special rock bottom price offered by the hotel for clearance!</p>
                                                                        <p className="font12">Book now for extra savings!</p>
                                                                    </div>
                                                                    <div className="rmPayable__dtl">
                                                                        <div className="rmPayable__dtl--left">
                                                                            <p className="grayText appendBottom5" id="priceDisplayMessage">Per Night</p>
                                                                            <p className="font16 latoBold grayText appendBottom3 lineThrough">₹ 6,960</p>
                                                                            <div className="appendTop5 cstmTooltipHover">
                                                                                <p className="font22 latoBlack">₹ 6,264</p>
                                                                            </div>
                                                                            <div className="appendTop5">
                                                                                <p className="font14 latoBold">
                                                                                    <span dir="ltr">+₹ 752</span>taxes &amp; fees
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rmPayable__dtl--right"  onClick={()=>handleSelectRoom(hotelDes.rooms[0].id)}>
                                                                            <a className="primaryBtn rmPayable__dtl--cta " data-testid="990579539805:MSE:1126:MSE:INGO-selectRoom">
                                                                                <p style={{color:"white"}}>SELECT ROOM</p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rmSelect__card--row ">
                                                            <div className="rmSelect__card--rowLeft">
                                                                <div className="rmRatePlan ">
                                                                    <div className="makeFlex end flexWrap">
                                                                        <span className="rmRatePlan__rec appendRight3">RECOMMENDED</span>
                                                                    </div>
                                                                    <h3 className="rmRatePlan__heading">Room Only</h3>
                                                                    <ul className="rmRatePlan__list">
                                                                        <li className="rmRatePlan__list--item">
                                                                            <span className="rmRatePlan__list--itemIcon">
                                                                                <span className="dtlSprite icCircularRedCross"></span>
                                                                            </span>
                                                                            <div className="flexOne rmRatePlan__list--dtl">
                                                                                <p className="flexOne rmRatePlan__list--text">
                                                                                    <span>Non-Refundable</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rmRatePlan__list--item">
                                                                            <span className="rmRatePlan__list--itemIcon">
                                                                                <span className="dtlSprite icCircularRedCross"></span>
                                                                            </span>
                                                                            <div className="flexOne rmRatePlan__list--dtl">
                                                                                <p className="flexOne rmRatePlan__list--text">
                                                                                    <span>No meals included</span>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li className="rmRatePlan__list--item">
                                                                            <span className="rmRatePlan__list--itemIcon">
                                                                                <span className="dtlSprite icCircularTick"></span>
                                                                            </span>
                                                                            <div className="flexOne rmRatePlan__list--dtl">
                                                                                <p className="rmRatePlan__list--text">Early Bird offer</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <p className="rmRatePlan__link appendTop15">
                                                                        <a className="latoBlack font12 capText" id="detpg_options_read_more_btn" data-testid="990579539805:MSE:1126:MSE:INGO-readMore">More Details</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="rmSelect__card--rowRight">
                                                                <div className="rmPayable ">
                                                                    <div className="rmPayable__offer " id="dealOfTheDay">
                                                                        <p>Last minute deal! This a special rock bottom price offered by the hotel for clearance!</p>
                                                                        <p className="font12">Book now for extra savings!</p>
                                                                    </div>
                                                                    <div className="rmPayable__dtl">
                                                                        <div className="rmPayable__dtl--left">
                                                                            <p className="grayText appendBottom5" id="priceDisplayMessage">Per Night</p>
                                                                            <p className="font16 latoBold grayText appendBottom3 lineThrough">₹ 6,960</p>
                                                                            <div className="appendTop5 cstmTooltipHover">
                                                                                <p className="font22 latoBlack">₹ 6,264</p>
                                                                            </div>
                                                                            <div className="appendTop5">
                                                                                <p className="font14 latoBold">
                                                                                    <span dir="ltr">+₹ 752</span>taxes &amp; fees
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="rmPayable__dtl--right" onClick={()=>handleSelectRoom(hotelDes.rooms[1].id)}>
                                                                            <a className="primaryBtn rmPayable__dtl--cta " data-testid="990579539805:MSE:1126:MSE:INGO-selectRoom">
                                                                                <p style={{color:"white"}}>SELECT ROOM</p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </section>

                            <span ref={location}><Map ></Map></span>
                            <span ref={amenity}><Amenity></Amenity></span>
                            <span ref={propertyRule}><PropertyRules></PropertyRules></span>
                            <span ref={review}><UserReviews></UserReviews></span>
                        </div>
                    </div>
                </div>
            </div>
        </div></>}
        <PhotoGallery  showGallery={showGallery} handleChangeShowGallery={handleChangeShowGallery} hotelInfo={hotelDes}></PhotoGallery>
    </>;
    
    }
    else{
        return <></>
    }
   
}