const PricingSection1 = props => (
    <div className="grid">
        <div className="grid__item grid__item--desktop-up-two-thirds grid__item--mobile-up-align-center">
            <table className="marketing-table pricing-table" id="PricingTable">
                <tbody className="pricing-table__table-body">
                    
                    {/* Pharse 01  */}
                    <tr className="pharse">
                        <th scope="row" id="f-monthly_price"> 
                            <span className="heading--5 pricing-table__section-heading">{props.pricing_content.group1}</span>
                            <p className="feature-label__description">{props.pricing_content.group1_desc}</p>
                        </th>
                        <td headers="p-0 f-monthly_price">
                            <div className=" monthly-price"> 
                                <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                    <span className="price">
                                        <span aria-hidden="true">
                                            <span className="price__number">10</span>
                                        </span>
                                    </span>
                                </span> 
                                <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span>
                                <span className="monthly-price__billing-period text-minor" aria-hidden="true">/Điểm Kinh Doanh</span>
                            </div>
                        </td>
                    </tr>

                    {props.pricing_group1.map((p) => {
                        return p.type==`sub_group` 
                        ?  
                            <tr>
                                <th scope="col" colSpan="2">
                                    <span className="heading--5 pricing-table__section-heading">{p.obj}</span>
                                </th>
                            </tr>
                        : 
                            <tr className={p.id} key={p.id}> 
                                <th scope="row" id="f-website">
                                    <div className="pricing-table__feature-name">
                                        <dl className="feature-label"><dt className="feature-label__text">{p.obj}</dt>
                                        <dd className="feature-label__description">{p.desc}</dd>
                                    </dl>
                                    </div>
                                </th>
                                <td headers="p-0 f-website"> 
                                    <span className="pricing-table__feature-value">
                                    { (p.value == 1 ) 
                                    ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                    : p.value
                                    }
                                    </span>
                                </td>
                            </tr>
                    })}
                    
                    {/* Feature 02  */}

                    <tr className="pharse">
                        <th scope="row" id="f-monthly_price"> 
                            <span className="heading--5 pricing-table__section-heading">{props.pricing_content.group2}</span>
                            <p className="feature-label__description">{props.pricing_content.group2_desc}</p>
                        </th>
                        <td headers="p-0 f-monthly_price">
                            <div className=" monthly-price"> 
                                <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                    <span className="price">
                                        <span aria-hidden="true">
                                            <sup>Từ </sup> 
                                            <span className="price__number">8</span>
                                            
                                        </span>
                                    </span>
                                </span> 
                                <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span>
                                <span className="monthly-price__billing-period text-minor" aria-hidden="true">/Tháng</span>
                            </div>
                        </td>
                    </tr>

                    {props.pricing_group2.map((p) => {
                        return p.type==`sub_group` 
                        ?  
                            <tr>
                                <th scope="col" colSpan="2">
                                    <span className="heading--5 pricing-table__section-heading">{p.obj}</span>
                                </th>
                            </tr>
                        : 
                            <tr className={p.id} key={p.id}> 
                                <th scope="row" id="f-website">
                                    <div className="pricing-table__feature-name">
                                        <dl className="feature-label"><dt className="feature-label__text">{p.obj}</dt>
                                        <dd className="feature-label__description">{p.desc}</dd>
                                    </dl>
                                    </div>
                                </th>
                                <td headers="p-0 f-website"> 
                                    <span className="pricing-table__feature-value">
                                    { (p.value == 1 ) 
                                    ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                    : p.value
                                    }
                                    </span>
                                </td>
                            </tr>
                    })}

                    {/* Pharse 03  */}
                    <tr className="pharse">
                        <th scope="row" id="f-monthly_price"> 
                            <span className="heading--5 pricing-table__section-heading">{props.pricing_content.group3}</span>
                            <p className="feature-label__description">{props.pricing_content.group3_desc}</p>
                        </th>
                        <td headers="p-0 f-monthly_price">
                            <div className=" monthly-price"> 
                                <span className="pricing-table__feature-value pricing-table__feature-price monthly-price__price">
                                    <span className="price">
                                        <span aria-hidden="true">
                                            {/* <sup>Từ </sup>  */}
                                            {/* <span className="price__number">2</span> */}
                                        </span>
                                    </span>
                                </span> 
                                {/* <span className="monthly-price__currency text-minor" aria-hidden="true">.000.000 đ</span> */}
                            </div>
                        </td>
                    </tr>

                    {props.pricing_group3.map((p) => {
                        return p.type==`sub_group` 
                        ?  
                            <tr>
                                <th scope="col" colSpan="2">
                                    <span className="heading--5 pricing-table__section-heading">{p.obj}</span>
                                </th>
                            </tr>
                        : 
                            <tr className={p.id} key={p.id}> 
                                <th scope="row" id="f-website">
                                    <div className="pricing-table__feature-name">
                                        <dl className="feature-label"><dt className="feature-label__text">{p.obj}</dt>
                                        <dd className="feature-label__description">{p.desc}</dd>
                                    </dl>
                                    </div>
                                </th>
                                <td headers="p-0 f-website"> 
                                    <span className="pricing-table__feature-value">
                                    { (p.value == 1 ) 
                                    ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                                    : p.value
                                    }
                                    </span>
                                </td>
                            </tr>
                    })}
                    
                    
                </tbody>
            </table>

            
        </div>
        
        <style jsx>{`
            .pharse, .pharse:hover{background-color: var(--main-color);}
            .pharse:hover th, .pharse:hover td {background-color: var(--main-color) !important;}
            .pharse p, .pharse span {color:white;}
            .pharse .heading--5 {font-weight: bold; line-height:30px;}
        `}</style>  
    </div>
);

export default PricingSection1;