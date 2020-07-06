import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Announcement from '../components/annoucement/an_style1'

import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'

import fetch from 'node-fetch'

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import Link from 'next/link'

const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
      googleAnalytics({
        trackingId: 'UA-168839658-1'
      })
    ]
})

export default class LayoutBlog extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[],
            blogs:[]
        }
    }
    
    async getStaticProps(context) {
        return {
          props: {
          }, // will be passed to the page component as props
        }
    }

    componentDidMount () {
        analytics.page();
        
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
        
        base('Page_Blog').find('recNyrnDsMGv4ZfEQ', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('page data:', record.fields);
            currentComponent.setState({data:record.fields})
        });

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
        
        // TUMBLR: api_key=z48gdFrjZK0huw6zLv76lJ9zxKMobRHaKhdhnbwjIsvsrVuKEI
        fetch('https://api.tumblr.com/v2/blog/cabinfood/posts?api_key=z48gdFrjZK0huw6zLv76lJ9zxKMobRHaKhdhnbwjIsvsrVuKEI').then(response => response.json())
        .then(data => {
            console.log('data blog', data);
            data ? currentComponent.setState({blogs:data.response}) : {}
        }).catch((error) => {
            // reject(error);
        });
    }

    render () {
        const {blogs, data} = this.state;
        const pids = ['id1', 'id2', 'id3']
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
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Chia Sẻ Kiến Thức</title>    
                    }
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
                </Head>

                <div className="page--home">
                    <Nav />
                    <div id="PageContainer">
                        <main id="Main blogs-page">
                            <section className="section background-lowlight color-white section--tight blog__home-header blog__header--blog">
                                <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-two-thirds">
                                        <div className="section-heading section-heading--lowlight section-heading--tablet-up-align-left gutter-bottom">
                                            <h1 className="section-heading__heading heading--jumbo">{data.headline}</h1>
                                            <p className="section-heading__subhead heading--3 blog__subhead--blog" tag="p">{data.desc}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>

                            <section className='section section--tight'>
                                <div className='grid'>
                                    <div className='grid__item grid__item--desktop-up-two-thirds'>
                                        <div className='grid grid--equal-height'>
                                        {
                                            blogs && blogs.posts && blogs.posts.map((post) => (
                                                <article className="grid__item grid__item--tablet-up-half article--index" key={post.id}>
                                                    <Link href='blogs/[slug]' as={`blogs/${post.id_string}`} >
                                                        <a className="article--index__image">
                                                            <span className="image lazyload-image">
                                                                <span className="lazyload-image__placeholder">
                                                                    <img data-sizes="100vw" src={ post.photos[0].alt_sizes[2].url} alt="" className=" lazyloaded"/>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </Link>
                                                    <h2 className="article--index__title heading--4">
                                                        <Link href='blogs/[slug]' as={`blogs/${post.id_string}`} key={post.id}>
                                                            <a>{post.summary.split('_')[0]}</a>
                                                        </Link>
                                                    </h2>

                                                    <ul className="article__meta">
                                                        <li>by <a rel="nofollow" href="/blog/search?link_search=true&amp;q=Shuang+Esther+Shan">{blogs.blog.name}</a></li>
                                                        <li><time itemProp="datePublished" dateTime="2020-06-30T03:30:00Z">{post.date.split(' ')[0]}</time></li>
                                                    </ul>
                                                </article>
                                            ))
                                        }   
                                            
                                            
                                        </div>
                                    </div>
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
                                                        <img src={data && data.sidebar_image ? data.sidebar_image[0].url : ''} atl=''/>
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

                            <Back2Top />
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .blog__header--blog {
                        background-size: cover;
                        background-image: url(${data && data.cover_image ? data.cover_image[0].url : ''});
                    }
                    article .lazyload-image {
                        max-width: 444px; max-height: 188px;
                    }
                    .lazyload-image__placeholder{
                        padding-bottom: 42.3423%
                    }
                    @media screen and (min-width: 67.5em) {
                        .blog__sidebar {
                            padding-left: 60px !important;
                        }
                    }
                `}</style>
            </div>
        )
    }
}