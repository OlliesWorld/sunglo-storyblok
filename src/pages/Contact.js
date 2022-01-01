import React from "react"
import Seo from "../components/seo"
import Layout from '../components/layout'
import Nav from '../components/Navigation'
import ContactForm from '../components/Form'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'


const ContactPage = () => {

  return (
    <Layout >
      <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
     
      <Nav />
        <div className="container mt-8 md:flex lg:justify-center mx-auto " >
          <ContactForm />
          
            <div className="lg:flex mx-auto">
              <div className="text-center md:w-56 md:mr-8 mx-auto">
                <StaticImage src="../images/building-img.jpg" layout="constrained" alt="office building with reflective window tint"
                        fit="contain"
                        width={270} height={150}
                        placeholder="blurred"/>
                        <h3>About us</h3>
                        <p>Our first priority is to enhance life by improving the windows in our community. SunGlo is designed to provide benefits that will increase one’s standard of living today, and continue to produce benefits into the future.</p>
                  </div>
                  <div className="text-center md:w-56">
                  <StaticImage src="../images/about-pic.jpg" layout="constrained"
                          fit="contain"
                          width={270} height={150}
                          placeholder="blurred" alt="looking up at2 men installing Sunglo Window film "/>
                          <h3>Home Window Tint</h3>
                          <p>We pride ourselves on high quality home window tint products and elite customer service. Your SunGlo Window Film Expert will exceed your expectations at every turn! We serve in all major areas of Colorado </p>
                </div>
            </div>
          
          
        </div>
            <h2 className="text-center text-primary">Commercial and residential window tinting in Durango and all surrounding areas.</h2>
  <Footer />
  </Layout>
  )
}
export default ContactPage

