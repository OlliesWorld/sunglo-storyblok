import React from 'react'
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
  <SbEditable content={blok} key={blok._uid}>
     <div className="container mx-auto text-center py-2 ">
       <div>
            <h2 className="relative font-serif text-4xl z-10 text-primary ">{blok.title}</h2>
            <h4 className="z-10">{blok.intro}</h4>
           
          </div>
           <ul className="flex flex-col lg:flex-row m-0 ">
        {blok.columns.map((blok) => (
            <li key={blok._uid} className=" my-4 lg:mr-4">
              <DynamicComponent blok={blok} />
            </li>
          )
        )}
           </ul>
     </div>
  </SbEditable>
)

export default Grid
