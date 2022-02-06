import React from "react";
import "./Profile.css";

function Profile () {
    return (
        <div>
        
            <img className="profile-img" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/starry-night-print-by-vincent-van-gogh-vincent-van-gogh.jpg" alt="profile-image" />
            <h1>DAYEON KANG</h1>
            <button>Museums you've been to</button>
            <button>Saved Artworks</button>
            <button>Friends</button>
            <button>Settings</button>

        </div>
    )
}

export default Profile;