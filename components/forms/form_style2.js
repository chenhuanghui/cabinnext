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
        console.log('form update called'); 
        if (this.props.form_id !== prevProps.form_id) {
            let currentComponent = this;
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

            base('Com_Form').find(this.props.form_id, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
                console.log('form data', record.fields);            
            });

            console.log('form updated');            
        }                
    }

    render () {
        const {data} = this.state;
        return (
            // form style 2
            <div className="grid">
                <div className="grid__item grid__item--desktop-up-half">
                    <div className="section-heading gutter-bottom--reset text-center--tablet-down">
                        <h2 className="section-heading__heading heading--2">{data.message}</h2>
                    </div>
                </div>
                <div className="grid__item grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                    <div className="js-signup-inline marketing-form--inline">
                        <div className="marketing-input-wrapper marketing-input-button-pair">
                            <div className="marketing-input-button-pair__field-wrapper">
                                <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" htmlFor="SignupEmail-2ae4">Email</label>
                                <input placeholder={data.input_hint} id="SignupEmail-2ae4" className="marketing-input-button-pair__input marketing-input marketing-input--floating" type="email" name="signup[email]" />
                                <button className="marketing-button marketing-form__button marketing-input-button-pair__button" name="button">{data.btn_title}</button>
                            </div>
                            <span className="marketing-form__messages">{data.note}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}