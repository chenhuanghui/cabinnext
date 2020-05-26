const PricingFAQSection = props => (
    <section className="section">
        <div className="grid">
            <div id="Faq" className="pricing-faq">
                {/* <div className="section-heading visuallyhidden">
                    <h2 className="section-heading__heading heading--1">Frequently Asked Questions</h2>
                </div> */}
                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--desktop-up-offset-2">
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group1.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions 2</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group2.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions 3</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group3.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions 4</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group4.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions 5</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group5.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">General questions 6</h3>
                        </div>
                        <div className="accordion-content">
                            {props.faq_group6.map((faq) => (
                                <div className="block">
                                    <h3 className="block__heading heading--4">{faq.Question}</h3>
                                    <p className="block__content">{faq.Answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
);
export default PricingFAQSection;