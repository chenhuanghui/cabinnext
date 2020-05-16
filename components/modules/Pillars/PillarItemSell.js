const PillarItemSell = props => (
    <div id="Sell" className="pillars__wrapper">
        <div className="pillars__image">
            <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell hide--mobile">
                <div className="demo-video__video-container">
                    <img src="https://cdn.shopify.com/assets2/home/poster-sell-9a9415a0989001f51a3870a065e65b4cfaa5dbaa250288f60a7e5b6ba4f22394.jpg"/>
                </div>                        
            </div>

            <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell display--mobile">
                <div className="demo-video__video-container">
                    <img src= "https://cdn.shopify.com/assets2/home/poster-sell-9a9415a0989001f51a3870a065e65b4cfaa5dbaa250288f60a7e5b6ba4f22394.jpg"/>
                </div>
            </div>
        </div>

        <div className="block pillars__block pillars__block--sell">
            <h3 className="block__heading heading--2">
                Sell<br />
                everywhere
            </h3>
            <p className="block__content">Use one platform to sell products to anyone, anywhere—in person with Point of Sale and online through your website, social media, and online&nbsp;marketplaces.</p>
            <a className="pillars__block-link styled-link" href="#">
                Explore ways to sell
            </a>
        </div>
    </div>
);
export default PillarItemSell;    