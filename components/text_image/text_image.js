import React from 'react';

export default class TextImage extends React.Component {
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
                <div className="block pillars__block pillars__block--sell">
                    <h3 className="block__heading heading--2">{this.props.name}</h3>
                    <p className="block__content">{this.props.desc}</p>
                    {
                        this.props.btn_title
                        ? <a className="pillars__block-link styled-link" href={this.props.btn_href}>{this.props.btn_title}<svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/></svg></a>
                        : ''
                    }    
                </div>

                <div className="pillars__image">
                    <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell hide--mobile">
                        <div className="demo-video__video-container">
                            {
                                this.props.image
                                ? <img src={this.props.image}/>
                                : ''
                            } 
                        </div>                        
                    </div>

                    <div className="demo-video js-demo-video--loading pillars-animation pillars-animation__sell display--mobile">
                        <div className="demo-video__video-container">
                            {
                                this.props.image
                                ? <img src={this.props.image}/>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}