import React from "react";
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
    <div>
        <div>
            <h1>DON'T MISS MUST-SEE ARTWORKS</h1>
            <form action="/map" >
                <input onChange={handleChange} type="text" value={name} placeholder="Zipcode or Museum Name" autocomplete="off" />
                <button type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>

        <div>
            {Details.map(detail => ( parseInt(buttonName) === detail.ZipCode || buttonName === detail.MuseumName ? 
            <div>
                <h1>{detail.MuseumName}</h1>
            </div>
             : null))}
            
            {found?  <Map onChange={handleChange} userInput={buttonName} />:null}

        </div>
    </div>

  );
}
