const PillarItem3 = props => (
    <div id="Manage Operation" className="pillars__wrapper gutter-bottom">
        <div className="online-store-overview__features-ui-illustration pillars__image ui-illustration">
            <span className="lazyload-image__placeholder">
                <img src={props.dataItem3.pil_block3_img_src}/>
            </span>    
        </div>


        <div className="block pillars__block pillars__block--manage">
            <h3 className="block__heading heading--2">
                {props.dataItem3.pil_block3_title}
                
            </h3>
            <p className="block__content">{props.dataItem3.pil_block3_desc}</p>
            <a className="pillars__block-link styled-link" href={props.dataItem3.pil_block3_btn_href}>
                {props.dataItem3.pil_block3_btn_title}
                {/* <svg class="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
            </a>
        </div>

    </div>
    
);
export default PillarItem3;    