import Head from 'next/head'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import FormStyle2 from '../components/forms/form_style2';
import Link from 'next/link'

export default function BlogDetail () {
    const router = useRouter();
    const [content, setContent] = useState([]);
    const [related, setRelated] = useState([]);
    const [slug, setSlug] = useState(router.query.slug);
    const [data, setData] = useState([]);

    

    console.log('slug:',router.query.slug)
    useEffect(() => {
        // load page data
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
        base('Page_Blog_Detail').find('rec9y71ihInHmnQOZ', function(err, record) {
            if (err) { console.error(err); return; }
            setData(record.fields)
            console.log('page blog detail data:',data);
        });


        //set slug
        setSlug(router.query.slug);
        console.log('use effect call, slug:', slug);

        var relatedTemp = []
        // if slug updated call api get all posts from tumblr
        fetch('https://api.tumblr.com/v2/blog/cabinfood/posts?api_key=z48gdFrjZK0huw6zLv76lJ9zxKMobRHaKhdhnbwjIsvsrVuKEI')
        .then(response => response.json())
        .then(data => {
            console.log('data blog', data)
            // find post have id == slug
            
            for (var i=0; i < data.response.total_posts; i++) {
                console.log('check data', data.response.posts[0].id_string);
                console.log('check slug', slug);
                if(data.response.posts[i].id_string === slug ) {
                    // set post content
                    setContent(data.response.posts[i]);
                    console.log('set content');
                    console.log('content find out:', content);
                    // return;
                } else {
                    relatedTemp.push(data.response.posts[i]);
                    console.log('add related');
                }
            }
            // set Related data
            setRelated(relatedTemp);
            console.log('related:', related);
        })
    },[])
    console.log('current content', content);
    
    return (
        
        <div className="layout">
            <Head>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta name="author" content="CabinFood" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" type="image/png" href='/assets/images/fav.png' />
                
                <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Chia Sẻ Kiến Thức</title>    
                
                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
            </Head>

            <div className="page--home">
                <Nav/>
                <div id="PageContainer">
                    <main id="Main blogs-page-detail">
                        <section className="section background-lowlight color-white section--tight blog__header blog__header--blog">
                            <div className="grid">
                                <div className="grid__item">
                                    <div className="section-heading section-heading--lowlight section-heading--tablet-up-align-left gutter-bottom--reset">
                                        <p className="section-heading__heading heading--1">{data.headline}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='section section--tight'>
                            <div className='grid'>
                                <article className='grid__item grid__item--desktop-up-two-thirds'>
                                    <nav aria-label="breadcrumbs" className="breadcrumbs">
                                        <ol>
                                            <li className="breadcrumbs__item txt--minor">
                                                <Link href='/'><a className="breadcrumbs__link body-link" ><span>Trang chủ</span></a></Link>
                                                <div className="breadcrumbs__separator" aria-hidden="true">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3"><path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4"></path></svg>
                                                </div>
                                            </li>
                                            <li className="breadcrumbs__item txt--minor">
                                                <Link href='/blogs'><a className="breadcrumbs__link body-link" ><span>CabinFood Blog</span></a></Link>
                                                <div className="breadcrumbs__separator" aria-hidden="true">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3"><path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4"></path></svg>
                                                </div>
                                            </li>
                                            <li className="breadcrumbs__item txt--minor">
                                                <span>{ content && content.summary ? content.summary.split('_')[0] : ''}</span>
                                            </li>
                                        </ol>
                                    </nav>
                                    <header className='article__header'>
                                        <h1 className='article__title'>{ content && content.summary ? content.summary.split('_')[0] : ''}</h1>
                                        <div className='grid grid--vertically-centered'>
                                            <div className='grid__item grid__item--tablet-up-two-thirds'>
                                                <ul className="article__meta">
                                                    <li>by <a rel="nofollow" href="#">{'author name here'}</a></li>
                                                    <li><time itemProp="datePublished" dateTime="2020-06-30T03:30:00Z">{content && content.date ? content.date.split(' ')[0] : ''}</time></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </header>
                                    <figure className='article__image--featured'>
                                        <img src={content && content.photos ? content.photos[0].original_size.url : ''}/>
                                    </figure>
                                    <div className='article__content long-form-content' dangerouslySetInnerHTML={{__html: content && content.caption ? content.caption.split('_')[1] : ''}} />
                                </article>
                                        
                                <div className='grid__item grid__item--desktop-up-third blog__sidebar'>
                                    <div className="display--desktop">
                                        <div className="search-form" action="/blog/search">
                                            <label className="marketing-input-wrapper">
                                                <span className="marketing-label marketing-label--hidden visuallyhidden">Tìm kiếm bài viết</span>
                                                <input className="marketing-input search-form__input" id="SidebarSearch" placeholder="Tìm kiếm bài viết" type="search" name="q"/>
                                                <span className="marketing-form__messages"></span>
                                            </label>
                                            <button type="submit" className="search-form__submit">
                                                <span className="visuallyhidden">Tìm kiếm</span>
                                            </button>
                                        </div>
                                        <div className="sidebar-banner gutter-bottom">
                                            <div id="div-gpt-ad-1" data-dfp="" data-dfp-category="main" data-dfp-path="blog_rightsidebar_330_400">
                                                <div id="google_ads_iframe_/242772937/main/blog_rightsidebar_330_400_0__container__">
                                                    <img src={data && data.sidebar_image ? data.sidebar_image[0].url : ''} atl=''/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className='SidebarAccordion'>
                                        <div className='preview-links'>
                                            <h3 className="heading--5 accordion-link" tabIndex="0" aria-expanded="false" aria-controls="Accordion27">
                                                <svg className="icon icon--fill-primary icon--size-tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M31 18h-3.59L26 41.59A1.5 1.5 0 0 1 24.5 43h-.09A1.5 1.5 0 0 1 23 41.41l1.5-25A1.5 1.5 0 0 1 26 15h3l-7.56-9.68L14 15h3a1.5 1.5 0 0 1 1.5 1.41l1.5 25a1.5 1.5 0 1 1-3 .18L15.59 18H12a2 2 0 0 1-1.64-3.15L19.44 3a2.48 2.48 0 0 1 2-1 2.51 2.51 0 0 1 2 1l9.15 11.74a2 2 0 0 1 .18 2.13A2 2 0 0 1 31 18zm2.72 5A1.5 1.5 0 0 0 32 24.24l-3 17A1.5 1.5 0 0 0 30.24 43h.26a1.5 1.5 0 0 0 1.5-1.24l3-17A1.5 1.5 0 0 0 33.76 23zM12 29.25a1.5 1.5 0 1 0-3 .49l2 12A1.5 1.5 0 0 0 12.5 43h.25A1.5 1.5 0 0 0 14 41.25z"></path></svg>
                                                Mới nhất
                                            </h3>
                                            <div className='accordion-content'>
                                                <Link href="/blog/trending-products">
                                                    <a><h4 className="link__title">Top Trending Product to Sell in 2020 (Updated Annually)</h4></a>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </section>
                    </main>    
                    <section className="section footer-signup background-light">
                        <FormStyle2 form_id={data.form_id} />
                    </section>                  
                    <Footer />
                </div>
            </div>
            <style jsx>{`
                .blog__header--blog {
                    background-size: cover;
                    background-image: url(${data && data.cover_image ? data.cover_image[0].url : ''});
                }
                .breadcrumbs {
                    border-bottom: 1px solid #dfe3e8;
                    margin-bottom: 0.9375em;
                }
                .breadcrumbs__item {
                    display: inline-block;
                    margin-left: 0 !important;
                    font-size: 1.1em !important;
                }
                .breadcrumbs__link {
                    color: inherit;
                }
                .body-link {
                    color: var(--dar-color-2) !important;
                    text-decoration: underline;
                    -webkit-text-decoration-line: underline;
                    text-decoration-line: underline;
                    -webkit-text-decoration-style: solid;
                    text-decoration-style: solid;
                    -webkit-text-decoration-color: currentColor;
                    text-decoration-color: currentColor;
                    -webkit-text-decoration-skip: ink;
                    text-decoration-skip-ink: auto;
                }
                .breadcrumbs__separator {
                    display: inline-block;
                    padding-left: 15px;
                    padding-right: 15px;
                    vertical-align: middle;
                }

                @media screen and (min-width: 67.5em) {
                    .blog__sidebar {
                        padding-left: 60px !important;
                    }
                }
                .SidebarAccordion {
                    border-top: 1px solid #dfe3e8;
                    margin-top: 1.5em;
                    padding-top: 1.5em;
                }

                @media screen and (min-width: 67.5em) {
                    border-top: none !important;
                    margin-top: none !important;
                    padding-top: none !important;
                }

            `}</style>
        </div>
    )
    
}