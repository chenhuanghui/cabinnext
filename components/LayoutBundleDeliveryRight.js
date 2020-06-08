import Head from 'next/head'
import React from 'react';

import Header from './Header'
import ModalForm from './sections/Modal/FormModal';
import Announcement from './sections/Announcement';
import Hero from './sections/Master/Hero'
import Pillars from './sections/Master/Pillars'
import BackgroundGreen from './sections/Master/BackgroundGreen'
import Support from './sections/Master/Support'
import SignUp from './sections/Master/SignUp'
import Footer from './Footer'
import SignUpFormModuleType1 from './modules/Form/SignUpFormModule_Type1';
// import '../statics/index.css'

export default class LayoutBundleDeliveryRight extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            announcementData: [],
            dataHero: [],
            dataGreen: [],
            dataCategories:[],
            dataPillar: [],
            dataSupport: [],
            dataSignUp: [],
            dataForm: []
        }
      }

    componentDidMount () {
        let currentComponent = this;
        var catList = [];
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('Announcement').find('rech8uFdriXPNBETt', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ announcementData: record.fields })
        });

        base('BundleDelivery_Hero').find('recnvRpQ3YSvEkiTl', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img_src = record.fields[`img_src`][0].url;
            currentComponent.setState({ dataHero: record.fields })
        });

        base('BundleDelivery_GreenBoard').find('recoCx9CKQocUmJos', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataGreen: record.fields })
        });

        var count = 0;
        base('Categories_FB').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {        
                if (count==5) return; // lay 5 item

                record.fields.image = record.fields[`image`][0].url;
                count++;
                catList.push(record.fields);
            });
            // console.log(catList);
            currentComponent.setState({ dataCategories: catList })
        });

        base('BundleDelivery_Pillars').find('recp3KZyYxHHYMxsE', function(err, record) {
            if (err) { console.error(err); return; }
            // console.log('pillar',record);
            record.fields.pil_block1_img_src = record.fields[`pil_block1_img_src`][0].url;
            record.fields.pil_block2_img_src = record.fields[`pil_block2_img_src`][0].url;
            record.fields.pil_block3_img_src = record.fields[`pil_block3_img_src`][0].url;
            record.fields.pil_block4_img_src = record.fields[`pil_block4_img_src`][0].url;

            currentComponent.setState({ dataPillar: record.fields })
        });

        base('BundleDelivery_Support').find('recd7z7DUT1yxUIlO', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img_src = record.fields[`img_src`][0].url;
            currentComponent.setState({ dataSupport: record.fields })
        });

        base('BundleDelivery_SignUp').find('recUU9TALWbOif6YA', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataSignUp: record.fields })
        });

        // get form information
        base('Form_List').find('recUlH3EWGAdbTsPY', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('dataForm', record.fields)
            currentComponent.setState({ dataForm: record.fields })
        });

        // setup layout for page
        base('Color_Table').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {records.forEach(function(record) {
                // console.log('Retrieved', record.get('Name'));
                $(`body`).css(record.get('Name'),record.get('value'));
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    render () {
        const { announcementData, dataHero, dataGreen, dataCategories, dataPillar,dataSupport, dataSignUp, dataForm} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    {/* <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" /> */}
                    <link rel="shortcut icon" type="image/png" href="../statics/fav.png" />
                    <title>All-in-One Delivery Platform For F&B</title>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>
                </Head>

                <div className="page--home">
                    <ModalForm />
                    <Announcement announcementData={announcementData}/>

                    {/* <!-- Header */}
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            <Hero dataHero={dataHero} dataForm={dataForm}/>
                            <BackgroundGreen dataGreen={dataGreen} dataCategories={dataCategories}/>
                            <Pillars dataPillar = {dataPillar}/>
                            <Support dataSupport = {dataSupport}/>
                            {/* <SignUp dataSignUp = {dataSignUp}/> */}
                            <SignUpFormModuleType1 formID={`recpPldytt9jtAwyJ`}/>
                            <div className="grid">
                                <div className="grid__item back-to-top-link-wrapper">
                                    <a className="back-to-top-link link-scroll-to styled-link styled-link--skin-inherit" href="#PageContainer">
                                        Back to top
                                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .marketing-nav.marketing-nav--solid {background-color: #fbf7ed !important;}
                `}</style>
            </div>
        )

    }
}