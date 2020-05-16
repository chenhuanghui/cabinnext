const Support = props => (
    <section className="section section--help background-yellow-0 js-waypoint-track">
        <div className="grid">
            <div className="grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half">
                <div className="section--help__content">
                    <div className="section-heading section-heading--mobile-up-align-left">
                        <h2 className="section-heading__heading heading--1 section--help__heading section-heading__heading--regular">Get the help you need, every step of the way</h2>
                    </div>
                    <div className="grid grid--equal-height">

                        <div className="grid__item grid__item--tablet-up-half">
                            <div className="block">
                                <h3 className="block__heading heading--4">Shopify support</h3>
                                <p className="block__content">Contact support 24/7, whether you’re troubleshooting issues or looking for business advice.</p>
                                <p className="block__cta">
                                    <a className="styled-link" href="contact.html">
                                        Contact support
                                        {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="grid__item grid__item--tablet-up-half">
                            <div className="block">
                                <h3 className="block__heading heading--4">Shopify App Store</h3>
                                <p className="block__content">Add features and functionality to your business with 3,200+ apps that integrate directly with Shopify.</p>
                                <p className="block__cta">
                                    <a className="styled-link" href="#">
                                        Visit the Shopify App Store
                                        {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="grid__item grid__item--tablet-up-half">
                            <div className="block section--help__last-block">
                                <h3 className="block__heading heading--4">Shopify Experts Marketplace</h3>
                                <p className="block__content">Hire a Shopify expert to help you with everything from store setup to SEO.</p>
                                <p className="block__cta">
                                    <a className="styled-link" href="#">
                                        Explore the Shopify Experts Marketplace
                                        {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="picture picture--cover section--help__picture" src="https://cdn.shopify.com/assets2/home/help@desktop-2x-e6e757c00c83bd892a2504feaa929ed30662ef648bf0b13d900154cd924a902d.jpg"/>
        
    </section>
);
export default Support;