import React from 'react'

const Trendingaccesories = () => {
    let image={image1:"./img/ta1.webp",image2:"./img/ta2.webp",image3:"./img/ta3.jpg",image4:"./img/ta4.jpg",image5:"./img/ta5.webp",image6:"./img/ta6.webp",image7:"./img/ta7.webp",image8:"./img/ta8.webp",image9:"./img/ta9.webp",image10:"./img/ta10.jpg"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10}=image;
    return (
        <div className="deals-day">
            <div className="deals-text" style={{marginTop:"40px"}}><h1>TRENDING IN ACCESSORIES</h1></div>
            <div className="deals-image">
            <a href="/"><img src={image1} alt="deals-day"></img></a>
            <a href="/"><img src={image2} alt="deals-day"></img></a>
            <a href="/"><img src={image3} alt="deals-day"></img></a>
            <a href="/"><img src={image4} alt="deals-day"></img></a>
            <a href="/"><img src={image5} alt="deals-day"></img></a>
            <a href="/"><img src={image7} alt="deals-day"></img></a>
            <a href="/"><img src={image8} alt="deals-day"></img></a>
            <a href="/"><img src={image9} alt="deals-day"></img></a>
            <a href="/"><img src={image10} alt="deals-day"></img></a>
            <a href="/"><img src={image6} alt="deals-day"></img></a>
            </div>
        </div>
    )
}

export default Trendingaccesories
