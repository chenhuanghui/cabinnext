const PillarItemSell = props => (
    <div id="Sell" className="pillars__wrapper">
        <div className="pillars__image">
            <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell hide--mobile">
                <div className="demo-video__video-container">
                    <img src={props.dataItemSell.img1_src}/>
                </div>                        
            </div>

            <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell display--mobile">
                <div className="demo-video__video-container">
                    <img src={props.dataItemSell.img1_src}/>
                </div>
            </div>
        </div>

        <div className="block pillars__block pillars__block--sell">
            <h3 className="block__heading heading--2">
                {props.dataItemSell.pil_block_title1}
            </h3>
            <p className="block__content">{props.dataItemSell.pil_block_desc1}</p>
            <a className="pillars__block-link styled-link" href="#">
                {props.dataItemSell.pil_block_btn_title}
            </a>
        </div>
    </div>
);
export default PillarItemSell;    