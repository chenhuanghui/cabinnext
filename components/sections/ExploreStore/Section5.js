const StoreDetailSection4 = props => (
    <section>
        <div className="grid grid--bleed grid--equal-height grid--vertically-centered">
            <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-half grid__item--desktop-up-offset-1 pos-next__footer-image">
                <span className="image lazyload-image">
                    <span className="lazyload-image__placeholder">
                        <img src="https://cdn.shopify.com/assets2/merchants/nobull/pos-next-hardware-footer-small-1a6b770869a97676c007f14ca4fa796612bd8d631f3bbb71da2bdeedcfba6a19.jpg"/>
                    </span>
                </span>
            </div>
            <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-5 pos-next__footer-content">
                <div className="section-heading text-left gutter-bottom">
                    <h2 className="section-heading__heading heading--2 pos-next__footer-heading">
                        Not just ecommerce. <br />
                        All commerce.
                    </h2>
                    <p className="section-heading__subhead heading--3 text-major">
                        Bring your in-store and online sales together with Shopify. Gain insights about your business from one view so you can work smarter, move faster, and think bigger.
                    </p>
                </div>
                <a className="marketing-button gutter-bottom" data-ga-event="pos-hardware" data-ga-action="hero" data-ga-label="request-info" href="/pos/request-info">
                    Request information
                </a>
                <div>
                    Already have a Shopify store?
                    <a className="body-link" data-ga-event="pos-hardware" data-ga-action="footer" data-ga-label="login" href="/admin/settings/channels?highlight=pos&amp;utm_content=pos-hardware-footer-login-pos&amp;utm_source=pos-hardware">
                        Log in to set up Shopify POS
                    </a>
                </div>
            </div>
            
        </div>
    <style jsx>{`
        .lazyload-image{max-width: 818px; max-height: 624px;}
        .lazyload-image .lazyload-image__placeholder{padding-bottom: 76.2836%;}
        .pos-next__footer-content {
            padding-right: calc(5% + 9px);
            padding-left: calc(5% + 9px);
        }
        .pos-next__footer-image {
            padding-right: 0;
            padding-left: 0;
        }
    `}</style>
    </section>

);
export default StoreDetailSection4;