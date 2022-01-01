import React from 'react'

import SbEditable from 'storyblok-react'


const Hero = ({ blok }) => { 
  

  const key = typeof blok._editable !== 'undefined' ? blok._uid + '-edit' : blok._uid
  return (
  <SbEditable content={blok} key={key}>
    <div className=" border-b-4 border-primary">
      <div className="flex container mx-auto">
      <img className="hidden lg:block object-cover w-3/4 h-80" src={blok.img} id={blok._uid} alt={blok.title} width={500}/>
        <div className="p-4  lg:absolute right-20 top-55 bg-sungrey bg-opacity-70">
          <h1 className="text-2xl font-bold font-serif text-white max-w-lg mb-2">{ blok.Headline }</h1>
          <div className="text-white text-lg max-w-lg mb-4">{ blok.text }</div>
            <a className="text-white text-lg bg-primary p-2 mt-8" href="/Estimate" target="_blank" rel="noreferrer">{blok.ctaname} </a>
        </div>
        
      </div>
   
    </div>
  </SbEditable>
)
}

export default Hero
