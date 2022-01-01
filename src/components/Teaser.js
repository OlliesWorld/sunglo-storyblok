import React from 'react'
import { render } from "storyblok-rich-text-react-renderer"
import SbEditable from 'storyblok-react'
import { Link } from 'gatsby'


const Teaser = ({ blok }) => { 
  
  const introText = typeof blok.intro_text === 'string' ? blok.intro_text : render(blok.intro_text)
  const key = typeof blok._editable !== 'undefined' ? blok._uid + '-edit' : blok._uid
  return (
  <SbEditable content={blok} key={key}>
    <div className="border-b-4 border-primary">
      <div className="flex container mx-auto">
      <div><img className="hidden lg:block object-cover w-half" src={blok.img} id={blok._uid} alt={blok.title} width={700}/></div>
        <div className="m-4">
          <h1 className="text-4xl font-bold font-serif text-primary max-w-lg">{ blok.headline }</h1>
          <div className="text-gray-700 text-lg max-w-lg ">{ introText }</div>
          <Link className="text-white text-lg bg-primary p-2 mt-8" to="/Estimate" target="_blank" rel="noreferrer">{blok.ctaname} </Link>
        </div>
        
      </div>
   
    </div>
  </SbEditable>
)
}

export default Teaser
