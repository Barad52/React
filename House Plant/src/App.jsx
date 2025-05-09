import React, { useState } from 'react';
import './App.css'
import { FaLessThan } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";


function App() {

    return (

        <div className='main'>
            <div className='header'>
                <h3><FaLessThan /> Back To All Plants</h3>
            </div>
            <hr />
            <div className='container'>
                <div className='images'>
                    <img src="https://nurserylive.com/cdn/shop/products/nurserylive-g-neem-tree-azadirachta-indica-plant.jpg?v=1634224777" alt="" />
                </div>
                <div class='line'></div>
                <div className='detail'>
                    <h2>NEEM PLANT</h2>
                    <h4>POPULAR HOUSE PLANT</h4>
                    <h2>$18</h2>
                    <p>Neem trees can reach 15–30 metres (49–98 feet) in height and have attractive rounded crowns and thick furrowed bark. The compound leaves have toothed leaflets and are typically evergreen but do drop during periods of extreme drought.</p>
                <br />
                <button>ADD TO CART</button>
                <button style={{marginLeft: '10px'}}>WISHLIST</button>
                </div>
            </div>
        </div>
    )


}

export default App;