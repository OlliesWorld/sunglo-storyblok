import {Link} from 'gatsby'
import React, {useState} from 'react'
// import SbEditable from 'storyblok-react'
 import { StaticImage } from 'gatsby-plugin-image';
import {  useStaticQuery, graphql } from 'gatsby'

const Nav = () => {
  const Navigation = useStaticQuery(graphql`
    query {
      allStoryblokEntry(sort: {fields: created_at}) {
        edges {
          node {
            name
            slug
            full_slug
            uuid
            created_at
          }
        }
    }
  } 
  `)
  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  //  console.log(Navigation)

return (
  <div className="w-full bg-white mt-4">
   
    <nav className="border-b-4 border-primary ">
      <div className="container mx-auto lg:p-4 flex flex-wrap items-center md:flex-no-wrap mt-4">
        <div className="mr-4 md:mr-8 ">
          <Link to="/"> 
          
          <StaticImage src="../images/SunGlo-logo.png" alt="logo" width={250} height={100}/>
          </Link>
        </div>
        
        <button type="button" className=" bg-sundark block ml-12 p-2 lg:hidden" onClick={handleClick}>
          <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {isOpen && (
            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            )}
            {!isOpen && (
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center ">
          <ul className={`lg:flex ${  isOpen ? "block" : "hidden" } `}>
          
                
           {Navigation &&
              Navigation.allStoryblokEntry.edges.map((edge) => (
                 
                <li key={edge.node.uuid}>
                 <Link to={`/${(edge.node.full_slug)}`} prefetch="true" className="lg:w-full w-1/2 block px-4 py-1 md:p-2 lg:px-8 text-black uppercase bg-gradient-to-r from-sundark  bg-growing-underline ">
                     {edge.node.name} 
                   </Link> 
                   </li>
              ))}
             
          </ul>
          </div>
           <ul className="flex flex-col  border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
            <li>
            <a href="tel:3032795884" 
              className= "block text-xs text-center px-2 mr-3  p-2 rounded-lg lg:px-4 border-primary border-2 hover:bg-primary hover:text-white"
              >
                
                  CALL OR TEXT <br/>
                (970)355-9600 
              </a>
            </li>
            <li>
              <Link to="/Estimate" 
              className="block text-xl px-8 py-2 md:p-2 rounded-lg lg:px-4 lg:py-3 bg-primary text-white hover:bg-white hover:text-primary hover:text-md"
              >
                Free Estimate
              </Link>
            </li>
          </ul> 
        
      </div>
              
    </nav>
  
  </div>
 
  
)
};
  export default Nav
