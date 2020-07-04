import React from 'react';

export default class TextImageStyle2 extends React.Component {
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
        if(this.props.mId !== prevProps.mId) {
            let currentComponent = this;
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

            base('Com_Image_Text').find(this.props.mId, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
            });    
        }
        
    }

    render () {
        const {data} = this.state;
        return (
            // image lef text right
            <div className={`pillars__wrapper ${this.props.className ? this.props.className : ''}`} >
                <div className="grid__item grid__item--tablet-up-half about-hero__content">
                    <div className="section-heading gutter-bottom--reset">
                        <p className="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">{data.sub}</p>
                        <h1 className="section-heading__heading heading--1 text-left--tablet-up text-center--mobile about-hero__heading">{data.name}</h1>
                        <p className="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">{data.desc}</p>
                    </div>
                </div>    
                <div className="grid__item grid__item--tablet-up-half about-hero__image-container">
                    <span className="image lazyload-image about-hero__image-spill">
                        {
                            data && data.image
                            ? <img src={data.image[0].url}/>
                            : ''
                        }
                    </span>
                </div>
            </div>
        )
    }
}