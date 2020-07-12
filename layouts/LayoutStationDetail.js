import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/nav/nav';

export default function BlogDetail () {
    const router = useRouter();
    const [stationID, setStationID] = useState(null);


    useEffect(() => {
        // segment tracking data start
        const Analytics = require('analytics-node');
        const analytics = new Analytics('DBYMGHOI7C9Iu04GC3VuhbnycYZPaRyC');
        analytics.page({
            userId: document && document.cookie ? document.cookie : 'anonymous',
            category: 'Station Information /',
            name: 'Station' + router.query.stationID,
            properties: {
              url: '/stations/' + router.query.stationID,
              title: 'CabinFood - Station Detail' + router.query.stationID
            }
        });
        //set slug
        setStationID(router.query.stationID);        
        console.log('log', router.query.stationID);
        
    },[stationID])
    

    return (
        <div className="layout">
            <Head>
                <title>CabinFood Station Detail</title>    
            </Head>

            <div className="page--home">
                <Nav />
                <p>stationd detail {router.query.stationID}</p>
            </div>
        </div>
        
    )
    
}