const LocationSection3 = props => (
    <section className="section pillar-section__wrapper js-waypoint-track" id="PointOfSale" data-track-name="pos">
        <div className="grid">
            <div className="grid__item pillar-section__content-container pillar-section__content-container--flipped pillar-section__content-container--pos">
                <div className="pillar-section__content">
                    <div className="section-heading section-heading--mobile-up-align-left pillar-section__heading-container">
                        <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom">Point of sale</p>
                        <h2 className="section-heading__heading heading--2 text-left gutter-bottom pillar-section__heading">Standout retail experiences</h2>
                        <p className="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">Elevate your in&#8209;person&nbsp;selling.</p>
                    </div>
                    <div className="display--mobile pillar-section__cta--pos">
                        <a data-ga-event="sell" data-ga-action="pos" data-ga-label="learn" className="styled-link styled-link--skin-inherit" href="pos.html">
                            Learn about Point of Sale
                            {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                        </a>
                    </div>

                    <div className="pillar-section__image-container">
                        <div className="sell-pos__visual">
                            <span className="image lazyload-image sell-pos__visual--merchant">
                                <span className="lazyload-image__placeholder">
                                    <img sizes="100vw" src="https://cdn.shopify.com/assets2/pillar/sell/pos/pos-stock-large-76178785c2c0c8a7c188fe97a52d8ca4162e4db034b58a724283da9d6cc9d547.jpg" />
                                </span>
                            </span>

                            <span className="image lazyload-image sell-pos__visual--card-reader">
                                <span className="lazyload-image__placeholder">
                                    <img sizes="100vw" src="https://cdn.shopify.com/assets2/pillar/sell/pos/pos-card-reader-large-b02a911f26e6aa8ac7f9854bdbd7ad4b81e4ea122cdf43dcd0fe52e9b2b703ad.jpg"/>
                                </span>
                            </span>

                            <span className="image lazyload-image sell-pos__visual--app">
                                <span className="lazyload-image__placeholder">
                                    <img sizes="100vw" src="https://cdn.shopify.com/assets2/pillar/sell/pos/pos-app-large-5b64d82d3b21bd85369b9217c3f9fef227b6aafb6bfe403b6b380c37a10676da.jpg"/>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            Better shopping experiences
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            Offer customers personalized service, flexible shopping, and painless&nbsp;returns.
                        </p>
                    </div>
                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            Easy-to-use hardware and software
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            Simplify store set up and staff&nbsp;training.
                        </p>
                    </div>
                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            Unified back office
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            Use one tool to manage all your products, inventory, and customers—no matter how many places you sell&nbsp;from.
                        </p>
                    </div>

                    <div className="hide--mobile pillar-section__cta--pos">
                        <a data-ga-event="sell" data-ga-action="pos" data-ga-label="learn" className="styled-link styled-link--skin-inherit" href="pos.html">
                            Learn about Point of Sale
                            {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid">
            <div className="grid__item grid__item--mobile-up-align-center text-center pillar-testimonial--inline">
                <div className="quote text-center color-black">
                    {/* <svg className="icon quote__decorator quote__decorator--color-yellow gutter-bottom" aria-hidden="true" focusable="false"><use xlink:href="#quote-lines" /></svg> */}
                    <blockquote>
                        <p className="quote__quote gutter-bottom">“Retail is our biggest channel and has proven to be a great launchpad that has allowed us to grow awareness of our brand and build our online presence.”</p>
                        <cite className="quote__cite color-gray-70 gutter-bottom">Catherine | SoYoung</cite>
                    </blockquote>
                </div>
            </div>
        </div>
        <style jsx>{`
                .image.lazyload-image.sell-pos__visual--merchant{max-width: 441px; max-height: 432px}
                .image.lazyload-image.sell-pos__visual--merchant .lazyload-image__placeholder {padding-bottom: 97.9592%;}
                

                .image.lazyload-image.sell-pos__visual--card-reader{max-width: 215px; max-height: 162px;}
                .image.lazyload-image.sell-pos__visual--card-reader .lazyload-image__placeholder {padding-bottom: 75.3488%;}

                .image.lazyload-image.sell-pos__visual--app{max-width: 285px; max-height: 182px;}
                .image.lazyload-image.sell-pos__visual--app .lazyload-image__placeholder{padding-bottom: 63.8596%;}

                .image.lazyload-image.quote__logo gutter-bottom--half{max-width: 194px; max-height: 66px;}
                .image.lazyload-image.quote__logo gutter-bottom--half .lazyload-image__placeholder{padding-bottom: 34.0206%;}
        `}</style>
    </section>
);
export default LocationSection3;