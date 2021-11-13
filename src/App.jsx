import React, { Component } from 'react'
import Navbar from './Components/HeaderComponent/Navbar'
import Footer from './Components/FooterComponent/footer'
import Products from './Components/Products/Products'
import Slider from './Components/SliderComponent/Slider'


export default class App extends Component {
    render() {
        
        return (
            <div>
                <Navbar/>
                <Slider/>
                <Products/>
                <Footer/>
            </div>
        )
    }
}
