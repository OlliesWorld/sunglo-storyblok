import React from 'react'
import SbEditable from 'storyblok-react'

const Slider = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="snap-start w-full flex-shrink-0 shadow-xl">
       <img className="object-cover w-full h-80" src={blok.img} id={blok._uid} alt={blok.title} width={300}/>
       </div>
    </SbEditable>
    )
}

export default Slider
