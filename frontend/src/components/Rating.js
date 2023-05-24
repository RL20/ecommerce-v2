import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {/* since color property the name and value us equal intead use style={{ color:color }} i will use style={{ color }} */}
        <i style={{ color }} className={value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
      </span>
      <span>
        <i style={{ color }} className={value >= 2 ? "fas fa-star" : value >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
      </span>
      <span>
        <i style={{ color }} className={value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
      </span>
      <span>
        <i style={{ color }} className={value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
      </span>
      <span>
        <i style={{ color }} className={value >= 5 ? "fas fa-star" : value >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: "#2397A3",
};
Rating.propTypes = {
  // this won't show in the page but when open the console it will tell for example expected to get number bur string passed
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
