import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="Header Header-Img Flex-Column-Center">
                <div className="Menu Flex-Row-SpaceBetween">
                    <Link to="/" className="Logo">
                        Fortnite Shop
                    </Link>
                    <div onClick={() => {
                        document.querySelector('.BurgerMenu-Items').classList.toggle('Open')
                        document.querySelector('.BurgerMenu').classList.toggle('Active')
                    }} className="BurgerMenu">
                        <span></span>
                    </div>
                    <div className="BurgerMenu-Items Flex-Row-SpaceBetween ">
                        <Link to="/market" className="Menu-Item">
                            Market
                        </Link>
                        <Link to="/about" className="Menu-Item">
                            About
                        </Link>
                        <Link to="/contact" className="Menu-Item">
                            Contact
                        </Link>
                    </div>
                </div>


            </header>
        </>
    )
}