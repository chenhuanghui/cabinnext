import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'

export default class LayoutAbout extends React.Component { 
    render (){
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" />

                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                </Head>
                <div className="page--home-about">
                    <Header />
                    
                    <div id="PageContainer">
                        <main id="Main">
                            <section class="section about-hero">
                                <div class="grid about-hero__grid">
                                    <div class="grid__item grid__item--tablet-up-half about-hero__content">
                                        <div class="section-heading gutter-bottom--reset">
                                            <p class="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">About us</p>
                                            <h1 class="section-heading__heading heading--1 text-left--tablet-up text-center--mobile about-hero__heading">Shopify powers over 1,000,000 businesses worldwide</h1>
                                            <p class="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">The all-in-one commerce platform to start, run, and grow&nbsp;a&nbsp;business.</p>
                                        </div>
                                    </div>    
                                    <div class="grid__item grid__item--tablet-up-half about-hero__image-container">
                                        <span class="image lazyload-image about-hero__image-spill">
                                                <img src="https://cdn.shopify.com/assets2/merchants/assembly/about-hero-large-1645be52ccc028603eae98b741a63fb2f83d7765f916780c44e59801d1db3369.png" />
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section class="section">
                                <div class="grid grid--vertically-centered about__content-block-container about__content-story">
                                    <div class="grid__item grid__item--tablet-up-half about__content-image-store"> 
                                        <img data-sizes="100vw" src="https://cdn.shopify.com/assets2/merchants/snowdevil/snowdevil-about-online-store-large-6096f63ff23edcf848ba787dcb6fa7c4322fdfe6a9cccbf4c15864723f0d5356.png"/>
                                    </div>
                                    <div class="grid__item grid__item--tablet-up-half">
                                        <div class="about__content">
                                            <div class="section-heading gutter-bottom--reset">
                                                <p class="section-heading__kicker heading--5 color-black text-left gutter-bottom--half">Shopify story</p>
                                                <h2 class="section-heading__heading text-left gutter-bottom--half">The first Shopify store was our&nbsp;own</h2>
                                                <p class="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">Over a decade ago, we started a store to sell snowboards online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use Shopify, whether they’re selling online, in retail stores, or on the go.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="section section--tight">
                                <div class="grid grid--vertically-centered">
                                    <div class="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-push-1">
                                        <div class="section-heading">
                                            <p class="section-heading__kicker heading--5 color-black gutter-bottom--half">Our mission</p>
                                            <h2 class="section-heading__heading gutter-bottom--half">Making commerce better for everyone</h2>
                                            <p class="section-heading__subhead text-major color-ink-light gutter-bottom--reset">We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="section about__content-people">
                                <div class="grid grid--vertically-centered about__content-block-container about__content-block-container--flipped">
                                    <div class="grid__item grid__item--tablet-up-half grid__item--tablet-up-push-half about__content-image--flipped about-video__container">
                                        <div class="about-video"> 
                                            <img src="https://cdn.shopify.com/assets2/about/video-poster-large-5b9f531cdd48f8db77050b22b39db76d50feb7dadad5a7846d9ebf40abaa5c4d.jpg" />                                            
                                        </div>
                                    </div>
                                    <div class="grid__item grid__item--tablet-up-half grid__item--tablet-up-pull-half">
                                        <div class="about__content">
                                            <div class="section-heading gutter-bottom--reset">
                                                <p class="section-heading__kicker heading--5 color-black text-left gutter-bottom--half">Our people</p>
                                                <h2 class="section-heading__heading text-left gutter-bottom--half">Creating a community for&nbsp;impact</h2>
                                                <p class="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">Shopify has grown from 5 people in a coffee shop to over 5,000 across the globe. With over 1,000,000 businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we&nbsp;do.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            

                            <section class="section signup-footer">
                                <div class="grid">
                                    <div class="grid__item">
                                        <div class="section-heading signup-footer__heading gutter-bottom--reset">
                                            <h2 class="section-heading__heading heading--2 next-steps__sign-up-heading" data-ga-event="about" data-ga-action="footer" data-ga-label="signup">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your&nbsp;business.</h2>
                                            <form class="marketing-button-wrapper" action="https://accounts.shopify.com/store-signup/setup" acceptCharset="UTF-8" method="post">
                                                <button class="marketing-button js-open-signup signup-footer__button">Start free trial</button>
                                            </form>
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
                `}</style>
            </div>
        )
    }
}