import "./FloatingDiv.css"

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt={text1 + " " + text2} />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  )
}

export default FloatinDiv
