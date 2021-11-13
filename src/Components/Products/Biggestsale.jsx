import React from 'react'
import './Products.css'
const Biggestsale = () => {
    let image={image1:"./img/bsd1.webp",image2:"./img/bsd2.webp",image3:"./img/bsd3.webp",image4:"./img/bsd4.webp",image5:"./img/bsd5.jpg",image6:"./img/bsd6.webp",image7:"./img/bsd7.webp",image8:"./img/bsd8.webp",image9:"./img/bsd9.jpg",image10:"./img/bsd10.webp"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10}=image;
    return (
        <div className="deals-day">
            <div className="deals-text" style={{marginTop:"40px"}}><h1>BIGGEST SALE ON TOP BRANDS</h1></div>
            <div className="deals-image">
            <a href="/"><img src={image1} alt="Deals-day"></img></a>
            <a href="/"><img src={image2} alt="Deals-day"></img></a>
            <a href="/"><img src={image3} alt="Deals-day"></img></a>
            <a href="/"><img src={image4} alt="Deals-day"></img></a>
            <a href="/"><img src={image5} alt="Deals-day"></img></a>
            <a href="/"><img src={image7} alt="Deals-day"></img></a>
            <a href="/"><img src={image8} alt="Deals-day"></img></a>
            <a href="/"><img src={image9} alt="Deals-day"></img></a>
            <a href="/"><img src={image10} alt="Deals-day"></img></a>
            <a href="/"><img src={image6} alt="Deals-day"></img></a>
            </div>
        </div>
    )
}

export default Biggestsale
