import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import ModalForm from '../components/modals/modal_Form';
import Announcement from '../components/annoucement/an_style1'
import $ from 'jquery';
import Link from 'next/link';

export default class LayoutTools extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    convertMdtoHtml(mdString) {
        var md = require('markdown-it')();
        var result = md.render(mdString);
        return result;
    }

    componentDidMount () {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
        
        base('Page_Tools').find('recNWWNKNwbKDV6r0', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
            console.log('data:', record.fields)
        });

        base('Color').select({ view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {$(`body`).css(record.get('name'),record.get('value'));});
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        $('.input-format-number').keyup(function(event) {
            // skip for arrow keys
            if(event.which >= 37 && event.which <= 40) return;
          
            // format number
            $(this).val(function(index, value) {
              return value
              .replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              ;
            });
            
            $(this).attr('data',$(this).val().replace(/,/g,''));
        });

        $('.marketing-input').keyup(function(event) {
            if($(this).val()) {
                $(this).parent().find('.marketing-label--in-field').css("opacity",1);
                $(this).parent().find('.error').html('');
            } else {
                $(this).parent().find('.marketing-label--in-field').css("opacity",0);
            }
        })

        $(`#calculate_action`).click(function(){
            console.log('calculating');
            
            var isValid = true;
            var inputs = $('.marketing-input')
            for (var i=0; i<inputs.length; i++ ) {
                if (!$(inputs[i]).val()) {
                    $(inputs[i]).parent().find('.error').html('Đây là thông tin bắt buộc');
                    isValid = false;
                    console.log('hhhh');
                }
            }

            if (!isValid) return;
            
            var invest = parseInt($('#invest').attr('data'),10)
            var depreciation = parseInt($('#depreciation').attr('data'),10)
            var rent = parseInt($('#rent').attr('data'),10)
            var human = parseInt($('#human').attr('data'),10)
            var engergy = parseInt($('#engergy').attr('data'),10)
            var days_of_work = parseInt($('#days_of_work').attr('data'),10)
            var marketing = parseInt($('#marketing').attr('data'),10)
            var product_name = $('#product_name').val()
            var cogs = parseInt($('#cogs').attr('data'),10)
            var package_fee = parseInt($('#package_fee').attr('data'),10)
            var profit_per_product = parseInt($('#profit_per_product').attr('data'),10)
            console.log('invest:',invest, 'depreciation:',depreciation, 'rent:', rent,'human:', human, 'energy: ', engergy, 'profit:',profit_per_product);
            
            var state_fee = rent + human + engergy;
            $('#StateFee').html( state_fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            var spot_balancing_month = Math.floor((rent + human + engergy)/profit_per_product)
            $('#SpotBalancingMonth').html(spot_balancing_month.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            
            var spot_balancing_date =  Math.floor(spot_balancing_month/days_of_work);
            $('#SpotBalancingDate').html(spot_balancing_date.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            
            var depreciation_month = Math.floor(invest/depreciation);
            $('#DepreciationMonth').html(depreciation_month.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );

            var depreciation_product = Math.floor(depreciation_month/spot_balancing_month);
            $('#DepreciationProduct').html(depreciation_product.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            var price_estimate = Math.floor((cogs + package_fee + depreciation_product + profit_per_product)/(1-marketing/100))
            $('#PriceEstimate').html(price_estimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            
            var price_procedue = cogs + package_fee + depreciation_product
            $('#PriceProcedue').html(price_procedue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

            $('#invest_ammount').html(invest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#depriciation_time').html(depreciation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#profit_estimate').html(profit_per_product.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#productName').html(product_name.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            $(window).scrollTop($('#value_calculated').offset().top);
        })
        
    }

    render () {
        const {data} = this.state;
        return (
            <div className="layout">
                <Head>
                    <meta  property="og:title" content="CabinFood Blogs" />
                    <meta  property="og:image" content={data && data.cover ? data.cover[0].url : ''} />
                    <title>{ data && data.name ? data.name : 'CabinFood Free Tools'}</title>
                </Head>

                <div className="page--home">
                    <ModalForm />
                    <Nav />
                    <div id="PageContainer">
                        <main id="Main">
                            <header className="hero background-light color-ink">
                                <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-half">
                                        <div className="hero__inner">
                                            <div className="section-heading section-heading--left section-heading--tight">
                                                <p className="section-heading__kicker heading--5">{data.headline}</p>
                                                <h1 className="section-heading__heading heading--jumbo">{data.message}</h1>
                                                <p className="section-heading__subhead heading--2">{data.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half">
                                        <div className="hero__inner">
                                            <img className="image hero__image" sizes="100vw" src={data && data.cover && data.cover[0] ? data.cover[0].url : ''}/>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <section  className="section section--border">
                                <div  className="grid">
                                    <div  className="grid__item">
                                        <div  className="section-heading">
                                            <h2  className="section-heading__heading heading--1">{data.block1_headline}</h2>
                                            <p  className="section-heading__subhead heading--2">{data.block1_desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="page-width">
                                    <ul  className="grid grid--layout-mode grid--equal-height">
                                        <li  className="grid__item grid__item--tablet-up-third tools-grid-item">
                                            <div  className="block tools-block text-center gutter-bottom--reset ">
                                                <svg  className="icon icon--size-small icon--fill-ink block__icon" aria-hidden="true" focusable="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792"><path d="M581.2 196.4H30.8c-12.3 0-22.3 10-22.3 22.3v431.4c0 12.3 10 22.3 22.3 22.3h538.3c19 0 34.4-15.3 34.4-34.4V218.8c0-12.4-10-22.4-22.3-22.4zm-7.4 441.7c0 2.5-2.1 4.6-4.6 4.6h-531V345.2h535.5v292.9zm0-322.7H38.2v-29.8h535.5v29.8zm0-59.5H38.2v-29.8h535.5v29.8z"></path><path d="M544 434.4c-8.2 0-14.9-6.7-14.9-14.9v-22.3c0-4.1-3.3-7.4-7.4-7.4h-37.2c-8.2 0-14.9-6.7-14.9-14.9s6.7-14.9 14.9-14.9h37.2c20.5 0 37.2 16.7 37.2 37.2v22.3c0 8.3-6.7 14.9-14.9 14.9zm-22.3 194.2h-37.2c-8.2 0-14.9-6.7-14.9-14.9s6.7-14.9 14.9-14.9h37.2c4.1 0 7.4-3.3 7.4-7.4v-22.3c0-8.2 6.7-14.9 14.9-14.9s14.9 6.7 14.9 14.9v22.3c0 20.5-16.7 37.2-37.2 37.2zm-394.2 0H90.3c-20.5 0-37.2-16.7-37.2-37.2v-22.3c0-8.2 6.7-14.9 14.9-14.9s14.9 6.7 14.9 14.9v22.3c0 4.1 3.3 7.4 7.4 7.4h37.2c8.2 0 14.9 6.7 14.9 14.9s-6.7 14.9-14.9 14.9zM68 450.1c-8.2 0-14.9-6.7-14.9-14.9V398c0-20.5 16.7-37.2 37.2-37.2h37.2c8.2 0 14.9 6.7 14.9 14.9s-6.7 14.9-14.9 14.9H90.3c-4.1 0-7.4 3.3-7.4 7.4v37.2c0 8.2-6.7 14.9-14.9 14.9zm238-89.3c-73.8 0-133.9 60.1-133.9 133.9S232.2 628.6 306 628.6s133.9-60.1 133.9-133.9S379.8 360.8 306 360.8zm14.9 236.8c-4.9.9-9.8 1.2-14.9 1.2s-10-.3-14.9-1.2c-50.4-7.1-89.2-50.6-89.2-102.9s38.8-95.8 89.2-102.9c4.9-.9 9.8-1.2 14.9-1.2s10 .3 14.9 1.2c50.4 7.1 89.2 50.6 89.2 102.9s-38.8 95.8-89.2 102.9z"></path><path d="M348.4 549.9c-2.8 5.9-7.7 10.4-14.4 13.7-4 1.8-8.3 3.1-13.2 3.9.1.3.1.6.1.9v29.3c-4.9.9-9.8 1.2-14.9 1.2s-10-.3-14.9-1.2v-29.3c0-.7 0-1.5.1-2.2-3.3-.7-6.2-1.8-9.1-3-7.4-3.4-12.6-8-15.5-14-2.8-5.8-5.4-13.7-5.4-25.4H293c0 18.1 6.4 19.3 13.1 19.3 3 0 5.1-.7 6.2-2.2 1.2-1.6 1.8-4.8 1.8-9.8 0-6.7-.7-11-2.4-12.8-6-6.4-15.3-13.4-25-19.2-12.3-7.1-18.9-9.7-21.6-15.5-2.7-5.8-4-12.8-4-20.8 0-11.3 1.5-19.8 4.3-25.1 3-5.4 7.7-9.5 14.7-12.5 3.6-1.5 6.8-3 10.9-3.9-.1-.3-.1-.7-.1-1v-28.4c4.9-.9 9.8-1.2 14.9-1.2s10 .3 14.9 1.2v28.4c0 .6 0 1.2-.1 1.8 2.4.6 4.8 1.5 7 2.4 6.2 2.4 12.3 5.2 15.8 9.1 3.3 4 5.4 7.6 6.1 11 .7 3.4 1 8.6 1 15.8v4h-32l.1-3.4c0-16.8-6.4-14.9-12.6-14.9-2.4 0-4.2.7-5.2 2.4-1.2 1.6-1.8 4-1.8 7.3 0 4.3.3 7.6.9 9.7.6 1.9 2.2 4.2 5.2 6.7 3 2.4 4.5 4.2 13.5 8.8 12 6.1 24.5 13.8 28.3 19.2 3.9 5.5 3.6 13.2 3.6 23.7.1 5.7.9 20-2.1 26z"></path></svg>
                                                </svg>
                                                <h3  className="block__heading heading--4">Giá bán sản phẩm</h3>
                                                <p  className="block__content hide--mobile">Tìm ra giá bán hợp lý cho sản phẩm dễ dàng nhất.</p>
                                                <p  className="block__cta"><Link href="/tools/baseprice"><a>Tính giá bán</a></Link>
                                                </p>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </section>
                            
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .background-light {
                        background-color: #f4f6f8;
                    }
                    .heading--jumbo {
                        font-size: 3.5em !important;
                    }
                    .section-heading__heading {
                        font-weight: bold !important;
                    }
                    .grid--layout-mode .grid__item {
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                    }
                    @media screen and (min-width: 46.875em) {
                        .tools-block {
                            border-right: 1px solid #dfe3e8;
                            padding: 3.75em 1.25em;
                        }
                    }
                    @media screen and (max-width: 46.8125em) {
                        .tools-block {
                            text-align: left;
                            padding: 1.875em 0;
                        }
                    }

                    .tools-block {
                        height: 100%;
                        border-bottom: 1px solid #dfe3e8;
                    }
                    @media screen and (max-width: 46.8125em) {
                        .tools-block .icon {
                            float: left;
                            margin-right: 1.875em;
                        }                        
                    }
                    .block__icon {
                        margin-bottom: 0.9375em;
                    }
                    .icon--size-small {
                        width: 45px;
                        height: 45px;
                    }
                    @media screen and (min-width: 67.5em) {
                        .summary-grid__heading {
                            font-size: 1.225em;
                            margin-bottom: 0.6666666667em;
                        }
                        .block__content {
                            font-size: 1em;
                        }
                    }

                        
                        
                `}</style>
            </div>
        )
    }
}