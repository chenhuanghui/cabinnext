import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'

import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
import FormStyle2 from '../components/forms/form_style2';
import ModalForm from '../components/modals/modal_Form'

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

export default class LayoutPricing extends React.Component {
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
            name: 'Pricing Page',
            properties: {
              url: '/pricing',
              title: 'CabinFood - Pricing'
            }
        });

        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Page_Pricing').find('recFfTx17NH6A6dhw', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('pricing', record.fields);
            currentComponent.setState({data:record.fields});
        });

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    convertMdtoHtml(mdString) {
        var md = require('markdown-it')();
        var result = md.render(mdString);
        console.log('markdown: ',result);
        return result;
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
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Bảng Giá</title>       
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
                        <main id="Main pricing-page">
                            <section className="section">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="section-heading pricing-title">
                                            <h1 className="section-heading__heading heading--1 heading-pricing">{data.line1}</h1>
                                            <p className="section-heading__subhead heading--2 sub-head-pricing">{data.line2}</p>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--mobile-up-align-center">
                                        <div className="text-center gutter-bottom--mobile">
                                            <div className="marketing-button-wrapper">
                                                <button className="marketing-button js-open-signup">{data.btn_title}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid">
                                    <div className="grid__item grid__item--desktop-up-two-thirds grid__item--mobile-up-align-center">
                                        <table className="marketing-table pricing-table" id="PricingTable">
                                            <tbody className="pricing-table__table-body">
                                                
                                                {/* Pharse 01  */}
                                                <tr className="pharse">
                                                    <th scope="row" id="f-monthly_price"> 
                                                        <span className="heading--5 pricing-table__section-heading">{data.group1_title}</span>
                                                        <p className="feature-label__description">{data.group1_desc}</p>
                                                    </th>
                                                    <td headers="p-0 f-monthly_price">
                                                        <div className=" monthly-price"> 
                                                            <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                                                <span className="price">
                                                                    <span aria-hidden="true">
                                                                        <span className="price__number">{data.group1_price}</span>
                                                                    </span>
                                                                </span>
                                                            </span> 
                                                            <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span>
                                                            <span className="monthly-price__billing-period text-minor" aria-hidden="true">{data.group1_unit}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* load pricing item group 01 */}
                                                {
                                                    data && data.g1_data && data.g1_data.map((item,index) => {
                                                        return data.g1_data_type[index] ===`sub_group`
                                                        ?  
                                                            <tr key={data.g1_data.toString()}>
                                                                <th scope="col" colSpan="2">
                                                                    <span className="heading--5 pricing-table__section-heading">{data.g1_data_name[index]}</span>
                                                                </th>
                                                            </tr>  
                                                        : 
                                                        <tr className={data.g1_data_name[index]} key={data.g1_data_name[index].toString()}> 
                                                            <th scope="row" id="f-website">
                                                                <div className="pricing-table__feature-name">
                                                                    <dl className="feature-label"><dt className="feature-label__text">{data.g1_data_name[index]}</dt>
                                                                    <dd className="feature-label__description">{data.g1_data_desc[index] !== '-' ? data.g1_data_desc[index] : ''}</dd>
                                                                </dl>
                                                                </div>
                                                            </th>
                                                            <td headers="p-0 f-website"> 
                                                                <span className="pricing-table__feature-value">
                                                                { (data.g1_data_value[index] == 1 ) 
                                                                ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                                                : data.g1_data_value[index]
                                                                }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                                {/* end load pricing item group 01 */}
                                                
                                                
                                                {/* #End Pharse 01  */}

                                                {/* Pharse 02  */}
                                                <tr className="pharse">
                                                    <th scope="row" id="f-monthly_price"> 
                                                        <span className="heading--5 pricing-table__section-heading">{data.group2_title}</span>
                                                        <p className="feature-label__description">{data.group2_desc}</p>
                                                    </th>
                                                    <td headers="p-0 f-monthly_price">
                                                        <div className=" monthly-price"> 
                                                            <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                                                <span className="price">
                                                                    <span aria-hidden="true">
                                                                        <sup>Từ </sup> 
                                                                        <span className="price__number">{data.group2_price}</span>
                                                                    </span>
                                                                </span>
                                                            </span> 
                                                            <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span>
                                                            <span className="monthly-price__billing-period text-minor" aria-hidden="true">{data.group2_unit}</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {
                                                    data && data.g2_data && data.g2_data.map((item,index) => {
                                                        return data.g2_data_type[index] ===`sub_group`
                                                        ?  
                                                            <tr key={data.g2_data.toString()}>
                                                                <th scope="col" colSpan="2">
                                                                    <span className="heading--5 pricing-table__section-heading">{data.g2_data_name[index]}</span>
                                                                </th>
                                                            </tr>  
                                                        : 
                                                        <tr className={data.g2_data_name[index]} key={data.g2_data_name[index].toString()}> 
                                                            <th scope="row" id="f-website">
                                                                <div className="pricing-table__feature-name">
                                                                    <dl className="feature-label"><dt className="feature-label__text">{data.g2_data_name[index]}</dt>
                                                                    <dd className="feature-label__description">{data.g2_data_desc[index] !== '-' ? data.g2_data_desc[index] : ''}</dd>
                                                                </dl>
                                                                </div>
                                                            </th>
                                                            <td headers="p-0 f-website"> 
                                                                <span className="pricing-table__feature-value">
                                                                { (data.g2_data_value[index] == 1 ) 
                                                                ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                                                : data.g2_data_value[index]
                                                                }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                                {/* #End Pharse 02  */}

                                                {/* Pharse 03  */}
                                                <tr className="pharse">
                                                    <th scope="row" id="f-monthly_price"> 
                                                        <span className="heading--5 pricing-table__section-heading">{data.group3_title}</span>
                                                        <p className="feature-label__description">{data.group3_desc}</p>
                                                    </th>
                                                    <td headers="p-0 f-monthly_price"></td>
                                                </tr>

                                                {
                                                    data && data.g3_data && data.g3_data.map((item,index) => {
                                                        return data.g3_data_type[index] ===`sub_group`
                                                        ?  
                                                            <tr key={data.g3_data.toString()}>
                                                                <th scope="col" colSpan="2">
                                                                    <span className="heading--5 pricing-table__section-heading">{data.g3_data_name[index]}</span>
                                                                </th>
                                                            </tr>  
                                                        : 
                                                        <tr className={data.g3_data_name[index]} key={data.g3_data_name[index].toString()}> 
                                                            <th scope="row" id="f-website">
                                                                <div className="pricing-table__feature-name">
                                                                    <dl className="feature-label"><dt className="feature-label__text">{data.g3_data_name[index]}</dt>
                                                                    <dd className="feature-label__description">{data.g3_data_desc[index] !== '-' ? data.g3_data_desc[index] : ''}</dd>
                                                                </dl>
                                                                </div>
                                                            </th>
                                                            <td headers="p-0 f-website"> 
                                                                <span className="pricing-table__feature-value">
                                                                { (data.g3_data_value[index] == 1 ) 
                                                                ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                                                : data.g3_data_value[index]
                                                                }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                                {/* #End Pharse 03  */}

                                                {/* Pharse 04  */}
                                                <tr className="pharse">
                                                    <th scope="row" id="f-monthly_price"> 
                                                        <span className="heading--5 pricing-table__section-heading">{data.group4_title}</span>
                                                        <p className="feature-label__description">{data.group4_desc}</p>
                                                    </th>
                                                    <td headers="p-0 f-monthly_price"></td>
                                                </tr>

                                                {
                                                    data && data.g4_data && data.g4_data.map((item,index) => {
                                                        return data.g4_data_type[index] ===`sub_group`
                                                        ?  
                                                            <tr key={data.g4_data.toString()}>
                                                                <th scope="col" colSpan="2">
                                                                    <span className="heading--5 pricing-table__section-heading">{data.g4_data_name[index]}</span>
                                                                </th>
                                                            </tr>  
                                                        : 
                                                        <tr className={data.g4_data_name[index]} key={data.g4_data_name[index].toString()}> 
                                                            <th scope="row" id="f-website">
                                                                <div className="pricing-table__feature-name">
                                                                    <dl className="feature-label"><dt className="feature-label__text">{data.g4_data_name[index]}</dt>
                                                                    <dd className="feature-label__description">{data.g4_data_desc[index] !== '-' ? data.g4_data_desc[index] : ''}</dd>
                                                                </dl>
                                                                </div>
                                                            </th>
                                                            <td headers="p-0 f-website"> 
                                                                <span className="pricing-table__feature-value">
                                                                { (data.g4_data_value[index] == 1 ) 
                                                                ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                                                : data.g4_data_value[index]
                                                                }
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                                {/* #End Pharse 04  */}

                                            </tbody>
                                        </table>

                                        
                                    </div>
                                </div>
                                
                                {/* <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-offset-1">
                                        <p className="pricing-disclaimer">{data.disclaimer}</p>
                                    </div>
                                </div> */}
                            </section>  

                            <section className="section background-light color-ink section--tight">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="section-heading gutter-bottom--reset">
                                            <h2 className="section-heading__heading heading--1 gutter-bottom">{data.message}</h2>
                                            <div className="marketing-button-wrapper">
                                                <button className="marketing-button marketing-button--skin-lowlight js-open-signup" >{data.btn2_title}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                          
                            
                            <section className="section">
                                <div className="grid">
                                    <div id="Faq" className="pricing-faq">
                                        {/* Column 1st */}
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--desktop-up-offset-2">
                                            <div className="accordion">
                                                <div className="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">{data.faq1_title}</h3>
                                                </div>
                                                <div className="accordion-content">
                                                    {
                                                        data && data.f1_data && data.f1_data.map((item,index) => (
                                                            <div className="block" key={item.toString()}>
                                                                <h3 className="block__heading heading--4">{data.f1_data_question[index]}</h3>
                                                                <p className="block__content" dangerouslySetInnerHTML={{__html: data && data.f1_data_answer[index] ? this.convertMdtoHtml(data.f1_data_answer[index].toString()): ''}} />
                                                            </div>         
                                                        ))
                                                    }

                                                </div>
                                            </div>

                                            <div className="accordion">
                                                <div className="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">{data.faq2_title}</h3>
                                                </div>
                                                <div className="accordion-content">
                                                    {
                                                        data && data.f2_data && data.f2_data.map((item,index) => (
                                                            <div className="block" key={item.toString()}>
                                                                <h3 className="block__heading heading--4">{data.f2_data_question[index]}</h3>
                                                                <p className="block__content" dangerouslySetInnerHTML={{__html: data && data.f2_data_answer[index] ? this.convertMdtoHtml(data.f2_data_answer[index].toString()): ''}} />
                                                            </div>         
                                                        ))
                                                    }
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Column 2nd */}
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <div className="accordion">
                                                <div className="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">{data.faq3_title}</h3>
                                                </div>
                                                <div className="accordion-content">
                                                {
                                                        data && data.f3_data && data.f3_data.map((item,index) => (
                                                            <div className="block" key={item.toString()}>
                                                                <h3 className="block__heading heading--4">{data.f3_data_question[index]}</h3>
                                                                <p className="block__content" dangerouslySetInnerHTML={{__html: data && data.f3_data_answer[index] ? this.convertMdtoHtml(data.f3_data_answer[index].toString()): ''}} />
                                                            </div>         
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className="accordion">
                                                <div className="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">{data.faq4_title}</h3>
                                                </div>
                                                <div className="accordion-content">
                                                {
                                                        data && data.f4_data && data.f4_data.map((item,index) => (
                                                            <div className="block" key={item.toString()}>
                                                                <h3 className="block__heading heading--4">{data.f4_data_question[index]}</h3>
                                                                <p className="block__content" dangerouslySetInnerHTML={{__html: data && data.f4_data_answer[index] ? this.convertMdtoHtml(data.f4_data_answer[index].toString()): ''}} />
                                                            </div>         
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>          
                            <section className="section footer-signup background-light">
                                <FormStyle2 form_id={data.form_id} />
                            </section>                  
                            {/* <Back2Top /> */}
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .pharse, .pharse:hover{background-color: var(--main-color);}
                    .pharse:hover th, .pharse:hover td {background-color: var(--main-color) !important;}
                    .pharse p, .pharse span {color:white;}
                    .pharse .heading--5 {font-weight: bold; line-height:30px;}
                    .feature-label__text {font-weight: 600; color: #15365D;}
                `}</style>
            </div>
        )
    }
}