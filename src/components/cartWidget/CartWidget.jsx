import "./CartWidget.css"
import { MdOutlineShoppingCart } from "react-icons/md"

const CartWidget = () => {
  return (
    <div className="cartContainer">
        <MdOutlineShoppingCart size={25} color={"white"}/>
    </div>
  )
}

export default CartWidget