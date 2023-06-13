import React from "react";
import "./priceStyle.scss";
import Testimonial1 from "./testimonials/Testimonial-style-(2).png";
import Testimonial2 from "./testimonials/Testimonial-style-(3).png";
import Testimonial3 from "./testimonials/Testimonial-style-(4).png";
import Testimonial4 from "./testimonials/Testimonial-style-(5).png";
import Testimonial5 from "./testimonials/Testimonial-style-(6).png";
import Testimonial6 from "./testimonials/Testimonial-style-(7).png";

const reviewList = [
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
];

const review: any = () => {
  return (
    <div className="public_opinion">
      <h2>People are diggin’ it</h2>
      <div className="img_src">
        {reviewList.map((review, index) => {
          return (
            <img
              key={index}
              src={review}
              className="reviewSnapchat"
              alt="public opinion"
            />
          );
        })}
      </div>
      <button type="button">More Testimonials</button>
    </div>
  );
};

export default review;
