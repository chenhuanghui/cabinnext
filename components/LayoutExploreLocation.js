import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Announcement from './sections/Announcement';
import LocationSection1 from './sections/Location/LocationSection1';
import LocationSection2 from './sections/Location/LocationSection2';
import LocationSection3 from './sections/Location/LocationSection3';
import LocationSection4 from './sections/Location/LocationSection4';
import LocationSection5 from './sections/Location/LocationSection5';
import LocationSection6 from './sections/Location/LocationSection6';
import Footer from './Footer'

export default class LayoutBundleDeliveryRight extends React.Component { 
    
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: [],
            dataSection1:[],
            dataSection2:[],
            dataSection3:[],
            dataSection4:[]
        }
    }
    componentDidMount () {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('Announcement').find('rech8uFdriXPNBETt', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ announcementData: record.fields })
        });

        base('Location_Section1').find('rec9iha00rsLc65Gc', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSection1: record.fields })
        });

        base('Location_Section2').find('recCVHUbwyhs02viV', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSection2: record.fields })
        });

        base('Location_Section3').find('recqeqF7dXJnrZSRz', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSection3: record.fields })
        });

        base('Location_Section4').find('recAQ6i5wIBBCC6Oa', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSection4: record.fields })
        });


        
    }


    render (){
        const { announcementData, dataSection1, dataSection2, dataSection3, dataSection4} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/masterbrand-12d9bf8602c9e16769a8ff8a1177e4238d9413d73d9dd7678796641e912282fa.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/home/index-72e8f7e85d965b49c9307d648b07104daf053fb6e3c5fafc4e3c20c0abd96957.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pillar/sell-914ee38ae73192ea7d1625dca6277b4c70d1f15f78074de4b2c354ce2371afbe.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pillar/base-81be2467a53cebe8f831d8a89bc6e992e93d27cd83dd61f67fab85bbebc6cb41.css" />
                    
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>
                <div className="page--pillar-sell">
                    <Announcement announcementData={announcementData}/>
                    <Header />

                    <div id="PageContainer">
                        <main id="Main">
                            <LocationSection1 dataSection1={dataSection1}/>
                            <LocationSection2 dataSection2={dataSection2}/>
                            <LocationSection3 dataSection3={dataSection3}/>
                            <LocationSection4 dataSection4={dataSection4}/>
                            {/* <LocationSection5 /> */}
                            {/* <LocationSection6 /> */}
                            {/* <LocationSection7 /> */}
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
