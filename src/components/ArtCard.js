
import React from 'react'
import './ArtCard.css'
import '../App.css'

function ArtCard({title, artist, year, detailurl, image, popularity}) {

    const [isClicked, setIsClicked] = React.useState(false)

    function handleClick () {
        setIsClicked(!isClicked)
        // artcard sort!
    }

    return (
        // box
        <div className='padding-left-24 padding-top-24'>
            <div className='artcard-container flex row '>
                <div className='flex align-center'>
                    <div onClick={handleClick} className='padding-left-16'>
                        <i className={isClicked? 'flex justify-center fas fa-heart' : 'flex justify-center far fa-heart'}></i>
                        {isClicked? 
                            <div className='flex justify-center'> {popularity+1} </div>
                        :
                            <div className='flex justify-center'> {popularity} </div>
                        }
                        
                    </div>
                    {/* List data */}
                    <div className='padding-left-24'>
                        {/* TODO: data format rearrange */}
                        <h3 className='text-twolines'>{title}</h3>
                        <p>{artist} | {year}<br/><br/>
                            Floor 5, 502</p>
                    </div>
                </div>
                <div className='flex align-center padding-right-16 padding-left-16'>
                    {/* artwork detail url */}
                    <a href={detailurl} className='pointer' target='_blank'>
                        <img 
                            className='artcard-thumbnail'
                            src={image}
                            alt={title}
                            width="140px"
                            height="140px"
                        />
                    </a>
                </div>
            </div>  
        </div>
    )
}

export default ArtCard