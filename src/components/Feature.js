import React from 'react'
import SbEditable from 'storyblok-react'
import {Link} from 'gatsby'

const Feature = ({blok}) => {
  
  return (
    <SbEditable content={blok} key={blok._uid}>
      <Link to={`/${blok.link.cached_url}`}>
        <div className="pb-2 flex flex-col items-center h-full overflow-hidden bg-gray-300">
          <div >
              <img className="object-cover w-full pt-3" src={blok.img} id={blok._uid} alt={blok.title} />
            </div> 
              <div className="py-4 ">
                  <h2 className="font-bold text-xl mb-4  ">{blok.name}</h2>
                  <p className="text-base p-2 text-center ">
                    {blok.description}
                  </p>
              
              </div>
          </div>
      </Link>
    </SbEditable> 
  )
}

export default Feature
