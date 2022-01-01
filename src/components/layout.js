import * as React from "react"
import PropTypes from "prop-types"

// import Nav from './Navigation'

// import Footer from './Footer'
import "./layout.css"


export default function Layout({ children}){

  return (
    <>
      
      {/* <Nav /> */}
      
        <main>{children}</main>
       
        {/* <Footer />*/}
          
        
        {/* </Footer> */}
       
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


