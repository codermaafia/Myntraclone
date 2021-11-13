import React from 'react'

const Categorytobag = () => {
    let image={image1:"./img/ctb1.webp",image2:"./img/ctb2.webp",image3:"./img/ctb3.webp",image4:"./img/ctb4.webp",image5:"./img/ctb5.webp",image6:"./img/ctb6.webp",image7:"./img/ctb7.webp",image8:"./img/ctb8.webp",image9:"./img/ctb9.webp",image10:"./img/ctb10.webp",image11:"./img/ctb11.webp",image12:"./img/ctb12.webp"}
    let {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12}=image;
    return (
        <div className="ctb-day">
            <div className="ctb-text" style={{marginTop:"40px"}}><h1>TOP CATEGORY TO BAG</h1></div>
            <div className="ctb-image">
            <a href="/"><img src={image1} alt="ctb-day"></img></a>
            <a href="/"><img src={image2} alt="ctb-day"></img></a>
            <a href="/"><img src={image3} alt="ctb-day"></img></a>
            <a href="/"><img src={image4} alt="ctb-day"></img></a>
            <a href="/"><img src={image5} alt="ctb-day"></img></a>
            <a href="/"><img src={image6} alt="ctb-day"></img></a>
            <a href="/"><img src={image7} alt="ctb-day"></img></a>
            <a href="/"><img src={image8} alt="ctb-day"></img></a>
            <a href="/"><img src={image9} alt="ctb-day"></img></a>
            <a href="/"><img src={image10} alt="ctb-day"></img></a>
            <a href="/"><img src={image11} alt="ctb-day"></img></a>
            <a href="/"><img src={image12} alt="ctb-day"></img></a>
            </div>
        </div>
    )
}

export default Categorytobag
