const PillarItemManage = props => (
    <div id="Manage" className="pillars__wrapper gutter-bottom">
        <div className="online-store-overview__features-ui-illustration pillars__image ui-illustration">
            <span className="lazyload-image__placeholder">
                <img src={props.dataItemManage.img3_src}/>
            </span>    
        </div>


        <div className="block pillars__block pillars__block--manage">
            <h3 className="block__heading heading--2">
                {props.dataItemManage.pil_block_title3}
                
            </h3>
            <p className="block__content">{props.dataItemManage.pil_block_desc3}</p>
            <a className="pillars__block-link styled-link" href={props.dataItemManage.pil_block_btn_href3}>
                {props.dataItemManage.pil_block_btn_title3}
                {/* <svg class="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
            </a>
        </div>

    </div>
    
);
export default PillarItemManage;    