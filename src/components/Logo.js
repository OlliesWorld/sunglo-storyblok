import React from "react"
//  import {Link} from 'gatsby'
import SbEditable from 'storyblok-react'
// import { GatsbyImage } from 'gatsby-plugin-image'

const Logo = ({blok}) => {
      
return (
    <SbEditable content={blok} key={blok._uid}>
        <div className="">
            <img src={blok.logo} alt={blok.logo} width={250} height={150}/>
        {/* <GatsbyImage
            image={blok.logo}
            alt="logo"
            className="-mt-4"
            />
              */}
        </div>
</SbEditable>
)}

export default Logo