import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'
import ModalForm from './sections/Modal/FormModal';

export default class LayoutAbout extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            dataPageAbout: [],
            dataForm:[]
        }
    }
    componentDidMount () {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('About_Page').find('rechBs8mAN6NsS7NH', function(err, record) {
            if (err) { console.error(err); return; }
            
            record.fields.section1_img = record.fields.section1_img[0].url;
            record.fields.section2_img = record.fields.section2_img[0].url;
            record.fields.section4_img = record.fields.section4_img[0].url;
            currentComponent.setState({ dataPageAbout: record.fields })
            console.log('Retrieved', record.fields);
        });


        // get form information
        base('Form_List').find('recNtJ2W5S59slQSb', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('dataForm', record.fields)
            currentComponent.setState({ dataForm: record.fields })
        });

        // setup layout for page
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
    }
    render (){
        const {dataPageAbout, dataForm} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" />

                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
                </Head>
                <div className="page--home-about">
                    <ModalForm />
                    <Header />
                    
                    <div id="PageContainer">
                        <main id="Main">
                            <section className="section about-hero">
                                <div className="grid about-hero__grid">
                                    <div className="grid__item grid__item--tablet-up-half about-hero__content">
                                        <div className="section-heading gutter-bottom--reset">
                                            <p className="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">{dataPageAbout.section1_line1}</p>
                                            <h1 className="section-heading__heading heading--1 text-left--tablet-up text-center--mobile about-hero__heading">{dataPageAbout.section1_line2}</h1>
                                            <p className="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">{dataPageAbout.section1_line3}</p>
                                        </div>
                                    </div>    
                                    <div className="grid__item grid__item--tablet-up-half about-hero__image-container">
                                        <span className="image lazyload-image about-hero__image-spill">
                                                <img src={dataPageAbout.section1_img} />
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="grid grid--vertically-centered about__content-block-container about__content-story">
                                    <div className="grid__item grid__item--tablet-up-half about__content-image-store"> 
                                        <img data-sizes="100vw" src={dataPageAbout.section2_img}/>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half our-story">
                                        <div className="about__content">
                                            <div className="section-heading gutter-bottom--reset">
                                                <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom--half">{dataPageAbout.section2_line1}</p>
                                                <h2 className="section-heading__heading text-left gutter-bottom--half">{dataPageAbout.section2_line2}</h2>
                                                <p className="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">{dataPageAbout.section2_line3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section section--tight">
                                <div className="grid grid--vertically-centered">
                                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-push-1">
                                        <div className="section-heading">
                                            <p className="section-heading__kicker heading--5 color-black gutter-bottom--half">{dataPageAbout.section3_line1}</p>
                                            <h2 className="section-heading__heading gutter-bottom--half">{dataPageAbout.section3_line2}</h2>
                                            <p className="section-heading__subhead text-major color-ink-light gutter-bottom--reset">{dataPageAbout.section3_line3}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section about__content-people">
                                <div className="grid grid--vertically-centered about__content-block-container about__content-block-container--flipped">
                                    <div className="grid__item grid__item--tablet-up-half grid__item--tablet-up-push-half about__content-image--flipped about-video__container">
                                        <div className="about-video"> 
                                            <img src={dataPageAbout.section4_img}/>                                            
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half grid__item--tablet-up-pull-half">
                                        <div className="about__content">
                                            <div className="section-heading gutter-bottom--reset">
                                                <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom--half">{dataPageAbout.section4_line1}</p>
                                                <h2 className="section-heading__heading text-left gutter-bottom--half">{dataPageAbout.section4_line2}</h2>
                                                <p className="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">{dataPageAbout.section4_line3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            

                            <section className="section signup-footer">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="section-heading signup-footer__heading gutter-bottom--reset">
                                            <h2 className="section-heading__heading heading--2 next-steps__sign-up-heading">{dataForm.hero_message}</h2>
                                                <div className="marketing-button-wrapper" action={dataForm.btn_href}>
                                                <button className="marketing-button js-open-signup signup-footer__button">{dataForm.btn_title}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                        .about__content-story .image.lazyload-image {max-width: 704px; max-height: 678px;}
                        .about__content-story .image.lazyload-image .lazyload-image__placeholder {padding-bottom: 96.3068%;}

                        .about-video .image.lazyload-image {max-width: 604px !important; max-height: 507px !important; }
                        .about-video .image.lazyload-image .lazyload-image__placeholder {padding-bottom: 83.9404%}

                        .image.lazyload-image.about-hero__image-spill{max-width: 837px; max-height: 564px;}
                        .image.lazyload-image.about-hero__image-spill .lazyload-image__placeholder {padding-bottom: 67.3835%}

                        .our-story {order: 2;padding-right: 10%;}
                        .our-story .section-heading__subhead, .about__content-people .section-heading__subhead {font-size: 1em;}
                        .about-hero .section-heading__subhead {font-size: 1.25em;}
                        .about-hero{background-color: var(--lighter-color-1)}
                        
                        .section-heading__heading {font-weight: 800}
                `}</style>
            </div>
        )
    }
}