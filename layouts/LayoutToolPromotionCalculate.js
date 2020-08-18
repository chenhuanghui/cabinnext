import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import ModalForm from '../components/modals/modal_Form';
import Announcement from '../components/annoucement/an_style1'
import $ from 'jquery';
import Link from 'next/link';

export default class LayoutToolBasePrice extends React.Component {
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
        
        base('Page_Tools_BasePrice').find('recaaYjfeS0fnuKPh', function(err, record) {
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
            var promo_code =  $('#promote_code_input').val().toUpperCase()
            base('Promotion').select({
                filterByFormula: `code = "${promo_code}"`,
                maxRecords : 1
            }).eachPage(function page(records, fetchNextPage) {
                if (records.length === 0) {
                    alert('MÃ ƯU ĐÃI KHÔNG TỒN TẠI')
                    return
                }
                
                console.log('code:', records[0].fields)
                var res = records[0].fields
                console.log ('res: ', res.code)

                var code = res.code
                var value_required = res.total_bill_required
                var billValued = parseInt($(`#bill_value_input`).attr(`data`))
                if (billValued < value_required ) {
                    alert(`Chỉ áp dụng cho hóa đơn từ ${value_required.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ`)
                    return;
                }


                
                var noBills = parseInt($(`#no_bills`).attr(`data`))
                var total_revenue = billValued * noBills
                var total_discount = res.max_discount * noBills
                var channel_discount = total_discount * res.channel_rate / 100
                var brand_discount = total_discount * res.brand_rate / 100
                var channel_com = parseInt($(`#channel_commision`).attr(`data`)) / 100

                var return_from_channel = total_revenue - (channel_com*total_revenue) - brand_discount

                $(`#promotion_code`).html(code)
                $(`#sell-partner`).html(res.sell_channel)
                $(`#max-discount`).html(res.max_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#value-required`).html(res.total_bill_required.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#sell-channel`).html(res.sell_channel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#channel-rate`).html(res.channel_rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#brand-rate`).html(res.brand_rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

                $(`#SpotPromoCode`).html(code)
                $(`#SpotBillValued`).html(billValued.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#SpotNoBill`).html(noBills.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#SpotRevenue`).html(total_revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#SpotDiscount`).html(total_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#SpotGrab`).html(channel_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#SpotBrand`).html(brand_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#SpotCommisionTotal`).html((channel_com*total_revenue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                $(`#ReturnFromChannel`).html(return_from_channel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            }, function done(error) {
                if (err) { console.error(err); return; }
            });


          
        })
        
    }

    render () {
        const {data} = this.state;
        return (
            <div className="layout">
                <Head>
                    <title> Promotion Calculate | CabinFood Free Tools</title>
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
                                                <p className="section-heading__kicker heading--5">Công cụ miễn phí</p>
                                                <h1 className="section-heading__heading heading--jumbo">Hiểu rõ về mã ưu đãi</h1>
                                                <p className="section-heading__subhead heading--2">Nắm bắt thông số chính xác của các chương trình ưu đãi</p>
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

                            <section className="section section--border" id="ToolContent">
                                <div className="grid">
                                    <div className="grid grid--equal-height">
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <div id="BusinessLoanCalculatorForm">
                                                <div className="form-section">
                                                    <div className="form-header">
                                                        <h2 className="form-header__heading heading--3">Nhập thông tin</h2>
                                                    </div>
                                                    <label className="marketing-input-wrapper">
                                                        <span className="marketing-label marketing-label--in-field marketing-label--floating">Mã ưu đãi (*)</span>
                                                        <input type="text" id="promote_code_input" data="" placeholder="Mã ưu đãi"   className="marketing-input"/>
                                                        <ul className="marketing-form__messages validate_message" id="m_invest">
                                                            <li className="error parsley-required"></li>
                                                        </ul>
                                                        <span className="marketing-form__messages"></span>
                                                    </label>

                                                    <label className="marketing-input-wrapper">
                                                        <span className="marketing-label marketing-label--in-field marketing-label--floating">Giá trị hóa đơn chưa giảm (*)</span>
                                                        <input type="text" id="bill_value_input" data="" placeholder="Giá trị hóa đơn chưa giảm"   className="marketing-input input-format-number"/>
                                                        <ul className="marketing-form__messages validate_message" id="m_invest">
                                                            <li className="error parsley-required"></li>
                                                        </ul>
                                                        <span className="marketing-form__messages"></span>
                                                    </label>

                                                    <label className="marketing-input-wrapper">
                                                        <span className="marketing-label marketing-label--in-field marketing-label--floating">Số lượng hóa đơn (*)</span>
                                                        <input type="text" id="no_bills" data="" placeholder="Số lượng hóa đơn"   className="marketing-input input-format-number"/>
                                                        <ul className="marketing-form__messages validate_message" id="m_invest">
                                                            <li className="error parsley-required"></li>
                                                        </ul>
                                                        <span className="marketing-form__messages"></span>
                                                    </label>

                                                    <label className="marketing-input-wrapper">
                                                        <span className="marketing-label marketing-label--in-field marketing-label--floating">Hoa hồng bán hàng của kênh (%)</span>
                                                        <input type="text" id="channel_commision" data="" placeholder="Hoa hồng bán hàng của kênh (%)"   className="marketing-input input-format-number"/>
                                                        <ul className="marketing-form__messages validate_message" id="m_invest">
                                                            <li className="error parsley-required"></li>
                                                        </ul>
                                                        <span className="marketing-form__messages"></span>
                                                    </label>
                                                    
                                                </div>
                                                <div className="calculate_btn form-section-submit" id="calculate_action">Tính toán</div>
                                            </div>
                                        </div>
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <div className="form-section" id="value_calculated">
                                                <div className="form-header">
                                                    <h2 className="heading--3">Tìm ra những con số ý nghĩa</h2>
                                                </div>
                                                <div className="marketing-markdown">
                                                    {/* <div dangerouslySetInnerHTML={{__html: data && data.block2_desc ? this.convertMdtoHtml(data.block2_desc): ''}}/> */}
                                                </div>
                                            </div>
                                            <div className="summary-grid">
                                                <div className="summary-grid__items summary-grid__items--divider">
                                                    <p id="SummaryHeading" className="summary-grid__heading">
                                                        Chương trình giảm giá theo mã <span id="promotion_code"></span>,
                                                        được tổ chức bởi <span id="sell-partner"></span>, 
                                                        sẽ giảm tối đa <span id="max-discount"></span>  đ,  
                                                        được áp dụng cho hóa đơn từ <span id="value-required"> </span>đ. 
                                                        Trong đó, <span id="sell-channel"></span> tài trợ <span id="channel-rate"> </span> % trên phần giảm giá, nhãn hàng tài trợ <span id="brand-rate"></span> % trên phần giảm giá
                                                    </p>
                                                </div>
                                                <div className="grid-container grid-container--halves summary-grid__items summary-grid__items--light">
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Mã ưu đãi</h5>
                                                    <span id="SpotPromoCode" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                    
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Giá trị hóa đơn chưa giảm</h5>
                                                    <span id="SpotBillValued" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Số lượng hóa đơn</h5>
                                                    <span id="SpotNoBill" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Tổng doanh thu</h5>
                                                    <span id="SpotRevenue" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Giảm giá cho khách</h5>
                                                    <span id="SpotDiscount" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Trong đó, Grab tài trợ</h5>
                                                    <span id="SpotGrab" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Trong đó, nhãn hàng tài trợ</h5>
                                                    <span id="SpotBrand" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Tiền hoa hồng của {data.sell_channel}</h5>
                                                    <span id="SpotCommisionTotal" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                </div>
                                                <div className="grid-container grid-container--halves summary-grid__total">
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Số tiền nhãn hàng thu từ {data.sell_channel}</h5>
                                                    <span id="ReturnFromChannel" className="heading--2 summary-grid__value grid-item grid--mobile">--</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--mobile-up-align-center">
                                            <div className="get-funding-card">
                                                <div className="get-funding-card__image-wrapper">
                                                    <svg className="image get-funding-card__image" sizes="100vw" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 443 245"><path fill="#008060" d="M190.812 243.96H85.232A2.242 2.242 0 0 1 83 241.712V64c0-1.24 1-2.248 2.232-2.248h105.58A2.242 2.242 0 0 1 193.044 64v177.634c0 1.241-1.001 2.326-2.232 2.326z"/><path fill="#002E25" d="M150.864 190.605H125.18c-13.15 0-23.839-10.689-23.839-23.839v-25.684c0-13.15 10.689-23.839 23.839-23.839h25.684c13.15 0 23.839 10.689 23.839 23.839v25.684c0 13.227-10.689 23.839-23.839 23.839z"/><path fill="#fff" d="M138.022 173.932c-1.893 0-3.335-1.283-3.335-2.793V136.71c0-1.586 1.532-2.794 3.335-2.794 1.802 0 3.335 1.284 3.335 2.794v34.429c0 1.51-1.442 2.793-3.335 2.793z"/><path fill="#fff" d="M156.787 157.259h-35.863c-1.651 0-2.91-1.532-2.91-3.335 0-1.892 1.337-3.334 2.91-3.334h35.863c1.652 0 2.91 1.532 2.91 3.334 0 1.803-1.337 3.335-2.91 3.335z"/><path fill="#69CF9C" d="M331.7 95.568H141.322c-1.842 0-3.3-1.468-3.3-3.323V6.015c0-3.012 2.456-5.485 5.449-5.485H331.7c1.842 0 3.3 1.468 3.3 3.322v88.47c0 1.778-1.458 3.246-3.3 3.246z"/><path fill="#008060" d="M161.365 63.889h-15.006v31.679h15.006v-31.68zM184.707 45.548h-15.006v50.02h15.006v-50.02z"/><path fill="#fff" d="M208.05 78.894h-15.006v16.674h15.006V78.894z"/><path fill="#002E25" d="M233.059 48.883h-15.006v46.685h15.006V48.883zM256 31h-15v65h15V31zM281 43h-15v53h15V43zM306 12h-15v84h15V12z"/><path fill="#004C3F" d="M226.687 209.328h-67.003v34.774h67.003v-34.774z"/><path fill="#fff" d="M193.083 237.113c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5z"/><path fill="#008060" d="M295.386 209.328h-66.155v34.774h66.155v-34.774z"/><path fill="#004C3F" d="M261.783 237.113c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5zM359 210.096h-60.129v33.514H359v-33.514z"/><path fill="#008060" d="M264.005 172.01h-67.003v34.774h67.003V172.01zM329.774 237.113c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5z"/><path fill="#69CF9C" d="M230.504 199.999c5.855 0 10.602-4.937 10.602-11.026 0-6.089-4.747-11.026-10.602-11.026s-10.602 4.937-10.602 11.026c0 6.089 4.747 11.026 10.602 11.026z"/><path fill="#002E25" d="M331.35 171.734h-64.955v34.797h64.955v-34.797z"/><path fill="#008060" d="M299.949 198.947c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5z"/><path fill="#004C3F" d="M297.93 133.844h-66.155v34.774h66.155v-34.774z"/><path fill="#fff" d="M264.327 161.629c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5z"/></svg>
                                                </div>
                                                <div className="get-funding-card__content">
                                                    <h2 className="heading--2">{data.block3_headline}</h2>
                                                    <p className="gutter-bottom">{data.block3_desc}</p>
                                                    <p>
                                                        <Link href="/stations" as={data.call2action_href} >
                                                            <a className="body-link">{data.call2action}</a>
                                                        </Link>
                                                    </p>
                                                         
                                                    <p className="text-minor gutter-bottom"> Nhận ngay 15.000.000đ từ gói ưu đãi giảm tác động từ COVID-19, giúp giảm áp lực chi phí và tham gia sử dụng nền tảng Delivery chuyên nghiệp từ CabinFood.</p>
                                                    <div className="marketing-button-wrapper" >
                                                        <input name="utf8" type="hidden" value="✓"/>
                                                        <button className="marketing-button js-open-signup">Nhận ưu đãi ngay</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <section className="section section--border">
                                <div className="page-width">
                                    <h2 className="text-center gutter-bottom sec_content">
                                        {data.sec3_content}
                                    </h2>
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
                    .marketing-form__messages .error {
                        margin-left: 0% !important;
                        padding: 0 !important;
                    }
                    .sec_content {
                        font-size: 2.25em !important;
                    }
                    .form-section {
                        margin-bottom: 1.875em;
                    }
                    .form-header {
                        border-bottom: 1px solid #dfe3e8;
                        margin-bottom: 1.875em;
                    }
                    @media screen and (min-width: 46.875em){
                        .form-header__heading {
                            // float: left;
                        }
                    }
                    @media screen and (min-width: 67.5em) {
                        h3, .heading--3 {
                            font-size: 1.5em;
                            margin-bottom: 0.8333333333em;
                        }
                    }  
                    .summary-grid__heading:not(.js-is-active)>span {
                        display: inline-block;
                        border-bottom: 1px solid #58b44b;
                        min-width: 2.8125em;
                        opacity: 0.5;
                    }
                    .marketing-label--in-field {
                        position: absolute;
                        left: 1rem;
                        top: 0.3rem;
                        font-size: 0.6875em;
                        font-weight: 400;
                        pointer-events: none;
                        z-index: 10;
                    }

                    .js-is-filled .marketing-label--floating {
                        opacity: 1;
                        -webkit-transform: translateY(0);
                        transform: translateY(0);
                    }

                    .marketing-label--floating {
                        opacity: 0;
                        -webkit-transform: translateY(3px);
                        transform: translateY(3px);
                        transition-property: opacity, -webkit-transform;
                        transition-property: opacity, transform;
                        transition-property: opacity, transform, -webkit-transform;
                        transition-duration: 150ms;
                    }

                    .marketing-label, .line-item__checkbox .marketing-checkbox-label {
                        display: block;
                        margin-bottom: 0.6153846154em;
                        font-weight: 700;
                        font-size: 0.8125em;
                        color: #454f5b;
                    }

                    .js-is-filled .marketing-input, .js-is-filled .marketing-textarea, .js-is-filled .marketing-select-wrapper>select {
                        padding-top: 1.5em;
                        padding-bottom: 0.5em;
                    }

                    .marketing-input, .marketing-textarea, .marketing-select-wrapper>select {
                        display: inline-block;
                        height: 4em;
                        width: 100%;
                        // margin: 0 0 15px;
                        padding: 1.5em 1em 0.5em 1em;
                        color: #212b35;
                        font-size: 1em;
                        box-shadow: 0 0 0 1px #c4cdd5;
                        border: 0;
                        border-radius: 5px;
                        background-color: #ffffff;
                        transition: padding 150ms;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                    }

                    .marketing-form__messages {
                        font-size: 0.8125em;
                        font-weight: 500;
                    }

                    .marketing-form__messages .error {
                        color: #eb644d;
                    }

                    .marketing-form__messages .error, .marketing-form__messages .success, .marketing-form__messages .suggest {
                        display: block;
                        padding: 0.6153846154em 0 0;
                    }

                    @media screen and (min-width: 46.875em) {
                        .form-section-submit {
                            float: right;
                        }
                    }

                    .summary-grid {
                        background: #f4f6f8;
                        border: 1px solid #dfe3e8;
                        border-radius: 5px;
                    }
                    .summary-grid__items--divider {
                        border-bottom: 1px solid #dfe3e8;
                    }
                    .summary-grid__items {
                        padding: 0.9375em 1.875em;
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .summary-grid__heading {
                        line-height: 1.25;
                    }
                    @media screen and (min-width: 46.875em) {
                        .summary-grid__heading {
                            text-align: center;
                        }
                    }
                    @media screen and (min-width: 67.5em) {
                        .summary-grid__heading {
                            font-size: 1.125em;
                            margin-bottom: 0.6666666667em;
                        }                        
                    }

                    .summary-grid__items--light {
                        background: #ffffff;
                    }
                    .summary-grid__items {
                        padding: 0.9375em 1.875em;
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .summary-grid__total .summary-grid__label, .summary-grid__total .summary-grid__value {
                        color: #ffffff;
                    }
                    .summary-grid__label {
                        padding-top: 0.625em;
                        flex-grow: 1;
                        width: 50%;
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n+1) {
                            clear: left;
                        }                        
                    }
                    .summary-grid__label {
                        padding-top: 0.625em;
                        flex-grow: 1;
                        width: 50%;
                        font-weight: 500;
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n) {
                            margin-right: 0;
                        }                        
                    }
                    .summary-grid__items .summary-grid__value {
                        color: #454f5b;
                        font-weight: 600 !important;
                    }
                    @media screen and (max-width: 46.8125em) {
                        .grid-item.grid--mobile {
                            float: left;
                            display: block;
                            width: 46.6666666667%;
                            float: left;
                        }                        
                    }
                    .summary-grid__value {
                        flex-grow: 1;
                        width: 50%;
                        text-align: right;
                        margin-bottom: 0;
                    }
                    .summary-grid__total {
                        background: #000639;
                        padding: 0.9375em 1.875em;
                        border-radius: 0 0 5px 5px;
                    }
                    .grid-container {
                        margin-left: auto;
                        margin-right: auto;
                        position: relative;
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n+1) {
                            clear: left;
                        }                        
                    }
                    @media screen and (min-width: 46.875em) {
                        .grid-container--halves .grid-item:nth-child(2n) {
                            margin-right: 0;
                        }                        
                    }
                    
                    .summary-grid__total .summary-grid__value {
                        color: #ffffff;
                    }
                    .summary-grid__value {
                        flex-grow: 1;
                        width: 50%;
                        text-align: right;
                        margin-bottom: 0;
                    }

                    .grid__item--mobile-up-align-center {
                        float: none;
                        clear: left;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    @media screen and (min-width: 67.5em) {
                        .get-funding-card {
                            margin-top: 0;
                        }                        
                    }
                    .get-funding-card {
                        border-radius: 5px;
                        background-color: #f9fafb;
                        margin-top: 5.8125em;
                    }
                    .get-funding-card__image-wrapper {
                        background-color: #69cf9c;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                    .get-funding-card__image {
                        margin-top: -3.9375em;
                    }
                    .get-funding-card__content {
                        border: 1px solid #dfe3e8;
                        border-top: 0;
                        padding: 30px;
                        text-align: center;
                    }
                    .marketing-markdown, .get-funding-card__content p {
                        line-height: 1.5 !important;
                        color: #637381;
                        font-weight: 400;
                    }
                    
                    .calculate_btn {
                        display: inline-block;
                        padding: 1.0625em 1.875em;
                        border-radius: 4px;
                        font-weight: 700 !important;
                        line-height: 1.133;
                        -webkit-font-smoothing: antialiased;
                        transition: 150ms ease;
                        text-align: center;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        cursor: pointer;
                        box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
                        background-color: var(--light-color);
                        color: #ffffff;
                        border-width: 0;
                        border-style: solid;
                        border-color: transparent;
                        margin-bottom: 20px !important;
                    }

                    .get-funding-card__content h2 {font-size: 2em !important;}
                        
                `}</style>
            </div>
        )
    }
}