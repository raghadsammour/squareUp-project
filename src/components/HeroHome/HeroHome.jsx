import './herohome.css'
const HeroHome = ({image,title,btn1,btn2,description}) => {
    return (
        <div className="heroHome whiteSpacing heroHomePadding">
            <img src={image} alt="mountain" />
            <h1>{title}</h1>
            <p className='paragraph'>For <span>Startups</span> , <span>Enterprise leaders</span> , <span>Enterprise leaders</span> and <span>Social Good</span></p>
            <div className="btns">
                <button className='btn'>{btn1}</button>
                <button className='btn'>{btn2}</button>
            </div>
            <p className='description'>{description}</p>
        </div>
    )
}
export default HeroHome