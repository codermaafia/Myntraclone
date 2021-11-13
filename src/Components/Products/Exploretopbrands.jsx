import React from 'react'
const Exploretopbrands = () => {
    let image={image1:"./img/etb1.webp",image2:"./img/etb2.webp",image3:"./img/etb3.webp",image4:"./img/etb4.webp",image5:"./img/etb5.webp",image6:"./img/etb6.webp",image7:"./img/etb7.webp",image8:"./img/etb8.webp",image9:"./img/etb9.webp",image10:"./img/etb10.webp"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10}=image;
    return (
        <div className="deals-day">
            <div className="deals-text" style={{marginTop:"40px"}}><h1>EXPLORE SALE ON TOP BRANDS</h1></div>
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

export default Exploretopbrands;
