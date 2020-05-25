import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'

export default class LayoutPricing extends React.Component { 
    render (){
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
                            <section class="section">
                                <div class="grid">
                                    <div class="grid__item">
                                        <div class="section-heading">
                                            <h1 class="section-heading__heading heading--1">Set up your store, pick&nbsp;a&nbsp;plan&nbsp;later</h1>
                                            <p class="section-heading__subhead heading--2">Try Shopify free for 90 days, no credit card&nbsp;required</p>
                                        </div>
                                    </div>
                                    <div class="grid__item grid__item--mobile-up-align-center">
                                        <div class="text-center gutter-bottom--mobile">
                                            <form class="marketing-button-wrapper" action="https://accounts.shopify.com/store-signup/setup" accept-charset="UTF-8" method="post">
                                                <button class="marketing-button js-open-signup" data-ga-event="Pricing" data-ga-action="Start your free trial" data-ga-label="Heading">Start your free trial</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid">
                                    <div class="grid__item grid__item--desktop-up-two-thirds grid__item--mobile-up-align-center">
                                        {/* <div class="display--mobile plan-tabs__wrapper">
                                            <ul class="plan-tabs">
                                                <li><button name="button" type="button" class="plan-tabs__tab" data-target-index="0" data-ga-event="Pricing Table - Mobile Tabs" data-ga-action="Tab click" data-plan-name="Basic Shopify" aria-controls="PricingTable" aria-pressed="false">Basic Shopify</button></li>
                                                <li><button name="button" type="button" class="plan-tabs__tab" data-target-index="1" data-ga-event="Pricing Table - Mobile Tabs" data-ga-action="Tab click" data-plan-name="Shopify" aria-controls="PricingTable" aria-pressed="false">Shopify</button></li>
                                                <li><button name="button" type="button" class="plan-tabs__tab" data-target-index="2" data-ga-event="Pricing Table - Mobile Tabs" data-ga-action="Tab click" data-plan-name="Advanced Shopify" aria-controls="PricingTable" aria-pressed="false">Advanced Shopify</button></li>
                                            </ul>
                                        </div> */}

                                        <table class="marketing-table pricing-table" id="PricingTable">
                                            {/* <caption class="visuallyhidden">Pricing and feature information for all Shopify plans</caption> */}
                                            <thead>
                                                <tr>
                                                    <th class="pricing-table__table-head" scope="col" id="p-0"> 
                                                        <p class="heading--4">Plan feature</p>
                                                        <p>All the basics for starting a&nbsp;new business</p>
                                                        {/* <span class="visuallyhidden">Plan feature</span> */}
                                                    </th>
                                                    <th class="pricing-table__table-head" scope="col" id="p-1">
                                                        <p class="heading--4">Basic Shopify</p>
                                                        <p>All the basics for starting a&nbsp;new business</p>
                                                    </th>
                                                    <th class="pricing-table__table-head" scope="col" id="p-2">
                                                        <p class="heading--4">Shopify</p>
                                                        <p>Everything you need for a growing business</p>
                                                    </th>
                                                    <th class="pricing-table__table-head" scope="col" id="p-3">
                                                        <p class="heading--4">Advanced Shopify</p>
                                                        <p>Advanced features for scaling your business</p>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody class="pricing-table__table-body">
                                                <tr>
                                                    <th scope="row" id="f-monthly_price"> <div class="pricing-table__feature-name">Monthly price</div></th>
                                                    
                                                    <td headers="p-0 f-monthly_price">
                                                        <div class=" monthly-price"> 
                                                            <span class="monthly-price__currency text-minor" aria-hidden="true">USD</span>
                                                            <span class="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                                                <span class="price"><span class="visuallyhidden">$29</span>
                                                                    <span aria-hidden="true">
                                                                        <sup>$</sup>
                                                                        <span class="price__number">29</span>
                                                                    </span>
                                                                </span>
                                                            </span> 
                                                            <span class="monthly-price__accessibility-text visuallyhidden">per month</span>
                                                            <span class="monthly-price__billing-period text-minor" aria-hidden="true">/mo</span>
                                                        </div>
                                                    </td>
                                                    
                                                    <td headers="p-1 f-monthly_price">
                                                        <div class=" monthly-price"> 
                                                            <span class="monthly-price__currency text-minor" aria-hidden="true">USD</span>
                                                            <span class="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                                                <span class="price">
                                                                    <span class="visuallyhidden">$79</span>
                                                                    <span aria-hidden="true"><sup>$</sup>
                                                                        <span class="price__number">79</span>
                                                                    </span>
                                                                </span>
                                                            </span> 
                                                            <span class="monthly-price__accessibility-text visuallyhidden">per month</span>
                                                            <span class="monthly-price__billing-period text-minor" aria-hidden="true">/mo</span>
                                                        </div>
                                                    </td>
                                                    
                                                    <td headers="p-2 f-monthly_price">
                                                        <div class=" monthly-price"> 
                                                            <span class="monthly-price__currency text-minor" aria-hidden="true">USD</span>
                                                            <span class="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                                                <span class="price">
                                                                    <span class="visuallyhidden">$299</span>
                                                                    <span aria-hidden="true"><sup>$</sup>
                                                                        <span class="price__number">299</span>
                                                                    </span>
                                                                </span>
                                                            </span> 
                                                            
                                                            <span class="monthly-price__accessibility-text visuallyhidden">per month</span>
                                                            <span class="monthly-price__billing-period text-minor" aria-hidden="true">/mo</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="col" colspan="4"> 
                                                        <span class="heading--5 pricing-table__section-heading">Features</span>
                                                    </th>
                                                </tr>

                                                <tr>
                                                    <th scope="row" id="f-website">
                                                        <div class="pricing-table__feature-name">
                                                        <dl class="feature-label"><dt class="feature-label__text">Online Store</dt>
                                                            <dd class="feature-label__description">Includes ecommerce website and blog.</dd>
                                                        </dl>
                                                        </div>
                                                    </th>
                                                    <td headers="p-0 f-website"> <span class="pricing-table__feature-value">
                                                        <span class="visuallyhidden">Yes</span>
                                                        <svg class="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40">
                                                            <path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" />
                                                        </svg>
                                                        </span>
                                                    </td>
                                                    <td headers="p-1 f-website"> <span class="pricing-table__feature-value">
                                                        <span class="visuallyhidden">Yes</span>
                                                        -
                                                        </span>
                                                    </td>
                                                    <td headers="p-2 f-website"> <span class="pricing-table__feature-value">
                                                        <span class="visuallyhidden">Yes</span>
                                                        <svg class="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40">
                                                            <path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" />
                                                        </svg>
                                                        </span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="grid">
                                    <div class="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-offset-1">
                                        <p class="pricing-disclaimer">Shopify collects sales taxes in states where it is required by law. Stated prices do not include these taxes.</p>
                                    </div>
                                </div>
                            </section>

                            <section class="section background-light color-ink section--tight">
                                <div class="grid">
                                    <div class="grid__item">
                                        <div class="section-heading gutter-bottom--reset">
                                            <h2 class="section-heading__heading heading--1 gutter-bottom">Set up your store, pick&nbsp;a&nbsp;plan&nbsp;later</h2>
                                            <form class="marketing-button-wrapper" action="#" accept-charset="UTF-8" method="post">
                                                <button class="marketing-button marketing-button--skin-lowlight js-open-signup" data-ga-event="Pricing" data-ga-action="Start your free trial" data-ga-label="After Table">Start your free trial</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="section">
                                <div class="grid">
                                    <div id="Faq" class="pricing-faq">
                                        <div class="section-heading visuallyhidden">
                                            <h2 class="section-heading__heading heading--1">Frequently Asked Questions</h2>
                                        </div>
                                        <div class="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--desktop-up-offset-2">
                                            <div class="accordion">
                                                <div class="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" class="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions</h3>
                                                </div>
                                                <div class="accordion-content">
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">Is there a setup fee?</h3>
                                                        <p class="block__content">No. There are no setup fees on any of our plans.</p>
                                                    </div>
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">Do I need to enter my payment details to sign up?</h3>
                                                        <p class="block__content">No. You can sign up and use Shopify for 90 days without entering your payment details. At the end of your trial, or when you decide to launch your store, you will need to pick a plan and enter your payment details.</p>
                                                    </div>
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">Can I cancel my account at any time?</h3>
                                                        <p class="block__content">Yes. If you ever decide that Shopify isn’t the best ecommerce platform for your business, simply cancel your account.</p>
                                                    </div>
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">How long are your contracts?</h3>
                                                        <p class="block__content">All Shopify plans are month to month unless you sign up for an annual or biennial plan.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <div class="accordion">
                                                <div class="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" class="heading--2 pricing-faq__heading accordion-link" data-state="1">Online questions</h3>
                                                </div>
                                                <div class="accordion-content">
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">Can I use my own domain name?</h3>
                                                        <p class="block__content">Yes. You can purchase a domain name within Shopify, or use an existing one that you own. We also provide a free myshopify.com domain name to all stores on sign up.</p>
                                                    </div>
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">What are your bandwidth fees?</h3>
                                                        <p class="block__content">There are none. All Shopify plans include unlimited bandwidth for free.</p>
                                                    </div>
                                                    <div class="block">
                                                        <h3 class="block__heading heading--4">Do I need a web host?</h3>
                                                        <p>Shopify includes secure, unlimited ecommerce hosting on all plans except Shopify Lite. You can also use the <a href="buy-button.html">Buy Button</a> to add ecommerce to any existing website.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion">
                                                <div class="section-heading section-heading--tablet-up-align-left">
                                                    <h3 type="button" class="heading--2 pricing-faq__heading accordion-link" data-state="2">POS questions</h3>
                                                </div>
                                                <div class="accordion-content">
                                                    <div class="block">
                                                        <p class="block__content">
                                                            <div class="long-form-content ">
                                                                <h4>What does Shopify POS do?</h4>
                                                                <p>Shopify POS is an application for iOS and Android devices that you can use for transactions in a physical store or pop-up setting. Find products, process orders, take payment, swipe credit cards, produce receipts, and control it all from your iPad or mobile device. All the background management of your store is done from your Shopify admin, which you can access using any browser.</p>
                                                            </div>
                                                        </p>
                                                    </div>
                                                    <div class="block">
                                                        <p class="block__content">
                                                            <div class="long-form-content ">
                                                                <h4>Can I merge my Shopify online store with Shopify POS?</h4>
                                                                <p>Yes. Your Shopify online store automatically synchronizes with Shopify POS, and you manage your entire business from one dashboard. Product or inventory updates that you make in your Shopify admin will instantly take effect in Shopify POS.</p>
                                                            </div>
                                                        </p>
                                                    </div>
                                                    <div class="block">
                                                        <p class="block__content">
                                                            <div class="long-form-content ">
                                                                <h4>Can I use Shopify POS if I have multiple cash registers in use at the same time?</h4>
                                                                <p>Yes. You can install Shopify POS on multiple devices, and you won’t be charged any extra. Store activity on all devices is synchronized with your Shopify admin.</p>
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="section footer-signup background-light">
                                <div class="grid">
                                    <div class="grid__item grid__item--desktop-up-half">
                                        <div class="section-heading gutter-bottom--reset text-center--tablet-down">
                                            <h2 class="section-heading__heading heading--2">Start your 90-day <span class="color-primary">free trial</span> today!</h2>
                                        </div>
                                    </div>
                                    <div class="grid__item grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                                        <form class="js-signup-inline marketing-form--inline" novalidate="novalidate" action="https://accounts.shopify.com/store-signup/setup" accept-charset="UTF-8" method="post">
                                            <div class="marketing-input-wrapper marketing-input-button-pair">
                                                <div class="marketing-input-button-pair__field-wrapper">
                                                    <label class="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" for="SignupEmail-2ae4">Email</label>
                                                    <input placeholder="Enter your email address" id="SignupEmail-2ae4" class="marketing-input-button-pair__input marketing-input marketing-input--floating" type="email" name="signup[email]" />
                                                    <button class="marketing-button marketing-form__button marketing-input-button-pair__button" name="button" data-ga-event="Email capture signup" data-ga-action="CTA button click" aria-haspopup="dialog" type="submit">Start free trial</button>
                                                </div><span class="marketing-form__messages"></span>
                                            </div>
                                        </form>
                                        <p class="marketing-form__fallback-cta text-center">Try Shopify free for 90 days, no credit card&nbsp;required. By entering your email, you agree to receive marketing emails&nbsp;from&nbsp;Shopify.</p>
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