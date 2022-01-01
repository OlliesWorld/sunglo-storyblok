import React from 'react'
import SbEditable from 'storyblok-react'
import {Link} from 'gatsby'


const FeatureArticle = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className=" ">
      <div className="flex container mx-auto border-b-4 border-primary pt-4">
      <div className="flex  mb-6  text-left" key={blok._uid}>
      
        <div className="m-4 py-3">
          <h1 className="text-4xl font-bold font-serif text-primary max-w-xlg">{ blok.title }</h1>
          <p className="text-gray-700 text-lg max-w-lg leading-relaxed">{ blok.text }</p>
          <div className="mt-6 ml-4 flex flex-col">
          <Link className="bg-primary text-white mr-3 mb-2 p-3 uppercase" to={`/${blok.alink.cached_url}`}>{blok.alink.cached_url} </Link>
          <Link className="bg-red-800 text-white mr-3 mb-2 p-3 uppercase" to={`/${blok.blink.cached_url}`}>{blok.blink.cached_url} </Link>
          <Link className="bg-black text-white mr-3 p-3 uppercase" to="/Estimate" target="_blank" rel="noreferrer">{blok.clinkname} </Link>
      </div>
        </div>
        <div><img className="hidden lg:block object-cover ml-32 w-half" src={blok.img} id={blok._uid} alt={blok.title} width={400}/></div>
        </div>
       
      </div>
      </div>
    </SbEditable>
  )
}

export default FeatureArticle
