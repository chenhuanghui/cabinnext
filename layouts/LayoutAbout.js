import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
import GridItemType1 from '../components/grid/grid_item_type1'
import SectionType5 from '../components/sections/section_type_5';
import ModalForm from '../components/modals/modal_Form';

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
      googleAnalytics({
        trackingId: 'UA-168839658-1'
      })
    ]
})

export default class LayoutAbout extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
      }

    componentDidMount () {
        analytics.page();
        
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Page_About').find('reckYfVLNpKuyDVD0', function(err, record) {
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
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Tìm Hiểu CabinFood</title>    
                    }
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
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
                        <main id="Main about-page">
                            <section className="section about-hero">
                                <div className="grid about-hero__grid">
                                    <div className="grid__item grid__item--tablet-up-half about-hero__content">
                                        <div className="section-heading gutter-bottom--reset">
                                            <p className="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">{data.sec1_sub}</p>
                                            <h1 className="section-heading__heading heading--1 text-left--tablet-up text-center--mobile about-hero__heading">{data.sec1_name}</h1>
                                            <p className="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">{data.sec1_desc}</p>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half about-hero__image-container">
                                        <span className="image lazyload-image about-hero__image-spill">
                                            <span className="lazyload-image__placeholder">
                                                { data && data.sec1_image
                                                    ? <img className="image" src={data.sec1_image[0].url} />
                                                    : ''
                                                }
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </section>
                            
                            <section className="section">
                                <div className="grid grid--vertically-centered about-online-store">
                                    <div className="grid__item grid__item--tablet-up-half about-online-store__content">
                                        <div className="section-heading about-online-store__content gutter-bottom--reset">
                                            <p className="section-heading__kicker heading--5 color-green-80 text-left--tablet-up text-center--mobile gutter-bottom--half">{data.sec2_sub} </p>
                                            <h2 className="section-heading__heading text-left--tablet-up text-center--mobile gutter-bottom--half about-heading">{data.sec2_name}</h2>
                                            <p className="section-heading__subhead text-major text-left--tablet-up text-center--mobile color-ink-light gutter-bottom--reset">{data.sec2_desc} </p>
                                        </div>
                                    </div>    
                                    <div className="grid__item grid__item--tablet-up-half about-online-store__image-container">
                                        <picture className="picture about-online-store__image">
                                            <img className=" lazyloaded" src={data && data.sec2_image ? data.sec2_image[0].url : ''}/>
                                        </picture>
                                    </div>
                                </div>
                            </section>

                            {/* <section className="section">
                                <div className="grid grid--vertically-centered about__content-block-container about__content-story">
                                    <ImageText 
                                        className={'about'}
                                        name={data.sec2_name} 
                                        desc={data.sec2_desc} 
                                        image={data && data.sec2_image ? data.sec2_image[0].url : ''} />
                                </div>
                            </section> */}

                            {/* <section className="section section--tight">
                                <div className="grid grid--vertically-centered">
                                    <CenterText 
                                        name={data.sec3_name} 
                                        desc={data.sec3_desc} 
                                        sub={data.sec3_sub}/>
                                </div>
                            </section> */}

                            <section className="section section--padding-bottom-only about-mission">
                                <div className="grid grid--vertically-centered">
                                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-push-1">
                                        <div className="section-heading about-mission__content">
                                            <p className="section-heading__kicker heading--5 color-black gutter-bottom--half">{data.sec3_sub}</p>
                                            <h2 className="section-heading__heading gutter-bottom--half about-heading">{data.sec3_name}</h2>
                                            <p className="section-heading__subhead text-major color-ink-light gutter-bottom--reset">{data.sec3_desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='section'>
                                <div className='grid grid--vertically-centered about-content__block-container about-content__block-container--flipped about-content__image--grid'>
                                    <div className='grid__item grid__item--tablet-up-half grid__item--tablet-up-push-half about-content__image-flipped about-video__container about-content__image--grid-item'>
                                        <div className='about-video'>
                                            <span className='image lazyload-image'>
                                                <span className='lazyload-image__placeholder'>
                                                    <img src={data && data.sec4_image ? data.sec4_image[0].url : ''} />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half grid__item--tablet-up-pull-half">
                                        <div className="about-content--grid-item">
                                            <div className="section-heading gutter-bottom--reset">
                                            <p className="section-heading__kicker heading--5 color-black text-left--tablet-up text-center--mobile gutter-bottom--half">{data.sec4_sub}</p>
                                            <h2 className="section-heading__heading text-left--tablet-up text-center--mobile gutter-bottom--half about-heading">{data.sec4_name}</h2>
                                            <p className="section-heading__subhead text-major text-left--tablet-up text-center--mobile color-ink-light gutter-bottom--reset">{data.sec4_desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* <section className="section about-online-store">
                                <div className="grid grid--vertically-centered about-online-store_wrapper">

                                    <div className="grid__item grid__item--tablet-up-half about-online-store__content">
                                        <div className="section-heading about-online-store__content gutter-bottom--reset">
                                            <p className="section-heading__kicker heading--5 color-green-80 text-left--tablet-up text-center--mobile gutter-bottom--half">{data.sec4_sub} </p>
                                            <h2 className="section-heading__heading text-left--tablet-up text-center--mobile gutter-bottom--half about-heading">{data.sec4_name}</h2>
                                            <p className="section-heading__subhead text-major text-left--tablet-up text-center--mobile color-ink-light gutter-bottom--reset">{data.sec4_desc} </p>
                                        </div>
                                    </div>

                                    <div className="grid__item grid__item--tablet-up-half about-online-store__image-container">
                                        <picture className="picture about-online-store__image">
                                            <img className=" lazyloaded" src={data && data.sec4_image ? data.sec4_image[0].url : ''}/>
                                        </picture>
                                    </div>
                                </div>
                            </section>
                             */}
                            <div className="_1sx1020z grid">
                                <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-full grid__item--mobile-up-align-center our-partner">
                                    <div className="section-heading">
                                        <h2 className="section-heading__heading about-heading color-green-80">Đối tác của chúng tôi</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="_14iivyb">
                                        {/* block item */}
                                        {data.partner && data.partner.map((p) => (
                                            <GridItemType1 mId = {p} key={p.toString()}/>
                                        ))}
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <SectionType5 section_id = {data.section5}/>

                            <Back2Top />
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .about-hero {background-color: var(--lighter-color-1);}
                   
                    .about-video .image {
                        .max-width: 1369px; max-height: 877px;
                    }
                    .about-video .image .lazyload-image__placeholder {
                        padding-bottom: 64.0614%
                    }

                `}</style>
            </div>
        )
    }
}