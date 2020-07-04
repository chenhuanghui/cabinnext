import React from 'react';

export default class PricingTableItem extends React.Component {
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

        base('Pricing_Item').find(this.props.item_id, function(err, record) {
            if (err) { console.error(err); return; }
            console.log('pricing Item: ', record.fields)
            currentComponent.setState({data:record.fields})
            
        });
    }

    componentDidUpdate(prevProps) {
        // if (this.props.item_id !== prevProps.item_id) {
        //     let currentComponent = this;
        //     var Airtable = require('airtable');
        //     var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        //     base('Pricing_Item').find(this.props.item_id, function(err, record) {
        //         if (err) { console.error(err); return; }
        //         console.log('pricing Item: ', record.fields)
        //         currentComponent.setState({data:record.fields})
                
        //     });
        // }

    }

    render () {
        const {data} = this.state;

        return (
            <>
            {
                data.type==`sub_group` 
                ?  
                    <tr key={data.toString()}>
                        <th scope="col" colSpan="2">
                            <span className="heading--5 pricing-table__section-heading">{data.name}</span>
                        </th>
                    </tr>  
                : 
                    <tr className={data.id} key={data.toString()}> 
                        <th scope="row" id="f-website">
                            <div className="pricing-table__feature-name">
                                <dl className="feature-label"><dt className="feature-label__text">{data.name}</dt>
                                <dd className="feature-label__description">{data.desc}</dd>
                            </dl>
                            </div>
                        </th>
                        <td headers="p-0 f-website"> 
                            <span className="pricing-table__feature-value">
                            { (data.value == 1 ) 
                            ? <svg className="icon icon--fill-primary icon--in-plan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.7 40"><path d="M16.7 30l-7.4-7.9c-.8-.8-.6-2 .4-2.6 1-.6 2.4-.5 3.1.3l3.7 4 11.3-13c.7-.8 2.1-1 3.1-.4s1.2 1.8.5 2.6L16.7 30z" /></svg> 
                            : data.value
                            }
                            </span>
                        </td>
                    </tr>
            }
            </>
        )
    }

}