import React from 'react'
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const FooterBar = ({blok}) => (
    <>
   
  <SbEditable content={blok} key={blok._uid}>
     <div className="w-full border-t-4 border-primary m-0">
       
           <ul className="w-full flex flex-col align-center text-center lg:flex-row justify-center m-auto">
                {blok.block.map((blok) => (
                    <li key={blok._uid} className="mx-auto my-4 ">
                    <DynamicComponent blok={blok} />
                    </li>
                )
                )}
           </ul>
     </div>
  </SbEditable>
  <div className='text-center'>© {new Date().getFullYear()} Sunglo Window Film, Built by <a href="https://roni.rocks/"  target="_blank" rel="noreferrer" ><span className="text-roni" >Roni</span></a></div>
  </>
)

export default FooterBar