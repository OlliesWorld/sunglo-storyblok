import React from "react"

import SbEditable from 'storyblok-react'
// import rewriteSlug from '../lib/rewriteSlug'


const Ctabutton = ({blok}) => {
      
return (
    <SbEditable content={blok} key={blok._uid}>
        <div className="text-black uppercase w-40">

        <a href={`tel:${(blok.link.cached_url)}`}  prefetch="true" className="block text-xs text-center  p-2 rounded-lg  border-primary border-2 hover:bg-primary hover:text-white">
            {blok.cta}
            </a>
        </div>
</SbEditable>
)}

export default Ctabutton