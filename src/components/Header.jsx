import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="header-img">
                <div className="header__menu">
                    <Link to="/" className="header__menu-logo">
                        Fortnite Shop
                    </Link>

                    <Link to="/shop"  className="header__menu-item">
                        Shop
                    </Link>
                    <Link to="/about" className="header__menu-item">
                        About
                    </Link>
                    <Link to="/contact"  className="header__menu-item">
                        Contact
                    </Link>
                </div>
                
            </header>
        </>
    )
}