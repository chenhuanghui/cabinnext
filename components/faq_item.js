import React from 'react';

export default class FAQItem extends React.Component {
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

        base('FAQ_Item').find(this.props.item_id, function(err, record) {
            if (err) { console.error(err); return; }
            console.log('FAQ Item: ', record.fields)
            currentComponent.setState({data:record.fields}) 
        });
    }

    componentDidUpdate(prevProps) {
        
    }

    convertMdtoHtml(mdString) {
        var md = require('markdown-it')();
        var result = md.render(mdString);
        console.log('markdown: ',result);
        return result;
    }

    render () {
        const {data} = this.state;
        
        return (
            <div className="block">
                <h3 className="block__heading heading--4">{data.question}</h3>
                {/* <p className="block__content">{data.answer}</p> */}
                <p className="block__content" dangerouslySetInnerHTML={{__html: data && data.answer ? this.convertMdtoHtml(data.answer.toString()): ''}} />
                
                {/* { data && data.answer ? this.convertMdtoHtml(data.answer.toString()): ''} */}
            </div> 
        )
    }

}