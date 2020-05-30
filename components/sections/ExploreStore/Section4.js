const StoreDetailSection4 = props => (
    <section className="section section--padding-top-only background-cyan-80">
        <div className="grid grid--bleed pos-pocket__container">
            <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-half pos-next-popup-sales__pos-pocket-image hide--mobile">
                <span className="image lazyload-image">
                    <span className="lazyload-image__placeholder">
                        <img src="https://cdn.shopify.com/assets2/pos/pop-up-sales-new/pos-pocket-large-b100cb1cdec760314f02cee9ee03060b6e964b78e962028c37a1cd2bf169f570.jpg"/>
                    </span>
                </span>
                
            </div>
            <div className="grid__item grid__item--tablet-up-half pos-next-popup-sales__content">
                <div className="section-heading text-left gutter-bottom">
                    <h2 className="section-heading__heading heading--2 color-white">Put the power of POS in your pocket</h2>
                    <p className="section-heading__subhead heading--3 color-white">Activate Shopify's point-of-sale features and built-in payments to sell your products anywhere.</p>
                </div>
                <div className="grid grid--equal-height">
                    <div className="grid__item grid__item--tablet-up-half">
                        <div className="block">
                            <h3 className="block__heading heading--4 color-white">Minimal hardware</h3>
                            <p className="block__content color-white">Connect Shopify’s card reader to your mobile device to accept payments instantly.</p>
                        </div>
                    </div>
                    <div className="grid__item grid__item--tablet-up-half">
                        <div className="block">
                            <h3 className="block__heading heading--4 color-white">Low credit card rates</h3>
                            <p className="block__content color-white">Accept credit cards and other popular payment methods with one low rate.</p>
                        </div>
                    </div>
                    <div className="grid__item grid__item--tablet-up-half">
                        <div className="block">
                            <h3 className="block__heading heading--4 color-white">Speedy payouts</h3>
                            <p className="block__content color-white">Get paid quickly and manage cash flow with fees debited automatically from your sales.</p>
                        </div>
                    </div>
                    <div className="grid__item grid__item--tablet-up-half">
                        <div className="block">
                            <h3 className="block__heading heading--4 color-white">Customer profiles</h3>
                            <p className="block__content color-white">Create customer profiles on the go to drive brand loyalty both in person and online.</p>
                        </div>
                    </div>
                    <div className="grid__item grid__item--tablet-up-half">
                        <div className="block">
                            <h3 className="block__heading heading--4 color-white">Email and SMS receipts</h3>
                            <p className="block__content color-white">Send receipts for in-person sales to customers instantly via email or SMS.</p>
                        </div>
                    </div>
                    <div className="grid__item grid__item--tablet-up-half">
                        <div className="block">
                            <h3 className="block__heading heading--4 color-white">Custom checkouts</h3>
                            <p className="block__content color-white">Use Custom Sale to offer discounts or bundle items without keeping customers waiting.</p>
                        </div>
                    </div>
                    <div className="grid__item gutter-bottom color-white">
                        <a data-ga-event="pos-pop-up-sales" data-ga-action="in-your-pocket" data-ga-label="features" className="styled-link styled-link--skin-inherit" href="/pos/features">View all Shopify POS features
                        {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"> <use xlink:href="#modules-arrow-right"></use> </svg> */}
                        <svg className="con styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-half pos-next-popup-sales__pos-pocket-image display--mobile">
            <span className="image lazyload-image">
                <span className="lazyload-image__placeholder">
                    <img data-sizes="100vw" data-srcset="https://cdn.shopify.com/assets2/pos/pop-up-sales-new/pos-pocket-small-d64a44e6f370ace99d2098e2dedef693c1910f688dd2c0a3b98d728c67848904.jpg 1x, https://cdn.shopify.com/assets2/pos/pop-up-sales-new/pos-pocket-large-b100cb1cdec760314f02cee9ee03060b6e964b78e962028c37a1cd2bf169f570.jpg 2x" alt="A merchant pulling Shopify's Tap &amp; Chip phone case and Card Reader from their pocket." className="lazyload"/>
                </span>
            </span>
            <span className="image lazyload-image pos-next-popup-sales__pos-pocket-ui-illustration">
                <span className="lazyload-image__placeholder">
                    <img data-sizes="100vw" data-srcset="https://cdn.shopify.com/assets2/pos/pop-up-sales-new/pos-orders-small-c8a7e9d1896a25aab968bae2abeb286e37571f0eca625d90436a65c839ee2489.png 1x, https://cdn.shopify.com/assets2/pos/pop-up-sales-new/pos-orders-large-009a5252e009a98f9667fe0c645dbff2dc21c36cb914ff34cb313e53c4007fdf.png 2x" alt="A detail view of the Order History feature in Shopify POS showing recent orders from a New York pop-up." className="lazyload"/>
                </span>
            </span>
        </div>
        <style jsx>{`
            .lazyload-image{max-width: 800px; max-height: 800px;}
            .lazyload-image__placeholder{padding-bottom: 100.0%}
            .pos-next-popup-sales__pos-pocket-ui-illustration{max-width: 417px; max-height: 376px;}
            .pos-next-popup-sales__pos-pocket-ui-illustration. lazyload-image__placeholder{padding-bottom: 90.1679%}
            .pos-next-popup-sales__content {
                padding-right: calc(5% + 9px);
                padding-left: calc(5% + 9px);
                padding-bottom: 0px;
            }
            
        `}</style>
    </section>    
);
export default StoreDetailSection4;