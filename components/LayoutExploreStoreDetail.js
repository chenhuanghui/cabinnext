import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'
import StoresDetailSection1 from './sections/ExploreStore/Section1';
import StoresDetailSection2 from './sections/ExploreStore/Section2';
import StoresDetailSection3 from './sections/ExploreStore/Section3';
import StoresDetailSection4 from './sections/ExploreStore/Section4';
import StoresDetailSection5 from './sections/ExploreStore/Section5';
import StoresDetailSection6 from './sections/ExploreStore/Section6';
import StoresDetailSection7 from './sections/ExploreStore/Section7';

export default class LayoutExploreStoreDetail extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            fav:[]
        }
    }
    
    componentDidMount () {
        let currentComponent = this;
        
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        // get page setting
        base('Page_Setting').find('recz4Cz8KvJJaDnW4', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img = record.fields[`img`][0].url;
            currentComponent.setState({ fav: record.fields })
        });
        
    }
    

    render (){
        const {fav} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" />

                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pos/hardware-new-9eb568f8e32a45216c9a6f1f2f491965a1f55685fcc6589f82db25c4ede61ea5.css" />
                    
                    <link rel="shortcut icon" type="image/png" href={fav.img} />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>
                <div className="">
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                         <StoresDetailSection1 />   
                         <StoresDetailSection4 />   
                         <StoresDetailSection2 />   
                         <StoresDetailSection3 />  
                         <StoresDetailSection5 />  
                         <StoresDetailSection6 />
                         <StoresDetailSection7 />
                            
                        </main>
                        <Footer />
                    </div>
                </div>
                
            </div>
        )
    }
}