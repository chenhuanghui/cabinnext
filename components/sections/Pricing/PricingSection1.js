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
                    <form className="marketing-button-wrapper" action="https://accounts.shopify.com/store-signup/setup" acceptCharset="UTF-8" method="post">
                        <button className="marketing-button js-open-signup" data-ga-event="Pricing" data-ga-action="Start your free trial" data-ga-label="Heading">Start your free trial</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="grid">
            <div className="grid__item grid__item--desktop-up-two-thirds grid__item--mobile-up-align-center">
                <table className="marketing-table pricing-table" id="PricingTable">
                    <thead>
                        <tr>
                            <th className="pricing-table__table-head" scope="col" id="p-0"> 
                                {/* <p className="heading--4">Plan feature</p>
                                <p>All the basics for starting a&nbsp;new business</p> */}
                                <span className="visuallyhidden">Plan feature</span>
                            </th>
                            <th className="pricing-table__table-head" scope="col" id="p-1">
                                <p className="heading--4">Basic Shopify</p>
                                <p>All the basics for starting a&nbsp;new business</p>
                            </th>
                            <th className="pricing-table__table-head" scope="col" id="p-2">
                                <p className="heading--4">Shopify</p>
                                <p>Everything you need for a growing business</p>
                            </th>
                            <th className="pricing-table__table-head" scope="col" id="p-3">
                                <p className="heading--4">Advanced Shopify</p>
                                <p>Advanced features for scaling your business</p>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="pricing-table__table-body">
                        <tr>
                            <th scope="row" id="f-monthly_price"> <div className="pricing-table__feature-name">Monthly price</div></th>
                            
                            <td headers="p-0 f-monthly_price">
                                <div className=" monthly-price"> 
                                    <span className="monthly-price__currency text-minor" aria-hidden="true">USD</span>
                                    <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                        <span className="price"><span className="visuallyhidden">$29</span>
                                            <span aria-hidden="true">
                                                <sup>$</sup>
                                                <span className="price__number">29</span>
                                            </span>
                                        </span>
                                    </span> 
                                    <span className="monthly-price__accessibility-text visuallyhidden">per month</span>
                                    <span className="monthly-price__billing-period text-minor" aria-hidden="true">/mo</span>
                                </div>
                            </td>
                            
                            <td headers="p-1 f-monthly_price">
                                <div className=" monthly-price"> 
                                    <span className="monthly-price__currency text-minor" aria-hidden="true">USD</span>
                                    <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                        <span className="price">
                                            <span className="visuallyhidden">$79</span>
                                            <span aria-hidden="true"><sup>$</sup>
                                                <span className="price__number">79</span>
                                            </span>
                                        </span>
                                    </span> 
                                    <span className="monthly-price__accessibility-text visuallyhidden">per month</span>
                                    <span className="monthly-price__billing-period text-minor" aria-hidden="true">/mo</span>
                                </div>
                            </td>
                            
                            <td headers="p-2 f-monthly_price">
                                <div className=" monthly-price"> 
                                    <span className="monthly-price__currency text-minor" aria-hidden="true">USD</span>
                                    <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                        <span className="price">
                                            <span className="visuallyhidden">$299</span>
                                            <span aria-hidden="true"><sup>$</sup>
                                                <span className="price__number">299</span>
                                            </span>
                                        </span>
                                    </span> 
                                    
                                    <span className="monthly-price__accessibility-text visuallyhidden">per month</span>
                                    <span className="monthly-price__billing-period text-minor" aria-hidden="true">/mo</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="col" colSpan="4"> 
                                <span className="heading--5 pricing-table__section-heading">Features</span>
                            </th>
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
                            <td headers="p-1 f-website"> <span className="pricing-table__feature-value">
                                <span className="visuallyhidden">Yes</span>
                                -
                                </span>
                            </td>
                            <td headers="p-2 f-website"> <span className="pricing-table__feature-value">
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
    </section>
);

export default PricingSection1;