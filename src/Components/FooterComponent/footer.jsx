import React from 'react'
import Experienceapp from './Experienceapp'
import Onlineshopping from './Onlineshopping'
import Usefulllinks from './Usefulllinks'
import Warranty from './warranty'
import './footer.css'


const footer = () => {
    return (
        <div className="footer">
            <section className="Footer-sec">
            <div className="Onlineshopping1"><Onlineshopping/></div>
            <div className="Usefullinks1"><Usefulllinks/></div>
            <div className="Experienceapp1"><Experienceapp/></div>
            <div className="Warranty1"><Warranty/></div>
            </section>
        </div>
    )
}

export default footer
