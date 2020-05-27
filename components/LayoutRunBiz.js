import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Announcement from './sections/Announcement';
import RunSection1 from './sections/Run/Section1';
import RunSection2 from './sections/Run/Section2';
import RunSection3 from './sections/Run/Section3';
import RunSection4 from './sections/Run/Section4';
import RunSection5 from './sections/Run/Section5';
import SignUp from './sections/Master/SignUp'
import Footer from './Footer'

export default class LayoutRunBiz extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: [],
            dataSignUp: []
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
        
        base('BundleDelivery_SignUp').find('recUU9TALWbOif6YA', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSignUp: record.fields })
        });
    }

    render (){
        const { announcementData,dataSignUp} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pillar/manage-b8c2c4d2d9d8924225143379d052714e26e3b313e758293cbcdb5197c24d5164.css" />
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>

                <div className="page--home">
                    <Announcement announcementData={announcementData}/>

                    {/* <!-- Header */}
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                           <RunSection1 />
                           <RunSection2 />
                           <RunSection3 />
                           <RunSection4 />
                           <RunSection5 />

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