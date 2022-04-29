import React from 'react'
import Footer from '../components/Footer';
import Layout from '../components/layout'
import Nav from '../components/Navigation';

import Seo from '../components/seo'



const ThanksPage = () => (
    <Layout >
        <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 744-6699"/>
            <Nav />  
                <div className="content text-center my-40">

                    <h2>Thank you for requesting an Estimate! </h2>
                    <h2>A SunGlo representative will be in contact shortly.</h2>
                </div>
                
            <Footer />
           
    </Layout >
);

export default ThanksPage;