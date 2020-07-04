import React from 'react';
import FormStyle from '../forms/form_style1'

export default class SectionType1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.section_id !== prevProps.section_id) {
            let currentComponent = this;
        
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

            base('Section_Type_1').find(this.props.section_id, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
            });

            console.log('section_type1 updated');
        }                
    }

    render () {
        const {data} = this.state
        return (
            //Section Type 1
            <div className="section section--padding-top-only homepage-hero" id="Hero">
                <div className="grid grid--equal-height grid--vertically-centered">
                    <div className="grid__item grid__item--desktop-up-half homepage-hero__content">
                        <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
                            <h1 className="section-heading__heading heading--jumbo color-green-80 homepage-hero__heading gutter-bottom">{data.title}</h1>
                        </div>
                        <div className="homepage-hero__signup">
                            <FormStyle form_id={data.form}/>
                        </div>
                    </div>
                </div>
                <div className="picture--cover homepage-hero__image">
                    {
                        data && data.image
                        ? <img className="image" src={data.image[0].url} />
                        : ''
                    }
                </div>
            </div>  
        )
    }
}