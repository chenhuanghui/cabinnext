import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer'
import ModalForm from '../components/modals/modal_Form';
import { NextSeo } from 'next-seo';

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
        //set slug
        setStationID(router.query.stationID);        
        console.log('log', router.query.stationID);

        if (router.query.stationID === stationID) {
            console.log('matched finish')

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
                base('Page_Station_Detail').find(stationID, function(err, record) {
                    if (err) { console.error(err); return; }
                    console.log('page data:', record.fields);
                    setData(record.fields)
                });
            }
        }
    },[stationID])
    

    return (
        <div className="layout">
            <Head>

                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: process.browser ? window.location.href :'',
                        title: 'Khám phá trạm kinh doanh',
                        description: 'Có ngay điểm kinh doanh món ăn thức uống theo mô hình delivery hiện đại ngay trong 24h, tối thiểu hóa mọi rủi ro đầu tư, tối đa hóa hiệu quả kinh doanh.',
                        images: [
                        ],
                    }}
                />
                <script src="https://fast.wistia.com/embed/medias/flvkbseogu.jsonp" async></script>
                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
            </Head>

            <div className="page--home">
            <ModalForm />
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
                                                    <p className="block__content" dangerouslySetInnerHTML={{__html:convertMdtoHtml(data.ready4sale_feature_list_desc[index])}}/>
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
                                        <div className="wistia_swatch"></div>
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
                                                <div className="block gutter-bottom">
                                                    <h3 className="block__heading heading--4">{data.operate_feature_list_name[index]}</h3>
                                                    <p className="block__content" dangerouslySetInnerHTML={{__html:convertMdtoHtml(data.operate_feature_list_desc[index])}}/>
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
                                <h2 className="section-heading__heading heading--2 color-white pos-section-heading">{data ? data.tech_tag : ''}</h2>
                            </div>
                            {
                                data && data.tech_feature_list
                                ? data.tech_feature_list.map((block,index) => (
                                    <div className="block block--lowlight gutter-bottom" key={block.toString()}>
                                        <h3 className="block__heading heading--4">{data.tech_feature_list_name[index]}</h3>
                                        <p className="block__content" dangerouslySetInnerHTML={{__html:convertMdtoHtml(data.tech_feature_list_desc[index])}}/>
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
                                        <div className="block gutter-bottom">
                                            <h3 className="block__heading heading--4">{data.pricing_item_list_name[index]}</h3>
                                            <p className="block__content" dangerouslySetInnerHTML={{__html:convertMdtoHtml(data.pricing_item_list_desc[index])}}/>
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
                                <h2 className="section-heading__heading heading--2 color-white pos-section-heading">{data ? data.support_message :''}</h2>
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
                                <h2 className="section-heading__heading heading--2 pos-section-heading" dangerouslySetInnerHTML={{__html:data ? data.remind_tag : ''}}/ >
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

    `}</style>
        </div>
        
    )
    
}

{/* test build */}