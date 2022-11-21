import React,{useState,useEffect} from 'react';
// import { ShimmerContentBlock } from "react-shimmer-effects";
// import { Image, Shimmer } from 'react-shimmer'
import LoadingImage from "../assets/image/loadingImage.jpeg"
export const PhotoGallery = ({showGallery,handleChangeShowGallery,hotelInfo}) => {
    const [tags,setTags]=useState([]);
    const [activeTag,setActiveTag] = useState("all");
    const [images,setImages] = useState([]);
    
    useEffect(()=>{
        const tagList=new Set(["all"]);
        hotelInfo.pictures.forEach((item,index)=>{
            tagList.add(item.tag.title);
        })
        const ele=hotelInfo ? hotelInfo.pictures.map((image) => `${image.url}?random=${Math.round(Math.random() * 1000)}`) : []
        setTags(Array.from(tagList));
        setImages(ele);

    },[activeTag]);

    const getTagImages = (e) => {
        const tag=e.target.getAttribute("data-tagname");
        setActiveTag(tag);
        if("all"===tag){
            const ele=hotelInfo ? hotelInfo.pictures.map((image) => `${image.url}?random=${Math.round(Math.random() * 1000)}`) : []
            setImages(ele);
        }
        else{
            const ele=hotelInfo ? hotelInfo.pictures.map((img) => {
                if(tag===img.tag.title)
                return `${img.url}?random=${Math.round(Math.random() * 1000)}`
            }) : []
            // hotelInfo.pictures.forEach((item,index)=>{
            //     console.log(item)
            // })
            setImages(ele);
            
        }

    }
    if(showGallery)
    {
    return <>
    <div className="_PhotoGallery backDrop" style={{zIndex:"550"}}>
        <div className="photoGalleryOuter" style={{marginTop:"-20px"}}>
            <div className="phtGallry__header phtGallry__header__full">
                <div className="makeFlex hrtlCenter appendBottom20">
                    <div className="typeBHeading">
                    <p className="latoBlack font22 whiteText appendRight20">{hotelInfo.name}</p>
                    </div>
                    <a className="photoType__cta selected" href="javascript:void(0);" style={{marginTop:"auto",marginBottom:"auto",marginLeft:"10px"}}>Property Photos</a>
                    <a className="photoType__cta" href="javascript:void(0);" style={{marginTop:"auto",marginBottom:"auto"}}>Traveller Photos</a>
                    <div className="phtGallry__header--right">
                        <ul className="phtGallry__viewtype">
                            <li className="selected"><span className="sprite icGridSelected"></span></li>
                            <li className=""><span className="sprite icListDefault"></span></li>
                        </ul>
                        <a className="closeBtn" onClick={handleChangeShowGallery}></a>
                    </div>
                </div>
                <div className="makeFlex spaceBetween">
                    <ul className="hotelTags font12 latoBold whiteText">
                        {/* <li className="active">All</li> */}
                        {tags.map((tag,index)=>{
                            return <><li className={`${activeTag==tag?"active":""}`} key={index} data-tagname={tag} onClick={getTagImages}>{tag}</li></>;
                        })}
                    </ul>
                    <span className="pushRight noShrink"><a className="primaryBtn">SELECT ROOM</a></span>
                </div>
            </div>
            <span></span>
            <span>
                <div className="phtGallry__header__blank"></div>
                <div className="gridView" style={{marginTop:"70px"}}>
                    <div>
                        <p className="lobHeading font18 latoBold whiteText"></p>
                        <ul className="imageListing">
                        {images.map((image,index)=>{
                            console.log("loaded image",image)
                            if(image){
                                return <>
                            <li id={index} key={index}>
                                <img
                                    src={image}
                                />
                            </li>
                            </>;
                            }
                            else{
                                return <>
                            <li id={index} key={index}>
                            
                                {/* <ShimmerContentBlock></ShimmerContentBlock> */}
                            </li>
                            </>;
                            }
                        })}
                        </ul>
                    </div>
                </div>
            </span>
        </div>
    </div>

    {/* <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} />
    <ShimmerContentBlock title text cta thumbnailWidth={370} thumbnailHeight={370} /> */}
    </>
    }
}