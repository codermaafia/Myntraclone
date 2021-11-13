import React from 'react'

const Trendingfootwear = () => {
    let image={image1:"./img/tf1.webp",image2:"./img/tf2.jpg",image3:"./img/tf3.jpg",image4:"./img/tf4.webp",image5:"./img/tf5.webp",image6:"./img/tf6.webp",image7:"./img/tf7.webp",image8:"./img/tf8.webp",image9:"./img/tf9.webp",image10:"./img/tf10.webp"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10}=image;
    return (
        <div className="deals-day">
            <div className="deals-text" style={{marginTop:"40px"}}><h1>TRENDING IN FOOTWEAR</h1></div>
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
            <a href="/"> <img src={image6} alt="deals-day"></img></a>
            </div>
        </div>
    )
}

export default Trendingfootwear
