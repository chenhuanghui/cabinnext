import { hotjar } from 'react-hotjar';
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import Head from 'next/head'
import React from 'react';

import Header from './Header'
import ModalForm from './sections/Modal/FormModal';
import Announcement from './sections/Announcement';
import ExploreCatSection1 from './sections/ExploreCat/Section1';

import SignUp from './sections/Master/SignUp'
import Footer from './Footer'

const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
      googleAnalytics({
        trackingId: 'UA-168839658-1'
      })
    ]
})

export default class LayoutExloreCat extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: [],
            dataSignUp: [],
            dataCategories:[],
            fav:[]
        }
      }

    componentDidMount () {
        hotjar.initialize(1846240, 6);
        analytics.page();
        
        let currentComponent = this;

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('Announcement').find('rech8uFdriXPNBETt', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ announcementData: record.fields })
        });
        
        base('BundleDelivery_SignUp').find('recUU9TALWbOif6YA', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSignUp: record.fields })
        });
        
        
        // load color variable
        base('Color_Table').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {records.forEach(function(record) {
                // console.log('Retrieved', record.get('Name'));
                $(`body`).css(record.get('Name'),record.get('value'));
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        // get page setting
        base('Page_Setting').find('recz4Cz8KvJJaDnW4', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img = record.fields[`img`][0].url;
            currentComponent.setState({ fav: record.fields })
        });
    }

    render (){
        const { fav, announcementData,dataSignUp,dataCategories} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/growth-tools-assets/application-6824356ab535369c3bb0f143c850e0c4f0a2fd2965bc8fb394e30dd30e68fc64.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/growth-tools-assets/manifests/home-176a7e18773be648f168fbc8962e09f7aa05100009c48e4fb4fbcab7d8669d0c.css" />
                    <link rel="shortcut icon" type="image/png" href={fav.img} />
                    <title>CabinFood | Explore Categories</title>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
                </Head>

                <div className="page--home">
                    <ModalForm />
                    <Announcement announcementData={announcementData}/>

                    {/* <!-- Header */}
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            
                            <ExploreCatSection1 />

                            <SignUp dataSignUp={dataSignUp}/>
                            <div className="grid">
                                <div className="grid__item back-to-top-link-wrapper">
                                    <a className="back-to-top-link link-scroll-to styled-link styled-link--skin-inherit" href="#PageContainer">
                                        Back to top
                                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .marketing-nav.marketing-nav--solid {background-color: #fbf7ed !important;}
                `}</style>
            </div>
        )
    }
}