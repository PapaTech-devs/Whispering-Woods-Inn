import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/site8.jpg";
import Ecommerce from "../../img/site2.JPG";
import HOC from "../../img/site1.JPG";
import MusicApp from "../../img/site3.JPG";
import site4 from "../../img/site4.JPG";
import site5 from "../../img/site5.JPG";
import site6 from "../../img/site6.JPG";
import site7 from "../../img/site7.JPG";
import site8 from "../../img/site8.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={site4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={site5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={site6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={site7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={site8} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
