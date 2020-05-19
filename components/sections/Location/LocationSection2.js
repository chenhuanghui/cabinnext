const LocationSection2 = props => (
    <section className="section pillar-section__wrapper js-waypoint-track" id="OnlineStore" data-track-name="online-store">
        <div className="grid">
            <div className="grid__item pillar-section__content-container pillar-section__content-container--online-store">
                <div className="pillar-section__content">
                    <div className="section-heading section-heading--mobile-up-align-left pillar-section__heading-container">
                        <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom">{props.dataSection2.line1}</p>
                        <h2 className="section-heading__heading heading--2 text-left gutter-bottom pillar-section__heading">{props.dataSection2.line2}</h2>
                        <p className="section-heading__subhead text-major text-left color-ink-light gutter-bottom--reset">{props.dataSection2.line3}</p>
                    </div>
                    <div className="display--mobile pillar-section__cta--online-store">
                        <a data-ga-event="sell" data-ga-action="online-store" data-ga-label="learn" className="styled-link styled-link--skin-inherit" href="online.html">
                            Learn about online store
                            {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
                        </a>
                    </div>

                    <div className="pillar-section__image-container">
                        <div className="compliance--flex-column">
                            <div className="pillar-section__image sell-online-store__visual">
                                <img className="picture" src="https://cdn.shopify.com/assets2/pillar/sell/online-store/background@tablet-2x-25e15f8e6d7a818251fafc135079aa12e656e60bc9cfbaf47992d72266e27c45.png" />
                                <div className="demo-video js-demo-video--loading sell-demo-screen-content sell-demo-video" aria-label="Demo video player">
                                    <img className="demo-video__video-container" src="https://cdn.shopify.com/assets2/pillar/sell/online-store/demo-placeholder-74aa5f8f7cd4858fb2b67b8c0d3d49abf2245281cd39c2b4652d43b67b3f368f.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            {props.dataSection2.block1_line1}
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            {props.dataSection2.block1_line2}
                        </p>
                    </div>
                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            {props.dataSection2.block2_line1}
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            {props.dataSection2.block2_line2}
                        </p>
                    </div>
                    <div className="pillar-section__detail">
                        <h3 className="heading--4">
                            {props.dataSection2.block3_line1}
                        </h3>

                        <p className="gutter-bottom--reset color-ink">
                            {props.dataSection2.block3_line2}
                        </p>
                    </div>

                    <div className="hide--mobile pillar-section__cta--online-store">
                        <a data-ga-event="sell" data-ga-action="online-store" data-ga-label="learn" className="styled-link styled-link--skin-inherit" href="online.html">
                            Learn about online store
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
                        <p className="quote__quote gutter-bottom">“As a direct to consumer business, 100% of our sales is generated from our online Shopify store.”</p>
                        <cite className="quote__cite color-gray-70 gutter-bottom">Arden | Leonard &amp; Church</cite>
                    </blockquote>
                    <span className="image lazyload-image quote__logo gutter-bottom--half">
                        <span className="lazyload-image__placeholder">
                            <img
                                sizes="100vw"
                                src="https://cdn.shopify.com/assets2/pillar/sell/logos/leonard-and-church-large-9e5b7b76c2ba175ade149feb8cef227ffc581b91658f40c79ce95be489f1f4ca.png"
                            />
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <style jsx>{`
                .image.lazyload-image.quote__logo.gutter-bottom--half{max-width: 298px; max-height: 25px;}
                .lazyload-image__placeholder{padding-bottom: 8.3893%;}
        `}</style>
    </section>
);
export default LocationSection2;