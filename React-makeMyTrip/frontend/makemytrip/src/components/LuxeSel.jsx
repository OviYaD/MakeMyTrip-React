import React from "react";

export const LuxeSel = () => {
  return (
    <>
      <div className="luxeSel">
        <div className="luxeSel__dtl">
          <p
            style={{
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "900",
              marginBottom: "5px"
            }}
          >
            INTRODUCING
          </p>
          <h3 className="luxeSel__dtl--hdng">MMT Luxe Selections</h3>
          <p className="luxeSel__dtl--desc">
            Escape to the epitome of luxury, packed with signature amenities and
            services
          </p>
          <a href="" className="luxeSel__cta">
            Learn More
          </a>
        </div>
        <ul className="luxeSel__list" style={{ display: "flex" }}>
          <li className="luxeSel__list--item">
            <a href="">
              <div className="luxeSel__list--itemImg">
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
                  alt=""
                />
              </div>
              <div className="luxeSel__list--itemDtl">
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "20px",
                    marginBottom: "3px",
                     
                    fontWeight: "900"
                  }}
                >
                  Luxe properties in India
                </p>
                <p style={{ color: "#4a4a4a" }}>
                  Explore by Luxury brands, themes and top picks
                </p>
              </div>
            </a>
          </li>
          <li className="luxeSel__list--item">
            <a href="">
              <div className="luxeSel__list--itemImg">
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
                  alt=""
                />
              </div>
              <div className="luxeSel__list--itemDtl">
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "20px",
                    marginBottom: "3px",
                     
                    fontWeight: "900"
                  }}
                >
                  Luxe properties in India
                </p>
                <p style={{ color: "#4a4a4a" }}>
                  Explore by Luxury brands, themes and top picks
                </p>
              </div>
            </a>
          </li>
          <li className="luxeSel__list--item">
            <a href="">
              <div className="luxeSel__list--itemImg">
                <img
                  src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
                  alt=""
                />
              </div>
              <div className="luxeSel__list--itemDtl">
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "20px",
                    marginBottom: "3px",
                     
                    fontWeight: "900"
                  }}
                >
                  Luxe properties in India
                </p>
                <p style={{ color: "#4a4a4a" }}>
                  Explore by Luxury brands, themes and top picks
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
