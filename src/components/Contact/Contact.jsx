import { useContext, useRef, useState } from "react"
import "./Contact.css"
import emailjs from "@emailjs/browser"
import { themeContext } from "../../Context"
import PhoneIcon from "@iconscout/react-unicons/icons/uil-phone"
import MobileIcon from "@iconscout/react-unicons/icons/uil-mobile-android"
import HomeIcon from "@iconscout/react-unicons/icons/uil-home"

const Contact = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const form = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (_) => {
          alert("Thank you for contacting.")
          setDone(true)
          form.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span className="hea" style={{ color: darkMode ? "white" : "" }}>
            Get in Touch
          </span>
          <span>with us</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div>
          <div className="phone-number">
            <PhoneIcon size={30} style={{ color: darkMode ? "white" : "" }} />
            <a
              className="hightlight-number"
              style={{ color: darkMode ? "white" : "" }}
              href="tel:+91 9476104546"
            >
              9476104546
            </a>
          </div>
          <div className="phone-number">
            <MobileIcon size={30} style={{ color: darkMode ? "white" : "" }} />
            <a
              className="hightlight-number"
              style={{ color: darkMode ? "white" : "" }}
              href="tel:+91 9641617459"
            >
              9641617459
            </a>
          </div>
          <div className="address">
            <HomeIcon size={30} style={{ color: darkMode ? "white" : "" }} />
            <p>
              Near BITM College, Kamarpara, On Bolpur - Illambazar Road, Bolpur,
              Birbhum 731236
            </p>
          </div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
