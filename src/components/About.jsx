import girl from '../img/girl.png'

export default function About() {
    return (
        <div className="main__about">
            <img className="main__about-img" src={girl} alt="Fortnite girl" />
            <div className="main__about-text">
                <span className="main__about-text-header">About Fortnite</span>
                <p className="main__about-text-content">Fortnite is a world of many expeperiences. Drop onto Island and
                    compete to be the last player - or team - standing. Create an Island of your own with your own
                    rules. Hang out with friends on an Island rhat someone alse created. Or save the world by talking
                    down hordes of monsters with others</p>
            </div>
        </div>
    )
    }