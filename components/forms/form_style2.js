import React from 'react';

export default class FormStyle2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
        
    }

    render () {
        return (
            // form style 2
            <div className="grid">
                <div className="grid__item grid__item--desktop-up-half">
                    <div className="section-heading gutter-bottom--reset text-center--tablet-down">
                        <h2 className="section-heading__heading heading--2">{this.props.message}</h2>
                    </div>
                </div>
                <div className="grid__item grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                    <div className="js-signup-inline marketing-form--inline">
                        <div className="marketing-input-wrapper marketing-input-button-pair">
                            <div className="marketing-input-button-pair__field-wrapper">
                                <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" htmlFor="SignupEmail-2ae4">Email</label>
                                <input placeholder={this.props.input_hint} id="SignupEmail-2ae4" className="marketing-input-button-pair__input marketing-input marketing-input--floating" type="email" name="signup[email]" />
                                <button className="marketing-button marketing-form__button marketing-input-button-pair__button" name="button">{this.props.btn_title}</button>
                            </div>
                            <span className="marketing-form__messages">{this.props.note}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}