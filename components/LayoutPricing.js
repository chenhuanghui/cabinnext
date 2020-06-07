import Head from 'next/head'
import React from 'react';

import Header from './Header'
import ModalForm from './sections/Modal/FormModal';
import PricingSection1 from './sections/Pricing/PricingSection1';
import PricingFAQSection from './sections/Pricing/PricingFAQSection';
import Footer from './Footer'

export default class LayoutPricing extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            faq_group_sub:[],
            faq_group1:[],
            faq_group2:[],
            faq_group3:[],
            faq_group4:[],
            faq_group5:[],
            faq_group6:[],
            pricing_group1:[],
            pricing_group2:[],
            pricing_group3:[],
            pricing_sub_group:[],
            pricing_content:[],
            dataForm:[]
        }
    }
    sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }    
    componentDidMount () {
        let currentComponent = this;
        var dataFAQ1 = [];
        var dataFAQ2 = [];
        var dataFAQ3 = [];
        var dataFAQ4 = [];
        var dataFAQ5 = [];
        var dataFAQ6 = [];
        var groupList = [];
        var dataPricing1 = [];
        var dataPricing2 = [];
        var dataPricing3 = [];
        var dataSubGroupPricing = [];
        var dataPricingContent = [];

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('FAQ_Group_Sub').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {
                groupList.push(record.get('Name'));
            });
            currentComponent.setState({faq_group_sub:groupList})
        });

        base('FAQ').select({
            filterByFormula: `{Group} = "Group1"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                // console.log('data1',record.fields)
                dataFAQ1.push(record.fields)
            });
            dataFAQ1 = currentComponent.sortByKey(dataFAQ1,"sortID");
            currentComponent.setState({faq_group1:dataFAQ1})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })
        
        
        base('FAQ').select({
            filterByFormula: `{Group} = "Group2"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                dataFAQ2.push(record.fields)
            });
            dataFAQ2 = currentComponent.sortByKey(dataFAQ2,"sortID");
            currentComponent.setState({faq_group2:dataFAQ2})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })

        base('FAQ').select({
            filterByFormula: `{Group} = "Group3"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                dataFAQ3.push(record.fields)
            });
            dataFAQ3 = currentComponent.sortByKey(dataFAQ3,"sortID");
            currentComponent.setState({faq_group3:dataFAQ3})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })

        base('FAQ').select({
            filterByFormula: `{Group} = "Group4"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                dataFAQ4.push(record.fields)
            });
            dataFAQ4 = currentComponent.sortByKey(dataFAQ4,"sortID");
            currentComponent.setState({faq_group4:dataFAQ4})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })

        base('FAQ').select({
            filterByFormula: `{Group} = "Group5"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                dataFAQ5.push(record.fields)
            });
            dataFAQ5 = currentComponent.sortByKey(dataFAQ5,"sortID");
            currentComponent.setState({faq_group5:dataFAQ5})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })

        base('FAQ').select({
            filterByFormula: `{Group} = "Group6"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                dataFAQ6.push(record.fields)
            });
            dataFAQ6 = currentComponent.sortByKey(dataFAQ6,"sortID");
            currentComponent.setState({faq_group6:dataFAQ6})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })
        
        // Get pricing data content
        base('Pricing_List').select({
            filterByFormula: `{pharse} = "Pharse1"`
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {
                record.fields.id = record.id;
                dataPricing1.push(record.fields)
                // console.log(record.fields);
            });
            
            dataPricing1 = currentComponent.sortByKey(dataPricing1,"sortID");
            console.dir(dataPricing1);
            currentComponent.setState({pricing_group1:dataPricing1})
        });

        base('Pricing_List').select({
            filterByFormula: `{pharse} = "Pharse2"`
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {
                record.fields.id = record.id;
                dataPricing2.push(record.fields)
            });
            dataPricing2 = currentComponent.sortByKey(dataPricing2,"sortID");
            currentComponent.setState({pricing_group2:dataPricing2})
        });

        base('Pricing_List').select({
            filterByFormula: `{pharse} = "Pharse3"`
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {
                record.fields.id = record.id;
                dataPricing3.push(record.fields)
            });
            dataPricing3 = currentComponent.sortByKey(dataPricing3,"sortID");
            currentComponent.setState({pricing_group3:dataPricing3})
        });


        base('Pricing_Page').find('recMykkn2JNCU92aS', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('pricing', record);
            currentComponent.setState({pricing_content:record.fields})
        });
       
        // get form information 
        base('Form_List').find('recQyI18pobN7gMkC', function(err, record) {
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
        const {faq_group_sub,faq_group1,faq_group2,faq_group3,faq_group4,faq_group5,faq_group6,pricing_group1,pricing_group2,pricing_group3,pricing_content,dataForm} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pricing-c63b77096eed047504d39929449c4622477172f40f4d4fa60be55c5b0ca82c56.css" />
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
                </Head>
                <div className="">
                    <ModalForm />
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            <section className="section">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="section-heading">
                                            <h1 className="section-heading__heading heading--1">{pricing_content.line1}</h1>
                                            <p className="section-heading__subhead heading--2">{pricing_content.line2}</p>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--mobile-up-align-center">
                                        <div className="text-center gutter-bottom--mobile">
                                            <div className="marketing-button-wrapper">
                                                <button className="marketing-button js-open-signup">{pricing_content.btn1_title}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <PricingSection1 pricing_group1={pricing_group1} pricing_group2={pricing_group2} pricing_group3={pricing_group3} pricing_content={pricing_content}/>
                                
                                <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-offset-1">
                                        <p className="pricing-disclaimer">{pricing_content.disclaimer}</p>
                                    </div>
                                </div>
                            </section>
                            <section className="section background-light color-ink section--tight">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="section-heading gutter-bottom--reset">
                                            <h2 className="section-heading__heading heading--1 gutter-bottom">{pricing_content.call_action1}</h2>
                                            <div className="marketing-button-wrapper">
                                                <button className="marketing-button marketing-button--skin-lowlight js-open-signup" >{pricing_content.btn2_title}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <PricingFAQSection faq_group_sub={faq_group_sub} faq_group1={faq_group1} faq_group2={faq_group2} faq_group3={faq_group3} faq_group4={faq_group4} faq_group5={faq_group5} faq_group6={faq_group6} />
                            

                            <section className="section footer-signup background-light">
                                <div className="grid">
                                    <div className="grid__item grid__item--desktop-up-half">
                                        <div className="section-heading gutter-bottom--reset text-center--tablet-down">
                                            <h2 className="section-heading__heading heading--2">{dataForm.hero_message}</h2>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                                        <div className="js-signup-inline marketing-form--inline">
                                            <div className="marketing-input-wrapper marketing-input-button-pair">
                                                <div className="marketing-input-button-pair__field-wrapper">
                                                    <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" htmlFor="SignupEmail-2ae4">Email</label>
                                                    <input placeholder={dataForm.btn_hint} id="SignupEmail-2ae4" className="marketing-input-button-pair__input marketing-input marketing-input--floating" type="email" name="signup[email]" />
                                                    <button className="marketing-button marketing-form__button marketing-input-button-pair__button" name="button" data-ga-event="Email capture signup" data-ga-action="CTA button click" aria-haspopup="dialog" type="submit">{dataForm.btn_title}</button>
                                                </div>
                                                <span className="marketing-form__messages">{dataForm.note}</span>
                                            </div>
                                        </div>
                                        {/* <p className="marketing-form__fallback-cta text-center">{dataForm.note}</p> */}
                                    </div>
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </div>
                </div>
            <style jsx>{`
                .section-heading__heading.heading--1 {font-size: 2rem !important;}
                .section-heading__subhead.heading--2 {font-size: 1.5rem !important;}
                .background-light {background-color: var(--sub-color-1)}
            `}</style>
            </div>
        )
    }
}