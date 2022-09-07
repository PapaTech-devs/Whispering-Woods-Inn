import "./Payment.css"

const Payment = () => {
  return (
    <div className="main" id="payment">
      <p className="title">Book a room</p>
      <div className="payment-content">
        <div className="personal">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <input type="text" placeholder="Your mobile number" />
        </div>
        <div className="hotel-info">
          <div className="inputs">
            <label htmlFor="select" style={{ marginRight: "10px" }}>
              Select type of Room
            </label>
            <select id="select">
              <option value="acroom">Non AC Room</option>
              <option value="nonacroom">AC Room</option>
              <option value="accottage">AC Cottage</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="FromDate" style={{ marginRight: "10px" }}>
              Select start of stay
            </label>
            <input type="date" id="FromDate" />
          </div>
          <div className="inputs">
            <label htmlFor="ToDate" style={{ marginRight: "10px" }}>
              Select end of stay
            </label>
            <input type="date" placeholder="ToDate" />
          </div>
        </div>
      </div>
      <div className="amount-section">
        <button className="button pay-button">Pay</button>
        <p className="price-text">₹500 per night</p>
      </div>
    </div>
  )
}

export default Payment
