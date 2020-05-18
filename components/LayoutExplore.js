import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Announcement from './sections/Announcement';
import Footer from './Footer'

export default class LayoutBundleDeliveryRight extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: []
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
    }


    render (){
        const { announcementData} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/masterbrand-12d9bf8602c9e16769a8ff8a1177e4238d9413d73d9dd7678796641e912282fa.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/home/index-72e8f7e85d965b49c9307d648b07104daf053fb6e3c5fafc4e3c20c0abd96957.css" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>
                <div className="page--pillar-sell">
                    <Announcement announcementData={announcementData}/>
                    <Header />

                    <div id="PageContainer">
                        <main id="Main">
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
