import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Hero from './sections/Hero'
import Pillars from './sections/Pillars'
import Copyrights from './sections/Copyrights'
import Footer from './Footer'
import BackgroundGreen from './sections/BacgroundGreen'
import Support from './sections/Support'
import SignUp from './sections/SignUp'
import Announcement from './sections/Announcement';

export default class Layout extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: [],
            dataHero: [],
            dataGreen: [],
            dataPillar: [],
            dataSupport: []
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

        base('Hero').find('recnvRpQ3YSvEkiTl', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img_src = record.fields[`img_src`][0].url;
            currentComponent.setState({ dataHero: record.fields })
        });

        base('GreenBoard').find('recoCx9CKQocUmJos', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataGreen: record.fields })
        });

        base('Pillars').find('recp3KZyYxHHYMxsE', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img1_src = record.fields[`img1_src`][0].url;
            record.fields.img2_src = record.fields[`img2_src`][0].url;
            record.fields.img3_src = record.fields[`img3_src`][0].url;

            currentComponent.setState({ dataPillar: record.fields })
        });

        base('Support').find('recd7z7DUT1yxUIlO', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSupport: record.fields })
        });
    }

    render () {
        const { announcementData, dataHero, dataGreen, dataPillar,dataSupport} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/masterbrand-12d9bf8602c9e16769a8ff8a1177e4238d9413d73d9dd7678796641e912282fa.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/home/index-72e8f7e85d965b49c9307d648b07104daf053fb6e3c5fafc4e3c20c0abd96957.css" />
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
                            <SignUp />
                            
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

            </div>
        )

    }
}