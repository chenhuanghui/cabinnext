const PricingFAQSection = props => (
    <section className="section">
        <div className="grid">
            <div id="Faq" className="pricing-faq">
                {/* Column 1st */}
                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third grid__item--desktop-up-offset-2">
                    {/* Block Question Sub 1.1 */}
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">Thông tin chung</h3>
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
                    {/* Block Question Sub 1.2 */}
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">Chọn vị trí điểm kinh doanh</h3>
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
                    {/* Block Question Sub 1.3 */}
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">Thiết lập điểm kinh doanh</h3>
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
                
                {/* Column 2nd */}
                <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-third">
                    {/* Block Question Sub 2.1 */}
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">Vận hành điểm kinh doanh</h3>
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
                    {/* Block Question Sub 2.2 */}
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">Phát triển điểm kinh doanh</h3>
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
                    {/* Block Question Sub 2.3 */}
                    <div className="accordion">
                        <div className="section-heading section-heading--tablet-up-align-left">
                            <h3 type="button" className="heading--2 pricing-faq__heading accordion-link" data-state="0">Về Cabin Food</h3>
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