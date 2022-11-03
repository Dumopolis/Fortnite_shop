import girl from '../img/girl.png'

export default function About() {
    return (
        <div className="About Flex-Row-SpaceBetween">
            <img className="About-Img" src={girl} alt="Fortnite girl" />
            
                <div className="About-Text Flex-Column-Center">
                    <span className="Title">About Fortnite</span>
                    <p className="Text-Content About-Text-Content">Fortnite is a world of many expeperiences. Drop onto Island and
                        compete to be the last player - or team - standing. Create an Island of your own with your own
                        rules. Hang out with friends on an Island rhat someone alse created. Or save the world by talking
                        down hordes of monsters with others</p>
                </div>
            
        </div>
    )
}