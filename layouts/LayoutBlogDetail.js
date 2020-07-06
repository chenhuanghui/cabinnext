import Head from 'next/head'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import Link from 'next/link'

export default function BlogDetail () {
    const router = useRouter();
    const [content, setContent] = useState([]);
    const [related, setRelated] = useState([]);
    const [slug, setSlug] = useState(router.query.slug);

    
    console.log('slug:',router.query.slug)
    useEffect(() => {

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
                                        <p className="section-heading__heading heading--1">CabinFood Blog</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='section section--tight'>
                            <div className='grid'>
                                <article className='grid__item grid__item--desktop-up-two-thirds'>
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
                                                <span className="marketing-label marketing-label--hidden visuallyhidden">Search articles</span>
                                                <input className="marketing-input search-form__input" id="SidebarSearch" placeholder="Search articles" type="search" name="q"/>
                                                <span className="marketing-form__messages"></span>
                                            </label>
                                            <button type="submit" className="search-form__submit">
                                                <span className="visuallyhidden">Search</span>
                                            </button>
                                        </div>
                                        <div className="sidebar-banner gutter-bottom">
                                            <div id="div-gpt-ad-1" data-dfp="" data-dfp-category="main" data-dfp-path="blog_rightsidebar_330_400">
                                                <div id="google_ads_iframe_/242772937/main/blog_rightsidebar_330_400_0__container__">
                                                    {/* <img src={data && data.sidebar_image ? data.sidebar_image[0].url : ''} atl=''/> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className='SidebarAccordion'>
                                        <div className='preview-links accordion-item--mobile'>
                                            <h3 className="heading--5 accordion-link" tabIndex="0" aria-expanded="false" aria-controls="Accordion27">
                                                {/* <svg className="icon icon--fill-primary icon--size-tiny" aria-hidden="true" focusable="false"> <use xlink:href="#spot-boost"></use> </svg> */}
                                                Popular
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
                    <Footer />
                </div>
            </div>
            
        </div>
    )
    
}