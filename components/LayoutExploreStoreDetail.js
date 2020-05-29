import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'
import StoresDetailSection1 from './sections/ExploreStore/Section1';
import StoresDetailSection2 from './sections/ExploreStore/Section2';

export default class LayoutExploreStoreDetail extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {

        }
    }
    
    componentDidMount () {
        let currentComponent = this;
        
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        
        
    }
    

    render (){
        const {} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" />

                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pos/hardware-new-9eb568f8e32a45216c9a6f1f2f491965a1f55685fcc6589f82db25c4ede61ea5.css" />
                    
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>
                <div className="">
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                         <StoresDetailSection1 />   
                         <StoresDetailSection2 />   
                            
                        </main>
                        <Footer />
                    </div>
                </div>
                
            </div>
        )
    }
}