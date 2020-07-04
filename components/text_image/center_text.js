import React from 'react';

export default class CenterText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
        if (this.props.mId) {
            base('Com_Image_Text').find(this.props.mId, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
            });    
        }
        
    }

    componentDidUpdate(prevProps) {
        // if(this.props.mId !== prevProps.mId) {
        //     let currentComponent = this;
        //     var Airtable = require('airtable');
        //     var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        //     base('Com_Image_Text').find(this.props.mId, function(err, record) {
        //         if (err) { console.error(err); return; }
        //         currentComponent.setState({data:record.fields})
        //     });    
        // }
        
    }

    render () {
        const {data} = this.state;
        return (
            // center text
            <div className={`grid grid--vertically-centered ${this.props.className ? this.props.className : ''}`}>
                <div className="grid__item grid__item--tablet-up-two-thirds grid__item--tablet-up-push-1">
                    <div className="section-heading">
                        <p className="section-heading__kicker heading--5 color-black gutter-bottom--half">{this.props.sub}</p>
                        <h2 className="section-heading__heading gutter-bottom--half">{this.props.name}</h2>
                        <p className="section-heading__subhead text-major color-ink-light gutter-bottom--reset">{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}