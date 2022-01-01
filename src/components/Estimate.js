import React from "react"

import SbEditable from 'storyblok-react'
// import rewriteSlug from '../lib/rewriteSlug'


const Estimate = ({blok}) => {
      
return (
    <SbEditable content={blok} key={blok._uid}>
        <div className="">

            <a href={`https://sunglo-storyblok.netlify.app/${(blok.link.cached_url)}`} prefetch="true" className=" w-40 block text-xl text-center  p-2 h-14 rounded-lg  bg-primary hover:bg-black text-white">
            {blok.name}

            </a>
        </div>
</SbEditable>
)}

export default Estimate