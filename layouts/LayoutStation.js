import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Announcement from '../components/annoucement/an_style1'
import SectionSignUp from '../components/sections/section_type_5'
import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'
import ModalForm from '../components/modals/modal_Form';
import ModalVideo from '../components/modals/modal_Video';

// import Analytics from 'analytics'
// import googleAnalytics from '@analytics/google-analytics'

// const analytics = Analytics({
//     app: 'awesome-app',
//     plugins: [
//       googleAnalytics({
//         trackingId: 'UA-168839658-1'
//       })
//     ]
// })

export default class LayoutIndex extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
      }

    componentDidMount () {
        // analytics.page();
        
        // segment tracking data
        const Analytics = require('analytics-node');
        const client = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');
        client.page({
            userId: document.cookie,
            category: 'Brand Information /',
            name: 'Stations Page',
            properties: {
              url: '/stations',
              title: 'CabinFood - Explore Stations'
            }
        });

        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Page_Stations').find('rec4f3b4Ua9yH1qbl', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
        });

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    render () {
        const {data} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href='/assets/images/fav.png' />
                    <script src="https://fast.wistia.com/embed/medias/flvkbseogu.jsonp" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                    {
                        data.name
                        ? <title>{data.name}</title>
                        : <title>Nền Tảng Delivery Chuyên Nghiệp Cho Kinh Doanh Món Ăn Thức Uống - Khám Phá Trạm Kinh Doanh</title>    
                    }
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
                </Head>

                <div className="page--home">
                    <ModalForm />
                    <ModalVideo />
                    <div id="Announcements">
                        <div className="covid-19-announcement-banner"> 
                            <section className="announcement js-announcement is-active">
                                <div className="announcement__content">
                                    {data.annoucement_line1} 
                                    <a className="body-link" href='#'> {data.annoucement_line2}</a>
                                </div>
                            </section>
                        </div>
                    </div>

                    <Nav />
                    
                    <div id="PageContainer">
                        <main id="Main">
                            {/* <SectionHero section_id ={data.section1} /> */}
                            <section className="section section--padding-top-only homepage-hero" id="Hero">
                                <div className="grid grid--equal-height grid--vertically-centered">
                                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half">
                                        <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
                                            <h1 className="section-heading__heading heading--jumbo color-green-80 homepage-hero__heading gutter-bottom">{data.sec1_title}</h1>
                                        </div>
                                        <div className="homepage-hero__signup">
                                            <div className="js-signup-inline marketing-form--inline">
                                                <div className="marketing-input-wrapper marketing-input-button-pair">
                                                    <div className="marketing-input-button-pair__field-wrapper">
                                                        <input placeholder={data.sec1_form_data_input_hint} className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                                                        <button className="marketing-button marketing-form__button marketing-input-button-pair__button">{data.sec1_form_data_btn_title}</button>
                                                    </div>
                                                </div>
                                                <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">{data.sec1_form_data_note}</p>
                                            </div>                    
                                        </div>
                                    </div>
                                </div>
                                <div className="picture--cover section--help__picture">
                                    {
                                        data && data.sec1_image
                                        ? <img className="image" src={data.sec1_image[0].url} />
                                        : ''
                                    }
                                </div>
                            </section>  
                            
                            {/* step section */}
                            <div className="A0_Wj">
                                <section className="_3dkyZ">
                                    <div className="xCnWT">
                                        <div className="_1YJNz">
                                            <div className="_2w12M">
                                                <div className="_24BiD _1osS7"><h4 className="oaimY _3ZtUV">{data.step_title}</h4></div>
                                                <div className="_2OXun">
                                                    <div className="_1F9Hq _3zwi9"><img aria-hidden="true" alt="1" src="https://cdn.shopify.com/shopifycloud/start-web/assets/25a65837ca1ae46a3d33839f3d54924b.svg" /></div>
                                                    <div className="_3cHUR _3zwi9">{data.step1}</div>
                                                    <div className="a6STt _3zwi9"><div className="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div></div>

                                                    <div className="_1F9Hq _3TUx6"><img aria-hidden="true" alt="2" src="https://cdn.shopify.com/shopifycloud/start-web/assets/3f805a9d31c193f7c49b58965d85072f.svg" /></div>
                                                    <div className="_3cHUR _3TUx6">{data.step2}</div>
                                                    <div className="a6STt _3TUx6"><div className="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div></div>

                                                    <div className="_1F9Hq _31X8p"><img aria-hidden="true" alt="3" src="https://cdn.shopify.com/shopifycloud/start-web/assets/c214e4562ee8dbc175cd4b3a9c525d2b.svg" /></div>
                                                    <div className="_3cHUR _31X8p">{data.step3}</div>
                                                    <div className="a6STt _31X8p"><div className="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div></div>

                                                    <div className="_1F9Hq _3gPeS"><img aria-hidden="true" alt="4" src="https://cdn.shopify.com/shopifycloud/start-web/assets/6654ea59e4193d3accd86b88213c48ab.svg" /></div>
                                                    <div className="_3cHUR _3gPeS">{data.step4}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div> {/* #end step section */}

                            {/* station listing section */}
                            <div className="_1sx1020z">
                                <div className="_aov0j6">
                                    <div className="_115dvcs">
                                        <div className="_1ahen39n">
                                            <div className="_1jhv5oh">
                                                <h3 className="_1mafdrow"><div>{data.station1_title}</div></h3>
                                                <div className="_2glt9f">{data.station1_desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_kbiv5c">
                                        <div className="_19iz9mwo">
                                            { data && data.station1_data && data.station1_data.map((p, index) => (
                                                <div className={`_1xizdrk ${data && data.station1_data_is_available[index] ===true ? 'video-modal ' : ''}`}  key = {p.toString()}>
                                                    <div className="_1xl0u0x" role="presentation">
                                                        <div className="_6lth7f">
                                                            <div className="_6i8igo">
                                                                <div className="_e296pg">
                                                                    <div className="_hxt6u1e station_image">
                                                                        <div className="_4626ulj">
                                                                            {
                                                                                data.station1_data_image
                                                                                ? <img className="_91slf2a" aria-hidden="true"src={ data.station1_data_image[index].url}/>
                                                                                : ''
                                                                            }
                                                                            
                                                                            <div className="_10xjrv2u"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="_1ycij1l">{ data.station1_data_name[index]}</div>
                                                            <div className="_1qusvl7">{ data.station1_data_addr[index]}</div>
                                                            <div className="_8fcvqx">
                                                                <ul className="_11hau3k">
                                                                    <li className="_g86r3e"><span>Tình trạng:</span> { data.station1_data_status[index]}</li>
                                                                    <li className="_g86r3e"><span>Loại cabin:</span> { data.station1_data_type[index]} 
                                                                        (<span className="_1cfjn4v">
                                                                            <svg className="star-icon" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></svg>
                                                                        </span>)
                                                                    </li>
                                                                    <li className="_g86r3e"><span>Bàn giao:</span> { data.station1_data_release_date[index]}</li>
                                                                    <li className="_g86r3e"><span>Thời gian làm việc:</span> { data.station1_data_time[index]}</li>
                                                                    <li className="_g86r3e concept"><span>{ data.station1_data_concept[index]}</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                            
                                                        <div className="_1lso56r">
                                                            <div className="_1vl7zve8 ready_for_sale">{data.station1_data_status[index]}</div>
                                                        </div>
                                                    </div>
                                                </div>                                                    
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div> {/* #end station listing section */}

                           {/* station listing section */}
                           <div className="_1sx1020z">
                                <div className="_aov0j6">
                                    <div className="_115dvcs">
                                        <div className="_1ahen39n">
                                            <div className="_1jhv5oh">
                                                <h3 className="_1mafdrow"><div>{data.station2_title}</div></h3>
                                                <div className="_2glt9f">{data.station2_desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_kbiv5c">
                                        <div className="_19iz9mwo">
                                            { data && data.station2_data && data.station2_data.map((p, index) => (
                                                <div className="_1xizdrk video-modal" key = {p.toString()}>
                                                    <div>
                                                        <div className="_1xl0u0x" role="presentation">
                                                            <div className="_6lth7f">
                                                                <div className="_6i8igo">
                                                                    <div className="_e296pg">
                                                                        <div className="_hxt6u1e station_image">
                                                                            <div className="_4626ulj">
                                                                                {
                                                                                    data.station2_data_image
                                                                                    ? <img className="_91slf2a" aria-hidden="true"src={ data.station2_data_image[index].url}/>
                                                                                    : ''
                                                                                }
                                                                                
                                                                                <div className="_10xjrv2u"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="_1ycij1l">{ data.station2_data_name[index]}</div>
                                                                <div className="_1qusvl7">{ data.station2_data_addr[index]}</div>
                                                                <div className="_8fcvqx">
                                                                    <ul className="_11hau3k">
                                                                        <li className="_g86r3e"><span>Tình trạng:</span> { data.station2_data_status[index]}</li>
                                                                        <li className="_g86r3e"><span>Loại cabin:</span> { data.station2_data_type[index]} 
                                                                            (<span className="_1cfjn4v">
                                                                                <svg className="star-icon" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></svg>
                                                                            </span>)
                                                                        </li>
                                                                        <li className="_g86r3e"><span>Bàn giao:</span> { data.station2_data_release_date[index]}</li>
                                                                        <li className="_g86r3e"><span>Thời gian làm việc:</span> { data.station2_data_time[index]}</li>
                                                                        <li className="_g86r3e concept"><span>{ data.station2_data_concept[index]}</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                
                                                            <div className="_1lso56r">
                                                                <div className="_1vl7zve8 ready_for_sale">{data.station2_data_status[index]}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                    
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div> {/* #end station listing section */}

                            <SectionSignUp section_id={data.section_sign_up} />

                            <Back2Top />
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }
}