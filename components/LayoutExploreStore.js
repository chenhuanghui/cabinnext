import { hotjar } from 'react-hotjar';
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import Head from 'next/head'
import React from 'react';

import Header from './Header'
import ModalForm from './sections/Modal/FormModal';
import ModalVideo from './sections/Modal/VideoModal';
import StepModule from './modules/Step/StepModule';
import StoreListModule from './modules/Store/StoreListModule';
import SignUpFormModuleType1 from './modules/Form/SignUpFormModule_Type1';
import Footer from './Footer'

import StoresSection1 from './sections/Stores/Section1';
import StoresSection2 from './sections/Stores/Section2';
import StoresSection4 from './sections/Stores/Section4';
import StoreSection3 from './sections/Stores/Section3';

const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
      googleAnalytics({
        trackingId: 'UA-168839658-1'
      })
    ]
})

export default class LayoutExploreStores extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            dataHCMStore:[],
            dataHNStore:[],
            dataExploreStoreList:[],
            fav:[]
        }
    }
    
    sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }    

    componentDidMount () {
        hotjar.initialize(1846240, 6);
        analytics.page();

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
            console.log('hcm',storeHCMList);
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
            record.fields.img = record.fields.img[0].url;
            record.fields.section3_img1 = record.fields.section3_img1[0].url;
            record.fields.section3_img2 = record.fields.section3_img2[0].url;

            console.log('data page explore stores list', record.fields);
            currentComponent.setState({dataExploreStoreList:record.fields});
        });

        // load color variable
        base('Color_Table').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {records.forEach(function(record) {
                $(`body`).css(record.get('Name'),record.get('value'));
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
        
        // get page setting
        base('Page_Setting').find('recz4Cz8KvJJaDnW4', function(err, record) {
            if (err) { console.error(err); return; }
            record.fields.img = record.fields[`img`][0].url;
            currentComponent.setState({ fav: record.fields })
        });
    }
    render (){
        const {fav, dataHNStore, dataHCMStore,dataExploreStoreList,dataStepID} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="author" content="CabinFood" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" type="image/png" href={fav.img} />
                    <title>CabinFood | easy to Start, Fast to grow</title>

                    <script src="https://fast.wistia.com/embed/medias/flvkbseogu.jsonp" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7453021.js"></script>                    
                </Head>
                <div className="">
                    <ModalForm />
                    <ModalVideo />
                    <Header />
                    <div id="PageContainer">
                        <main id="Main">
                            <StoresSection1 dataExploreStoreList={dataExploreStoreList}/>
                            <StepModule/>
                            <StoreListModule title={dataExploreStoreList.block1_line1} desc={dataExploreStoreList.block1_line2} dataStore={dataHCMStore}/>
                            <StoreListModule title={dataExploreStoreList.block2_line1} desc={dataExploreStoreList.block2_line2} dataStore={dataHNStore}/>
                            <SignUpFormModuleType1 formID={`recpPldytt9jtAwyJ`}/>
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