// rafce --> export default || rafc --> export nombrado

import "./CartWidget.css"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to="/cart" >
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "white",
          }}
        />
        <div className="bubble-counter">
          <span>5</span>
        </div>
      </div>
    </Link>
  )
}
