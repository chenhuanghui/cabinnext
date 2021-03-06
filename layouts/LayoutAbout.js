import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
import GridItemType1 from '../components/grid/grid_item_type1'
import SectionType5 from '../components/sections/section_type_5';
import ModalForm from '../components/modals/modal_Form';

export default class LayoutAbout extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
      }

    componentDidMount () {
        let currentComponent = this;

        // init segment tracking page
        const Analytics = require('analytics-node');
        const analytics = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');        
        analytics.page({
            userId: document && document.cookie ? document.cookie : 'anonymous',
            category: 'Brand Information /',
            name: 'About Page',
            properties: {
              url: '/about',
              title: 'CabinFood - About Page'
            }
        });

        // init airatble load page data
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Page_About').find('reckYfVLNpKuyDVD0', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('page data:', record.fields);
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
                    {
                        data.name
                        ? <title>{data.name}</title>
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Tìm Hiểu CabinFood</title>    
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

                            <div className="_1sx1020z grid">
                                <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-full grid__item--mobile-up-align-center our-partner">
                                    <div className="section-heading">
                                        <h2 className="section-heading__heading about-heading color-green-80">Đối tác của chúng tôi</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="_14iivyb">
                                        {/* block item */}
                                        {data.partner && data.partner.map((p,index) => (
                                            <GridItemType1 
                                                key={p.toString()}
                                                name = {data.partner_name[index]}
                                                logo = {data.partner_logo[index].url}
                                                desc = {data.partner_desc[index]}
                                                type = {data.partner_type[index]}
                                            />
                                        ))}
                                        
                                    </div>
                                </div>
                            </div>

                            <SectionType5
                                name={data.sec5_name}
                                desc={data.sec5_desc}
                                btn_title={data.sec5_btn_title}
                            />

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