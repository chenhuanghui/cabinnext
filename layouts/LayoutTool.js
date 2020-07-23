import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Announcement from '../components/annoucement/an_style1'

import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
import FormStyle2 from '../components/forms/form_style2';

import fetch from 'node-fetch'
import Link from 'next/link'
import ModalForm from '../components/modals/modal_Form';

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

async function fetchEntries(query) {
    const entries = await client.getEntries(query)
    if (entries.items) {
        // console.log('entries:',entries.items);
        return entries.items
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default class LayoutBlog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            posts:[]
        }
    }

    componentDidMount () {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    render () {
        const {data,posts} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta  property="og:title" content="CabinFood Blogs" />
                    <meta  property="og:image" content={data && data.cover_image ? data.cover_image[0].url : ''} />
                    <title>{ data && data.name ? data.name : 'CabinFood Blogs'}</title>
                </Head>

                <div className="page--home">
                    <ModalForm />
                    <Nav />
                    <div id="PageContainer">
                        <main id="Main">
                            <header className="hero background-light color-ink">
                                <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-half">
                                        <div className="hero__inner">
                                            <div className="section-heading section-heading--left section-heading--tight">
                                                <p className="section-heading__kicker heading--5">Free tools</p>
                                                <h1 className="section-heading__heading heading--jumbo">Business Loan Calculator</h1>
                                                <p className="section-heading__subhead heading--2">Easily calculate fixed-rate loans for your business</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half">
                                        <div className="hero__inner">
                                            <img className="image hero__image" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/growth_tools/assets/home/tools-hero-small-a6423211f306f8389d78b31067a486321acab30ecc6ccb4e149daa574f956cd6.jpg 1x, https://cdn.shopify.com/shopifycloud/growth_tools/assets/home/tools-hero-large-13a7b5f09c46ab97c0dddd7ac6a9e26d116d1fe1773614bee3749e575b7a42a4.jpg 2x" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <section className="section section--border" id="ToolContent">
                                <div className="grid">
                                    <div className="grid grid--equal-height">
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <form id="BusinessLoanCalculatorForm" action="/tools/business-loan-calculator/store" accept-charset="UTF-8" method="post" novalidate="" __bizdiag="2000182305" __biza="WJ__">
                                                <input name="utf8" type="hidden" value="✓"/>
                                                <input type="hidden" name="authenticity_token" value="V8qfsZtvVXewrOwmdyc89WDCAzCkJZaQTaV5qTXXNncBE/CcB92ESjUMf1em4rIo/jZ3goH6KLDc3fDsUGq7tw=="/>
                                                <div className="form-section">
                                                    <div className="form-header">
                                                        <h2 className="form-header__heading heading--3">Enter your loan information</h2>
                                                    </div>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Loan amount ($)</span>
                                                        <input type="text" name="amount" id="amount" placeholder="Loan amount ($)" required="required" min="0" data-parsley-type="number" className="marketing-input marketing-input--floating" data-parsley-id="2417"/>
                                                        <ul className="marketing-form__messages" id="parsley-id-2417"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Annual interest rate (%)</span>
                                                        <input type="text" name="interest_rate" id="interest_rate" placeholder="Annual interest rate (%)" required="required" min="0" data-parsley-type="number" className="marketing-input marketing-input--floating" data-parsley-id="5773"/>
                                                        <ul className="marketing-form__messages" id="parsley-id-5773"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Length of Term (years)</span>
                                                        <input type="text" name="term" id="term" placeholder="Length of Term (years)" required="required" min="0" data-parsley-type="number" className="marketing-input marketing-input--floating" data-parsley-id="2227"/>
                                                        <ul className="marketing-form__messages" id="parsley-id-2227"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Extra monthly payment ($)</span>
                                                        <input type="text" name="extra_payment" id="extra_payment" placeholder="Extra monthly payment ($)" min="0" data-parsley-type="number" className="marketing-input marketing-input--floating" data-parsley-id="4223"/>
                                                        <ul className="marketing-form__messages" id="parsley-id-4223"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                </div>
                                                <input type="submit" name="commit" value="Calculate" className="marketing-button form-section-submit" data-ga-event="business loan generator" data-ga-action="form" data-ga-label="submit" data-disable-with="Calculate"/>
                                            </form>
                                        </div>
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <div className="form-section">
                                                <div className="form-header">
                                                    <h2 className="heading--3">Find out how much your loan will cost</h2>
                                                </div>
                                                <div className="marketing-markdown">
                                                    <p>Taking out a small business loan can help kick start or grow your business, but it is important to know what you're getting into before you borrow money.</p>
                                                    <p>Our small business loan calculator will give you an idea of how much it will cost to take out a loan. Adjust the term and add extra monthly payments to see how much of an impact you can have on repayment.</p>
                                                </div>
                                            </div>
                                            <div className="summary-grid">
                                                <div className="summary-grid__items summary-grid__items--divider">
                                                    <p id="SummaryHeading" className="summary-grid__heading">To borrow <span id="SummaryAmount"></span> over a <span id="SummaryYears"></span> year term your monthly payment will be <span id="SummaryMonthlyPayment"></span> at an interest rate of <span id="SummaryInterestRate"></span>.</p>
                                                </div>
                                                <div className="grid-container grid-container--halves summary-grid__items summary-grid__items--light">
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Monthly payment</h5>
                                                    <span id="MonthlyPayment" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Average monthly interest</h5>
                                                    <span id="MonthlyInterest" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Total interest</h5>
                                                    <span id="TotalInterest" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Number of years</h5>
                                                    <span id="NumOfYears" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                </div>
                                                <div className="grid-container grid-container--halves summary-grid__total">
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Total borrowing cost</h5>
                                                    <span id="Total" className="heading--2 summary-grid__value grid-item grid--mobile">--</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--mobile-up-align-center">
                                            <div className="get-funding-card">
                                                <div className="get-funding-card__image-wrapper">
                                                    <img className="image get-funding-card__image" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/growth_tools/assets/capital/loan-decorator-370c15c36085f6a7c389e033132e870190670aa0cee12288126f65e50e0ed08f.svg" alt=""/>
                                                </div>
                                                <div className="get-funding-card__content">
                                                    <h2 className="heading--2">Shopify Capital</h2>
                                                    <p className="gutter-bottom">Get funding without lengthy application processes, with payments that flex to fit your business.</p>
                                                    <p> <a className="body-link" href="/admin/capital/offers?utm_content=us&amp;utm_medium=business_loan_calculator&amp;utm_source=capital">Log in to check eligibility</a>
                                                    </p>
                                                    <p className="text-minor gutter-bottom">Don’t have a Shopify store? Get started with a 14-day free trial.</p>
                                                    <form className="marketing-button-wrapper" action="https://accounts.shopify.com/store-signup/setup" accept-charset="UTF-8" method="post" __bizdiag="3600241" __biza="WJ__">
                                                        <input name="utf8" type="hidden" value="✓"/>
                                                        <button className="marketing-button js-open-signup">Start free trial</button>
                                                    </form>
                                                </div>
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
                    .background-light {
                        background-color: #f4f6f8;
                    }
                    .form-section {
                        margin-bottom: 1.875em;
                    }
                    .form-header {
                        border-bottom: 1px solid #dfe3e8;
                        margin-bottom: 1.875em;
                    }
                    @media screen and (min-width: 46.875em){
                        .form-header__heading {
                            // float: left;
                        }
                    }
                    @media screen and (min-width: 67.5em) {
                        h3, .heading--3 {
                            font-size: 1.5em;
                            margin-bottom: 0.8333333333em;
                        }
                    }  

                    .marketing-label--in-field {
                        position: absolute;
                        left: 1rem;
                        top: 0.5rem;
                        font-size: 0.6875em;
                        font-weight: 400;
                        pointer-events: none;
                        z-index: 10;
                    }

                    .js-is-filled .marketing-label--floating {
                        opacity: 1;
                        -webkit-transform: translateY(0);
                        transform: translateY(0);
                    }

                    .marketing-label--floating {
                        opacity: 0;
                        -webkit-transform: translateY(3px);
                        transform: translateY(3px);
                        transition-property: opacity, -webkit-transform;
                        transition-property: opacity, transform;
                        transition-property: opacity, transform, -webkit-transform;
                        transition-duration: 150ms;
                    }

                    .marketing-label, .line-item__checkbox .marketing-checkbox-label {
                        display: block;
                        margin-bottom: 0.6153846154em;
                        font-family: ShopifySans, Helvetica, Arial, sans-serif;
                        font-weight: 700;
                        font-size: 0.8125em;
                        color: #454f5b;
                    }

                    .js-is-filled .marketing-input, .js-is-filled .marketing-textarea, .js-is-filled .marketing-select-wrapper>select {
                        padding-top: 1.5em;
                        padding-bottom: 0.5em;
                    }

                    .marketing-input, .marketing-textarea, .marketing-select-wrapper>select {
                        display: inline-block;
                        height: 3.2em;
                        width: 100%;
                        // margin: 0 0 15px;
                        // padding: 1em 1em;
                        color: #212b35;
                        font-size: 1em;
                        box-shadow: 0 0 0 1px #c4cdd5;
                        border: 0;
                        border-radius: 5px;
                        background-color: #ffffff;
                        transition: padding 150ms;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                    }

                    .marketing-form__messages {
                        font-size: 0.8125em;
                        font-weight: 500;
                    }

                    .marketing-form__messages .error {
                        color: #eb644d;
                    }

                    .marketing-form__messages .error, .marketing-form__messages .success, .marketing-form__messages .suggest {
                        display: block;
                        padding: 0.6153846154em 0 0;
                    }

                    @media screen and (min-width: 46.875em) {
                        .form-section-submit {
                            float: right;
                        }
                    }

                    .summary-grid {
                        background: #f4f6f8;
                        border: 1px solid #dfe3e8;
                        border-radius: 5px;
                    }
                    .summary-grid__items--divider {
                        border-bottom: 1px solid #dfe3e8;
                    }
                    .summary-grid__items {
                        padding: 0.9375em 1.875em;
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .summary-grid__heading {
                        line-height: 1.25;
                    }
                    @media screen and (min-width: 46.875em) {
                        .summary-grid__heading {
                            text-align: center;
                        }
                    }
                    @media screen and (min-width: 67.5em) {
                        .summary-grid__heading {
                            font-size: 1.125em;
                            margin-bottom: 0.6666666667em;
                        }                        
                    }

                    .summary-grid__items--light {
                        background: #ffffff;
                    }
                    .summary-grid__items {
                        padding: 0.9375em 1.875em;
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .summary-grid__total .summary-grid__label, .summary-grid__total .summary-grid__value {
                        color: #ffffff;
                    }
                    .summary-grid__label {
                        padding-top: 0.625em;
                        flex-grow: 1;
                        width: 50%;
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n+1) {
                            clear: left;
                        }                        
                    }
                    .summary-grid__label {
                        padding-top: 0.625em;
                        flex-grow: 1;
                        width: 50%;
                        font-weight: 500;
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n) {
                            margin-right: 0;
                        }                        
                    }
                    .summary-grid__items .summary-grid__value {
                        color: #454f5b;
                        font-weight: 600 !important;
                    }
                    @media screen and (max-width: 46.8125em) {
                        .grid-item.grid--mobile {
                            float: left;
                            display: block;
                            width: 46.6666666667%;
                            float: left;
                        }                        
                    }
                    .summary-grid__value {
                        flex-grow: 1;
                        width: 50%;
                        text-align: right;
                        margin-bottom: 0;
                    }
                    .summary-grid__total {
                        background: #000639;
                        padding: 0.9375em 1.875em;
                        border-radius: 0 0 5px 5px;
                    }
                    .grid-container {
                        margin-left: auto;
                        margin-right: auto;
                        position: relative;
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n+1) {
                            clear: left;
                        }                        
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n) {
                            margin-right: 0;
                        }                        
                    }
                    
                    .summary-grid__total .summary-grid__value {
                        color: #ffffff;
                    }
                    .summary-grid__value {
                        flex-grow: 1;
                        width: 50%;
                        text-align: right;
                        margin-bottom: 0;
                    }

                    .grid__item--mobile-up-align-center {
                        float: none;
                        clear: left;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    @media screen and (min-width: 67.5em) {
                        .get-funding-card {
                            margin-top: 0;
                        }                        
                    }
                    .get-funding-card {
                        border-radius: 5px;
                        background-color: #f9fafb;
                        margin-top: 5.8125em;
                    }
                    .get-funding-card__image-wrapper {
                        background-color: #69cf9c;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                    .get-funding-card__image {
                        margin-top: -3.9375em;
                    }
                    .get-funding-card__content {
                        border: 1px solid #dfe3e8;
                        border-top: 0;
                        padding: 30px;
                        text-align: center;
                    }
                    .marketing-markdown, .get-funding-card__content p {
                        line-height: 1.5 !important;
                        color: #637381;
                        font-weight: 400;
                    }

                        
                `}</style>
            </div>
        )
    }
}