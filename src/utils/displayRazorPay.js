import axios from "axios"
import loadScript from "./loadScript"

async function displayRazorpay(
  priceHotel,
  userName,
  userEmail,
  userPhoneNumber,
  startDate,
  toDate,
  room
) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?")
    return
  }

  // creating a new order
  const result = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/payment/orders`,
    {
      amount: priceHotel,
    }
  )

  if (!result) {
    alert("Server error. Are you online?")
    return
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data

  const options = {
    key: process.env.REACT_APP_RAZORKEY, // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Whispering Woods",
    description: `Transaction by ${userName}`,
    // image: { logo },
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        user: userName,
        email: userEmail,
        phone: userPhoneNumber,
        fromDate: startDate,
        toDate: toDate,
        amount: amount,
        roomType: room,
      }

      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/payment/success`,
          data
        )
        alert(
          `PLEASE STORE PAYMENTID = ${result.data.paymentId} ORDERID = ${result.data.orderId}`
        )
      } catch (err) {
        console.log("Error", err)
      }
    },
    prefill: {
      name: userName,
      contact: userPhoneNumber,
      email: userEmail,
    },
    theme: {
      color: "#FCA61F",
    },
  }

  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
}

export default displayRazorpay
