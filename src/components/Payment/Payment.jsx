import "./Payment.css"
import { useState } from "react"
import { Link } from "react-scroll"
import displayRazorpay from "../../utils/displayRazorPay"

const Payment = () => {
  const priceOfRooms = {
    acroom: 350,
    nonacroom: 250,
    accottage: 500,
  }

  const [values, setValues] = useState({
    room: "nonacroom",
    name: "",
    email: "",
    phoneNumber: "",
    startDate: "",
    endDate: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const validateEmail = (email) => {
    // eslint-disable-next-line
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.toLowerCase()
    )
  }

  const getDateDiff = () => {
    const diffTime = Math.abs(
      new Date(values.endDate) - new Date(values.startDate)
    )
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const validatePhoneNumber = (phone) => {
    return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)
  }

  const handlePay = async () => {
    if (values.email === "" || !validateEmail(values.email)) {
      alert("Please give a valid email")
      return
    }

    if (values.phoneNumber === "" || !validatePhoneNumber(values.phoneNumber)) {
      alert("Please give a valid phone number")
      return
    }

    if (values.name === "") {
      alert("Please give your full name")
      return
    }

    if (values.startDate === "") {
      alert("Please give a valid start date")
      return
    }

    if (values.endDate === "") {
      alert("Please select a valid end date")
      return
    }

    if (new Date(values.endDate) <= new Date(values.startDate)) {
      alert("Invalid date input")
      return
    }

    await displayRazorpay(
      priceOfRooms[values.room] * getDateDiff(),
      values.name,
      values.email,
      values.phoneNumber,
      values.startDate,
      values.endDate,
      values.room
    )
  }

  return (
    <div className="main" id="payment">
      <p className="title">Book a room</p>
      <h2>Instructions</h2>
      <ol>
        <li>
          First{" "}
          <Link to="contact" spy={true} smooth={true}>
            call
          </Link>{" "}
          the hotel to check room availability
        </li>
        <li>Pay advance booking fees</li>
        <li>
          You will get a booking id which you need to show at hotel reception
        </li>
      </ol>
      <div className="payment-content">
        <div className="personal">
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="Your name"
          />
          <input
            onChange={handleInputChange}
            name="email"
            type="text"
            placeholder="Your email"
          />
          <input
            onChange={handleInputChange}
            name="phoneNumber"
            type="text"
            placeholder="Your mobile number"
          />
        </div>
        <div className="hotel-info">
          <div className="inputs">
            <label htmlFor="select" style={{ marginRight: "10px" }}>
              Select type of Room
            </label>
            <select
              id="select"
              value={values.room}
              name="room"
              onChange={handleInputChange}
            >
              <option value="nonacroom">Non AC Room</option>
              <option value="acroom">AC Room</option>
              <option value="accottage">AC Cottage</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="FromDate" style={{ marginRight: "10px" }}>
              Select start of stay
            </label>
            <input
              onChange={handleInputChange}
              name="startDate"
              type="date"
              id="FromDate"
            />
          </div>
          <div className="inputs">
            <label htmlFor="ToDate" style={{ marginRight: "10px" }}>
              Select end of stay
            </label>
            <input
              onChange={handleInputChange}
              name="endDate"
              type="date"
              placeholder="ToDate"
            />
          </div>
        </div>
      </div>
      <div className="amount-section">
        <button className="button pay-button" onClick={handlePay}>
          Pay
        </button>
        <p className="price-text">
          ₹{priceOfRooms[values.room]}/night{" "}
          {values.endDate !== "" &&
            values.startDate !== "" &&
            new Date(values.endDate) > new Date(values.startDate) &&
            `= ₹${priceOfRooms[values.room] * getDateDiff()}`}
        </p>
      </div>
    </div>
  )
}

export default Payment
