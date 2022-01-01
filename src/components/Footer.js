import React from 'react'
import {Link} from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'
// import { FaFacebookF } from 'react-icons/fa'


export default function Footer () {
    
    return (
        <div className="bg-white  w-full border-t-4 border-primary ">
        <div className="container text-center mt-2 ">      
        {/* container mx-auto p-4 flex flex-wrap  md:flex-no-wrap      */}
            <div className="flex flex-col align-center justify-evenly md:flex-row items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
                <Link to='/' ><StaticImage src="../images/SunGlo-logo.png" alt="Sunglo Window Film Durango Logo" placeholder="blurred" width={250} /></Link>
                    <div className="flex ">
                        <a className="block text-xs px-4 mr-3 py-1 md:p-2 rounded-lg lg:px-4 border-primary border-2" href="tel:3032795884">CALL OR TEXT: <br/>(970) 335-9600</a>
                        <Link className="block text-md px-4 py-1 md:p-2 rounded-lg lg:px-4 bg-primary text-white" to='/Estimate'>Free Estimate</Link>
                    </div>
            </div>
                    © {new Date().getFullYear()} Sunglo Window Film, Built by <a href="https://roni.rocks/"  target="_blank" rel="noreferrer" ><span className="text-roni" >Roni</span></a>
        </div>
        </div>
    )
}