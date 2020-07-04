import React from 'react';

export default class Col3Lines extends React.Component {
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

        base('Column_S1').find(this.props.col_id, function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
        });
        console.log('column updated');            
    }

    componentDidUpdate(prevProps) {

    }

    render () {
        const {data} = this.state
        return (
            //Col Without Icon
            <div className="grid__item grid__item--tablet-up-half">
                <div className="block">
                    <h3 className="block__heading heading--4">{data.name}</h3>
                    <p className="block__content">{data.desc}</p>
                    <p className="block__cta">
                        {
                            data.btn_title
                            ? <a className="styled-link contact-form" href={data.btn_href}>{data.btn_title}<svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/></svg></a>
                            : ''
                        }
                        
                    </p>
                </div>
            </div>
        )
    }
}