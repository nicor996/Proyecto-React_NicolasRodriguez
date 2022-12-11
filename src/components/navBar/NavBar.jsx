import "./NavBar.css";
import {Link} from "react-router-dom"
import { CartWidget } from "../cartWidget/CartWidget";

export const NavBar = () => { 
  return (
      <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
              <div className="logoStore">
                  <img src="https://res.cloudinary.com/ddtutnyos/image/upload/v1669343887/samples/logostore_xhz9vx.png" alt="logo"></img>
              </div>
              <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="enlaces">
                  <div className="navbar-nav">
                  <Link className="navbar-item" to="/" >Catálogo</Link>
                  <Link className="navbar-item" to="/category/Graficas" >Tarjetas Graficas</Link>
                  <Link className="navbar-item" to="/category/Procesadores" >Procesadores</Link>
                  </div>
              </div>
              <CartWidget />
          </nav>
      </header>
  )
}
export default NavBar;