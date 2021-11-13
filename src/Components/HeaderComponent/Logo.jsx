import React from 'react'

let Style={
    background:"url(MyntraWebSprite_07_10_2021.png)",
    color:"white",
    padding:"10px 25px",
    backgroundSize:"1404px 105px",
    width:"53",
    height:"36",
    backgroundPosition:"-462px 0",
};

const Logo = () => {
    return (
        <div className="logo">
            <a href="/"style={Style}/>
        </div>
    )
}

export default Logo

// Inline Css we use " style={{ color:"red", backgroundColor:"Black"}} "
// Internal Css we use let style={ color:"red", paddign:"12px"} => <h1 style={style}>Hello</h1>
