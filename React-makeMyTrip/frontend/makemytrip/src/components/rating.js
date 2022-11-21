import React from 'react';

export const Rating = ({rating}) => {
    return <>
                        <span className="sRating" style={{ display: "inline-flex" }}>
                            <span className="sRating__row sRating__row--active">
                                {rating}
                                {Array.from({ length: rating }, (i) => (
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
    </>
}