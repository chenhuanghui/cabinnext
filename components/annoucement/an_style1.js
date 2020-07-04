import React from 'react';

export default class AnnouncementStyle1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.an_id !== prevProps.an_id) {
            let currentComponent = this;
            
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

            base('Announcement').find(this.props.an_id, function(err, record) {
                if (err) { console.error(err); return; }
                currentComponent.setState({data:record.fields})
            });

            console.log('annoucement update');
        }        
        
    }
    render () {
        const {data} = this.state
        return (
            //AnnouncementStyle1
            <div id="Announcements">
                <div className="covid-19-announcement-banner"> 
                    <section className="announcement js-announcement is-active">
                        <div className="announcement__content">
                            {data.line1} 
                            <a className="body-link" href={data.href}> {data.line2}</a>
                        </div>
                    </section>
                </div>
                <style jsx>{`
                    .covid-19-announcement-banner .body-link {
                        color: var(--lighter-color);
                    }
                `}</style>
            </div>
        )
    }
}