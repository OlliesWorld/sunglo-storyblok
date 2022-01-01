import React from 'react'
import SbEditable from 'storyblok-react'
import { render} from 'storyblok-rich-text-react-renderer'



const Article = ({blok}) => {
  // const text = typeof blok.text === 'string' ? blok.text : render(blok.text)
  // console.log(render(blok.text))
  const key = typeof blok._editable !== 'undefined' ? blok._uid + '-edit' : blok._uid
  return (
    
  <SbEditable content={blok} key={key}>
    <div className="pt-8 lg:mr-16 bg-pattern">
    <div className="flex ">
      
        <div className="mx-auto w-2/3 ">
          <h1 className="text-2xl font-bold font-serif text-black w-full">{ blok.title }</h1>
          <div className="text-gray-700 text-lg max-w-xlg lg:mr-52  "> {render(blok.text)}</div>
        </div>
        
     </div>
   
    </div>
  </SbEditable>

  )
  }

export default Article
