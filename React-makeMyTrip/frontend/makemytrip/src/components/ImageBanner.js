import React from "react";

export const ImageBanner = (props) => {
  return (
    <>
      <span className="card swiper-slide">
        <figure className="card__thumb  shadow">
          <img className="image" src={props.url} alt="" />
          <figcaption className="card__caption">
            <h2 className="card__title">
              {props.topCollection ? <h3>TOP11</h3> : ""}
              <p>{props.description}</p>
            </h2>
          </figcaption>
        </figure>
      </span>
    </>
  );
};
