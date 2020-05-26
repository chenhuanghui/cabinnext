import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'
import PricingSection1 from './sections/Pricing/PricingSection1';
import PricingFAQSection from './sections/Pricing/PricingFAQSection';

export default class LayoutPricing extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            faq_group1:[],
            faq_group2:[],
            faq_group3:[]
        }
    }

    componentDidMount () {
        let currentComponent = this;
        var dataFAQ1 = [];
        var dataFAQ2 = [];
        var dataFAQ3 = [];
        var faqData = [];

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('Pricing_FAQ').select({
            filterByFormula: `{Group} = "Group1"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                // console.log('Retrieved', record.get('ID'));
                console.dir(record);  // show full record JS object
                dataFAQ1.push(record.fields)
            });
            currentComponent.setState({faq_group1:dataFAQ1})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })

       
    }


    render (){
        const {faq_group1} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    {/* <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/masterbrand-12d9bf8602c9e16769a8ff8a1177e4238d9413d73d9dd7678796641e912282fa.css" /> */}
                    {/* <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/home/index-72e8f7e85d965b49c9307d648b07104daf053fb6e3c5fafc4e3c20c0abd96957.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pillar/sell-914ee38ae73192ea7d1625dca6277b4c70d1f15f78074de4b2c354ce2371afbe.css" />
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pillar/base-81be2467a53cebe8f831d8a89bc6e992e93d27cd83dd61f67fab85bbebc6cb41.css" /> */}
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" />

                    {/* <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/about-148ade53861c2431e1638a6e3827d608f462957db1f0b42e1c2244588106143a.css" /> */}
                    {/* <link rel="stylesheet" media="screen" href="https://press-cdn.prezly.com/style/8871.css?u=1590095820&d=ltr&v=1020bcf936adf8430b37.css" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" media="screen" href="https://cdn.shopify.com/assets2/manifests/pricing-c63b77096eed047504d39929449c4622477172f40f4d4fa60be55c5b0ca82c56.css" />
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>
                <div className="">
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            
                            <PricingSection1 />

                            <section className="section background-light color-ink section--tight">
                                <div className="grid">
                                    <div className="grid__item">
                                        <div className="section-heading gutter-bottom--reset">
                                            <h2 className="section-heading__heading heading--1 gutter-bottom">Set up your store, pick&nbsp;a&nbsp;plan&nbsp;later</h2>
                                            <form className="marketing-button-wrapper" action="#" acceptCharset="UTF-8" method="post">
                                                <button className="marketing-button marketing-button--skin-lowlight js-open-signup" data-ga-event="Pricing" data-ga-action="Start your free trial" data-ga-label="After Table">Start your free trial</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <PricingFAQSection faq_group1={faq_group1}/>
                            

                            <section className="section footer-signup background-light">
                                <div className="grid">
                                    <div className="grid__item grid__item--desktop-up-half">
                                        <div className="section-heading gutter-bottom--reset text-center--tablet-down">
                                            <h2 className="section-heading__heading heading--2">Start your 90-day <span className="color-primary">free trial</span> today!</h2>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                                        <form className="js-signup-inline marketing-form--inline" noValidate="noValidate" action="https://accounts.shopify.com/store-signup/setup" acceptCharset="UTF-8" method="post">
                                            <div className="marketing-input-wrapper marketing-input-button-pair">
                                                <div className="marketing-input-button-pair__field-wrapper">
                                                    <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" htmlFor="SignupEmail-2ae4">Email</label>
                                                    <input placeholder="Enter your email address" id="SignupEmail-2ae4" className="marketing-input-button-pair__input marketing-input marketing-input--floating" type="email" name="signup[email]" />
                                                    <button className="marketing-button marketing-form__button marketing-input-button-pair__button" name="button" data-ga-event="Email capture signup" data-ga-action="CTA button click" aria-haspopup="dialog" type="submit">Start free trial</button>
                                                </div><span className="marketing-form__messages"></span>
                                            </div>
                                        </form>
                                        <p className="marketing-form__fallback-cta text-center">Try Shopify free for 90 days, no credit card&nbsp;required. By entering your email, you agree to receive marketing emails&nbsp;from&nbsp;Shopify.</p>
                                    </div>
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}