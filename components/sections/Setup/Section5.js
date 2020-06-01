const SetupSection5 =props => (
    <section className="section pillar__testimonial-wrapper">
        <div className="grid">
            <div className="grid__item">
                <div className="featured-testimonial featured-testimonial--breakpoint-mobile">
                    <div className="featured-testimonial__image-wrapper">
                        <img className="picture featured-testimonial__image" src="https://cdn.shopify.com/assets2/pillar/start/testimonial-unbound-merino@mobile-2x-5e19070991c8c374d54e368b15b134c72c5fc6d4206ffa1351cc5073afb55663.jpg" alt="" />
                    </div>
                    <div className="featured-testimonial__content text-center">
                        <blockquote className="featured-testimonial__quote-wrapper gutter-bottom">
                            <p className="featured-testimonial__quote">“I’ll never forget our first Shopify sale… we were open for business right there, it was&nbsp;amazing.”</p>
                            <cite className="featured-testimonial__citation">Dan | Unbound Merino</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .image.lazyload-image.gutter-bottom {max-width: 121px; max-height: 35px;}
            .image.lazyload-image.gutter-bottom .lazyload-image__placeholder {padding-bottom: 28.9256%}
        `} </style>

    </section>
);
export default SetupSection5;