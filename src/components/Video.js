import React from 'react'
import SbEditable from 'storyblok-react'

const Video = ({blok}) => {
  return (

      <SbEditable content={blok} key={blok._uid}>
        <div className="flex flex-row m-0 ">
      
      
        <iframe className="m-auto pb-4"  src={blok.link.url} title={blok.link.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width={600} height={400} allowFullScreen></iframe>
         </div>
      </SbEditable>
   
    )
}

export default Video