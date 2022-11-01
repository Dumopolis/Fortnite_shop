import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="Header Header-Img">
                
                    <Link to="/" className="Logo Menu-Logo Menu">
                        Fortnite Shop
                    </Link>

                    <Link to="/market"  className="Menu-Item Menu">
                        Market
                    </Link>
                    <Link to="/about" className="Menu-Item Menu">
                        About
                    </Link>
                    <Link to="/contact"  className="Menu-Item Menu">
                        Contact
                    </Link>
                
                
            </header>
        </>
    )
}