import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer'

export default function StationDetail () {
    const router = useRouter();
    const [stationID, setStationID] = useState(null);
    const [data, setData] = useState(null);

    function convertMdtoHtml(mdString) {
        var md = require('markdown-it')();
        var result = md.render(mdString);
        return result;
    }
    

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
                                <h1 className="section-heading__kicker heading--5 color-yellow-30">{data ? data.hero_tag : ''}</h1>
                                <h2 className="section-heading__heading heading--1 pos-next-hero__heading color-white">{data ? data.hero_message : ''}</h2>
                                <p className="section-heading__subhead heading--2 color-white text-major">{data ? data.hero_desc : ''}</p>
                            </div>
                            <a className="marketing-button">{data ? data.hero_form_btn_title : ''}</a>
                            <p className="color-white note">{data ? data.hero_form_desc : ''}</p>
                        </div>
                    </div>
                    <div className="picture--cover section--help__picture">
                        <img className="image" src={data ? data.hero_cover[0].thumbnails.large.url :''} />
                    </div>
                </section>  

                {/* Còn bị lỗi CSS trên ipad và iphone xoay ngang */}
                <section className="section section--padding-top-only background-cyan-80 pos-next-brand-loyalty">
                    <div className="picture--cover section--help__picture section--help__picture_left hide--mobile">
                        <img className="image" src={data && data.loc_cover ? data.loc_cover[0].thumbnails.large.url :''} />
                    </div>
                    <div className=" grid grid--equal-height grid--vertically-centered">
                        <div className="grid__item grid__item--tablet-up-third grid__item--desktop-up-half"></div>
                        <div className=" grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half pos-next-brand-loyalty__content">
                            <div className="section-heading text-left gutter-bottom">
                                <p className="section-heading__kicker heading--5 color-yellow-30">{data ? data.loc_tag :''}</p>
                                <h2 className="section-heading__heading heading--2 pos-section-heading color-white">{data ? data.loc_message : ''}</h2>
                            </div>
                            <div className="grid">
                                {
                                    data && data.loc_feature_list
                                    ? data.loc_feature_list.map((fea,index) => (
                                        <div className="grid__item" key={fea.toString()}>
                                            <div className="block gutter-bottom">
                                                <h3 className="block__heading heading--4 color-white">{data.loc_feature_list_name[index]}</h3>
                                                <p className="block__content color-white">{data.loc_feature_list_desc[index]}</p>
                                            </div>
                                        </div>        
                                    ))
                                    :''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="picture--cover section--help__picture section--help__picture_left display--mobile">
                        <img className="image" src={data && data.loc_cover ? data.loc_cover[0].thumbnails.large.url :''} />
                    </div>
                </section>

                <section className="section section--padding-top-only pos-next-streamline background-yellow-0">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-two-thirds">
                            <div className="section-heading pos-next-streamline__heading-wrapper text-left gutter-bottom">
                                <p className="section-heading__kicker heading--5 color-green-90">{data ? data.ready4sale_tag : ''}</p>
                                <h2 className="section-heading__heading heading--2 pos-section-heading">{data ? data.ready4sale_message : ''}</h2>
                            </div>
                            <div className="grid grid--equal-height">
                                {
                                    data && data.ready4sale_feature_list
                                    ? 
                                        data.ready4sale_feature_list.map((block,index) => (
                                            <div className="grid__item grid__item--tablet-up-half" key ={block.toString()}>
                                                <div className="block gutter-bottom">
                                                    <h3 className="block__heading heading--4">{data.ready4sale_feature_list_name[index]}</h3>
                                                    <p className="block__content">{data.ready4sale_feature_list_desc[index]}</p>
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
                            <div className="wistia_responsive_padding">
                                <div className="wistia_responsive_wrapper">
                                    <div className="wistia_embed wistia_async_flvkbseogu videoFoam=true">
                                        <div className="wistia_swatch">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-two-thirds grid__item--tablet-up-two-thirds">
                            <div className="section-heading text-left gutter-bottom">
                                <p className="section-heading__kicker heading--5 color-green-80">{data ? data.operate_tag : ''}</p>
                                <h2 className="section-heading__heading heading--2 pos-section-heading">{data ? data.operate_message : ''}</h2>
                            </div>
                            <div className="grid">
                                {
                                    data && data.operate_feature_list 
                                    ?
                                        data.operate_feature_list.map((block, index) => (
                                            <div className="grid__item grid__item--desktop-up-third" key={block.toString()}>
                                                <div className="block">
                                                    <h3 className="block__heading heading--4">{data.operate_feature_list_name[index]}</h3>
                                                    <p className="block__content">{data.operate_feature_list_desc[index]}</p>
                                                </div>
                                            </div>
                                        ))
                                    :''
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section--padding-top-only colored-section pos-next-checkout-features">
                    <div className="picture--cover section--help__picture section--help__picture_left hide--mobile">
                        <img className="image" src={data && data.tech_cover ? data.tech_cover[0].thumbnails.large.url :''} />
                    </div>
                    <div className=" grid grid--equal-height grid--vertically-centered">
                        <div className="grid__item grid__item--tablet-up-third grid__item--desktop-up-half"></div>
                        <div className=" grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half pos-next-checkout-features__content">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2 color-white">{data ? data.tech_tag : ''}</h2>
                            </div>
                            {
                                data && data.tech_feature_list
                                ? data.tech_feature_list.map((block,index) => (
                                    <div className="block block--lowlight" key={block.toString()}>
                                        <h3 className="block__heading heading--4">{data.tech_feature_list_name[index]}</h3>
                                        <p className="block__content">{data.tech_feature_list_desc[index]}</p>
                                    </div>        
                                ))
                                :''
                            }
                        </div>
                    </div>
                    <div className="picture--cover section--help__picture section--help__picture_left display--mobile">
                        <img className="image" src={data && data.tech_cover ? data.tech_cover[0].thumbnails.large.url :''} />
                    </div>
                </section>

                <section className="section section--padding-bottom-only background-yellow-0">
                    <div className="grid grid--vertically-centered pos-next-customize__grid">
                        <div className="grid__item grid__item--tablet-up-half pos-next-customize__content-container">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2 pos-section-heading">{data ? data.pricing_tag : ''}</h2>
                                <p className="section-heading__subhead heading--3 text-major">{data ? data.pricing_message : ''}</p>
                            </div> 
                        </div>
                        <div className="grid__item grid__item--tablet-up-half pos-next-customize__content-detail">
                            {
                                data && data.pricing_item_list
                                ? data.pricing_item_list.map((block,index) => (
                                    <div className="grid__item grid__item--desktop-up-half" key={block.toString()}>
                                        <div className="block">
                                            <h3 className="block__heading heading--4">{data.pricing_item_list_name[index]}</h3>
                                            <p className="block__content">{data.pricing_item_list_desc[index]}</p>
                                        </div>
                                    </div>        
                                ))
                                :''
                            }
                              
                        </div>
                    </div>
                </section>
                
                <section className="section colored-section">
                    <div className="grid gutter-bottom">
                        <div className="grid__item grid__item--desktop-up-5">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2 color-white">{data ? data.support_message :''}</h2>
                            </div>
                        </div>
                        
                        <div className="grid__item">
                            <div className="grid">
                                {
                                    data && data.support_feature_list
                                    ? data.support_feature_list.map((block,index) => (
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third" key={block.toString()}>
                                            <div className="block pos-answers__feature-block">
                                                <svg className="icon icon--size-small icon--fill-white pos-answers__feature-block-icon block__icon" dangerouslySetInnerHTML={{__html:data.support_feature_list_icon_svg_text[index]}} />
                                                <h3 className="block__heading heading--4 color-white">{data.support_feature_list_name[index]}</h3>
                                                <p className="block__content color-white">{data.support_feature_list_desc[index]}</p>
                                            </div>
                                        </div>
                                        ))
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section section--padding-top-only pos-next-remind">
                    <div className=" grid grid--equal-height grid--vertically-centered">
                        <div className=" grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half pos-next__footer-content">
                            <div className="section-heading text-left gutter-bottom">
                                <h2 className="section-heading__heading heading--2" dangerouslySetInnerHTML={{__html:data ? data.remind_tag : ''}}/ >
                                <p className="section-heading__subhead heading--3 text-major">{data ? data.remind_message :''}</p>
                            </div> 
                            <a className="marketing-button gutter-bottom" href="#">{data ? data.remind_form_btn_title :''}</a>
                            <p className='note'>{data ? data.remind_form_note :''}</p>
                        </div>
                    </div>
                    
                    <div className="picture--cover section--help__picture">
                        <img className="image" src={data && data.remind_cover ? data.remind_cover[0].thumbnails.large.url :''} />
                    </div>
                </section>

                

                <Footer />
            </main>
        </div>
        
    <style jsx>{`

        
        .colored-section {
            background: var(--main-color);
        }
        .homepage-hero {
            padding: 0 !important;
            // min-height: 650px;
        }
        .pos-next-hero {
            display: flex;
            align-items: flex-end;
        }
        .pos-next-hero__heading-container {
            margin-top: 100px;
            margin-bottom: 50px;
        }
        @media screen and (min-width: 67.5em){
            .pos-next-hero__heading-container {
                // padding-left: calc(5%) !important;
                // padding-right: 0 !important;
                
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
            font-weight: 700;
            line-height: 1.133;
            -webkit-font-smoothing: antialiased;
            transition: 150ms ease;
            text-align: center;
            -webkit-user-select: none;
            user-select: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;
            box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
            background-color: var(--light-color);
            color: #ffffff;
            border-width: 0;
            border-style: solid;
            border-color: transparent;
            margin-bottom: 20px !important;
        }
        
        .note {
            font-size: 0.86em;
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
            font-size: 2.5em;
            line-height: 1.2;
            font-weight: 400;
        }
        
        .pos-next-brand-loyalty {
            // padding: 0 !important
            position: relative;
        }
        .section--help__picture_left {
            left: 0            
        }

        .pos-next-brand-loyalty__content {
            padding-left: 0 !important;
            padding-top: 6em !important;
            padding-bottom: 0 !important;
        }

        @media screen and (min-width: 67.5em) {
            .pos-next-brand-loyalty {
                padding: 0 !important;
            }
            .pos-next-brand-loyalty__grid {
                padding: 0 !important;
            }
            .pos-next-brand-loyalty__image {
                padding: 0 !important;
            }
            .pos-next-brand-loyalty__content, .pos-next-checkout-features__content {
                // padding-top: 0em !important;
                padding-left: calc(5% + 9px) !important;
            }
        }

        @media screen and (min-width: 46.875em) {
            .pos-next-brand-loyalty {
                // padding: 0 !important;
            }
            .pos-next-brand-loyalty__grid {
                padding: 0 !important;
            }
            .pos-next-brand-loyalty__image {
                padding: 6em 0px 0px 0px !important;
            }
            .pos-next-brand-loyalty__content, .pos-next-checkout-features__content {
                // padding-top: 0em !important;
                padding-left: calc(5% + 9px) !important;
            }
            
        }
            
        .pos-next-brand-loyalty__image .lazyload-image{max-width: 800px; max-height: 800px;}
        .pos-next-brand-loyalty__image .lazyload-image__placeholder {padding-bottom: 100.0%}

        .color-white {color: white !important}
        
        @media screen and (min-width: 67.5em) {
            .pos-next-brand-loyalty {
                // padding-left: calc(5% + 9px) !important;
            }
            
            }
        }
        .pos-next-streamline__image-wrapper {padding: 0 !important}
        @media screen and (min-width: 67.5em) {
            .pos-next-streamline__image-wrapper {padding: 0 5% 6em !important}
        }

        .pos-next-brand-loyalty__content {padding-bottom: 64px;}

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
            margin-bottom: 20px;
        }

        @media screen and (min-width: 46.875em) {
            .pos-next-customize__content-container {
                padding-right: calc(5% + 9px) !important;
                // padding-left: calc(5% + 9px) !important;
            }            
            .pos-next-customize__content-detail {
                margin-top: 64px !important;
                margin-bottom: 64px !important;
            }
        }

        @media screen and (min-width: 67.5em) {
            .pos-next-customize__content-container {
                padding-right: calc(5% + 18px) !important;
                // padding-left: calc(5% + 18px) !important;
                margin-bottom: 64px !important;
            }
            .pos-next-customize__content-detail {
                margin-top: 64px;
                margin-bottom: 64px;
            }
        }

        .pos-next-customize__content-detail {
            margin-top: 0px;
        }
        @media screen and (max-width: 67.4375em) and (min-width: 46.875em) {
            .pos-next-customize__content-detail {
                margin-top: 64px;
            }
        }
        .pos-next__footer-image .lazyload-image{max-width: 813px; max-height: 624px;}
        .pos-next__footer-image .lazyload-image .lazyload-image__placeholder{padding-bottom: 76.7528%}

        .pos-next__footer-content {
            padding-top: 3.125em;
            padding-bottom: 3.125em;
        }

        @media screen and (min-width: 46.875em) {
            .pos-next__footer-content {
                padding-right: calc(5% + 9px) !important
            }
        }
        @media screen and (min-width: 67.5em) {
            .pos-next__footer-content {
                padding-right: calc(5% + 9px) !important
            }
        }
        
        .pos-next-customize__content-container .section-heading__subhead, .pos-next__footer-content .section-heading__subhead {
            line-height: 1.6;
        }

        
        .pos-next-checkout-features {
            // padding-top: 2em !important;
            position: relative;
        }

        .pos-next-checkout-features__video {
            margin-bottom: 3em;
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
        .pos-next-remind {
            position: relative;            
        }


    `}</style>
        </div>
        
    )
    
}