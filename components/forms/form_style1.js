import React from 'react';

export default class FormStyle1 extends React.Component {
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
            });

            console.log('form updated');            
        }                
    }

    render () {
        const {data} = this.state;
        return (
            // form style 1
            <div className="js-signup-inline marketing-form--inline">
                <div className="marketing-input-wrapper marketing-input-button-pair">
                    <div className="marketing-input-button-pair__field-wrapper">
                        <input placeholder={data.input_hint} className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                        <button className="marketing-button marketing-form__button marketing-input-button-pair__button">{data.btn_title}</button>
                    </div>
                </div>
                <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">{data.note}</p>
            </div>                    
        )
    }
}