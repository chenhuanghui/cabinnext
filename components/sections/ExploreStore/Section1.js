const StoreDetailSection1 =props => (
    <div className="colored-section">
        <section className="section section--tight">
            <div className="grid grid--vertically-centered pos-hero">
                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-5 pos-hero__content-container">
                    <div className="section-heading text-left gutter-bottom">
                        <h1 className="section-heading__kicker heading--5 color-yellow-30">POS Hardware</h1>
                        <h2 className="section-heading__heading heading--1 pos-next-hero__heading color-white">
                            Break free <br/>
                            from <br/>
                            the counter</h2>
                    </div> 
                    <a className="marketing-button gutter-bottom" data-ga-event="pos-hardware" data-ga-action="hero" data-ga-label="request-info" href="https://www.shopify.com/pos/request-info">
                    Request information
                    </a>
                    <div className="color-white">Already have a Cabin Food store? <a className="color-white body-link" data-ga-event="pos-hardware" data-ga-action="hero" data-ga-label="login" href="https://www.shopify.com/admin/settings/channels?highlight=pos&utm_content=pos-hardware-hero-login-pos&utm_source=pos-hardware">Log in to set up Cabin Food POS</a>
                    </div>
                </div>
                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-7 pos-hero__image-container"> 
                    <span className="image lazyload-image">
                        <span className="lazyload-image__placeholder">
                            <img src="https://cdn.shopify.com/assets2/merchants/kotn/pos-next-hardware-hero-large-85fa5564cf2b681fd8dd92b12c432eec5646618ed2da3ffb543e0cc78fad2df0.jpg"/>
                        </span>
                    </span>
                </div>
            </div>

            <div className="grid grid--vertically-centered pos-next-hardware__hero-features">
                <div className="grid__item">
                    <div className="grid">
                        <div className="grid__item grid__item--desktop-up-quarter">
                            <div className="block">
                                
                                <svg className="icon icon--size-small icon--fill-white block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                    <path d="M15 22H4a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V24a2 2 0 0 0-2-2zm-1 18H5V25h9zm29-27.5v-3a1.5 1.5 0 0 0-.25-.83l-4-6A1.5 1.5 0 0 0 37.5 2h-28a1.5 1.5 0 0 0-1.25.67l-4 6A1.5 1.5 0 0 0 4 9.5v3A7.49 7.49 0 0 0 17.5 17a7.47 7.47 0 0 0 12 0 7.48 7.48 0 0 0 7.5 2.85V38H21.5a1.5 1.5 0 0 0 0 3h20a1.5 1.5 0 0 0 0-3H40V18.5a7.48 7.48 0 0 0 3-6zM10.3 5h26.4l2.67 4H7.64zm1.2 12A4.5 4.5 0 0 1 7 12.5V12h9.09a1.49 1.49 0 0 0-.09.5 4.5 4.5 0 0 1-4.5 4.5zm12 0a4.5 4.5 0 0 1-4.5-4.5 1.49 1.49 0 0 0-.09-.5h9.18a1.49 1.49 0 0 0-.09.5 4.5 4.5 0 0 1-4.5 4.5zm12 0a4.5 4.5 0 0 1-4.5-4.5 1.49 1.49 0 0 0-.09-.5H40v.5a4.5 4.5 0 0 1-4.5 4.5zM8 37.5A1.5 1.5 0 1 1 9.5 39 1.5 1.5 0 0 1 8 37.5z" />
                                </svg>
                                <h3 className="block__heading heading--4 color-white">Integrated POS</h3>
                                <p className="block__content color-white">Connect POS hardware, software, and payments instantly.</p>
                            </div>
                        </div>
                        <div className="grid__item grid__item--desktop-up-quarter">
                            <div className="block">
                                
                                <svg className="icon icon--size-small icon--fill-white block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                    <path d="M41.5 40H38V20.5a2.5 2.5 0 0 0-2.5-2.5H34V3.5A1.5 1.5 0 0 0 32.5 2h-20A1.5 1.5 0 0 0 11 3.5V18H9.5A2.5 2.5 0 0 0 7 20.5V40H3.5a1.5 1.5 0 0 0 0 3h38a1.5 1.5 0 0 0 0-3zM31 18h-4V5h4zM14 5h9v13h-9zm-4 35V21h25v19zm18.52-13.6a1.5 1.5 0 0 1 .08 2.12l-6.5 7a1.5 1.5 0 0 1-2.08.12l-3.5-3a1.5 1.5 0 1 1 2-2.28l2.41 2.06 5.52-5.94a1.5 1.5 0 0 1 2.07-.08z" />
                                </svg>
                                <h3 className="block__heading heading--4 color-white">Smooth checkouts</h3>
                                <p className="block__content color-white">Accept payments anywhere with wireless hardware.</p>
                            </div>
                        </div>
                        <div className="grid__item grid__item--desktop-up-quarter">
                            <div className="block">
                                <svg className="icon icon--size-small icon--fill-white block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                    <path d="M41 6H4a2 2 0 0 0-2 2v29a2 2 0 0 0 2 2h37a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1 30H5V18h35zm0-23H5V9h35zM8.5 29a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 0 3h-8A1.5 1.5 0 0 1 8.5 29z" />
                                </svg>

                                <h3 className="block__heading heading--4 color-white">Low credit card rates</h3>
                                <p className="block__content color-white">Save with competitive credit card rates from Cabin Food Payments.</p>
                            </div>
                        </div>
                        <div className="grid__item grid__item--desktop-up-quarter">
                            <div className="block">
                                <svg className="icon icon--size-small icon--fill-white block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                                    <path d="M33 2H13a3 3 0 0 0-3 3v35a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm0 38H13V5h20zm-7-4.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5zm-9.5-13.88a1.5 1.5 0 1 1 2-2.24l3.33 3 5.51-6.78a1.5 1.5 0 1 1 2.33 1.89l-6.5 8a1.5 1.5 0 0 1-1 .55H22a1.5 1.5 0 0 1-1-.38z" />
                                </svg>
                                <h3 className="block__heading heading--4 color-white">Compatible devices</h3>
                                <p className="block__content color-white">Complete your point of sale with barcode scanners, printers, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <style jsx>{`
            .pos-next-hero__heading {font-size: 4.375em; font-weight: 500;}
            .image.lazyload-image{max-width: 804px; max-height: 525px;}
            .lazyload-image__placeholder{padding-bottom: 65.2985%}
            .pos-next-hardware__hero-features {margin-top: 96px;}
        `}</style>
    </div>
);
export default StoreDetailSection1;