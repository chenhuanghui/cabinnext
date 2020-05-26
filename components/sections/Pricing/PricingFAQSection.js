const PricingFAQSection = props => (
    <section className="section">
        <div className="grid">
            <div id="Faq" className="pricing-faq">
                {/* <div className="section-heading visuallyhidden">
                    <h2 className="section-heading__heading heading--1">Frequently Asked Questions</h2>
                </div> */}
                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--desktop-up-offset-2">
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group1.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="1">Online questions</h3>
                        </div>
                        <div className="accordion-content">
                            <div className="block">
                                <h3 className="block__heading heading--4">Can I use my own domain name?</h3>
                                <p className="block__content">Yes. You can purchase a domain name within Shopify, or use an existing one that you own. We also provide a free myshopify.com domain name to all stores on sign up.</p>
                            </div>
                            <div className="block">
                                <h3 className="block__heading heading--4">What are your bandwidth fees?</h3>
                                <p className="block__content">There are none. All Shopify plans include unlimited bandwidth for free.</p>
                            </div>
                            <div className="block">
                                <h3 className="block__heading heading--4">Do I need a web host?</h3>
                                <p>Shopify includes secure, unlimited ecommerce hosting on all plans except Shopify Lite. You can also use the <a href="buy-button.html">Buy Button</a> to add ecommerce to any existing website.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="2">POS questions</h3>
                        </div>
                        <div className="accordion-content">
                            <div className="block">
                                <div className="block__content">
                                    <div className="long-form-content ">
                                        <h4>What does Shopify POS do?</h4>
                                        <p>Shopify POS is an application for iOS and Android devices that you can use for transactions in a physical store or pop-up setting. Find products, process orders, take payment, swipe credit cards, produce receipts, and control it all from your iPad or mobile device. All the background management of your store is done from your Shopify admin, which you can access using any browser.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="block__content">
                                    <div className="long-form-content ">
                                        <h4>Can I merge my Shopify online store with Shopify POS?</h4>
                                        <p>Yes. Your Shopify online store automatically synchronizes with Shopify POS, and you manage your entire business from one dashboard. Product or inventory updates that you make in your Shopify admin will instantly take effect in Shopify POS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="block__content">
                                    <div className="long-form-content ">
                                        <h4>Can I use Shopify POS if I have multiple cash registers in use at the same time?</h4>
                                        <p>Yes. You can install Shopify POS on multiple devices, and you won’t be charged any extra. Store activity on all devices is synchronized with your Shopify admin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);
export default PricingFAQSection;