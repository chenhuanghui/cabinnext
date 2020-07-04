import React from 'react';
import Link from 'next/link'
import GridNonScroll from '../grid/grid_nonscroll_type1'
import Col3Lines from '../col/col_3lines'

export default class SectionType2 extends React.Component {
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

            base('Section_Type_2').find(this.props.section_id, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
                console.log('section type 2 data: ', record.fields)
            });    

            console.log('section_type2 updated');
        }                
    }

    render () {
        const {data} = this.state
        return (
            //Section Type 2
            <section className="section background-green-80" id="green_board">
                <div className="grid">
                    <div className="grid__item">
                        <section className="section section--tight">
                            <div className="section-heading section-heading--mobile-up-align-left">
                                <h2 className="section-heading__heading heading--1 section-heading__heading--regular color-white">{data.name}</h2>
                                <div className="grid">
                                    <div className="grid__item grid__item--wide-up-9">
                                        <p className="section-heading__subhead color-white">{data.desc}</p>
                                    </div>              
                                    <div className="grid__item grid__item--wide-up-3 example-merchants__more">
                                        <Link href='/categories'>
                                            <a className="color-white link link--secondary">
                                                {data.btn_title}
                                                <svg aria-hidden="true" viewBox="0 0 48 16" className="link__arrow" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg"><g className="link__arrow-inner"><line x1="0" y1="8" x2="46" y2="8"></line><polyline points="39.5 1, 46.5 8, 39.5 15"></polyline></g></svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <GridNonScroll grid_data={data.categories}/>
                            
                        </section>

                        <section className="section section--tight">
                            <div className="section-heading section-heading--mobile-up-align-left">
                                <h2 className="section-heading__heading section-heading__heading--regular color-white">{data.title}</h2>
                            </div>

                            <div className="grid">
                                
                                { data && data.path_col && data.path_col.map((c) => (
                                    <Col3Lines col_id = {c} key={c.toString()} />  
                                ))}
                            </div>
                        </section>
                    </div>
                </div>


            <style jsx>{`

            `}</style>
        </section>
            
        )
    }
}