import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Announcement from './sections/Announcement';
import Hero from './sections/Master/Hero'
import Pillars from './sections/Master/Pillars'
import BackgroundGreen from './sections/Master/BackgroundGreen'
import Support from './sections/Master/Support'
import SignUp from './sections/Master/SignUp'
import Footer from './Footer'

export default class LayoutBundleDeliveryRight extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: [],
            dataHero: [],
            dataGreen: [],
            dataPillar: [],
            dataSupport: [],
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

        base('BundleDelivery_Hero').find('recnvRpQ3YSvEkiTl', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img_src = record.fields[`img_src`][0].url;
            currentComponent.setState({ dataHero: record.fields })
        });

        base('BundleDelivery_GreenBoard').find('recoCx9CKQocUmJos', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.block1_img_src = record.fields[`block1_img_src`][0].url;
            record.fields.block2_img_src = record.fields[`block2_img_src`][0].url;
            record.fields.block3_img_src = record.fields[`block3_img_src`][0].url;

            record.fields.block1_icon = record.fields[`block1_icon`][0].url;
            record.fields.block2_icon = record.fields[`block2_icon`][0].url;
            record.fields.block3_icon = record.fields[`block3_icon`][0].url;
            record.fields.block4_icon = record.fields[`block4_icon`][0].url;

            currentComponent.setState({ dataGreen: record.fields })
        });

        base('BundleDelivery_Pillars').find('recp3KZyYxHHYMxsE', function(err, record) {
            if (err) { console.error(err); return; }
            // console.log('pillar',record);
            record.fields.pil_block1_img_src = record.fields[`pil_block1_img_src`][0].url;
            record.fields.pil_block2_img_src = record.fields[`pil_block2_img_src`][0].url;
            record.fields.pil_block3_img_src = record.fields[`pil_block3_img_src`][0].url;
            record.fields.pil_block4_img_src = record.fields[`pil_block4_img_src`][0].url;

            currentComponent.setState({ dataPillar: record.fields })
        });

        base('BundleDelivery_Support').find('recd7z7DUT1yxUIlO', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img_src = record.fields[`img_src`][0].url;
            currentComponent.setState({ dataSupport: record.fields })
        });

        base('BundleDelivery_SignUp').find('recUU9TALWbOif6YA', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSignUp: record.fields })
        });
    }

    render () {
        const { announcementData, dataHero, dataGreen, dataPillar,dataSupport, dataSignUp} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    {/* <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/masterbrand-12d9bf8602c9e16769a8ff8a1177e4238d9413d73d9dd7678796641e912282fa.css" /> */}
                    {/* <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/home/index-72e8f7e85d965b49c9307d648b07104daf053fb6e3c5fafc4e3c20c0abd96957.css" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

                    {/* <script src="https://cdn.shopify.com/static/javascripts/vendor/bugsnag.v6.3.2.min.js"></script> */}
                    {/* <script src="https://cdn.shopify.com/assets2/bundles/baseline/runtime-76ad241475870fafe1acc0bf5a22700961b62a11bdcc38855aa630e7f8a341dc.js"></script> */}
                    {/* <script src="https://cdn.shopify.com/assets2/bundles/baseline/vendor-549fb800ff272e241255f89ffbf991842503de4aa02a4b09abb2b957c6a9d91d.js"></script> */}
                    {/* <script src="https://cdn.shopify.com/assets2/bundles/baseline/manifests/pillar/sell-ba2e933c1d28947ce10bc52d3e7b2680587d4130bcb13b803368fa57eba85621.js"></script> */}
                    {/* <script src="https://cdn.shopify.com/speedcurve-lux/js/lux.js?id=64441087"></script> */}
                    {/* <script src="https://cdn.shopify.com/s/javascripts/tricorder/trekkie.brochure.min.js?v=2019.08.08"></script> */}
                    {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> */}

                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>

                <div className="page--home">
                    <Announcement announcementData={announcementData}/>

                    {/* <!-- Header */}
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            <Hero dataHero={dataHero}/>
                            <BackgroundGreen dataGreen={dataGreen}/>
                            <Pillars dataPillar = {dataPillar}/>
                            <Support dataSupport = {dataSupport}/>
                            <SignUp dataSignUp = {dataSignUp}/>
                            
                            <div className="grid">
                                <div className="grid__item back-to-top-link-wrapper">
                                    <a className="back-to-top-link link-scroll-to styled-link styled-link--skin-inherit" href="#PageContainer">
                                        Back to top
                                        {/* <svg class="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                                    </a>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    
                `}</style>
            </div>
        )

    }
}