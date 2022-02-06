import React from "react";
import "./Home.css";
import {Details} from "../components/data/museum_ma.js";
import Map from "./Map.js";

export default function Home() {

    const [name, setName] = React.useState("");
    const [buttonName, setButtonName] = React.useState("");
    const [found, setFound] = React.useState(false);
    const result = [];

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick(event) {
        setButtonName(name);

        {Details.map(detail => ( parseInt(name) === detail.ZipCode || name === detail.MuseumName ? setFound(true): null))}        

        event.preventDefault();
    }

    {Details.map(detail => ( parseInt(name) === detail.ZipCode || name === detail.MuseumName ? result.push(detail.ID): null))}

  return (
    <div className="home-padding">
        <div className="flex justify-center align-center column">
            <h1 className="search-text">Search a museum you want to go</h1>
            <hr className="hr-line" />
            <form action="/map" className="flex justify-center form-margin" >
                <input className="search-input-box" onChange={handleChange} type="text" value={name} placeholder="Zipcode or Museum Name" autocomplete="off" />
                <button className="search-button" type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>

        <div className="flex justify-space-between list-map">
            <div className="museum-list">
                {Details.map(detail => ( parseInt(buttonName) === detail.ZipCode || buttonName === detail.MuseumName ? 
                    <h4 className="museum-list-padding flex justify-center">{detail.MuseumName}</h4>
                : null))}
             </div>
            <div className="map-width">
                {found?  <Map onChange={handleChange} userInput={buttonName} />:null}
            </div>

        </div>
    </div>

  );
}
