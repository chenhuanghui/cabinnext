const PricingSection1 = props => (
    <section className="section">
        <div className="grid">
            <div className="grid__item">
                <div className="section-heading">
                    <h1 className="section-heading__heading heading--1">Set up your store, pick&nbsp;a&nbsp;plan&nbsp;later</h1>
                    <p className="section-heading__subhead heading--2">Try Shopify free for 90 days, no credit card&nbsp;required</p>
                </div>
            </div>
            <div className="grid__item grid__item--mobile-up-align-center">
                <div className="text-center gutter-bottom--mobile">
                    <form className="marketing-button-wrapper" action="#" acceptCharset="UTF-8" method="post">
                        <button className="marketing-button js-open-signup" data-ga-event="Pricing" data-ga-action="Start your free trial" data-ga-label="Heading">Start your free trial</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="grid">
            <div className="grid__item grid__item--desktop-up-two-thirds grid__item--mobile-up-align-center">
                <table className="marketing-table pricing-table" id="PricingTable">
                    <tbody className="pricing-table__table-body">

                        {/* Feature 01  */}
                        <tr className="phrase">
                            <th scope="row" id="f-monthly_price"> 
                                <span className="heading--5 pricing-table__section-heading">Thiết lập</span>
                            </th>
                            <td headers="p-0 f-monthly_price">
                                <div className=" monthly-price"> 
                                    <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                        <span className="price">
                                            <span aria-hidden="true">
                                                <span className="price__number">10</span>
                                            </span>
                                        </span>
                                    </span> 
                                    <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span>
                                    <span className="monthly-price__billing-period text-minor" aria-hidden="true">/Điểm Kinh Doanh</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id="f-website">
                                <div className="pricing-table__feature-name">
                                <dl className="feature-label"><dt className="feature-label__text">Online Store</dt>
                                    <dd className="feature-label__description">Includes ecommerce website and blog.</dd>
                                </dl>
                                </div>
                            </th>
                            <td headers="p-0 f-website"> <span className="pricing-table__feature-value">
                                <span className="visuallyhidden">Yes</span>
                                <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40">
                                    <path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" />
                                </svg>
                                </span>
                            </td>

                        </tr>
                       

                        {/* Feature 02  */}

                        <tr className="phrase">
                            <th scope="row" id="f-monthly_price"> 
                                <span className="heading--5 pricing-table__section-heading">Vận hành</span>
                                <p className="feature-label__description">Includes ecommerce website and blog.Includes ecommerce website and blog.Includes ecommerce website and blog.</p>
                            </th>
                            <td headers="p-0 f-monthly_price">
                                <div className=" monthly-price"> 
                                    <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                        <span className="price">
                                            <span aria-hidden="true">
                                                <sup>Từ </sup> 
                                                <span className="price__number">8</span>
                                                
                                            </span>
                                        </span>
                                    </span> 
                                    <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span>
                                    {/* <span className="monthly-price__accessibility-text visuallyhidden">per month</span> */}
                                    <span className="monthly-price__billing-period text-minor" aria-hidden="true">/Tháng</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" id="f-website">
                                <div className="pricing-table__feature-name">
                                <dl className="feature-label"><dt className="feature-label__text">Online Store</dt>
                                    <dd className="feature-label__description">Includes ecommerce website and blog.</dd>
                                </dl>
                                </div>
                            </th>
                            <td headers="p-0 f-website"> <span className="pricing-table__feature-value">
                                <span className="visuallyhidden">Yes</span>
                                <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40">
                                    <path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" />
                                </svg>
                                </span>
                            </td>

                        </tr>

                        
                        
                    </tbody>
                </table>

                
            </div>
        </div>
        <div className="grid">
            <div className="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-offset-1">
                <p className="pricing-disclaimer">Shopify collects sales taxes in states where it is required by law. Stated prices do not include these taxes.</p>
            </div>
        </div>
        <style jsx>{`
                tr.phrase{background-color: #f4f6f8;}
        `}</style>
    </section>
);

export default PricingSection1;