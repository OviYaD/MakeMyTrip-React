import React,{useEffect,useState} from "react";
import {useSelector} from "react-redux";

export const Amenity = () => {
    const [tagList,setTags] = useState();
    const [ruleList,setRuleList] = useState();
    const hotelDesc = useSelector((state)=>state.hotelDesc);
    
    // console.log(hotelDesc.propertyRules)
    
    useEffect(()=>{
        getTags();
    },[])

    const getTags = () =>{
        let tags=[];
        hotelDesc.rooms[0].amenities.forEach((rule)=>{
            if(!tags.includes(rule.tag.title)){
                tags.push(rule.tag.title);
            }
        })
        setTags(tags);
        getRuleList(tags);
    }

    const getRuleList = (tags) =>{
        let list={};
        // console.log("tag list/////////",tags)
        tags.forEach((tag)=>{
            const l=hotelDesc.rooms[0].amenities.filter((rule)=>{
                return rule.tag.title==tag
            })
            list={
                ...list,
                [tag]:l
            }
        })
        setRuleList(list);
    }

   if(tagList){
    return <>
    <section className="page__section appendBottom35">
        <div className="sectionHeader" id="Facilities"></div>
        <div className="sigam">
            <p className="sigam__title">Signature Amenities and Experiences</p>
            <div className="slick-slider slick-initialized" dir="ltr" style={{ marginTop: "20px", marginBottom: "20px" }}>
                <button type="button" data-role="none" className="slick-arrow slick-prev slick-disabled" style={{ display: "block" }}>
                    Previous
                </button>
                <div className="slick-list">
                    <div className="slick-track" style={{ width: "1533px", opacity: "1", transform: "translate3d(0px, 0px, 0px)" }}>
                        <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "511px" }}>
                            <div>
                                <div className="sigam__card" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="//r1imghtlak.mmtcdn.com/69e419244bce11eaa4540242ac110002.jpg?&amp;output-quality=75&amp;output-format=jpg&amp;downsize=501:280&amp;crop=501:280" />
                                    <p className="sigam__card--title">Culinary Classes by Expert Chefs</p>
                                </div>
                            </div>
                        </div>
                        <div data-index="1" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "511px" }}>
                            <div>
                                <div className="sigam__card" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="//promos.makemytrip.com/Hotels_product/Luxe/Stock/Mixology%202.webp?downsize=501:280&amp;crop=501:280" />
                                    <p className="sigam__card--title">Interactive Mixology Sessions</p>
                                </div>
                            </div>
                        </div>
                        <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "511px" }}>
                            <div>
                                <div className="sigam__card" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                    <img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201309021636532583-87d3cf9e8bb811eba9d50242ac110002.jpg?&amp;output-quality=75&amp;output-format=jpg&amp;downsize=501:280&amp;crop=501:280" />
                                    <p className="sigam__card--title">Well Equipped Fitness Centre</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" data-role="none" className="slick-arrow slick-next" style={{ display: "block" }}>
                    Next
                </button>
            </div>
        </div>
        <div className="appendTop52">
            <div className="fclty">
                <p className="fclty__title">Amenities at Welcomhotel by ITC Hotels, Dwarka, New Delhi</p>
                <div className="fclty__header">
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <img src="//promos.makemytrip.com/images/highlighted/lounge.png" alt="Lounge" />
                        </span>
                        <span className="latoBold font16">Lounge</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <img src="//promos.makemytrip.com/images/highlighted/free_parking.png" alt="Free Parking" />
                        </span>
                        <span className="latoBold font16">Free Parking</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <span className="sprite facilityTickIcon"></span>
                        </span>
                        <span className="latoBold font16">Business Centre</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <img src="//promos.makemytrip.com/images/highlighted/conference_room.png" alt="Conference Room" />
                        </span>
                        <span className="latoBold font16">Conference Room</span>
                    </p>
                    <p>
                        <span className="fclty__header--iconWrapper appendRight12">
                            <img src="//promos.makemytrip.com/images/highlighted/childcare_services.png" alt="Childcare Services" />
                        </span>
                        <span className="latoBold font16">Childcare Services</span>
                    </p>
                </div>
                <div className="fcltyLst appendBottom20">
                {tagList.slice(0,5).map((tag,i)=>{
                    return <div className="fcltyLst_item" key={i}>
                    <p className="font16 latoBlack appendBottom10" style={{textTransform:"capitalize"}}>{tag}</p>
                    <ul>
                        {ruleList[tag].slice(0,5).map((rule,index)=>{
                            return <li key={index} className="font14 lineHight22 appendBottom3">
                                - <span>{rule.title}</span>
                            </li>
                        })}
                    </ul>
                    </div>
                })}
                </div>
                <a className="font14 latoBlack blueText">ALL {tagList.length} AMENITIES</a>
                <span></span>
            </div>
        </div>
    </section>
</>;
   }

}