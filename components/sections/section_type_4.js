import React from 'react';
import ColWithOutIcon from '../col/col_without_icon'

export default class SectionType4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
        console.log('section_type 4 update');
        if (this.props.section_id !== prevProps.section_id) {
            let currentComponent = this;
        
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

            base('Section_Type_4').find(this.props.section_id, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
                console.log('section type 4 data: ', record.fields)
            });    

            console.log('section_type 4 updated');
        }                
    }

    render () {
        const {data} = this.state

        return (
            //Section Type 4
            <section className="section section--help background-yellow-0 js-waypoint-track">
                <div className="grid">
                    <div className="grid__item grid__item--tablet-up-two-thirds grid__item--desktop-up-half">
                        <div className="section--help__content">
                            <div className="section-heading section-heading--mobile-up-align-left">
                                <h2 className="section-heading__heading heading--1 section--help__heading section-heading__heading--regular">{data.name}</h2>
                            </div>
                            <div className="grid grid--equal-height">
                                {
                                    data && data.col_data && data.col_data.map((c) => (
                                        <ColWithOutIcon col_id= {c} key={c.toString()}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="picture--cover section--help__picture">
                    {
                        data && data.image 
                        ? <img className="image" src={data.image[0].url} />
                        : ''
                    }
                    
                </div>
                {/* <img className="picture picture--cover section--help__picture" src={props.dataSupport.img_src}/> */}
                <style jsx>{`
                    section--help__picture{object-position: right center;}
                `} </style>
            </section>
            
        )
    }
}