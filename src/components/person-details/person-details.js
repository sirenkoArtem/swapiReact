import React from 'react';
import './person-details.scss';

const PersonDetails = () => {
    return(
        <div className="person-details-wrapper">
            <img src="https://kremlinstore.ru/wa-data/public/shop/img/r2d2-robot-star-wars-droid-interactive-wifi-rc[1].jpg"
                 alt="R2D2"/>
            <div className="person-details-info">
                <h3>R2-D2</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: male</li>
                    <li className="list-group-item">Birth Year: 43</li>
                    <li className="list-group-item">Eye color: red</li>
                </ul>
            </div>
        </div>
    )
};

export default PersonDetails;