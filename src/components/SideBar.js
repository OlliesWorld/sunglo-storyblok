import React from 'react'
import SbEditable from 'storyblok-react'

const SideBar = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="flex flex-col items-center lg:absolute lg:top-96 lg:right-20 pt-4 lg:pt-36">
          <h2 className="mb-4 border-t-2 border-b-2 border-primary">{blok.title}</h2>

           <a href={blok.link} > <img className="object-cover mt-4 mr-8 w-half"  src={blok.img} id={blok._uid} alt={blok.title} width={200}/></a>
           <a href={blok.link2}><img className="object-cover mt-4 mr-8 w-half" src={blok.img2} id={blok._uid} alt={blok.title} width={200}/> </a>
           <a href={blok.link3}><img className="object-cover mt-4 mr-8 w-half" src={blok.img3} id={blok._uid} alt={blok.title} width={200}/> </a>
           <a href={blok.link4}><img className="object-cover mt-4 mr-8 w-half" src={blok.img4} id={blok._uid} alt={blok.title} width={200}/> </a>
           <a href={blok.link5}><img className="object-cover mt-4 mr-8 w-half" src={blok.img5} id={blok._uid} alt={blok.title} width={200}/> </a>
     
       </div>
    </SbEditable>
    )
}

export default SideBar