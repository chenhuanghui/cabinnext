const LocationSection4 = props => (
    <section className="section pillar-section__wrapper js-waypoint-track" id="BuyButton" data-track-name="buy-button">
        <div className="grid">
            <div className="grid__item pillar-section__content-container pillar-section__content-container--buy-button">
                <div className="pillar-section__content">
                    <div className="section-heading section-heading--mobile-up-align-left pillar-section__heading-container">
                        <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom">{props.dataSection4.line1}</p>
                        <h2 className="section-heading__heading heading--2 text-left gutter-bottom pillar-section__heading">{props.dataSection4.line2}</h2>
                        <p className="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">{props.dataSection4.line3}</p>
                    </div>
                    <div className="display--mobile pillar-section__cta--buy-button">
                        <a data-ga-event="sell" data-ga-action="buy-button" data-ga-label="learn" className="styled-link styled-link--skin-inherit" href="buy-button.html">
                            Learn about Buy Button
                            {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                        </a>
                    </div>

                    <div className="pillar-section__image-container">
                        <img className="pillar-visual-localized sell-buy-button__visual" src="https://cdn.shopify.com/assets2/pillar/sell/online-store/background@mobile-2x-a4f6ce64c955e939a8b320f2ddd047efe6c7af47fe96d21701a4ff91f0b6ae86.png" />
                    </div>

                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            {props.dataSection4.block1_line1}
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            {props.dataSection4.block1_line2}
                        </p>
                    </div>
                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            {props.dataSection4.block2_line1}
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            {props.dataSection4.block2_line2}
                        </p>
                    </div>
                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            {props.dataSection4.block3_line1}
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            {props.dataSection4.block3_line2}
                        </p>
                    </div>

                    <div className="hide--mobile pillar-section__cta--buy-button">
                        <a data-ga-event="sell" data-ga-action="buy-button" data-ga-label="learn" className="styled-link styled-link--skin-inherit" href="buy-button.html">
                            Learn about Buy Button
                            <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                            </svg>
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
                        <p className="quote__quote gutter-bottom">“Shopify let us build an ecommerce platform without having prior knowledge or allocating significant resources.”</p>
                        <cite className="quote__cite color-gray-70 gutter-bottom">Fred | Luca + Danni</cite>
                    </blockquote>
                    <span className="image lazyload-image quote__logo gutter-bottom--half">
                        <span className="lazyload-image__placeholder">
                            <img sizes="100vw" src="https://cdn.shopify.com/assets2/pillar/sell/logos/luca-and-danni-large-e1de743d917d20cefdf5b425865d76f101e10cc2c8ba194a4f9b9f024b9552c0.png"/>
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <style jsx>{`
            .image.lazyload-image.quote__logo.gutter-bottom--half{max-width: 200px; max-height: 64px}
            .image.lazyload-image.quote__logo.gutter-bottom--half .lazyload-image__placeholder {padding-bottom: 32%;}
        `}</style>
    </section>
);
export default LocationSection4;