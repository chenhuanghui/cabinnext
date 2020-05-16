const PillarItemManage = props => (
    <div id="Manage" class="pillars__wrapper gutter-bottom">
        <div class="online-store-overview__features-ui-illustration pillars__image ui-illustration">
            <span className="lazyload-image__placeholder">
                <img src="https://cdn.shopify.com/assets2/home/market-large-213dc76dc5482456e02e34465bab786df62a6c07de2c9fcd4937a7b52813b56d.jpg"/>
            </span>    
        </div>


        <div className="block pillars__block pillars__block--manage">
            <h3 className="block__heading heading--2">
                Manage<br />
                everything
            </h3>
            <p className="block__content">Gain the insights you need to grow—use a single dashboard to manage orders, shipping, and payments anywhere you&nbsp;go.</p>
            <a className="pillars__block-link styled-link" href="#">
                Explore how to manage your business
                {/* <svg class="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
            </a>
        </div>

    </div>
    
);
export default PillarItemManage;    