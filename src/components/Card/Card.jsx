import { Link } from "react-router-dom"
import "./Card.css"

const Card = ({ emoji, heading, detail, color, link }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img className="cardEmo" src={emoji} alt={heading} />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to={`/gallery/${link}`} className="c-button">
        VIEW
      </Link>
    </div>
  )
}

export default Card
