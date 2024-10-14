import React from 'react'
import data from './data/etsy.json'
import Listing from "./Listing/ListItem.tsx";
import './App.css'

function App() {
    return (
        <Listing items={data}></Listing>
    );
}
export default App