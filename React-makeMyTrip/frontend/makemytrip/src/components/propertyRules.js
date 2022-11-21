import React,{useEffect,useState} from "react";
import {useSelector} from "react-redux";
import { filters } from '../utils/filterList';
export const PropertyRules = () => {
    const [tagList,setTags] = useState();
    const [ruleList,setRuleList] = useState();
    const hotelDesc = useSelector((state)=>state.hotelDesc);
    // console.log(hotelDesc.propertyRules)
    
    useEffect(()=>{
        getTags();
    },[])

    const getTags = () =>{
        let tags=[];
        hotelDesc.propertyRules.forEach((rule)=>{
            if(!tags.includes(rule.tag.title)){
                tags.push(rule.tag.title);
            }
        })
        // console.log("tags list....",tags);
        setTags(tags);
        getRuleList(tags);
    }

    const getRuleList = (tags) =>{
        let list={};
        // console.log("tag list/////////",tags)
        tags.forEach((tag)=>{
            const l=hotelDesc.propertyRules.filter((rule)=>{
                return rule.tag.title==tag
            })
            list={
                ...list,
                [tag]:l
            }
            // console.log("lsit segregation....",list);
        })
        setRuleList(list);
    }

   if(tagList){
    return <>
        <section class="page__section appendBottom35">
    <div class="" id="HouseRules"></div>
    <div class="htlRules">
        <p class="font22 latoBlack blackText luxe__title appendBottom15">Property Rules</p>
        
        {/* <div class="cplFriendly appendTop10">
            <span class="appendRight10"><img src="https://promos.makemytrip.com/Hotels_product/Details/Couplefriendly2x.png" alt="Couple, Bachelor Rules" width="49" height="48" /></span>
            <div class="cplFriendly__desc">
                <div class="makeFlex hrtlCenter"><span class="latoBlack font14 blackText">Couple, Bachelor Rules</span> <span class="cplFriendly__tag appendLeft10">Couple Friendly</span></div>
                <p class="appendTop3">Unmarried couples/guests with Local IDs are allowed.</p>
            </div>
        </div> */}

        
        {
            tagList.slice(0,5).map((tag,i)=>{
                return <>
                <span class="htlRules__list--category" key={i}>
                    {tag}<span>&nbsp;({ruleList[tag].length}) </span>
                </span>
                <div class="htlRules__list grid2">
                    <div class="htlRules__list--Col1">
                        {ruleList[tag].slice(0,Math.ceil(ruleList[tag].length/2)).map((rule,index)=>{
                            return <div key={index} class="htlRules__list--item"><span class="greyDot appendRight10"></span><span class="font14 lineHight18">{rule.title}</span></div>

                        })}
                    </div>
                    <div class="htlRules__list--Col2">
                        {ruleList[tag].slice(ruleList[tag].length/2).map((rule,index)=>{
                            return <div class="htlRules__list--item"><span class="greyDot appendRight10"></span><span class="font14 lineHight18">{rule.title}</span></div>

                        })}
                    </div>
                </div>
                </>
            })
        }
        <a class="htlRules__viewAllBtn inlineFlex capText">Read All Property Rules</a>
    </div>
</section>

    </>
   }
}