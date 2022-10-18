import React from "react";

export const RecentSearch = (props) => {
  return (
    <>
      <span className="selected-trend-type">Trending Search:</span>
      <div className="trend-type">
        <span>
          Delhi <i className="fa-solid fa-right-long"></i> Kerala
        </span>
        <span>
          Mumbai <i className="fa-solid fa-right-long"></i> Bangkok
        </span>
      </div>
    </>
  );
};
