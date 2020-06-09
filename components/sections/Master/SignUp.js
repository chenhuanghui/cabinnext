import $ from 'jquery';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataForm: []
        }
    }
    componentDidMount() {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');
        base('Form_List').find('recUlH3EWGAdbTsPY', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('dataForm2', record.fields)
            currentComponent.setState({ dataForm: record.fields })
        });
    }

    render() {
        const {dataForm} = this.state;
        return(
            <section className="section signup-footer js-waypoint-track">
                <div className="grid">
                    <div className="grid__item">
                        <div className="section-heading signup-footer__heading gutter-bottom--reset">
                            <h2 className="section-heading__heading heading--2">{this.props.dataSignUp.title}</h2>
                            <p className="section-heading__subhead heading--3 heading--4">{this.props.dataSignUp.desc}</p>
                            {/* <form className="marketing-button-wrapper" action={props.dataSignUp.btn_href}>
                                <button className="marketing-button js-open-signup signup-footer__button" >{props.dataSignUp.btn_title}</button>
                            </form> */}
                            <div className="footer__signup">
                                <div className="js-signup-inline marketing-form--inline">
                                    <div className="marketing-input-wrapper marketing-input-button-pair">
                                        <div className="marketing-input-button-pair__field-wrapper">
                                            <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" >Email</label>
                                            <input placeholder= {dataForm.btn_hint} id="SignupFooter-input" className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                                            <button id="SignupFooter-btn" className="marketing-button marketing-form__button marketing-input-button-pair__button">{dataForm.btn_title}</button>
                                        </div>
                                        <span className="marketing-form__messages">{dataForm.note}</span>
                                    </div>
                                </div>
                                {/* <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">{dataForm.note}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .footer__signup {
                        margin-top: 50px;
                    }
                    @media screen and (min-width: 46.875em){
                        .footer__signup {
                            margin-top: 50px;
                            padding: 0px 30px;
                        }
                    }
                    
                    @media screen and (min-width: 67.5em){
                        .footer__signup {
                            margin-top: 50px;
                            padding: 0px 30px;
                        }
                    }
                    #SignupFooter-input {width: 65%}
                    #SignupFooter-btn {width: 35%}
                `}</style>
            </section>
        )
    }
}
