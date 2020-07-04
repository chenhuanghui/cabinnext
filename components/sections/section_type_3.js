import React from 'react';
import GridNonScroll from '../grid/grid_nonscroll_type1'
import Col3Lines from '../col/col_3lines'
import ImageText from '../text_image/image_text'
import TextImage from '../text_image/text_image'

export default class SectionType3 extends React.Component {
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

            base('Section_Type_3').find(this.props.section_id, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
                console.log('section type 3 data: ', record.fields)
            });    

            console.log('section_type3 updated');
        }                
    }

    render () {
        const {data} = this.state
        var i = 0;
        return (
            //Section Type 3
            <section className="section homepage-pillars js-waypoint-track">
                <div className="grid">
                    <div className="section-heading pillars__heading-wrapper">
                        <h2 className="section-heading__heading heading--1 heading--2">{data.name}</h2>
                        <p className="section-heading__subhead heading--2 text-major pillars__subhead">{data.desc}</p>
                    </div>

                    {
                        data && data.pillar_data && data.pillar_data.map((p) => {
                            i++;
                            return i%2 == 0
                            ? <ImageText mId = {p} key={p.toString()}/>
                            : <TextImage mId = {p} key={p.toString()}/>                            
                        })
                    }
                    
                </div>
                <style jsx>{`
                    .pillars__subhead {width: 85% !important;}
                `}</style>
        
    </section>
            
        )
    }
}