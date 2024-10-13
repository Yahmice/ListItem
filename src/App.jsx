import React from 'react'
import data from './data/etsy.json'
import Listing from "./Listing/Listing.jsx";
import './App.css'

function App() {
    return (
        <Listing items={data}></Listing>
    );
}
export default App