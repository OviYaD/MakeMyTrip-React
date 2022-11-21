import React from 'react';
import { HotelDetails } from '../../pages/HotelDetails';
import { ShimmerFeaturedGallery } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import { ShimmerPostList } from "react-shimmer-effects";
import { ShimmerPostDetails } from "react-shimmer-effects";
import { ShimmerText } from "react-shimmer-effects";
export const HotelDetailsLoader = () => {
    return <>
    <ShimmerText line={1} gap={10} variant="secondary" />
    <ShimmerFeaturedGallery caption row={2} col={2} card frameHeight={400} />
    <ShimmerCategoryItem />
    <ShimmerSimpleGallery imageType="circular" imageHeight={200} row={1} col={3} caption />
    <ShimmerPostDetails card cta variant="SIMPLE" />
    </>
}