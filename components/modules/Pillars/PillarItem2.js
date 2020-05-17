const PillarItem2 = props => (
    <div id="Market" className="pillars__wrapper gutter-bottom">
        <div className="block pillars__block">
            <h3 className="block__heading heading--2">
                {props.dataItem2.pil_block2_title}
            </h3>
            <p className="block__content">{props.dataItem2.pil_block2_desc}</p>
            <a className="pillars__block-link styled-link" href= {props.dataItem2.pil_block2_btn_href}>
                {props.dataItem2.pil_block_btn_title2}
                {/* <svg className="icon styled-link__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-arrow-right" /></svg> */}
            </a>
        </div>
        <span className="image lazyload-image pillars__image pillars__image--market" >
            <span className="lazyload-image__placeholder">
                <img src={props.dataItem2.pil_block2_img_src}/>
            </span>
        </span>

        <style jsx>{`
                .image.lazyload-image pillars__image.pillars__image--market{max-width: 681px; max-height: 547px;}
                .lazyload-image__placeholder{padding-bottom: 80.3231%;}
        `}</style>
    </div>
);
export default PillarItem2;    