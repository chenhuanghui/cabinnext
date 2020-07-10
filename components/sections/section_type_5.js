import React from 'react';

export default class SectionType5 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    render () {

        return (
            //Section Type 5
            <section className="section signup-footer js-waypoint-track">
                <div className="grid">
                    <div className="grid__item">
                        <div className="section-heading signup-footer__heading gutter-bottom--reset">
                            <h2 className="section-heading__heading heading--2">{this.props.name}</h2>
                            <p className="section-heading__subhead heading--3 heading--4">{this.props.desc}</p>
                            <div className="grid__item grid__item--mobile-up-align-center">
                                <div className="text-center gutter-bottom--mobile">
                                    <div className="marketing-button-wrapper">
                                        <button className="marketing-button js-open-signup">{this.props.btn_title}</button>
                                    </div>
                                </div>
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