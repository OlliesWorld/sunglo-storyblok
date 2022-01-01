import React from "react"
import {Link} from 'gatsby'
import SbEditable from 'storyblok-react'
// import rewriteSlug from '../lib/rewriteSlug'


const NavItem = ({blok}) => {
      
return (
    <SbEditable content={blok} key={blok._uid}>
        <div className="text-black uppercase  bg-gradient-to-r from-sundark to-sunlight bg-growing-underline hover:text-white">

            <Link to={`/${(blok.link.cached_url)}`} prefetch="true" className="block text-sm px-4 py-1 md:p-2 lg:px-8">
            {blok.name}
            </Link>
        </div>
</SbEditable>
)}

export default NavItem