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

        // segment tracking data start
        // const Analytics = require('analytics-node');
        // const analytics = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');
        // analytics.page({
        //     userId: document && document.cookie ? document.cookie : 'anonymous',
        //     category: 'Knowledge / ',
        //     name: 'Blogs Page',
        //     properties: {
        //       url: '/blogs',
        //       title: 'CabinFood - Blogs Page'
        //     }
        // });
        // segment tracking data end.
        

        // contentful fetching data start
        async function getPosts() {
            const allPosts = await fetchEntries({content_type: 'post'})  // query posts only
            currentComponent.setState({posts:[...allPosts]})
        }
        getPosts()
        // contentful fetching data end

        // get page data from airtable start
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
        
        base('Page_Blog').find('recNyrnDsMGv4ZfEQ', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
        });

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
        // get page data from airtable start
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
                                            // render data from contentful
                                            posts.length > 0 && posts.map((post) => (
                                                <article className="grid__item grid__item--tablet-up-half article--index" key={post.sys.id}>
                                                    <Link href='blogs/[slug]' as={`blogs/${post.sys.id}`} >
                                                        <a className="article--index__image">
                                                            <span className="image lazyload-image">
                                                                <span className="lazyload-image__placeholder">
                                                                    <img className="lazyloaded" src={ post && post.fields.cover ? post.fields.cover.fields.file.url : ''} alt={''} />
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </Link>
                                                    <ul className="article__meta article__meta--primary">
                                                        <li><a href="#">{post && post.fields.collection ? post.fields.collection.fields.name :''}</a></li>
                                                    </ul>
                                                    <h2 className="article--index__title heading--4">
                                                        <Link href='blogs/[slug]' as={`blogs/${post.sys.id}`}>
                                                            <a>{post.fields.title}</a>
                                                        </Link>
                                                    </h2>

                                                    <ul className="article__meta">
                                                        <li>by <a rel="nofollow" href="#">cabinfood</a></li>
                                                        <li><time itemProp="datePublished" dateTime="2020-06-30T03:30:00Z">{post.fields.date.split('T')[0]}</time></li>
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
                                                    <span className="marketing-label marketing-label--hidden visuallyhidden">Tìm kiếm bài viết</span>
                                                    <input className="marketing-input search-form__input" id="SidebarSearch" placeholder="Tìm kiếm bài viết" type="search" name="q"/>
                                                    <span className="marketing-form__messages"></span>
                                                </label>
                                                <button type="submit" className="search-form__submit">
                                                    <span className="visuallyhidden">Tìm kiếm</span>
                                                </button>
                                            </div>
                                            <div className="sidebar-banner gutter-bottom">
                                                <div id="div-gpt-ad-1">
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
                                                    Tổng hợp
                                                </h3>
                                                <div className='accordion-content'>
                                                    { posts.length > 0 && posts.map((post) => (
                                                        <Link href="/blogs/[slug]" as={`blogs/${post.sys.id}`} key={post.sys.id}>
                                                            <a><h4 className="link__title">{post.fields.title}</h4></a>   
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                            <section className="section footer-signup background-light">
                                <FormStyle2 
                                    message = {data.form_message}
                                    input_hint = {data.form_input_hint}
                                    btn_title = {data.form_btn_title}
                                    note = {data.form_note}
                                />
                            </section>                  
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
}

// TUMBLR: api_key=z48gdFrjZK0huw6zLv76lJ9zxKMobRHaKhdhnbwjIsvsrVuKEI
// fetch('https://api.tumblr.com/v2/blog/cabinfood/posts?api_key=z48gdFrjZK0huw6zLv76lJ9zxKMobRHaKhdhnbwjIsvsrVuKEI').then(response => response.json())
// .then(data => {
//     console.log('data blog', data);
//     data ? currentComponent.setState({blogs:data.response}) : {}
// }).catch((error) => {
//     // reject(error);
//     console.log(error);
// });