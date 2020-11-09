import React from 'react';
import Card from "./card"
import Imag1 from '../images/dubai.jpeg';
import Imag2 from '../images/newyork.jpeg';
import Imag3 from '../images/rome.jpeg';


const Cards = () => {
    return (
        
        <div className ="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                <Card imgsrc = {Imag1} title="Dubai" parg = " Dubai aims to be the business hub of Western Asia. It is also a major global transport hub for passengers and cargo Oil revenue helped accelerate the development. " />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={Imag2} title ="New york" parg ="New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan."/>
                </div>
                <div className="col-md-4">
                <Card imgsrc = {Imag3} title="Rome" parg ="Rome est la capitale de l'Italie. Située au centre-ouest de la péninsule italienne, près de la mer Tyrrhénienne, elle est également la capitale de la région du Latium, et fut celle. "/>
                </div>
            </div>
            

        </div>
    )
}

export default Cards ;
