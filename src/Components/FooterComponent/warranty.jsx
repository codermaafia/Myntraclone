import React from 'react'

const warranty = () => {
    return (
        <div className="Warranty">
            <div className="original">
                <div className="img"><a href="/"><img src="/img/original.png" alt="Original" width="50px"/></a></div>
                <div className="txt"><b>100% Original</b> guarantee for all products at myntra.com</div>
            </div>
            <div className="return">
            <div className="img"><a href="/"><img src="/img/return.png" alt="return" width="50px"/></a></div>
                <div className="txt"><b>Return within 30days</b> of receiving your order</div>
            </div>
            
        </div>
    )
}

export default warranty
