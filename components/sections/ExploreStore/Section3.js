const StoreDetailSection3 =props => (
    <section className="section pos-on-the-go">
        <div className="grid grid--equal-height grid--vertically-centered pos-on-the-go__container gutter-bottom">
            
            <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                <div className="pos-on-the-go__content">
                    <h2 className="heading--2">Take your business on the road</h2>
                    <p className="text-major">Reach new audiences when you sell your products at pop-ups, markets, fairs, and beyond. Connect Shopify’s portable hardware to your mobile device and bring your business anywhere.</p>
                    <a data-ga-event="pos-hardware" data-ga-action="on-the-go" data-ga-label="pop-up-sales" className="styled-link" href="/pos/pop-up-sales">
                        Learn more about selling on the go
                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"
                                />
                            </svg>
                    </a>
                </div>
            </div>

            <div className="grid__item grid__item--tablet-up-half hide--mobile">
                <span className="image lazyload-image">
                    <span className="lazyload-image__placeholder">
                        <img src="https://cdn.shopify.com/assets2/pos/hardware-new/business-road-small-9b0ed44d694f4d2de2bac8cb2a70c59e99502dffb2810d1ce1c452ebe86ca746.jpg"/>
                    </span>
                </span>
            </div>
            
            <div className="grid__item grid__item--tablet-up-half pos-on-the-go__image display--mobile">
                <span className="image lazyload-image">
                    <span className="lazyload-image__placeholder">
                        <img src="https://cdn.shopify.com/assets2/pos/hardware-new/business-road-large-e75ca7919286e46bd05c1b00e08f6bfbd6f9af8fa73a5ad92ae66c8ed75f4ff8.jpg"/>
                    </span>
                </span>
            </div>
        </div>
        <style jsx>{`
            .lazyload-image{max-width: 683px; max-height: 456px;}
            .lazyload-image .lazyload-image__placeholder{padding-bottom: 66.7643%;}
            
        `}</style>
    </section>

);
export default StoreDetailSection3;