import React from 'react';
import './style.css';

const Card = (e) => {
    return (
        <div className = "card text-center shadow">
            <div className = "overflow">
                <img src={e.imgsrc} alt = "Image 1" className = "card-img-top "/>
                <div className = "card-body text-dark">
                    <h4  className= "card-title"> {e.title}  </h4>
                    <p className = "card-text text-secondary">{e.parg}                   
                    </p>
                    <a href="#" className="btn btn-outline-success">Go Anywhere</a>

                </div>

            </div>

        </div>
    )
}

export default Card
