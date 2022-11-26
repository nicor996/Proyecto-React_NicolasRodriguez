import "./NavBar.css"
import CartWidget from "../cartWidget/CartWidget"

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
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Procesadores</a>
                        <a className="nav-item nav-link active" href="#">Tarjetas Graficas</a>
                        <a className="nav-item nav-link active" href="#">Memorias</a>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}