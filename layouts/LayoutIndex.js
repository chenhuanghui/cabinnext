

import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import SectionSignUp from '../components/sections/section_type_5'
import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
import Link from 'next/link';
import ImageText from '../components/text_image/image_text';
import TextImage from '../components/text_image/text_image';
import ModalForm from '../components/modals/modal_Form';

// import Analytics from 'analytics'
// import googleAnalytics from '@analytics/google-analytics'
// const analytics = Analytics({
//     app: 'awesome-app',
//     plugins: [
//       googleAnalytics({
//         trackingId: 'UA-168839658-1'
//       })
//     ]
// })

export default class LayoutIndex extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
      }

    componentDidMount () {
        // analytics.page();
        const Analytics = require('analytics-node');
        const client = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');
        
        client.page({
            userId: document.cookie,
            category: 'Brand Information /',
            name: 'Home Page',
            properties: {
              url: '/',
              title: 'CabinFood - Home Page'
            }
        });
        
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Page_Index').find('rece4RWZeIfg0FJEJ', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
        });

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    render () {
        const {data} = this.state;
        var i = 0;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href='/assets/images/fav.png' />
                    {
                        data.name
                        ? <title>{data.name}</title>
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Trang Chủ</title>    
                    }
                </Head>

                <div className="page--home">
                    <ModalForm />
                    <div id="Announcements">
                        <div className="covid-19-announcement-banner"> 
                            <section className="announcement js-announcement is-active">
                                <div className="announcement__content">
                                    {data.annoucement_line1} 
                                    <a className="body-link" href='#'> {data.annoucement_line2}</a>
                                </div>
                            </section>
                        </div>
                    </div>

                    <Nav />

                    <div id="PageContainer">
                        
                        <main id="Main">

                            <section className="section section--padding-top-only homepage-hero" id="Hero">
                                <div className="grid grid--equal-height grid--vertically-centered">
                                    <div className="grid__item grid__item--desktop-up-half homepage-hero__content">
                                        <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
                                            <h1 className="section-heading__heading heading--jumbo color-green-80 homepage-hero__heading gutter-bottom">{data.sec1_title}</h1>
                                        </div>
                                        <div className="homepage-hero__signup">
                                            <div className="js-signup-inline marketing-form--inline">
                                                <div className="marketing-input-wrapper marketing-input-button-pair">
                                                    <div className="marketing-input-button-pair__field-wrapper">
                                                        <input placeholder={data.sec1_form_data_input_hint} className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                                                        <button className="marketing-button marketing-form__button marketing-input-button-pair__button">{data.sec1_form_data_btn_title}</button>
                                                    </div>
                                                </div>
                                                <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">{data.sec1_form_data_note}</p>
                                            </div>                    
                                        </div>
                                    </div>
                                </div>
                                <div className="picture--cover homepage-hero__image">
                                    {
                                        data && data.sec1_image
                                        ? <img className="image" src={data.sec1_image[0].url} />
                                        : ''
                                    }
                                </div>
                            </section>  

                            <section className="section background-green-80" id="green_board">
                                <div className="grid">
                                    <div className="grid__item">
                                        <section className="section section--tight">
                                            <div className="section-heading section-heading--mobile-up-align-left">
                                                <h2 className="section-heading__heading heading--1 section-heading__heading--regular color-white">{data.sec2_name}</h2>
                                                <div className="grid">
                                                    <div className="grid__item grid__item--wide-up-9">
                                                        <p className="section-heading__subhead color-white">{data.sec2_desc}</p>
                                                    </div>              
                                                    <div className="grid__item grid__item--wide-up-3 example-merchants__more">
                                                        <Link href='/categories'>
                                                            <a className="color-white link link--secondary">
                                                                {data.sec2_btn_title}
                                                                <svg aria-hidden="true" viewBox="0 0 48 16" className="link__arrow" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg"><g className="link__arrow-inner"><line x1="0" y1="8" x2="46" y2="8"></line><polyline points="39.5 1, 46.5 8, 39.5 15"></polyline></g></svg>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="example-merchants">
                                                { data && data.sec2_cat_list_image && data.sec2_cat_list_image.map((p, index) => (
                                                    <div className="example-merchant" key={p.toString()+index}>
                                                        <div className="block example-merchant__block">
                                                            <span className="image lazyload-image block__image">
                                                                <span className="lazyload-image__placeholder">
                                                                    <img src={data.sec2_cat_list_image[index].thumbnails.large.url} />
                                                                </span>
                                                            </span>
                                                            <p className="block__content example-merchant__vertical heading--5">{data.sec2_cat_list_name[index]}</p>
                                                        </div>            
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="section section--tight">
                                            <div className="section-heading section-heading--mobile-up-align-left">
                                                <h2 className="section-heading__heading section-heading__heading--regular color-white">{data.sec2_title}</h2>
                                            </div>

                                            <div className="grid">
                                                {data && data.sec2_path_col_data_name && data.sec2_path_col_data_name.map((c,index) => (
                                                    <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter" key={c.toString()+index}>
                                                        <div className="block start-block">
                                                            <svg className="icon icon--size-small start-block__icon block__icon" viewBox="0 0 45 45" dangerouslySetInnerHTML={{__html: data.sec2_path_col_data_icon[index]}} />
                                                            <h3 className="block__heading heading--4 color-white">{data.sec2_path_col_data_name[index]}</h3>
                                                            <p className="block__content color-white">{data.sec2_path_col_data_desc[index]}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            
                            <section className="section homepage-pillars js-waypoint-track">
                                <div className="grid">
                                    <div className="section-heading pillars__heading-wrapper">
                                        <h2 className="section-heading__heading heading--1 heading--2">{data.sec3_name}</h2>
                                        <p className="section-heading__subhead heading--2 text-major pillars__subhead">{data.sec3_desc}</p>
                                    </div>
                                    {
                                        data && data.sec3_pillar && data.sec3_pillar.map((p, index) => {
                                            i++;
                                            return i%2 == 0
                                            ?   <TextImage key = {p.toString()}
                                                    image={data.sec3_pillar_image[index].url} 
                                                    name={data.sec3_pillar_name[index]} 
                                                    desc={data.sec3_pillar_desc[index]} 
                                                    btn_title={data && data.sec3_pillar_btn_title ? data.sec3_pillar_btn_title[index]:''} 
                                                    btn_href={data && data.sec3_pillar_btn_href ? data.sec3_pillar_btn_href[index]:''} 
                                                />
                                            :   <ImageText key = {p.toString()}
                                                    image={data.sec3_pillar_image[index].url} 
                                                    name={data.sec3_pillar_name[index]} 
                                                    desc={data.sec3_pillar_desc[index]} 
                                                    btn_title={data && data.sec3_pillar_btn_title ? data.sec3_pillar_btn_title[index]:''} 
                                                    btn_href={data && data.sec3_pillar_btn_href ? data.sec3_pillar_btn_href[index]:''} 
                                                />
                                    })}
                                </div>
                            </section>
                            <section className="section section--help background-yellow-0 js-waypoint-track">
                                <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half">
                                        <div className="section--help__content">
                                            <div className="section-heading section-heading--mobile-up-align-left">
                                                <h2 className="section-heading__heading heading--1 section--help__heading section-heading__heading--regular">{data.sec4_name}</h2>
                                            </div>
                                            <div className="grid grid--equal-height">
                                                {
                                                    data && data.sec4_col_name && data.sec4_col_name.map((col, index) => (
                                                        <div className="grid__item grid__item--tablet-up-half" key={col.toString()}>
                                                            <div className="block">
                                                                <h3 className="block__heading heading--4">{data.sec4_col_name[index]}</h3>
                                                                <p className="block__content">{data.sec4_col_desc[index]}</p>
                                                                <p className="block__cta">
                                                                    {
                                                                        data && data.sec4_col_btn_title[index] && data.sec4_col_btn_title[index] !== ' '
                                                                        ? <a className="styled-link contact-form" href={data.sec4_col_btn_href[index]}>{data.sec4_col_btn_title[index]}<svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/></svg></a>
                                                                        : ''
                                                                    }
                                                                    
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="picture picture--cover section--help__picture">
                                    {
                                        data && data.sec4_image
                                        ? <img className="image" src={data.sec4_image[0].thumbnails.large.url} />
                                        : ''
                                    }
                                    
                                </div>
                                
                            </section>
                            <SectionSignUp section_id={data.section5} />

                            <Back2Top />
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