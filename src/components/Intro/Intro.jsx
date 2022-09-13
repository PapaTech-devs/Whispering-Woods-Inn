import { useContext } from "react"
import "./Intro.css"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import hotel from "../../img/hotel.png"
import glassesimoji from "../../img/glassesimoji.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import FloatinDiv from "../FloatingDiv/FloatingDiv"
import facebook from "../../img/splashFbbg.png"
import ytb from "../../img/yts.png"
import { themeContext } from "../../Context"
import { motion } from "framer-motion"

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" }

  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Hey ! Welcome to
          </span>
          <span> Whispering Woods</span>
          <span></span>
        </div>
        <a href="tel: 9476104546" className="button i-button">
          Call
        </a>
        {/* social icons */}
        <div className="i-icons">
          <img className="fb" src={facebook} alt="facebook splash" />
          <img className="yt" src={ytb} alt="youtube splash" />
          {/* <img className="insta" src={Insta} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="orange background" />
        <img src={Vector2} alt="blue background" />
        <img className="hotel" src={hotel} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="Emoji with sunglasses"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Best" text2="Holiday Homes" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Customer" text2="Service" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
