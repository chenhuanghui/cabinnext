const SignUp = props => (
    <section className="section signup-footer js-waypoint-track">
        <div className="grid">
            <div className="grid__item">
                <div className="section-heading signup-footer__heading gutter-bottom--reset">
                    <h2 className="section-heading__heading heading--2">{props.dataSignUp.title}</h2>
                    <p className="section-heading__subhead heading--3 heading--4">{props.dataSignUp.desc}</p>
                    <form className="marketing-button-wrapper" action={props.dataSignUp.btn_href}>
                        <button className="marketing-button js-open-signup signup-footer__button" >{props.dataSignUp.btn_title}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
export default SignUp;