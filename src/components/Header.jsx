import { Link } from "react-router-dom"

export default function Header() {
    
    
 const setBurgerVision = () => {
    document.querySelector('.BurgerMenu-Items').classList.toggle('Open')
 }
 const closeBurgerMenu = () => {
    document.querySelector('.BurgerMenu-Items').classList.remove('Open')
}

    return (
        <>
            <header className="Header Header-Img Flex-Column-Center">
                <div className="Menu Flex-Row-SpaceBetween">
                    <Link to="/" className="Logo" onClick={closeBurgerMenu}>
                        Fortnite Shop
                    </Link>
                    <div onClick={setBurgerVision} className="BurgerMenu">
                        <span></span>
                    </div>
                    <div className="BurgerMenu-Items Flex-Row-SpaceBetween ">
                        <Link to="/market"  onClick={closeBurgerMenu} className="Menu-Item">
                            Market
                        </Link>
                        <Link to="/about" onClick={closeBurgerMenu} className="Menu-Item">
                            About
                        </Link>
                        <Link to="/contact" onClick={closeBurgerMenu} className="Menu-Item">
                            Contact
                        </Link>
                    </div>
                </div>


            </header>
        </>
    )
}