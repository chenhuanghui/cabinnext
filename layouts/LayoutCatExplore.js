import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Announcement from '../components/annoucement/an_style1'
import SectionSignUp from '../components/sections/section_type_5'
import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
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

export default class LayoutCatExplore extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
      }

    componentDidMount () {
        // analytics.page();
        
        // segment tracking data
        const Analytics = require('analytics-node');
        const client = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');
        client.page({
            userId: document.cookie,
            category: 'Brand Information /',
            name: 'Categories Page',
            properties: {
              url: '/categories',
              title: 'CabinFood - Explore Categories'
            }
        });
        
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Page_Cat_Explore').find('recKxKnkXGhzYQ4Ir', function(err, record) {
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
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Khám Phá Danh Mục FnB</title>    
                    }
                </Head>

                <div className="page--cat-explore">
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
                            <section className="section cat-list section--padding-top-only">
                                <div className="gird">
                                    <div className="grid__item grid__item--desktop-up-10 grid__item--wide-up-8 grid__item--desktop-up-align-center">
                                        <section className="section--padding-bottom-only">
                                            <div className="section-heading">
                                                <h1 className="section-heading__kicker heading--5">{data.line1}</h1>
                                                <h2 className="section-heading__heading heading--1">{data.line2}</h2>
                                                <p className="section-heading__subhead heading--2 heading--3">{data.line3}</p>
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                <div className="grid cat_explore">
                                    <div className="grid__item">
                                        <div className="example-merchants">
                                            {data && data.cat_data && data.cat_data.map((p, index) => (
                                                <div className=" example-merchant__block" key={p.toString()}>
                                                    <span className="image block__image">
                                                        <img src={data.cat_data_image[index].thumbnails.large.url} />
                                                    </span>
                                                    <p className="block__content heading--5">{data.cat_data_name[index]}</p>
                                                </div>            
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                            </section>

                            <SectionSignUp section_id={data.section_sign_up} />


                            <Back2Top />
                        </main>    
                        <Footer />
                    </div>
                </div>

                <style jsx>{`
                   .example-merchant__block {
                       padding-bottom: 30px;
                   }
                `}</style>
            </div>
        )
    }
}