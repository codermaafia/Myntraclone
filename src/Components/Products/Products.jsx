import React from 'react'
import Categorytobag from './Categorytobag'
import Exploretopbrands from './Exploretopbrands'
import TrenedinWesternwear from './TrenedinWesternwear'
import Trendingindianwear from './Trendingindianwear'
import Trendinginsportswear from './Trendinginsportswear'
import Trendingfootwear from './Trendingfootwear'
import Trendingaccesories from './Trendingaccesories'
import Biggestsale from './Biggestsale'
import Dealsoftheday from './Dealsoftheday'
import './Products.css'

const Poducts = () => {
    return (
        <div>
            <Dealsoftheday/>
            <Biggestsale/>
            <Categorytobag/>
            <Exploretopbrands/>
            <TrenedinWesternwear/>
            <Trendingindianwear/>
            <Trendinginsportswear/>
            <Trendingfootwear/>
            <Trendingaccesories/>
        </div>
    )
}

export default Poducts;
