import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {/* since color property the name and value us equal intead use style={{ color:color }} i will use style={{ color }} */}
      {/* <span>{ <i style={{ color }} className={value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i> }</span> */}
      {/* <span>{value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt style={{ color }} /> : <FaRegStar style={{ color }} />}</span> */}
      <span>{value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt style={{ color }} /> : <FaRegStar style={{ color }} />}</span>
      <span>{value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
      <span>{value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
      <span>{value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>
      <span>{value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}</span>

      <span className="rating-text">{text && text}</span>
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

// It's a better solution but less readable, so I left it in a comment so I could have a reference ↓
// import React from "react";
// import PropTypes from "prop-types";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const Star = ({ filled, color }) => {
//   if (filled === 1) {
//     return <FaStar style={{ color }} />;
//   } else if (filled === 0.5) {
//     return <FaStarHalfAlt style={{ color }} />;
//   } else {
//     return <FaRegStar style={{ color }} />;
//   }
// };

// const Rating = ({ value, text, color }) => {
//   const stars = [];
//   const fullStars = Math.floor(value);
//   const hasHalfStar = value - fullStars >= 0.5;

//   for (let i = 0; i < fullStars; i++) {
//     stars.push(<Star key={i} filled={1} color={color} />);
//   }

//   if (hasHalfStar) {
//     stars.push(<Star key={fullStars} filled={0.5} color={color} />);
//   }

//   while (stars.length < 5) {
//     stars.push(<Star key={stars.length} filled={0} color={color} />);
//   }

//   return (
//     <div className="rating">
//       {stars}
//       <span>{text && text}</span>
//     </div>
//   );
// };

// Rating.defaultProps = {
//   color: "#2397A3",
// };

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

// export default Rating;
