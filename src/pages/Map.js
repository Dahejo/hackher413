import React from "react";
import "./Map.css";
import { Details } from "../components/data/museum_ma";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map ({userInput}) {

    console.log(typeof userInput)

    return (
        <div>

            {/* Map */}
            <div>
                <MapContainer center={[40.761509, -73.978271]} zoom={12.5} >
    
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {Details.map(detail => ( parseInt(userInput) === detail.ZipCode || userInput === detail.MuseumName ? 
                        <Marker position={[detail.Latitude, detail.Longitude]}>
                            <Popup>
                                <a href="/moma" target='_blank'>{detail.MuseumName}</a>
                            </Popup>
                        </Marker>
                        : null))}

                    
                </MapContainer>
            </div>

        </div>
    );
}

export default Map;