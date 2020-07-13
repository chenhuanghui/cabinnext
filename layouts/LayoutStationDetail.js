import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav/nav';

export default function BlogDetail () {
    const router = useRouter();
    const [stationID, setStationID] = useState(null);


    useEffect(() => {
        // segment tracking data start
        const Analytics = require('analytics-node');
        const analytics = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');
        analytics.page({
            userId: document && document.cookie ? document.cookie : 'anonymous',
            category: 'Station Information /',
            name: 'Station' + router.query.stationID,
            properties: {
              url: '/stations/' + router.query.stationID,
              title: 'CabinFood - Station Detail' + router.query.stationID
            }
        });
        //set slug
        setStationID(router.query.stationID);        
        console.log('log', router.query.stationID);
        
    },[stationID])
    

    return (
        <div className="layout">
            <Head>
                <title>CabinFood Station Detail</title>    
            </Head>

            <div className="page--home">
                <Nav />
                <div className="colored-section">
                    <section>
                        <div className="grid grid--equal-height grid--vertically-centered">
                            <div className="grid__item grid__item--tablet-up-half pos-next-hero__heading-container">
                                <div className="section-heading text-left gutter-bottom">
                                <h1 className="section-heading__kicker heading--5 color-yellow-30">Shopify Point of Sale</h1>
                                <h2 className="section-heading__heading heading--1 pos-next-hero__heading color-white">Make your business future‑proof</h2>
                                <p className="section-heading__subhead heading--2 color-white text-major">Meet the most versatile POS for unifying in-store and online sales.</p>
                            </div>
                            <a className="marketing-button gutter-bottom" data-ga-event="pos-overview" data-ga-action="hero" data-ga-label="request-info" href="/pos/request-info">Request information</a>
                            <div className="color-white">
                                Already have a Shopify store? 
                                <a className="color-white body-link" data-ga-event="pos-overview" data-ga-action="hero" data-ga-label="login" href="/admin/settings/channels?highlight=pos&amp;utm_content=pos-overview-hero-login-pos&amp;utm_source=pos-overview">Log in to set up Shopify POS</a>
                            </div>
                        </div>
                        <div className=" picture--cover pos-next-hero__image-container section--help__picture">
                            <span className='image lazyload-image'>
                                <span className='lazyload-image__placeholder'>
                                    <img className="image" src="https://dl.airtable.com/.attachments/5a1362123c7495fa9a163a0a1b0e1970/34487561/location.jpg" alt="" />
                                </span>
                            </span>
                            
                        </div>
                    </div>  
                    </section>
                </div>

                <section className="section pos-next-streamline background-yellow-0">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-two-thirds">
                        <div className="section-heading pos-next-streamline__heading-wrapper text-left gutter-bottom">
                            <p className="section-heading__kicker heading--5 color-green-90">Streamlined operations</p>
                            <h2 className="section-heading__heading heading--2 pos-section-heading">Seize every opportunity with one back office</h2>
                    </div>
                        <div className="grid grid--equal-height">
                            <div className="grid__item grid__item--tablet-up-half">
                                <div className="block">
                                <h3 className="block__heading heading--4">One powerful platform</h3>
                                <p className="block__content">Have all the tools you need to manage your business, market to customers, and sell everywhere in one place.</p>
                    </div></div>          <div className="grid__item grid__item--tablet-up-half">
                                <div className="block">
                                <h3 className="block__heading heading--4">Advanced inventory features</h3>
                                <p className="block__content">Generate purchase orders and transfer stock based on inventory forecasts and performance.</p>
                    </div></div>          <div className="grid__item grid__item--tablet-up-half">
                                <div className="block">
                                <h3 className="block__heading heading--4">Unified reporting</h3>
                                <p className="block__content">Adapt to growing trends in your business with unified analytics that blend in-store and online sales.</p>
                    </div></div>          <div className="grid__item grid__item--tablet-up-half">
                                <div className="block">
                                <h3 className="block__heading heading--4">Custom staff permissions</h3>
                                <p className="block__content">Delegate with peace of mind and motivate staff to grow with increased responsibilities.</p>
                    </div></div></div></div></div>
                    <div className="grid__item grid__item--tablet-up-half pos-next-hero__image-container">
                        <div className="grid__item grid__item--tablet-up-5 grid__item--desktop-up-10 pos-next-streamline__image-container">
                            <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/soludos/pos-next-index-steamline-operations@mobile-51f60149d411e318e091f8e6454e606cb0b4aacbfa2a467608794bd554e46c6d.jpg" />
                                
                        
                    </div></div></section>

                <p>stationd detail {router.query.stationID}</p>
            </div>
    <style jsx>{`
        .colored-section {
            background: #000000;
        }
        .pos-next-hero {
            display: flex;
            align-items: flex-end;
        }
        .pos-next-hero__heading-container {
            margin-top: 50px;
            margin-bottom: 100px;
        }
        @media screen and (min-width: 67.5em){
            .pos-next-hero__heading-container {
                padding-right: calc(5% + 18px);
                padding-left: calc(5% + 18px);
            }
        }
        @media screen and (min-width: 46.875em) {
            .pos-next-hero__heading-container {
                padding-right: calc(5% + 9px);
                padding-left: calc(5% + 9px);
            }
        }
        .gutter-bottom {
            margin-bottom: 32px !important;
        }
        .marketing-button {
            display: inline-block;
            padding: 1.0625em 1.875em;
            border-radius: 4px;
            font-family: ShopifySans, Helvetica, Arial, sans-serif;
            font-weight: 700;
            font-size: 1em;
            line-height: 1.133;
            -webkit-font-smoothing: antialiased;
            transition: 150ms ease;
            transition-property: background-color, border-color, box-shadow, color;
            text-align: center;
            -webkit-user-select: none;
            user-select: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;
            box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
            background-color: #008060;
            color: #ffffff;
            border-width: 0;
            border-style: solid;
            border-color: transparent;
        }
        .pos-next-hero__image-container {
            position: relative;
        }
    
        .image.lazyload-image{max-width: 818px; max-height: 716px;}
        .lazyload-image__placeholder {padding-bottom: 87.5306%}
    `}</style>
        </div>
        
    )
    
}