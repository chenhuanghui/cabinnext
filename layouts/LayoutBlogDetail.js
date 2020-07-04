import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Announcement from '../components/annoucement/an_style1'

import Back2Top from '../components/back2top/back2top'
import Footer from '../components/footer/footer'

import fetch from 'node-fetch'
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function BlogDetail () {
    const router = useRouter()
    return <div>{router.query.slug}</div>
} 