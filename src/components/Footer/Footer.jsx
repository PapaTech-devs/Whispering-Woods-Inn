import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Youtube from "@iconscout/react-unicons/icons/uil-youtube"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="orange wave background" style={{ width: "100%" }} />
      <div className="f-content">
        <a id="link" href="mailto: whisperinghotel@gmail.com">
          whisperinghotel@gmail.com
        </a>
        <a
          id="link"
          href="https://merchant.razorpay.com/policy/KID21W1D6JW9K4/terms"
        >
          Terms and Conditions
        </a>
        <a
          id="link"
          href="https://merchant.razorpay.com/policy/KID21W1D6JW9K4/privacy"
        >
          Privacy Policy
        </a>
        <a
          id="link"
          href="https://merchant.razorpay.com/policy/KID21W1D6JW9K4/refund"
        >
          Cancellation and Refund
        </a>
        <a
          id="link"
          href="https://merchant.razorpay.com/policy/KID21W1D6JW9K4/contact_us"
        >
          Contact Us
        </a>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Youtube color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  )
}

export default Footer
