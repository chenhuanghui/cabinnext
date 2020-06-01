const Support = props => (
    <section className="section section--help background-yellow-0 js-waypoint-track">
        <div className="grid">
            <div className="grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half">
                <div className="section--help__content">
                    <div className="section-heading section-heading--mobile-up-align-left">
                        <h2 className="section-heading__heading heading--1 section--help__heading section-heading__heading--regular">{props.dataSupport.title}</h2>
                    </div>
                    <div className="grid grid--equal-height">

                        <div className="grid__item grid__item--tablet-up-half">
                            <div className="block">
                                <h3 className="block__heading heading--4">{props.dataSupport.block1_title}</h3>
                                <p className="block__content">{props.dataSupport.block1_desc}</p>
                                <p className="block__cta">
                                    <a className="styled-link" href={props.dataSupport.block1_btn_href}>
                                        {props.dataSupport.block1_btn_title}
                                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"
                                            />
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="grid__item grid__item--tablet-up-half">
                            <div className="block">
                                <h3 className="block__heading heading--4">{props.dataSupport.block2_title}</h3>
                                <p className="block__content">{props.dataSupport.block2_desc}</p>
                                <p className="block__cta">
                                    <a className="styled-link" href={props.dataSupport.block2_btn_href}>
                                        {props.dataSupport.block2_btn_title}
                                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"
                                            />
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="grid__item grid__item--tablet-up-half">
                            <div className="block section--help__last-block">
                                <h3 className="block__heading heading--4">{props.dataSupport.block3_title}</h3>
                                <p className="block__content">{props.dataSupport.block3_desc}</p>
                                <p className="block__cta">
                                    <a className="styled-link" href={props.dataSupport.block3_btn_href}>
                                    {props.dataSupport.block3_btn_title}
                                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"
                                            />
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="picture--cover homepage-hero__image">
            <img className="image" src={props.dataSupport.img_src} />
        </div>
        {/* <img className="picture picture--cover section--help__picture" src={props.dataSupport.img_src}/> */}
        <style jsx>{`
            .picture.picture--cover.section--help__picture{object-position: right center;}
        `} </style>
    </section>
);
export default Support;