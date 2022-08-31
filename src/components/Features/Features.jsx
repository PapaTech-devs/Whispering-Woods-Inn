import "./Features.css";
import starImg from "../../img/star.png";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Features = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="main" id="features">
      <p className="title">Features</p>
      <div className="content">
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Conference hall/Banquet facility
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Garden/Lawn and open air sitting spaces
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Lots of parking space
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Garden/Flowers/Lily pond natural ambience
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>Pets allowed</p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>Drivers Accomodation</p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Experience of hosting many company conference,wedding etc
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Total 20 rooms which can host up to 50 guests
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Roof top area for small party hosting
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            Arrangement to organize Baul songs,Folk dance,other entertainment as
            possible
          </p>
        </div>
        <div className="data">
          <img className="star-img" src={starImg} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>
            In house restaurant that serves Indian. Chinese food as per taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
