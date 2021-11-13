import React from 'react'

const TrenedinWesternwear = () => {
    let image={image1:"./img/tww1.webp",image2:"./img/tww2.webp",image3:"./img/tww3.webp",image4:"./img/tww4.webp",image5:"./img/tww5.webp",image6:"./img/tww6.webp",image7:"./img/tww7.webp",image8:"./img/tww8.webp",image9:"./img/tww9.webp",image10:"./img/tww10.webp"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10}=image;
    return (
        <div className="deals-day">
            <div className="deals-text" style={{marginTop:"40px"}}><h1>TREND IN WESTERN WEAR</h1></div>
            <div className="deals-image">
            <a href="/"><img src={image1} alt="deals-day"/></a>
            <a href="/"><img src={image2} alt="deals-day"/></a>
            <a href="/"><img src={image3} alt="deals-day"/></a>
            <a href="/"><img src={image4} alt="deals-day"/></a>
            <a href="/"><img src={image5} alt="deals-day"/></a>
            <a href="/"><img src={image7} alt="deals-day"/></a>
            <a href="/"><img src={image8} alt="deals-day"/></a>
            <a href="/"><img src={image9} alt="deals-day"/></a>
            <a href="/"><img src={image10} alt="deals-day"/></a>
            <a href="/"><img src={image6} alt="deals-day"/></a>
            </div>
        </div>
    )
}

export default TrenedinWesternwear
