const PillarItemMarket = props => (
    <div id="Market" className="pillars__wrapper gutter-bottom">
        <div className="block pillars__block">
            <h3 className="block__heading heading--2">
                Market<br />
                your business
            </h3>
            <p className="block__content">Take the guesswork out of marketing with built-in tools that help you create, execute, and analyze digital marketing&nbsp;campaigns.</p>
            <a className="pillars__block-link styled-link" href="#">
                Explore how to market your business
                {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
            </a>
        </div>
        <span className="image lazyload-image pillars__image pillars__image--market" >
            <span className="lazyload-image__placeholder">
                <img src="https://cdn.shopify.com/assets2/home/market-large-213dc76dc5482456e02e34465bab786df62a6c07de2c9fcd4937a7b52813b56d.jpg"/>
            </span>
        </span>

        <style jsx>{`
                .image.lazyload-image pillars__image.pillars__image--market{max-width: 681px; max-height: 547px;}
                .lazyload-image__placeholder{padding-bottom: 80.3231%;}
        `}</style>
    </div>
);
export default PillarItemMarket;    