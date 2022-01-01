import React from "react"
import Seo from '../components/seo';
import Layout from '../components/layout'
import Nav from '../components/Navigation'
import EstimateForm from '../components/FormEstimate';
import Footer from "../components/Footer";


const EstimatePage = () => {
  return (
    <Layout>
      
      <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
        <div className="w-full m-0 bg-office">
        <Nav />

            <EstimateForm />
            <Footer />
        </div>
      </Layout>
  )
}
export default EstimatePage