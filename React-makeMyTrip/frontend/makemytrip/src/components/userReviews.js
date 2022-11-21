import React from 'react';
import {useSelector} from "react-redux";
import { useState } from 'react';
import { useEffect } from 'react';

export const UserReviews = () => {
    const [reviews,setReview] = useState();
    const hotelDesc = useSelector((state)=>state.hotelDesc);

    useEffect(()=>{
        setReview(hotelDesc.rooms[0].reviews);
    },[]);

    

    if(reviews){
        // {console.log("reviews......",reviews)}
        return <>
        <section class="page__section appendBottom35">
    <div class="" id="UserReviews"></div>
    <div class="appendTop30 appendBottom35">
        <div class="pbg">
            <p class="pbg__title luxe__title">Photos by Guests</p>
            <div class="pbg__content">
                <div class="main__img">
                    <img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71184200704790/QS1042/QS1042-Q1/1646636435915.jpeg" loading="lazy" alt="Pool IMAGE by Sahil Chhillar" />
                    <p class="main__img--tag"><span class="dtlSprite icCameraBlue appendRight10"></span><span>191 GUEST PHOTOS</span></p>
                </div>
                <img class="right__img" loading="lazy" src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH7413549129340/QS1042/QS1042-Q1/20200128_170428.jpg" alt="Pool IMAGE by Sabrina Stocker " />
                <img class="right__img--bottomLeft" src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH75218220474102/QS1042/QS1042-Q1/IMG_20220815_162935-01.jpeg" loading="lazy" alt="Pool IMAGE by Virat Bhaskarwar" />
                <img class="right__img--bottomRight" src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH7219834088346/QS1042/QS1042-Q1/IMG_20191006_152627.jpg" loading="lazy" alt="Pool IMAGE by Ashwani Maheshwari" />
            </div>
        </div>
    </div>
    <div id="ReviewRatingWrapper">
        <section id="review" class="page-section appendBottom35">
            <div class="makeFlex column usrRevwHdr">
                <h2 class="txtHeading latoBlack font20 premium__title appendBottom15">User Ratings &amp; Reviews</h2>
                <p class="grayText font14 appendBottom10">Important information that you need to know before you book!</p>
                <div class="_RatingReview">
                    <div class="makeFlex column usrRevwHdr">
                        <ul class="latoBold makeFlex usrRevwHdr__tabs">
                            <li class="usrRevwHdr__tab activeTab"><span class="font16 blueText latoBold capText">All</span></li>
                            <li class="usrRevwHdr__tab"><span class="font16 blueText latoBold capText">FAMILY</span></li>
                            <li class="usrRevwHdr__tab"><span class="font16 blueText latoBold capText">COUPLE</span></li>
                            <li class="usrRevwHdr__tab"><span class="font16 blueText latoBold capText">GROUP</span></li>
                            <li class="usrRevwHdr__tab"><span class="font16 blueText latoBold capText">BUSINESS</span></li>
                            <li class="usrRevwHdr__tab"><span class="font16 blueText latoBold capText">SOLO</span></li>
                        </ul>
                        <div class="usrRevwHdr__ratingsCard">
                            <div class="usrRevwHdr__ratingsCard--ratings">
                                <div class="usrRevwHdr__ratingBox blueBg"><span class="whiteText font28 latoBlack">4.6</span></div>
                                <div class="makeFlex column">
                                    <p class="font14 latoBlack capText darkBlueText">Excellent</p>
                                    <p class="font12 latoRegular lineHight20">
                                        <span>
                                            <span class="latoBold">467</span>
                                             User Reviews
                                        </span>
                                        <span>  and  </span>
                                        <span>
                                            <span class="latoBold">732</span>
                                             Ratings
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="usrRevwHdr__concepts">
                                <div class="rtngCard__progressBar--col">
                                    <p class="makeFlex spaceBetween font11 blackText latoBold appendBottom10"><span>Child friendliness</span><span>4.5</span></p>
                                    <div class="progressDefault"><div class="progressFilled blueBg"  style={{width:" 90%"}}></div></div>
                                </div>
                                <div class="rtngCard__progressBar--col">
                                    <p class="makeFlex spaceBetween font11 blackText latoBold appendBottom10"><span>Location</span><span>4.5</span></p>
                                    <div class="progressDefault"><div class="progressFilled blueBg"  style={{width:" 90%"}}></div></div>
                                </div>
                                <div class="rtngCard__progressBar--col">
                                    <p class="makeFlex spaceBetween font11 blackText latoBold appendBottom10"><span>Facilities</span><span>4.7</span></p>
                                    <div class="progressDefault"><div class="progressFilled blueBg"  style={{width:" 94%"}}></div></div>
                                </div>
                                <div class="rtngCard__progressBar--col">
                                    <p class="makeFlex spaceBetween font11 blackText latoBold appendBottom10"><span>Value for Money</span><span>4.3</span></p>
                                    <div class="progressDefault"><div class="progressFilled blueBg"  style={{width:" 86%"}}></div></div>
                                </div>
                                <div class="rtngCard__progressBar--col">
                                    <p class="makeFlex spaceBetween font11 blackText latoBold appendBottom10"><span>Food</span><span>4.6</span></p>
                                    <div class="progressDefault"><div class="progressFilled blueBg"  style={{width:" 92%"}}></div></div>
                                </div>
                            </div>
                        </div>
                        <div class="recentRatingsWrapper">
                            <div class="recentRatingsWrapper__header">
                                <p class="recentRatingsWrapper__header--headerText">Last 10 Customer Ratings</p>
                                &nbsp;( Latest Rating First )
                            </div>
                            <ul class="recentRatingsWrapper__list makeFlex hrtlCenter left">
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>4</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>3</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>4</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                                <li class="recentRatingsWrapper__list--item appendRight12"><span>5</span></li>
                            </ul>
                        </div>
                        <div class="usrRevwHdr__fltrWrapper">
                            <div class="flexOne">
                                <p class="font16 latoBlack appendBottom15"></p>
                                <div class="makeFlex top spaceBetween">
                                    <ul class="rtngCard__tags">
                                        <li class="selected" id="tag_999">All Reviews</li>
                                        <li class="" id="tag_0">Beach</li>
                                        <li class="" id="tag_1">Location</li>
                                        <li class="" id="tag_2">Distance from Beach</li>
                                        <li class="" id="tag_3">Connectivity</li>
                                        <li class="" id="tag_4">Nightlife</li>
                                        <li class="" id="tag_5">Patio</li>
                                        <li class="" id="tag_6">Pool</li>
                                    </ul>
                                    <a class="latoBlack appendTop10">+ 29 More</a>
                                    <div class="sortInput">
                                        <span class="font12 latoBold prependRight5">Sort By:</span>
                                        <label class="selectBoxWraper" for="sortBy">
                                            <select class="selectBox font12 latoRegular" id="sortBy">
                                                <option selected="" value="Latest first">Latest first</option>
                                                <option value="Helpful first">Helpful first</option>
                                                <option value="Positive first">Positive first</option>
                                                <option value="Negative first">Negative first</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="font16 appendBottom20 appendTop15 latoBlack">Featured Reviews by Family Travellers</p>
                    <span></span>
                    <div class="reviewBox topBgNew">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 darkGreyText">Guest satisfaction to another level</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Suraj Hegde . Family Traveller . Jan 06, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    Had a short 2 day stay with family with my 1 year old kid. The staff were courteous all the time. Special mention to ms prince who took extra care of us throughout our stay. The strength of any
                                    institution lies in the staff. I was surprised to know that many staff were there with the hotel for more than 20 years and they were happy serving us. Rooms were good and clean. Special infant food was
                                    sent to us. Buffet breakfast spread was wonderful and tasty. Beach was clean though its not private beach. U can use local watersports. Pool is little small for the property. Susegado (beach restaurants)
                                    was okay. Could not true riverside restaurant.
                                </p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <span></span>
                    <div class="reviewBox topBgNew">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 darkGreyText">Amazing experience and memories for a lifetime</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Ankit Mehra . Family Traveller . Aug 11, 2021
                                </p>
                                <p class="font14 lineHight22">
                                    Can't praise enough the courtesy and efforts of the staff at this property on how they make one feel so special. They made all of feel vip and were doing the same with all the guests at the resort. They
                                    were just awesome and i am saying this when i travel extensively both domestically and internationally for work. The facilities at the resort were also amazing and we faced zero issues. It was one of
                                    those trips which made my family feel sad to come back home. Will be visiting this resort again surely!
                                </p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <span></span>
                    <div class="reviewBox topBgNew">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 darkGreyText">Beautiful stay feel like home. One of our best stays.</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Milan Thakar . Family Traveller . Feb 16, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    Right from entry, you feel the warmth and supreme hospitality by all staff of the leela, goa. They showed us the whole 75 acre property in golfcar and was amazing to explore. Golf course, spice and herbal
                                    garden, riverside restaurant, sussegado beachside restaurant, just kids -kids play area and room and kids pool, artificial lake side living rooms all added to our memorable stay at the leela goa. Thanks
                                    to the leela team for such a great experience!
                                </p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <span></span>
                    <div class="reviewBox topBgNew">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 darkGreyText">Excellent Stay</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Satyabrat Gupta . Family Traveller . Dec 12, 2021
                                </p>
                                <p class="font14 lineHight22">
                                    The property is stunning, a lot of activities to explore inside the hotel. The service was very prompt and gracious. Private beach was secluded and well maintained. Breakfast is too good to be true. There
                                    is also a fisherman's wharf at walking distance. Cabs are available at a moment's notice. Would definitely recommend staying here.
                                </p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <span></span>
                    <div class="reviewBox topBgNew">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 darkGreyText">Fabulous property</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    HITESH PARVANI . Family Traveller . Feb 23, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    Location is awesome. Private beach access. Food was awesome with varieties and taste. Well maintained hygiene throught the property. Felt completely safe in the property. Room, washrooms and common area
                                    washrooms were cleaned and hygiene upto the mark. Staff members were so polite. If planning in south goa, don't miss this property
                                </p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <p class="font16 appendBottom20 appendTop35 latoBlack">Other Reviews</p>
                    <span></span>
                    {reviews.map((review,index)=>{
                        return <div class="reviewBox" key={index}>
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">{review.title}</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  {review.rating}</span> by 
                                    {review.user.profile.firstName} {review.user.profile.lastName}. Family Traveller . {review.updatedAt.slice(0,10)}
                                </p>
                                <p class="font14 lineHight22">{review.description}</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    })}
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Excellent</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    priyanka rathee . Family Traveller . Oct 30, 2022
                                </p>
                                <p class="font14 lineHight22">Best hotel in goa, beautiful, amazing staff, room r superb</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Excellent Stay</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Amalanadan Aruldas Manuel . . Oct 27, 2022
                                </p>
                                <p class="font14 lineHight22">What about the gst bill. What about the gst bill?</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Nov 03, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear mr. Aruldas, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us at the st. Regis goa resort, and we cannot wait to welcome you back
                                to the best address in goa. Kind regards, satish kumar general m... 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>


                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Location is good but not the service</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  3.0</span> by 
                                    Sreekumar Somasundaran . Family Traveller . Oct 09, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    They seems to have short in number of staffs in restaurant to handle the crowd. Most of the time we felt the crowd unattended like having at the temple counter opening for holy meal.
                                </p>
                                <ul class="imgList appendTop10">
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71097227400772/QS1042/QS1042-Q1/20221003_162901.jpg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71097227400772/QS1042/QS1042-Q1/20221003_164714.jpg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71097227400772/QS1042/QS1042-Q1/20221003_165013.jpg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                </ul>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Food</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  4.0</span> by 
                                    Sanya Gupta . Family Traveller . Sep 08, 2022
                                </p>
                                <p class="font14 lineHight22">Breakfast &amp; lunch is very good but dinner quality is very poor</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 15, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear sanya, it was a pleasure having you stay with us at the leela goa and thank you for taking the time to review out resort. We are happy to learn that you overall had a comfortable stay and that your
                                breakfast and lunch experience was to your satisfaction. We however, also... 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Food</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  4.0</span> by 
                                    Anshul Gupta . Family Traveller . Sep 06, 2022
                                </p>
                                <p class="font14 lineHight22">Lunch &amp; breakfast are very good but dinner quality not good like leela</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 13, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear mr. Gupta, we are very happy to know that you had a pleasant and enjoyable stay with us. Thank you for taking the time to review our hotel and we look forward to the opportunity of welcoming you back to
                                the leela goa. Kind regards, satish kumar general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Bad experience</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  1.0</span> by 
                                    Vishal Nigam . Couple Traveller . Sep 04, 2022
                                </p>
                                <p class="font14 lineHight22">Room was not clean properly and services were delayed</p>
                                <ul class="imgList appendTop10">
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73198223144790/QS1042/QS1042-Q1/1662302076776.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73198223144790/QS1042/QS1042-Q1/1662302076847.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73198223144790/QS1042/QS1042-Q1/1662302076799.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73198223144790/QS1042/QS1042-Q1/1662302076696.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73198223144790/QS1042/QS1042-Q1/1662302076758.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73198223144790/QS1042/QS1042-Q1/1662302076739.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                </ul>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 13, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear mr. Nigam, thank you for taking the time to share your feedback and for having stayed at the leela goa. I am certainly disappointed to read that your experience at our resort did not meet your
                                expectations. Your comments have been a very good learning for us and your fee... 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Review leela stay</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    PAYOD SONI . Family Traveller . Sep 04, 2022
                                </p>
                                <p class="font14 lineHight22">It was wonderful stay staff are very helpful services are great. Overall value for miney</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 13, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear payod, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar
                                general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Best resort in goa</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    mohammed khan . Couple Traveller . Aug 31, 2022
                                </p>
                                <p class="font14 lineHight22">Amazing location, views and food</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 13, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear mr. Khan, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar
                                general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Property is under maintenance and is sold to jw group</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  3.0</span> by 
                                    Santosh Harapanahalli . Family Traveller . Aug 27, 2022
                                </p>
                                <p class="font14 lineHight22">Very much unexpected. This was my third time stay in leela standards have come down. No proper response from staff. Visit once it’s jw.</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 13, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear mr. Harapanahalli, thank you for taking the time to share your feedback and for having stayed at the leela goa. I am certainly disappointed to read that your experience at our resort, during this visit,
                                did not meet your expectations. Your feedback is greatly valued and ... 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Relaxing and peaceful stay</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  4.0</span> by 
                                    Susmita Sen . Couple Traveller . Aug 27, 2022
                                </p>
                                <p class="font14 lineHight22">It was a perfect getaway and the property is too beautiful. Staff cordial. Loved the breakfast spread.</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 13, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear ms. Sen, thank you for the brilliant endorsement of your stay with us and i am elated to receive your glowing review of our hotel’s facilities and service. We now look forward to welcoming you back for
                                another perfect stay. Kind regards, satish kumar general manage... 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Excellent property, courteous staff, amazing food</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Akshay Verma . Couple Traveller . Aug 25, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    Great staycation experience at leela goa - multiple categories of rooms to choose from but i preferred the conservatory premium room (thanks to the extra room space covering the balcony. Riverside
                                    restaurant view is really good and should be tried at-least once.
                                </p>
                                <ul class="imgList appendTop10">
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH21163222309478/QS1042/QS1042-Q1/1661402047762.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH21163222309478/QS1042/QS1042-Q1/1661402047780.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH21163222309478/QS1042/QS1042-Q1/1661402047507.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                </ul>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Sep 01, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear akshay, thank you for the brilliant endorsement of your stay with us and i am elated to receive your glowing review of our hotel’s facilities and service. We now look forward to welcoming you back for
                                another perfect stay. Kind regards, satish kumar general manager 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Excellent Stay</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    GAURAV GUPTA . . Aug 24, 2022
                                </p>
                                <p class="font14 lineHight22">5</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Aug 30, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear gaurav, thank you for your excellent rating and we are delighted to know that you had a memorable stay at our resort. We now look forward to welcoming you back. Kind regards, satish kumar general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Exceptional</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Saurabh Bhayana . Family Traveller . Aug 24, 2022
                                </p>
                                <p class="font14 lineHight22">I couldn't have asked for a better experience than this, everything was just perfect</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Aug 30, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear saurabh, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar
                                general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Hygiene was good, property location was best and food was not that good</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Virat Bhaskarwar . Couple Traveller . Aug 20, 2022
                                </p>
                                <p class="font14 lineHight22">I really enjoyed my stay in the hotel</p>
                                <ul class="imgList appendTop10">
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH75218220474102/QS1042/QS1042-Q1/IMG_20220815_162935-01.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH75218220474102/QS1042/QS1042-Q1/IMG_20220816_063045-01.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH75218220474102/QS1042/QS1042-Q1/IMG_20220815_174121-01.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                </ul>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Aug 30, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear virat, thank you for the perfect score review. It brings us so much joy to know that you had a memorable stay at the leela goa and we cannot wait to welcome you back. Kind regards, satish kumar general
                                manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Best resort in goa</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Yash Dholakia . Couple Traveller . Aug 19, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    Amazing stay to relax and unwind at easily the best resort in goa. Incredible food at jamavar &amp; riverside and super courteous staff. Pity it will get re-branded this year.
                                </p>
                                <ul class="imgList appendTop10">
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73019220390196/QS1042/QS1042-Q1/1660890602047.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73019220390196/QS1042/QS1042-Q1/1660890602199.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73019220390196/QS1042/QS1042-Q1/1660890602306.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                </ul>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Aug 30, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear yash, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar general
                                manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Fab holiday !</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    shivani tuli . Couple Traveller . Jul 28, 2022
                                </p>
                                <p class="font14 lineHight22">Forever amazing is the the word !</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Aug 04, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear shivani, thank you so much for your incredible review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar general
                                manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Excellent</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Priyanka Rathee . Family Traveller . Jul 08, 2022
                                </p>
                                <p class="font14 lineHight22">It’s luxury in true sense, perfect stay.</p>
                                <ul class="imgList appendTop10">
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70234212291732/QS1042/QS1042-Q1/1657266313624.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70234212291732/QS1042/QS1042-Q1/1657266313656.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70234212291732/QS1042/QS1042-Q1/1657266313435.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70234212291732/QS1042/QS1042-Q1/1657266313608.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                    <li class="pointer"><img src="//r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70234212291732/QS1042/QS1042-Q1/1657266313641.jpeg?downsize=80:80&amp;crop=80:80" alt="" /></li>
                                </ul>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Jul 19, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear priyanka, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar
                                general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Leela goa</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Anil Nerela . Couple Traveller . Jul 06, 2022
                                </p>
                                <p class="font14 lineHight22">
                                    Leela goa is a beautiful property. We went there to celebrate my husband's birthday, the moment we reached they welcomed us with shells garland and organised a cake. We cut the cake in the lobby with the
                                    staff. They took our professional photography. The area is large and full of greenery. Rooms are beautiful and we took terrance lagoon room with private balcony. It was across the lake where water lotus
                                    showed their vibrant colours. The food was tasty large quantity and satisfying. We opted for inclusive breakfast and it gave us indian continental and dessert variety. There are many activities too to
                                    keep yourself busy like pool, gaming zone, beach, dj night, tap dancing, mocktail session, feeding the fish etc. Worth the price.
                                </p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Jul 11, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear mrs. Nerela, thank you for the perfect score review! it brings us so much joy to know that you had a memorable birthday stay at the leela goa and also to know that our services and facilities exceeded
                                your expectations. Thank you once again and we cannot wait to welcome ... 
                                <span class="readMore latoBold font12 blueText capText noShrink">Read more</span>
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Beautiful</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Sandeep Kumar . Couple Traveller . Jul 06, 2022
                                </p>
                                <p class="font14 lineHight22">It’s one of the best location in goa for vacation</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Jul 12, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear sandeep, thank you so much for your perfect score review! it is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back. Kind regards, satish kumar
                                general manager 
                            </p>
                        </div>
                    </div>
                    <span></span>
                    <div class="reviewBox">
                        <div class="reviewRow">
                            <div class="reviewBoxLeft">
                                <p class="latoBold font18 lineHight22 latoBold">Food</p>
                                <p class="appendTop4 appendBottom4 appendRight2">
                                    <span class="latoBold">  Rated </span><span class="reviewListingItemRating latoBlack blueBg">  5.0</span> by 
                                    Shwetha G . Solo Traveller . Jul 05, 2022
                                </p>
                                <p class="font14 lineHight22">Really good enjoyed the breakfast</p>
                                <div class="makeFlex appendTop10">
                                    <p class="font14 latoRegular lineHight22 grayText">Do you find this helpful?</p>
                                    <button aria-label="Up vote button" class="upvoteBtn"><span class="sprite icUpvote"></span></button>
                                </div>
                            </div>
                        </div>
                        <p class="report"></p>
                    </div>
                    <div class="replyBox">
                        <span class="replyIconCont"><span class="sprite replyIcon"></span></span>
                        <div class="replyBoxRight">
                            <p class="latoBlack font18 appendBottom5">
                                The St. Regis Goa Resort
                                <span class="latoRegular font14 grayText">
                                    has replied on
                                     Jul 11, 2022
                                </span>
                            </p>
                            <p class="font16 lineHight22">
                                Dear shwetha, thank you so much for your incredible review. It is an absolute pleasure to see what a great experience you had with us and we cannot wait to welcome you back ! kind regards, satish kumar
                                general manager 
                            </p>
                        </div>
                    </div>
                    <div class="pagination" id="detpg_review_ratings_pagination">
                        <ul class="pagination">
                            <li><a class="disabled" href="#">«</a></li>
                            <li><a class="disabled" href="#">⟨</a></li>
                            <li><a class="active" href="#">1</a></li>
                            <li><a class=" " href="#">2</a></li>
                            <li><a class=" " href="#">3</a></li>
                            <li><a class=" " href="#">4</a></li>
                            <li><a class=" " href="#">5</a></li>
                            <li><a class=" " href="#">⟩</a></li>
                            <li><a class=" " href="#">»</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

    </>
    }
}