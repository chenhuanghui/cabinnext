const LocationSection1 = props => (
    <section className="section section pillar-intro__wrapper color-black sell-pillar-intro__hero">
        <div className="grid">
            <div className="grid__item pillar-intro">
                <div className="section-heading section-heading--tablet-up-align-left pillar-intro__heading-container">
                    <h1 className="section-heading__heading heading--jumbo text-left color-green-80 pillar-intro__heading">
                        <span className="pillar-intro__highlight">{props.dataSection1.line1}</span> 
                        {props.dataSection1.line2}
                    </h1>

                    <p className="section-heading__subhead text-left color-gray-80 heading--3 pillar-intro__subhead">
                        {props.dataSection1.line3}
                    </p>
                </div>
                <nav className="pillar-nav" role="navigation" aria-label="In-page navigation">
                    <ul className="pillar-nav__list">
                        <li className="pillar-nav__item">
                            <a className="pillar-nav__link link-scroll-to" data-ga-event="sell" data-ga-action="intro" data-ga-label="online-store" href="sell.html#OnlineStore">
                                <p className="text-major pillar-nav__item-name">{props.dataSection1.block1_title}</p>

                                <p className="pillar-nav__item-description color-gray-80">{props.dataSection1.block1_desc}</p>

                                {/* <svg className="icon pillar-nav__link-icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-down" /></svg> */}
                            </a>
                        </li>
                        <li className="pillar-nav__item">
                            <a className="pillar-nav__link link-scroll-to" data-ga-event="sell" data-ga-action="intro" data-ga-label="pos" href="sell.html#PointOfSale">
                                <p className="text-major pillar-nav__item-name">{props.dataSection1.block2_title}</p>

                                <p className="pillar-nav__item-description color-gray-80">{props.dataSection1.block1_desc}</p>

                                {/* <svg className="icon pillar-nav__link-icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-down" /></svg> */}
                            </a>
                        </li>
                        <li className="pillar-nav__item">
                            <a className="pillar-nav__link link-scroll-to" data-ga-event="sell" data-ga-action="intro" data-ga-label="buy-button" href="sell.html#BuyButton">
                                <p className="text-major pillar-nav__item-name">{props.dataSection1.block3_title}</p>

                                <p className="pillar-nav__item-description color-gray-80">{props.dataSection1.block3_desc}</p>

                                {/* <svg className="icon pillar-nav__link-icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-down" /></svg> */}
                            </a>
                        </li>
                        
                    </ul>
                </nav>

                <div className="pillar-intro-image__wrapper sell-intro-image__wrapper">
                    <div className="pillar-intro-image__dimension-container sell-intro-image__dimension-container">
                        <div className="pillar-intro-image__image-container sell-intro-image__image-container">
                            <picture className="picture pillar-intro-image sell-intro-image sell-intro-image--merchant hide--mobile">
                                <source
                                    srcSet="
                                        https://cdn.shopify.com/assets2/merchants/easy-tiger/easy-tiger-sell-pillar-hero@tablet-9c7a072803a2ca5613677a8f1bb1b3410d42e33b8b68ef88a88e75f70ca69c29.jpg    1x,
                                        https://cdn.shopify.com/assets2/merchants/easy-tiger/easy-tiger-sell-pillar-hero@tablet-2x-70e4a222e3acc1b510a3bbe679b97aefd39a951ca550ce1c2b4f4e8d08a36d87.jpg 2x
                                    "
                                    media="(min-width: 750px)"
                                />
                                <img alt="" />
                            </picture>

                            <picture className="picture pillar-intro-image sell-intro-image sell-intro-image--product">
                                <source
                                    srcSet="
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/product@tablet-6a90756370d0ce668bd1b8985349b75d97b2c8d5144275946e061395af9a4938.jpg    1x,
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/product@tablet-2x-03f6c191c8ed0dd30159f2630c704100b553e3d0fff146f2b2a33f33ed599788.jpg 2x
                                    "
                                    media="(min-width: 750px)"
                                />
                                <img
                                    srcSet="
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/product@mobile-b58ed818534587ba0b4a2e525f8633f889bb25136817cb2b084111f3c687d9cf.jpg    1x,
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/product@mobile-2x-056fe9e6ae18cfe1291829aac3100239755bd9a8dd8d1b3fa64b0d6d52d0b3ef.jpg 2x
                                    "
                                    alt=""
                                />
                            </picture>
                            <picture className="picture pillar-intro-image sell-intro-image sell-intro-image--crowd">
                                <source
                                    srcSet="
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/crowd@tablet-eee14495885104953d1c98015cdbe09b7783f59ba43b562e3500ac9578fc6117.jpg    1x,
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/crowd@tablet-2x-17116fe4f7608aa758053ba7201750544d52758a47fc015eb9c3ac45a2e85d5f.jpg 2x
                                    "
                                    media="(min-width: 750px)"
                                />
                                <img
                                    srcSet="
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/crowd@mobile-02d0ea455ccf1cf4bae0d69bd6bff7f0b31cc90780d69342adff5cdf327f9aff.jpg    1x,
                                        https://cdn.shopify.com/assets2/pillar/sell/intro/crowd@mobile-2x-43284ea3fb127f3cce14fa633526f4d499bfd93bb4bedf113fee76b69d14f32c.jpg 2x
                                    "
                                    alt=""
                                />
                            </picture>
                        </div>

                        <p className="pillar-intro__caption hide--mobile">Featured merchant — Easy Tiger Goods</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default LocationSection1;