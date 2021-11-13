import React from 'react'
const Dealsoftheday = () => {
    let image={image1:"./img/dod1.webp",image2:"./img/dod2.webp",image3:"./img/dod3.webp",image4:"./img/dod4.webp",image5:"./img/dod5.jpg"}
    let {image1,image2,image3,image4,image5}=image;
    return (<>
        
        <div className="deals-day">
            <div className="deals-text"><h1>DEALS OF THE DAY</h1></div>
            <div className="deals-image">
            <a href="/"><img src={image1} alt="deals-day"></img></a>
            <a href="/"><img src={image2} alt="deals-day"></img></a>
            <a href="/"><img src={image3} alt="deals-day"></img></a>
            <a href="/"><img src={image4} alt="deals-day"></img></a>
            <a href="/"><img src={image5} alt="deals-day"></img></a>
            </div>
        </div>
        </>
    )
}

export default Dealsoftheday
