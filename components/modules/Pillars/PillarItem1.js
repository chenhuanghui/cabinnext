const PillarItem1 = props => (
    <div id="Sell Location" className="pillars__wrapper">
        <div className="pillars__image">
            <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell hide--mobile">
                <div className="demo-video__video-container">
                    <img src={props.dataItem1.pil_block1_img_src}/>
                </div>                        
            </div>

            <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell display--mobile">
                <div className="demo-video__video-container">
                    <img src={props.dataItem1.pil_block1_img_src}/>
                </div>
            </div>
        </div>

        <div className="block pillars__block pillars__block--sell">
            <h3 className="block__heading heading--2">
                {props.dataItem1.pil_block1_title}
            </h3>
            <p className="block__content">{props.dataItem1.pil_block1_desc}</p>
            <a className="pillars__block-link styled-link" href={props.dataItem1.pil_block1_btn_href}>
                {props.dataItem1.pil_block1_btn_title}
            </a>
        </div>
    </div>
);
export default PillarItem1;    