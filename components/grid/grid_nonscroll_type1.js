import React from 'react';

export default class GridNonScrollType1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.grid_data !== prevProps.grid_data) {
            let currentComponent = this;
            let temp = [];
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');
            
            this.props.grid_data.forEach(element => {
                base('CategoryFB').find(element, function(err, record) {
                    if (err) { console.error(err); return; }
                    temp.push(record.fields);
                    currentComponent.setState({data:temp})
                });
                
            });

            
            console.log('grid non-scroll updated');            
        }                
    }

    render () {
        const {data} = this.state;
        return (
            // grid non-scroll type 1
            <div className="example-merchants">
                { data && data.map((p) => (
                    <div className="example-merchant" key={p.toString()}>
                        <div className="block example-merchant__block">
                            <span className="image lazyload-image block__image">
                                <span className="lazyload-image__placeholder">
                                        <img src={p.image[0].url} />
                                </span>
                            </span>
                            <div className="example-merchant__link">
                                <p className="block__content example-merchant__vertical heading--5">{p.name}</p>
                            </div>
                        </div>            
                    </div>
                ))}
                
            </div>
        )
    }
}