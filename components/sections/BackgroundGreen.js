const BackgroundGreen = props => (      
        <section className="section background-green-80">
                <div className="grid">
                        <div className="grid__item">
                                <section className="section section--tight">
                                        <div className="section-heading section-heading--mobile-up-align-left">
                                                <h2 className="section-heading__heading heading--1 section-heading__heading--regular color-white">{props.dataGreen.title}</h2>
                                                <p className="section-heading__subhead color-white">{props.dataGreen.desc}</p>
                                        </div>
                                        <div className="example-merchants">
                                                <div className="example-merchant">
                                                        <div className="block example-merchant__block">
                                                                <span className="image lazyload-image block__image">
                                                                        <span className="lazyload-image__placeholder">
                                                                                <img data-sizes="100vw" data-srcset={props.dataGreen.block1_img_src}/>
                                                                        </span>
                                                                </span>
                                                                <h3 className="block__heading heading--4 example-merchant__name"><a className="example-merchant__link" >{props.dataGreen.block1_line1}</a></h3>
                                                                <p className="block__content example-merchant__vertical heading--5">{props.dataGreen.block1_line2}</p>
                                                        </div>
                                                </div>
                                                <div className="example-merchant">
                                                        <div className="block example-merchant__block">
                                                                <span className="image lazyload-image block__image">
                                                                        <span className="lazyload-image__placeholder">
                                                                                <img data-sizes="100vw" data-srcset={props.dataGreen.block2_img_src}/>
                                                                        </span>
                                                                </span>
                                                                <h3 className="block__heading heading--4 example-merchant__name"><a className="example-merchant__link" >{props.dataGreen.block2_line1}</a></h3>
                                                                <p className="block__content example-merchant__vertical heading--5">{props.dataGreen.block2_line2}</p>
                                                        </div>
                                                </div>
                                                <div className="example-merchant">
                                                        <div className="block example-merchant__block">
                                                                <span className="image lazyload-image block__image">
                                                                        <span className="lazyload-image__placeholder">
                                                                                <img data-sizes="100vw" data-srcset={props.dataGreen.block3_img_src}/>
                                                                        </span>
                                                                </span>
                                                                <h3 className="block__heading heading--4 example-merchant__name"><a className="example-merchant__link" >{props.dataGreen.block3_line1}</a></h3>
                                                                <p className="block__content example-merchant__vertical heading--5">{props.dataGreen.block3_line2}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                <section className="section section--tight">
                                        <div className="section-heading section-heading--mobile-up-align-left">
                                                <h2 className="section-heading__heading section-heading__heading--regular color-white">{props.dataGreen.sub_title}</h2>
                                        </div>

                                        <div className="grid">
                                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
                                                        <div className="block start-block">
                                                                {/* <svg class="icon icon--size-small start-block__icon block__icon" aria-hidden="true" focusable="false"> <use xlink:href="#spot-drag-and-drop"></use> </svg> */}
                                                                <h3 className="block__heading heading--4 color-white">{props.dataGreen.block_title1}</h3>
                                                                <p className="block__content color-white">{props.dataGreen.block_desc1}</p>
                                                        </div>
                                                </div>

                                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
                                                        <div className="block start-block">
                                                                {/* <svg class="icon icon--size-small start-block__icon block__icon" aria-hidden="true" focusable="false"> <use xlink:href="#spot-online-store"></use> </svg> */}
                                                                <h3 className="block__heading heading--4 color-white">{props.dataGreen.block_title2}</h3>
                                                                <p className="block__content color-white">{props.dataGreen.block_desc2}</p>
                                                        </div>
                                                </div>
                                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
                                                        <div className="block start-block">
                                                                {/* <svg class="icon icon--size-small start-block__icon block__icon" aria-hidden="true" focusable="false"> <use xlink:href="#spot-inventory-synced"></use> </svg> */}
                                                                <h3 className="block__heading heading--4 color-white">{props.dataGreen.block_title3}</h3>
                                                                <p className="block__content color-white">{props.dataGreen.block_desc3}</p>
                                                        </div>
                                                </div>
                                                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
                                                        <div className="block start-block">
                                                                {/* <svg class="icon icon--size-small start-block__icon block__icon" aria-hidden="true" focusable="false"> <use xlink:href="#spot-group"></use> </svg> */}
                                                                <h3 className="block__heading heading--4 color-white">{props.dataGreen.block_title4}</h3>
                                                                <p className="block__content color-white">{props.dataGreen.block_desc4}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                        </div>
                </div>


                <style jsx>{`
                        .image.lazyload-image.block__image{max-width: 267px; max-height: 472px;}
                        .lazyload-image__placeholder{padding-bottom: 176.779%}
                        .example-merchants {grid-template-columns: repeat(3, 1fr); justify-items: center;}
                `}</style>
        </section>
);
export default BackgroundGreen;