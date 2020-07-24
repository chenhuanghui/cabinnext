import Head from 'next/head'
import React from 'react';
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import ModalForm from '../components/modals/modal_Form';
import Announcement from '../components/annoucement/an_style1'
import $ from 'jquery';

export default class LayoutBlog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            product_name:''
        }
    }

    

    componentDidMount () {
        let currentComponent = this;
        
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
            } else {
                $(this).parent().find('.marketing-label--in-field').css("opacity",0);
            }
        })

        $(`#calculate_action`).click(function(){
            console.log('calculating')            
            
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

            var price_estimate = Math.floor((cogs + package_fee + profit_per_product + depreciation_product)/(1-marketing/100))
            $('#PriceEstimate').html(price_estimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            
            var price_procedue = cogs + package_fee + Math.floor(state_fee/depreciation_month)
            $('#PriceProcedue').html(price_procedue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

            $('#invest_ammount').html(invest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#depriciation_time').html(depreciation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#profit_estimate').html(profit_per_product.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $('#productName').html(product_name.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

        })
        
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
                        <main id="Main">
                            <header className="hero background-light color-ink">
                                <div className="grid">
                                    <div className="grid__item grid__item--tablet-up-half">
                                        <div className="hero__inner">
                                            <div className="section-heading section-heading--left section-heading--tight">
                                                <p className="section-heading__kicker heading--5">Công cụ miễn phí</p>
                                                <h1 className="section-heading__heading heading--jumbo">Tính giá bán sản phẩm</h1>
                                                <p className="section-heading__subhead heading--2">Dễ dàng tính toán ra được giá bán phù hợp các cho các sản phẩm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid__item grid__item--tablet-up-half">
                                        <div className="hero__inner">
                                            <img className="image hero__image" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/growth_tools/assets/home/tools-hero-small-a6423211f306f8389d78b31067a486321acab30ecc6ccb4e149daa574f956cd6.jpg 1x, https://cdn.shopify.com/shopifycloud/growth_tools/assets/home/tools-hero-large-13a7b5f09c46ab97c0dddd7ac6a9e26d116d1fe1773614bee3749e575b7a42a4.jpg 2x" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <section className="section section--border" id="ToolContent">
                                <div className="grid">
                                    <div className="grid grid--equal-height">
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <form id="BusinessLoanCalculatorForm" action="/tools/business-loan-calculator/store" accept-charset="UTF-8" method="post" novalidate="" __bizdiag="2000182305" __biza="WJ__">
                                                <input name="utf8" type="hidden" value="✓"/>
                                                <input type="hidden" name="authenticity_token" value="V8qfsZtvVXewrOwmdyc89WDCAzCkJZaQTaV5qTXXNncBE/CcB92ESjUMf1em4rIo/jZ3goH6KLDc3fDsUGq7tw=="/>
                                                <div className="form-section">
                                                    <div className="form-header">
                                                        <h2 className="form-header__heading heading--3">Nhập các chi phí</h2>
                                                    </div>
                                                    <label className="marketing-input-wrapper">
                                                        <span className="marketing-label marketing-label--in-field marketing-label--floating">Tổng giá trị đầu tư (đ)</span>
                                                        <input type="text" id="invest" data="" placeholder="Tổng giá trị đầu tư (đ)" required="true" className="marketing-input marketing-input--floating input-format-number"/>
                                                        <ul className="marketing-form__messages" id="m_invest"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Thời gian khấu hao toàn phần (tháng)</span>
                                                        <input type="text" id="depreciation" data="" placeholder="Thời gian khấu hao toàn phần (tháng)" required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_depreciation"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Mặt bằng/tháng (đ)</span>
                                                        <input type="text" id="rent" data="" placeholder="Mặt bằng (đ)" required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_rent"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Nhân sự/tháng (đ)</span>
                                                        <input type="text" id="human" data="" placeholder="Nhân sự (đ)" required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_human"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Điện, nước/tháng (đ)</span>
                                                        <input type="text" id="engergy" data="" placeholder="Điện, nước (đ)" required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_engergy"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Số ngày làm việc/tháng (ngày)</span>
                                                        <input type="text" id="days_of_work" data="" placeholder="Số ngày làm việc/tháng (ngày)" required="true"   className="marketing-input marketing-input--floating input-format-number"/>
                                                        <ul className="marketing-form__messages" id="m_days_of_work"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Marketing/sản phẩm (%)</span>
                                                        <input type="text" id="marketing" data="" placeholder="Marketing/sản phẩm (%)"   required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_marketing"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Tên sản phẩm</span>
                                                        <input type="text" id="product_name" data="" placeholder="Tên sản phẩm/món"   required="true"   className="marketing-input marketing-input--floating" />
                                                        <ul className="marketing-form__messages" id="m_product_name"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Nguyên vật liệu/sản phẩm (đ)</span>
                                                        <input type="text" id="cogs" data="" placeholder="Nguyên vật liệu/sản phẩm (đ)"   required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_cogs"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Bao bì, đóng gói (đ)</span>
                                                        <input type="text" id="package_fee" data="" placeholder="Bao bì, đóng gói (đ)"   required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_package_fee"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                    <label className="marketing-input-wrapper"><span className="marketing-label marketing-label--in-field marketing-label--floating">Lợi nhuận/sản phẩm bán ra (đ)</span>
                                                        <input type="text" id="profit_per_product" data="" placeholder="Lợi nhuận/sản phẩm bán ra (đ)"   required="true"   className="marketing-input marketing-input--floating input-format-number" />
                                                        <ul className="marketing-form__messages" id="m_profit_per_product"></ul><span className="marketing-form__messages"></span>
                                                    </label>
                                                </div>
                                                <div className="calculate_btn form-section-submit" id="calculate_action">Tính toán</div>
                                            </form>
                                        </div>
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                                            <div className="form-section">
                                                <div className="form-header">
                                                    <h2 className="heading--3">Tìm ra những con số ý nghĩa</h2>
                                                </div>
                                                <div className="marketing-markdown">
                                                    <p>Trong ngành kinh doanh món ăn thức uống, việc lập ra một cấu trúc giá (pricing structure) chính xác rất quan trọng để xác định được giá bán hợp lý từ đó sẽ có những thay đổi phù hợp nhất trong các giai đoạn phát triển.</p>
                                                    <p>Thông thường các doanh nghiệp rất hay quên đặt [chi phí truyền thông] và [khấu hao đầu tư] vào cấu trúc giá, từ đó sẽ làm cho doanh nghiệp không định hình được chính xác điểm hòa vốn chính xác, thời gian khấu hao đầu tư, cũng như sẽ không thể nào tính toán được hiệu quả của các chương trình truyền thông, và sẽ gián tiếp gây ra hậu quả là "CÀNG BÁN CÀNG LỖ" nhưng lại không biết ngay lúc đó.</p>
                                                    <p>Hãy điều chỉnh thông tin về Nguyên vật liệu, bao bì, lợi nhuận của các sản phẩm theo kế hoạch của bạn để tìm thấy giá bán phù hợp nhất. </p>
                                                    <p>Hãy dịch chuyển toàn bộ ĐỊNH PHÍ về BIẾN PHÍ để có bức tranh tài chính rõ ràng nhất, và chủ động trước mọi tình huống. Nếu bạn gặp vấn đề hoặc cần tư vấn hãy liên hệ với chúng tôi. </p>
                                                </div>
                                            </div>
                                            <div className="summary-grid">
                                                <div className="summary-grid__items summary-grid__items--divider">
                                                    <p id="SummaryHeading" className="summary-grid__heading">Để lấy lại được khoản đầu tư <span id="invest_ammount"></span> đồng, trong khoảng thời gian <span id="depriciation_time"></span> tháng, và vận hành ổn định đạt lợi nhuận <span id="profit_estimate"></span>đ trên mỗi sản phẩm bán ra, bạn cần phải chú ý các thông số quan trọng dưới đây.</p>
                                                </div>
                                                <div className="grid-container grid-container--halves summary-grid__items summary-grid__items--light">
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Chi phí cố định /tháng</h5>
                                                    <span id="StateFee" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                    
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Số sản phẩm tối thiểu phải bán mỗi ngày để không lỗ(sp)</h5>
                                                    <span id="SpotBalancingDate" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Số sản phẩm tối thiểu phải bán mỗi tháng để không lỗ(sp)</h5>
                                                    <span id="SpotBalancingMonth" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    {/* <h5 className="summary-grid__label grid-item grid--mobile">Khấu hao đầu tư/sản phẩm bán ra (đ/sp)</h5>
                                                    <span id="DepreciationProduct" className="heading--4 summary-grid__value grid-item grid--mobile">--</span> */}

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Khấu hao đầu tư từng tháng (đ/tháng)</h5>
                                                    <span id="DepreciationMonth" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>

                                                    <h5 className="summary-grid__label grid-item grid--mobile">Giá thành sản phẩm (đ)</h5>
                                                    <span id="PriceProcedue" className="heading--4 summary-grid__value grid-item grid--mobile">--</span>
                                                </div>
                                                <div className="grid-container grid-container--halves summary-grid__total">
                                                    <h5 className="summary-grid__label grid-item grid--mobile">Giá bán <span id="productName"></span> tham khảo</h5>
                                                    <span id="PriceEstimate" className="heading--2 summary-grid__value grid-item grid--mobile">--</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--mobile-up-align-center">
                                            <div className="get-funding-card">
                                                <div className="get-funding-card__image-wrapper">
                                                    <img className="image get-funding-card__image" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/growth_tools/assets/capital/loan-decorator-370c15c36085f6a7c389e033132e870190670aa0cee12288126f65e50e0ed08f.svg" alt=""/>
                                                </div>
                                                <div className="get-funding-card__content">
                                                    <h2 className="heading--2">Quỹ đầu tư CabinFood</h2>
                                                    <p className="gutter-bottom">Chúng tôi sẵn sàng cung cấp các khoản đầu tư đặc biệt và các gói hỗ trợ linh hoạt dành riêng cho các startups hay các doanh nghiệp Việt Nam đang kinh doanh về món ăn, thức uống.</p>
                                                    <p> <a className="body-link" href="/stations">Khám phá các Trạm kinh doanh</a></p>
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
                            
                        </main>    
                        <Footer />
                    </div>
                </div>
                <style jsx>{`
                    .background-light {
                        background-color: #f4f6f8;
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