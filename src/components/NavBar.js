import React, {useState} from 'react'
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const NavBar = ({blok}) => {

  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (

  
  <SbEditable content={blok} key={blok._uid}>
    <button type="button" className="block m-auto py-4 lg:hidden" onClick={handleClick}>
          <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {isOpen && (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            )}
            {!isOpen && (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
        <div className="w-2/3 m-auto md:w-auto md:flex-grow md:flex md:items-center ">
          <ul className={`lg:flex ${  isOpen ? "block" : "hidden" } `}>
          
        {blok.block.map((blok) => (
            <li key={blok._uid} className="mr-4 ">
              <DynamicComponent blok={blok} />
            </li>
          )
        )}
           </ul>
     </div>
  </SbEditable>
  )
        }

export default NavBar