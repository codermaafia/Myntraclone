import React from 'react'

const Trendingindianwear = () => {
    let image={image1:"./img/tiw1.webp",image2:"./img/tiw2.webp",image3:"./img/tiw3.webp",image4:"./img/tiw4.webp",image5:"./img/tiw5.webp",image6:"./img/tiw6.webp",image7:"./img/tiw7.webp",image8:"./img/tiw8.webp",image9:"./img/tiw9.webp",image10:"./img/tiw10.webp"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10}=image;
    return (
        <div className="deals-day">
            <div className="deals-text" style={{marginTop:"40px"}}><h1>TRENDING IN INDIAN WEAR</h1></div>
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

export default Trendingindianwear
