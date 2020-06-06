import Head from 'next/head'
import React from 'react';

import Header from './Header'
import Footer from './Footer'
import StoresSection1 from './sections/Stores/Section1';
import StoresSection2 from './sections/Stores/Section2';
import StoresSection3 from './sections/Stores/Section3';
import StoresSection4 from './sections/Stores/Section4';

export default class LayoutExploreStores extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            dataHCMStore:[],
            dataHNStore:[],
            dataExploreStoreList:[]
        }
    }
    
    sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }    

    componentDidMount () {
        let currentComponent = this;
        
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        var storeHCMList = [];
        base('Store_List').select({
            filterByFormula: `{location} = "HCM"`
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
        
            records.forEach(function(record) {
                record.fields.image = record.fields.image[0].url;
                storeHCMList.push(record.fields);
            });
            storeHCMList = currentComponent.sortByKey(storeHCMList,"sortID");
            currentComponent.setState({dataHCMStore:storeHCMList})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        var storeHNList = [];
        base('Store_List').select({
            filterByFormula: `{location} = "HN"`
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
        
            records.forEach(function(record) {
                record.fields.image = record.fields.image[0].url;
                console.log(record.fields.image);
                storeHNList.push(record.fields);
            });
            storeHNList = currentComponent.sortByKey(storeHNList,"sortID");
            currentComponent.setState({dataHNStore:storeHNList})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        // load data page
        base('Explore_Store_List').find('recVEvGkcO1yZjJMH', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('data page explore stores list', record);
            currentComponent.setState({dataExploreStoreList:record.fields})
        });

        // load color variable
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
    render (){
        const {dataHNStore, dataHCMStore,dataExploreStoreList} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/shopify-marketing_assets/static/shopify-favicon.png" />
                    <title>CabinFood | easy to Start, Fast to grow</title>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>

                    {/* <link rel="stylesheet" media="all" href="https://cdn.shopify.com/assets2/application-27f5b60dd99d8c77a63c4444ff9042dd5a7b2225582732a1340304589ae1d1c6.css" /> */}
                    {/* Layout CSS start */}
                    {/* <link rel="stylesheet" type="text/css" href="https://cdn.shopify.com/shopifycloud/start-web/assets/baseline/vendors~Home-c144ff8ab3196b4357374c06a86545249f41f619dfa146e457a41da7591aa8f0.css" crossorigin="anonymous" /> */}
                    {/* <link rel="stylesheet" type="text/css" href="https://cdn.shopify.com/shopifycloud/start-web/assets/baseline/Article~CourseBrowse~CourseDetail~Event~Events~Feedback~Home~Learning~LessonDetail~LiveStream~Progre~f5ee6bf8-d808c1892549ebf07e9238c09b3d98ef7b9ebcbc247e2e53d554ca8b0d601386.css" crossorigin="anonymous"/> */}
                    {/* <link rel="stylesheet" type="text/css" href="https://cdn.shopify.com/shopifycloud/start-web/assets/baseline/Article~CourseBrowse~CourseDetail~Event~Events~Feedback~Home~Learning~LessonDetail~LiveStream~Progre~1a00785f-996c8ef04d12c5d058e500a187f4d6518bd01f5327b95c5107be0492b8e6cc5d.css" crossorigin="anonymous"/> */}
                    {/* <link rel="stylesheet" type="text/css" href="https://cdn.shopify.com/shopifycloud/start-web/assets/baseline/vendors~main-9884d212cd3f23e82f058ad1dbb99522b1727e187cadaecb67620e3f0966329a.css" integrity="sha256-mITSEs0/I+gvBYrR27mVIrFyfhh8ra7LZ2IOPwlmMpo=" crossorigin="anonymous"/> */}
                    {/* <link rel="stylesheet" type="text/css" href="https://cdn.shopify.com/shopifycloud/start-web/assets/baseline/main-13b619d52f7196460352b3f8212d9142f84154b7e7af831918f334be36ed9b9b.css" integrity="sha256-E7YZ1S9xlkYDUrP4IS2RQvhBVLfnr4MZGPM0vjbtm5s=" crossorigin="anonymous" /> */}
                    {/* Layout CSS end */}


                    
                </Head>
                <div className="">
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            <StoresSection1 dataExploreStoreList={dataExploreStoreList}/>
                            <StoresSection2 dataExploreStoreList={dataExploreStoreList}/>
                            {/* <StoresSection3 /> */}
                            <StoresSection4 dataHCMStore={dataHCMStore} dataHNStore={dataHNStore}/>
                            
                        </main>
                        <Footer />
                    </div>
                </div>
        <style jsx>{`
            // ._2b5gw img {max-width: none;}
        `}</style>
            </div>
        )
    }
}