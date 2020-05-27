const SetupSection7 = props => (
    <section className="section start__support background-yellow-0">
        <div className="grid">
            <div className="grid__item">
                <div className="section-heading">
                    <h2 className="section-heading__heading heading--1 heading--2">Support tailor-made for new business owners</h2>
                </div>
                <div className="start__card-group">
                    <a className="start__card background-white" href="contact.html">
                        <div className="block gutter-bottom--reset"> 
                        <span id="card-block1" className="image lazyload-image start__card-image block__image" >
                            <span className="lazyload-image__placeholder">
                                <img src="https://cdn.shopify.com/assets2/pillar/start/support-72961bc45de5b8eebe5863e983ab2dc3bb080b35bda1921e095deee78018aa7c.svg"/>
                            </span>
                        </span>
                            <div className="start-resources__heading-container">
                                <h3 className="block__heading heading--4 heading--5">Award-winning support</h3>
                                <p className="block__content start-resources__card-cta">Get the help you want with 24/7 support&mdash;before, during, and after your&nbsp;trial.</p>
                            </div>
                        </div>
                    </a>
                    <a className="start__card background-white" href="https://help.shopify.com/en">
                        <div className="block gutter-bottom--reset"> 
                            <span id="card-block2" className="image lazyload-image start__card-image block__image">
                                <span className="lazyload-image__placeholder">
                                    <img src="https://cdn.shopify.com/assets2/pillar/start/help-center-7db97ec397af101fd136b2e4172cc74adbfe2b30bd14071345b81c8705173278.svg"/>
                                </span>
                            </span>
                            <div className="start-resources__heading-container">
                                <h3 className="block__heading heading--4 heading--5">Help Center</h3>
                                <p className="block__content start-resources__card-cta">Search for useful articles and advice about starting a&nbsp;business.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <style jsx>{`
            #card-block1{max-width: 325px; max-height: 245px;}
            #card-block1 .lazyload-image__placeholder {padding-bottom: 75.3846%}
            #card-block2{max-width: 324px; max-height: 244px;}
            #card-block2 .lazyload-image__placeholder {padding-bottom: 75.3086%}
        `}</style>
    </section>
);
export default SetupSection7;