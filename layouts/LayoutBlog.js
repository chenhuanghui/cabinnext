import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Announcement from '../components/annoucement/an_style1'

import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'

import fetch from 'node-fetch'

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

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
            data ? currentComponent.setState({blogs:data.response.posts}) : {}
        }).catch((error) => {
            // reject(error);
        });
    }

    render () {
        const {blogs, data} = this.state;
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

                        <section className="section background-lowlight color-white section--tight blog__header blog__header--blog">
                        <div className="grid">
                            <div className="grid__item">
                            <div className="section-heading section-heading--lowlight section-heading--tablet-up-align-left gutter-bottom--reset">
                                <p className="section-heading__heading heading--1">{data.title}</p>
                        </div></div></div></section>

                            <div className="_1sx1020z">
                                <div className="_aov0j6">
                                    {/* blogs listing */}
                                    <div className="_kbiv5c">
                                        <div className="_19iz9mwo">
                                            {
                                                blogs && blogs.map((blog) => (
                                                    <a className="_1xizdrk" key={blog.id} href={blog.short_url} target="_blank" rel="noopener noreferrer">
                                                        <div className="_1xl0u0x" role="presentation">
                                                            <div className="_6lth7f">
                                                                <div className="_6i8igo">
                                                                    <div className="_e296pg">
                                                                        <div className="_hxt6u1e">
                                                                            <div className="_4626ulj">
                                                                                <img className="_91slf2a" aria-hidden="true"src={ blog.photos[0].alt_sizes[2].url}/>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p className="pubDate">
                                                                    <span className="media-date mr-3"><i className="far fa-clock"></i> {
                                                                        blog.date.split(' ')[0]
                                                                    }</span>
                                                                </p>    
                                                                <p className="_1ycij1l">{blog.summary.split('_')[0]}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    
                                                ))
                                            }
                                           
                                        </div>
                                    </div>
                                    {/* #end blogs listing */}
                                </div>
                            </div> 

                            <Back2Top />
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    ._19iz9mwo {
                        // display: grid !important;
                        // flex-wrap: wrap !important;
                        // margin-bottom: -16px !important;
                        // margin-left: -8px !important;
                        // margin-right: -8px !important;
                        // margin-top: -8px !important;
                        // grid-template-columns: repeat(auto-fill, minmax(258px, 1fr)) !important;
                    }
                    ._hxt6u1e { 
                        padding-top: 133.333%;
                    }
                    .pubDate {
                        margin: 0px 0px;
                    }
                    
                `}</style>
            </div>
        )
    }
}