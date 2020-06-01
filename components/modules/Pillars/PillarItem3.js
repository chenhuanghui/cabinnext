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
                <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                </svg>
            </a>
        </div>

    </div>
    
);
export default PillarItem3;    