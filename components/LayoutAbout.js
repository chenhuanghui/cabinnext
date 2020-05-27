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
                            <header class="hero about__hero-image gutter-bottom">
                                <div class="grid">
                                    <div class="grid__item grid__item--tablet-up-half">
                                        <div class="hero__inner">
                                            <div class="section-heading section-heading--tight section-heading--tablet-up-align-left">
                                                <p class="section-heading__kicker heading--5 color-black">About us</p>
                                                <h1 class="section-heading__heading heading--jumbo heading--1">Shopify powers over 1,000,000 businesses worldwide</h1>
                                                <p class="section-heading__subhead heading--2">The all-in-one commerce platform to start, run, and grow a business.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <section class="section">
                                <div class="grid grid--vertically-centered about__content-block-container about__content-story">
                                    <div class="grid__item grid__item--tablet-up-half about__content-image-store"> 
                                        <span class="image lazyload-image">
                                            <span class="lazyload-image__placeholder">
                                                <img data-sizes="100vw" src="https://cdn.shopify.com/assets2/merchants/snowdevil/snowdevil-about-online-store-large-6096f63ff23edcf848ba787dcb6fa7c4322fdfe6a9cccbf4c15864723f0d5356.png" alt="" class="lazyload" />
                                            </span>
                                        </span>
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
                                            <span class="image lazyload-image">
                                                <span class="lazyload-image__placeholder">
                                                    <img sizes="100vw" src="https://cdn.shopify.com/assets2/about/video-poster-large-5b9f531cdd48f8db77050b22b39db76d50feb7dadad5a7846d9ebf40abaa5c4d.jpg" />
                                                </span>
                                            </span>
                                            <button name="button" type="button" class="js-wistia-modal about-video__play" data-wistia-id="68gkaelekj">
                                                <svg class="icon icon--fill-black about-video__icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="m4.33 1c-.73453872 0-1.33.59546128-1.33 1.33v15.34c0 .7345387.59546128 1.33 1.33 1.33.23645682-.0012208.46810271-.0669114.67-.19l12.8-7.67c.4001633-.2404682.6449453-.6731428.6449453-1.14 0-.46685721-.244782-.89953177-.6449453-1.14l-12.8-7.67c-.20189729-.1230886-.43354318-.18877923-.67-.19z"
                                                    />
                                                </svg>
                                                <p class="visuallyhidden">Play video</p>
                                            </button>
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
                            <section class="section about__resources">
                                <div class="grid">
                                    <div class="grid__item grid__item--mobile-up-half grid__item--tablet-up-full grid__item--mobile-up-align-center">
                                        <div class="section-heading">
                                            <h2 class="section-heading__heading">Learn more about Shopify</h2>
                                        </div>
                                    </div>
                                    <div class="grid__item">
                                        <div class="about__card-group">
                                            <a class="ui-card" href="contact.html">
                                                <svg class="icon gutter-bottom ui-card__icon about__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                                    <path d="M38.5 16.25V14A12.51 12.51 0 0 0 26 1.5h-6A12.51 12.51 0 0 0 7.5 14v2A5 5 0 0 0 3 21v5a5 5 0 0 0 5 5h4a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2h-1.5v-2A9.51 9.51 0 0 1 20 4.5h6a9.51 9.51 0 0 1 9.5 9.5v2H33a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2v3.5a1.5 1.5 0 0 1-1.5 1.5H29v-1.5a1.5 1.5 0 0 0-1.5-1.5h-6a3.5 3.5 0 0 0-3.5 3.5v2a3.5 3.5 0 0 0 3.5 3.5h6a1.5 1.5 0 0 0 1.5-1.5V39h4.5a4.5 4.5 0 0 0 4.5-4.5v-3.6a5 5 0 0 0 4-4.9v-5a5 5 0 0 0-3.5-4.75zM11 19v9H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm15 20h-4.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H26zm13-13a2 2 0 0 1-2 2h-3v-9h3a2 2 0 0 1 2 2z" />
                                                </svg>
                                                <h3 class="heading--4 text-major">Award-winning support</h3>
                                                <p class="ui-card__content">Get the help you want with 24/7 support—before, during, and after your trial.</p>
                                                <div class="ui-card__cta about__card-cta">
                                                    <div class="styled-link styled-link--skin-inherit">Contact support
                                                        <svg class="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                            <a rel="nofollow" class="ui-card" href="careers.html">
                                                <svg class="icon gutter-bottom ui-card__icon about__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                                    <path d="M31 18h-3.59L26 41.59A1.5 1.5 0 0 1 24.5 43h-.09A1.5 1.5 0 0 1 23 41.41l1.5-25A1.5 1.5 0 0 1 26 15h3l-7.56-9.68L14 15h3a1.5 1.5 0 0 1 1.5 1.41l1.5 25a1.5 1.5 0 1 1-3 .18L15.59 18H12a2 2 0 0 1-1.64-3.15L19.44 3a2.48 2.48 0 0 1 2-1 2.51 2.51 0 0 1 2 1l9.15 11.74a2 2 0 0 1 .18 2.13A2 2 0 0 1 31 18zm2.72 5A1.5 1.5 0 0 0 32 24.24l-3 17A1.5 1.5 0 0 0 30.24 43h.26a1.5 1.5 0 0 0 1.5-1.24l3-17A1.5 1.5 0 0 0 33.76 23zM12 29.25a1.5 1.5 0 1 0-3 .49l2 12A1.5 1.5 0 0 0 12.5 43h.25A1.5 1.5 0 0 0 14 41.25z" />
                                                </svg>
                                                <h3 class="heading--4 text-major">Career opportunities</h3>
                                                <p class="ui-card__content">Learn how you can have an impact by exploring opportunities at Shopify.</p>
                                                <div class="ui-card__cta about__card-cta">
                                                    <div class="styled-link styled-link--skin-inherit">Explore careers
                                                        <svg class="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                            <a rel="nofollow" class="ui-card" href="https://news.shopify.com">
                                                <svg class="icon gutter-bottom ui-card__icon about__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                                    <path d="M41.87 2.05a1.51 1.51 0 0 0-1.69.73C40.05 3 36.94 8.5 29 8.5H13a11 11 0 0 0-3.61 21.38c2.79 1.47 5.9 8.06 6.54 11.11a2.51 2.51 0 0 0 2.45 2h5.12A2.5 2.5 0 0 0 26 40.5v-10h3c7.94 0 11.05 5.48 11.18 5.71A1.5 1.5 0 0 0 43 35.5v-32a1.5 1.5 0 0 0-1.13-1.45zM5 19.5a8 8 0 0 1 8-8h5v16h-5a8 8 0 0 1-8-8zM23 40h-4.22a30.91 30.91 0 0 0-4.51-9.5H23zm17-8.56a16.24 16.24 0 0 0-11-3.94h-8v-16h8a16.24 16.24 0 0 0 11-3.94z" />
                                                </svg>
                                                <h3 class="heading--4 text-major">Press and media</h3>
                                                <p class="ui-card__content">Find press releases, executive team bios, and more.</p>
                                                <div class="ui-card__cta about__card-cta">
                                                    <div class="styled-link styled-link--skin-inherit">View press
                                                        <svg class="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
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
                `}</style>
            </div>
        )
    }
}