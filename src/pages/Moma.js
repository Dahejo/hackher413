import React from "react";
import ArtCard from '../components/ArtCard'
import { ArtInfos } from '../components/data/ArtInfos'

function Moma() {
    return (
    <div>
        <div className="padding-left-204 padding-top-72">
            <h1>The Museum of Modern Art</h1>
            <p>Sun-Fri: 10:30 a.m.–5:30 p.m.<br/>
                Sat: 10:30 a.m. –7:00 p.m.<br/><br/>
                11 West 53 Street, Manhattan<br/>
                Ticket: $14–25</p>
        </div>
        <div className="flex flex-wrap padding-left-180">
            {/* Get data from ArtInfos, loop -> call ArtCard function*/}
            {ArtInfos.map((item, index) => {
                return(
                    <div key={index}>
                        {/* props: title, artist, year, detailurl, image, popularity*/}
                        <ArtCard
                        title={item.Title}
                        artist={item.Artist}
                        year={item.Date}
                        detailurl={item.URL}
                        image={item.ThumbnailURL}
                        popularity={item.Popularity}/>
                    </div>
                )
            })}
        </div>  
    </div>
    )
}

export default Moma;