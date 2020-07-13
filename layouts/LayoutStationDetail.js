import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer'

export default function BlogDetail () {
    const router = useRouter();
    const [stationID, setStationID] = useState(null);
    const [data, setData] = useState(null);

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

        if(!data) {
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
            base('Page_Station_Detail').find('rec6D04I0m1SO99Ut', function(err, record) {
                if (err) { console.error(err); return; }
                console.log('page data:', record.fields);
                setData(record.fields)
            });
        }

        //set slug
        setStationID(router.query.stationID);        
        console.log('log', router.query.stationID);
    },[])
    

    return (
        <div className="layout">
            <Head>
                <title>CabinFood Station Detail</title>    
                <script src="https://fast.wistia.com/embed/medias/flvkbseogu.jsonp" async></script>
                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
            </Head>

            <div className="page--home">
            <Nav />
            <main id="Main">
                <section className="section section--padding-top-only homepage-hero colored-section" id="Hero">
                    <div className="grid grid--equal-height grid--vertically-centered">
                        <div className="grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half pos-next-hero__heading-container">
                            <div className="section-heading text-left gutter-bottom">
                                <h1 className="section-heading__kicker heading--5 color-yellow-30">{data ? data.sec1_tag : ''}</h1>
                                <h2 className="section-heading__heading heading--1 pos-next-hero__heading color-white">{data ? data.sec1_message : ''}</h2>
                                <p className="section-heading__subhead heading--2 color-white text-major">{data ? data.sec1_desc : ''}</p>
                            </div>
                            <a className="marketing-button gutter-bottom">{data ? data.sec1_form_btn_title : ''}</a>
                            <p className="color-white">{data ? data.sec1_form_desc : ''}</p>
                        </div>
                    </div>
                    <div className="picture--cover section--help__picture">
                        <img className="image" src={data ? data.sec1_cover[0].thumbnails.large.url :''} />
                    </div>
                </section>  

                 <section className="section pos-next-streamline background-yellow-0">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-two-thirds">
                            <div className="section-heading pos-next-streamline__heading-wrapper text-left gutter-bottom">
                                <p className="section-heading__kicker heading--5 color-green-90">{data ? data.sec2_tag : ''}</p>
                                <h2 className="section-heading__heading heading--2 pos-section-heading">{data ? data.sec2_title : ''}</h2>
                            </div>
                            <div className="grid grid--equal-height">
                                {
                                    data && data.sec2_block_list.length > 0
                                    ? 
                                        data.sec2_block_list.map((block,index) => (
                                            <div className="grid__item grid__item--tablet-up-half" key ={block.toString()}>
                                                <div className="block">
                                                    <h3 className="block__heading heading--4">{data.sec2_block_list_name[index]}</h3>
                                                    <p className="block__content">{data.sec2_block_list_desc[index]}</p>
                                                </div>
                                            </div>    
                                        ))
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid pos-next-streamline__image-wrapper">
                        <div className="grid__item grid__item--tablet-up-5 grid__item--desktop-up-10 pos-next-streamline__image-container">
                            {/* <img className=" lazyloaded" src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/soludos/pos-next-index-steamline-operations@mobile-2x-496efaad398aae58eff9174b46c2ba5ee890cb9b8400738200d9794ffcefbc20.jpg"/>
                            <span className="image lazyload-image pos-next-streamline__app-screen">
                                <span className="lazyload-image__placeholder">
                                    <img data-sizes="100vw" data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/product-item-ui-small-6ac97d6240593a37786962975acdd14e29a782192b6a9c02354c87558e4f7ece.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/product-item-ui-large-1f60af278e1f5c1c97a758e7c3933ea7979b25d05fafb1af00f267a339295d48.png?quality=50 2x" alt="" className=" lazyloaded" sizes="100vw" srcSet="https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/product-item-ui-small-6ac97d6240593a37786962975acdd14e29a782192b6a9c02354c87558e4f7ece.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/product-item-ui-large-1f60af278e1f5c1c97a758e7c3933ea7979b25d05fafb1af00f267a339295d48.png?quality=50 2x"/>
                                </span>
                            </span> */}
                            <div className="wistia_responsive_padding">
                                <div className="wistia_responsive_wrapper">
                                    <div className="wistia_embed wistia_async_flvkbseogu videoFoam=true">
                                        <div className="wistia_swatch">
                                            {/* <img src="https://fast.wistia.com/embed/medias/flvkbseogu/swatch" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-two-thirds">
                            <div className="section-heading text-left gutter-bottom">
                                <p className="section-heading__kicker heading--5 color-green-80">{data ? data.sec3_tag : ''}</p>
                                <h2 className="section-heading__heading heading--2 pos-section-heading">{data ? data.sec3_title : ''}</h2>
                            </div>
                            <div className="grid">
                                {
                                    data && data.sec3_block_list.length>0 
                                    ?
                                        data.sec3_block_list.map((block, index) => (
                                            <div className="grid__item grid__item--desktop-up-third" key={block.toString()}>
                                                <div className="block">
                                                    <h3 className="block__heading heading--4">{data.sec3_block_list_name[index]}</h3>
                                                    <p className="block__content">{data.sec3_block_list_desc[index]}</p>
                                                </div>
                                            </div>
                                        ))
                                    :''
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section colored-section pos-next-checkout-features">
                    <div className="grid grid--vertically-centered">
                        <div className="grid__item grid__item--tablet-up-half pos-next-checkout-features__video">
                            <div className="demo-video js-pos-demo__video js-demo-video--active" aria-label="Demo video player">
                                <div className="demo-video__video-container">
                                    <div className="wistia_responsive_padding">
                                        <div className="wistia_responsive_wrapper">
                                            <div className="wistia_embed wistia_async_flvkbseogu videoFoam=true">
                                                <div className="wistia_swatch">
                                                    {/* <img src="https://fast.wistia.com/embed/medias/flvkbseogu/swatch" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item grid__item--tablet-up-half pos-next-checkout-features__content">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2 color-white">Checkout’s best friends</h2>
                            </div>
                            <div className="block block--lowlight">
                                <h3 className="block__heading heading--4">Customizable checkout</h3>
                                <p className="block__content">Keep your most-used apps, discounts, and products at your fingertips and speed up checkout with the smart grid that adapts to actions in the cart.</p>
                            </div>
                            <div className="block block--lowlight">
                                <h3 className="block__heading heading--4">Mobile POS</h3>
                                <p className="block__content">Banish lineups and make sales on the spot. The Shopify POS app and mobile card readers move with you so you can serve customers faster and check out anywhere in the store.</p>
                            </div>
                            <div className="color-white"> 
                                <a data-ga-event="pos-overview" data-ga-action="checkout-features" data-ga-label="features" className="styled-link styled-link--skin-inherit" href="/pos/features">View all Shopify POS features
                                    <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section--padding-top-only background-cyan-80 pos-next-brand-loyalty">
                    <div className="grid   pos-next-brand-loyalty__grid">
                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-5 pos-next-brand-loyalty__content">
                            <div className="section-heading text-left gutter-bottom">
                                <p className="section-heading__kicker heading--5 color-yellow-30">Lasting brand loyalty</p>
                                <h2 className="section-heading__heading heading--2 pos-section-heading color-white">Turn one-time customers into lifetime fans</h2>
                            </div>
                            <div className="grid">
                                <div className="grid__item">
                                    <div className="block gutter-bottom">
                                        <h3 className="block__heading heading--4 color-white">Frictionless returns and exchanges</h3>
                                        <p className="block__content color-white">Give staff the ability to assist customers with purchases made online or at other locations.</p>
                                    </div>
                                </div>
                                <div className="grid__item">
                                    <div className="block gutter-bottom">
                                        <h3 className="block__heading heading--4 color-white">Fully-synced customer profiles</h3>
                                        <p className="block__content color-white">Offer personalized shopping experiences with quick access to notes, lifetime spend, and past orders from any location.</p>
                                    </div>
                                </div>
                                <div className="grid__item">
                                    <div className="block gutter-bottom">
                                        <h3 className="block__heading heading--4 color-white">Personalized marketing</h3>
                                        <p className="block__content color-white">Collect contact details and tailor marketing campaigns to share exclusive discounts and sneak previews.</p>
                                    </div>
                                </div>
                                <div className="grid__item">
                                    <div className="block gutter-bottom">
                                        <h3 className="block__heading heading--4 color-white">Integrated loyalty programs</h3>
                                        <p className="block__content color-white">Add loyalty apps to your POS system to reward customers for shopping with you, both in store and online.</p>
                                    </div>
                                </div>
                                <div className="grid__item pos-next-brand-loyalty__content-cta"> 
                                    <a data-ga-event="pos-overview" data-ga-action="brand-loyalty" data-ga-label="features" className="styled-link color-white" href="/pos/features">View all Shopify POS features
                                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-half grid__item--desktop-up-offset-1 pos-next-brand-loyalty__image padding-left-only"> 
                            <span className="image lazyload-image">
                                <span className="lazyload-image__placeholder">
                                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/universal-standard/pos-next-index-brand-loyalty-large-d338b0ed8f9f1ded522192505cd571efd8a97a55bed7d85b72fbd0fc1e66d6df.jpg?quality=50" className=" lazyloaded" />
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section className="section section--padding-bottom-only background-yellow-0">
                    <div className="grid   grid--vertically-centered pos-next-customize__grid">
                        <div className="grid__item grid__item--tablet-up-half pos-next-customize__image hide--mobile padding-right-only">
                            <img srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/ui-illustrations-promotions@mobile-1f84f1b7734e4dd78618dcf0d12e7500ad73127450a68b8ab127707a7c948f8f.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/ui-illustrations-promotions@mobile-2x-6a3a25a7998b62002ab0f324fca2ba430ed5d81293698eb0a0cd67021ebe2565.png 2x" alt="A representation of apps that integrate loyalty programs into Shopify POS." />
                        </div>
                        <div className="grid__item grid__item--tablet-up-half pos-next-customize__content-container">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2 pos-section-heading">One POS, endless possibilities</h2>
                                <p className="section-heading__subhead heading--3 text-major">Your business is like no other. Whether you’re trying to analyze foot traffic, simplify bookkeeping, or create new ways to reward customers, we’re sure you’ll find the right app for your unique business needs.</p>
                            </div> 
                            <a data-ga-event="pos-overview" data-ga-action="customize" data-ga-label="app-store" className="styled-link" href="https://apps.shopify.com/collections/shopify-pos-apps">Explore the Shopify App Store
                                <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"></path></svg>
                            </a>
                        </div>
                        <div className="grid__item pos-next-customize__image display--mobile">
                            <img className="lazyload" data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/ui-illustrations-promotions@mobile-1f84f1b7734e4dd78618dcf0d12e7500ad73127450a68b8ab127707a7c948f8f.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/pos/index-new/ui-illustrations-promotions@mobile-2x-6a3a25a7998b62002ab0f324fca2ba430ed5d81293698eb0a0cd67021ebe2565.png 2x" alt="A representation of apps that integrate loyalty programs into Shopify POS."/>
                        </div>
                    </div>
                </section>
                <section className="section background-black">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-5">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2 color-white">Find the answers you need when you need them</h2>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="grid">
                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                    <div className="block pos-answers__feature-block">
                                        <svg className="icon icon--size-small icon--fill-white pos-answers__feature-block-icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M20 24.64l-3.5-3a1.5 1.5 0 0 1 2-2.28l2.41 2.07 6.52-7a1.5 1.5 0 0 1 2.19 2.05l-7.5 8a1.5 1.5 0 0 1-2.07.11zM43 31v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1h1V7a3 3 0 0 1 3-3h31a3 3 0 0 1 3 3v23h1a1 1 0 0 1 1 1zM7 30h10a1 1 0 0 1 1 1v1h9v-1a1 1 0 0 1 1-1h10V7H7zm33 3H29.83A3 3 0 0 1 27 35h-9a3 3 0 0 1-2.83-2H5v4a1 1 0 0 0 1 1h33a1 1 0 0 0 1-1z"></path></svg>
                                        <h3 className="block__heading heading--4 color-white">Simplify onboarding</h3>
                                        <p className="block__content color-white">Get up and running quickly with resources for getting started and training staff.</p>
                                    </div>
                                </div>
                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                    <div className="block pos-answers__feature-block">
                                        <svg className="icon icon--size-small icon--fill-white pos-answers__feature-block-icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M34.44 9.56a1.5 1.5 0 1 1 2.12 0 1.5 1.5 0 0 1-2.12 0zM34.49 21l-11.26.05-6.55-8.47a1.5 1.5 0 0 0-2.37 1.83l7 9.05a1.5 1.5 0 0 0 1.19.58l12-.05a1.5 1.5 0 0 0 0-3zm5.58-5.11a1.5 1.5 0 1 0-2-.81 1.5 1.5 0 0 0 2 .81zM41.5 21a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zM28.93 5.89a1.5 1.5 0 1 0-.81-2 1.5 1.5 0 0 0 .81 2zm11.8 22.21a1.5 1.5 0 0 0-1.95.85A17.5 17.5 0 1 1 22.5 5.05a1.5 1.5 0 0 0 0-3A20.5 20.5 0 1 0 41.57 30a1.5 1.5 0 0 0-.84-1.9z"></path></svg>
                                        <h3 className="block__heading heading--4 color-white">Speed up setup</h3>
                                        <p className="block__content color-white">Don’t start from scratch. We’ll help you transfer data from your current POS into Shopify.</p>
                                    </div>
                                </div>
                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                    <div className="block pos-answers__feature-block">
                                        <svg className="icon icon--size-small icon--fill-white pos-answers__feature-block-icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M38.5 16.25V14A12.51 12.51 0 0 0 26 1.5h-6A12.51 12.51 0 0 0 7.5 14v2A5 5 0 0 0 3 21v5a5 5 0 0 0 5 5h4a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2h-1.5v-2A9.51 9.51 0 0 1 20 4.5h6a9.51 9.51 0 0 1 9.5 9.5v2H33a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2v3.5a1.5 1.5 0 0 1-1.5 1.5H29v-1.5a1.5 1.5 0 0 0-1.5-1.5h-6a3.5 3.5 0 0 0-3.5 3.5v2a3.5 3.5 0 0 0 3.5 3.5h6a1.5 1.5 0 0 0 1.5-1.5V39h4.5a4.5 4.5 0 0 0 4.5-4.5v-3.6a5 5 0 0 0 4-4.9v-5a5 5 0 0 0-3.5-4.75zM11 19v9H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm15 20h-4.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H26zm13-13a2 2 0 0 1-2 2h-3v-9h3a2 2 0 0 1 2 2z"></path></svg>
                                        <h3 className="block__heading heading--4 color-white">Get support 24/7</h3>
                                        <p className="block__content color-white">Reach us anytime with thousands of Shopify experts available by chat, phone or email. We got you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="grid   grid--equal-height grid--vertically-centered">
                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-5 pos-next__footer-content">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2">Not just ecommerce. <br/>All commerce.</h2>
                                <p className="section-heading__subhead heading--3 text-major">Bring your in-store and online sales together with Shopify. Gain insights about your business from one view so you can work smarter, move faster, and think bigger.</p>
                            </div> 
                            <a className="marketing-button gutter-bottom" data-ga-event="pos-overview" data-ga-action="footer" data-ga-label="request-info" href="/pos/request-info">Request information</a>
                            <div>Already have a Shopify store? <a className="body-link" data-ga-event="pos-overview" data-ga-action="footer" data-ga-label="login" href="/admin/settings/channels?highlight=pos&amp;utm_content=pos-overview-footer-login-pos&amp;utm_source=pos-overview">Log in to set up Shopify POS</a>
                            </div>
                        </div>
                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-half grid__item--desktop-up-offset-1 pos-next__footer-image padding-left-only"> 
                            <span className="image lazyload-image">
                                <span className="lazyload-image__placeholder">
                                    <img data-sizes="100vw" src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/nobull/pos-next-index-footer-small-c74754598887938f8cf6a21070db0ad14e20cf2ff284033bd0372b60a355c6c5.jpg" className=" lazyloaded"/>
                                </span>
                            </span>
                        </div>
                    </div>
                </section> 
                <Footer />
            </main>
        </div>
    <style jsx>{`
        .colored-section {
            background: #000000;
        }
        .homepage-hero {
            padding: 0 !important;
            min-height: 650px;
        }
        .pos-next-hero {
            display: flex;
            align-items: flex-end;
        }
        .pos-next-hero__heading-container {
            margin-top: 100px;
            margin-bottom: 100px;
        }
        @media screen and (min-width: 67.5em){
            .pos-next-hero__heading-container {
                padding-right: calc(5% + 18px) !important;
                // padding-left: calc(5% + 18px);
            }
        }
        @media screen and (min-width: 46.875em) {
            .pos-next-hero__heading-container {
                padding-right: calc(5% + 9px) !important;
                // padding-left: calc(5% + 9px);
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
            // font-size: 1em;
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
        .pos-next-streamline__image-container {
            position: relative;
        }
    
        .image.lazyload-image{max-width: 818px; max-height: 716px;}
        .lazyload-image__placeholder {padding-bottom: 87.5306%}

        .pos-next-streamline__app-screen{max-width: 565px; max-height: 449px;}
        .pos-next-streamline__app-screen .lazyload-image__placeholder{padding-bottom: 79.469%}
        .pos-next-streamline__app-screen {
            position: absolute;
            width: 250px;
            right: 0;
            top: 50%;
            margin-top: -100px;
        }
        
        @media screen and (min-width: 67.5em){
            .pos-next-streamline__app-screen {
                width: 450px;
                right: -200px;
                top: 50%;
                margin-top: -200px;
            }
        }

        @media screen and (min-width: 67.5em) {
            .pos-section-heading {
                font-size: 3.75em;
            }
        }
        .pos-section-heading {
            font-size: 2.5em !important;
            color: #212326;
        }
        
        h2 {
            display: block;
            margin-bottom: 0.8333333333em;
            font-size: 2.5em;
            line-height: 1.3333333333;
            font-weight: 400;
        }
            
        .pos-next-brand-loyalty__image .lazyload-image{max-width: 800px; max-height: 800px;}
        .pos-next-brand-loyalty__image .lazyload-image__placeholder {padding-bottom: 100.0%}

        .color-white {color: white !important}
        
        @media screen and (min-width: 67.5em) {
            .pos-next-brand-loyalty__content {
                // padding-right: calc(5% + 18px) !important;
                // padding-left: calc(5% + 18px) !important;
            }
        }
        .pos-next-brand-loyalty__content {
            padding-bottom: 64px;
        }

        .pos-next-customize__image .lazyload-image {max-width: 800px; max-height: 800px;}
        .pos-next-customize__image .lazyload-image .lazyload-image__placeholder {padding-bottom: 100.0%}

        @media screen and (min-width: 67.5em) {
            .pos-next-customize__image-illustration {
                bottom: -30px;
                right: -30px;
            }
        }
        .pos-next-customize__image-illustration {
            position: absolute;
            z-index: 10;
        }

        .pos-next-customize__content-container {
            margin-top: 64px;
            margin-bottom: 64px;
        }

        @media screen and (min-width: 46.875em) {
            .pos-next-customize__content-container {
                // padding-right: calc(5% + 9px) !important;
                // padding-left: calc(5% + 9px) !important;
            }            
        }

        @media screen and (min-width: 67.5em) {
            .pos-next-customize__content-container {
                // padding-right: calc(5% + 18px) !important;
                // padding-left: calc(5% + 18px) !important;
            }
        }

        .pos-next__footer-image .lazyload-image{max-width: 813px; max-height: 624px;}
        .pos-next__footer-image .lazyload-image .lazyload-image__placeholder{padding-bottom: 76.7528%}

        @media screen and (min-width: 46.875em) {
            .pos-next__footer-content {
                // padding-right: calc(5% + 9px) !important;
                // padding-left: calc(5% + 9px) !important;
            }
        }
        @media screen and (min-width: 67.5em) {
            .pos-next__footer-content {
                // padding-right: calc(5% + 18px) !important;
                // padding-left: calc(5% + 18px) !important;
            }
        }
        .pos-next__footer-content {
            padding-top: 3.125em;
            padding-bottom: 3.125em;
        }

        @media screen and (min-width: 67.5em) {
            .padding-left-only {padding-right:0 !important;}
            .padding-right-only {padding-left:0 !important;}
        }

        
        .pos-next-checkout-features {
            // padding-top: 2em !important;
        }

        .pos-next-checkout-features__video {
            margin-bottom: 3em;
        }
        @media screen and (min-width: 67.5em) {
            margin-bottom: 0px !important;
        }

        .pos-next-checkout-features__content .block {
            margin-bottom: 20px !important;
            line-height: 30px;
        }

        .pos-next-hero__heading {
            font-weight: 500;
            font-size: 2.5em;
        }

        @media screen and (min-width: 67.5em) {
            .pos-next-hero__heading {
                font-size: 4.375em;
            }
        }


    `}</style>
        </div>
        
    )
    
}