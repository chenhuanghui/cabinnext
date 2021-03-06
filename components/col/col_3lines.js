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
            //Col 3 Lines
            <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
                <div className="block start-block">
                    <svg className="icon icon--size-small start-block__icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M41 6a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H7V12h31v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9 6zM11 9H7V6h4zm3 0V6h24v3zm27 12v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2h-3v-3h4a2 2 0 0 1 2 2zm-.87 10.67L27.5 25.81a1.5 1.5 0 0 0-2.1 1.68l3.13 14.33A1.5 1.5 0 0 0 29.79 43H30a1.5 1.5 0 0 0 1.33-.8l3.07-5.8 5.61-2a1.5 1.5 0 0 0 .14-2.78zm-7.29 2.1a1.5 1.5 0 0 0-.83.71l-1.43 2.69L29 29.81l6.53 3zM21 33h-3v-5h3zm3 7v1a1 1 0 0 1-1 1h-3a2 2 0 0 1-2-2v-4h3v3h2a1 1 0 0 1 1 1zm8-18h-5v-3h5zm-12-3h4v3h-3v3h-3v-4a2 2 0 0 1 2-2z"/></svg>
                    <h3 className="block__heading heading--4 color-white">{data.name}</h3>
                    <p className="block__content color-white">{data.desc}</p>
                </div>
            </div>
        )
    }
}

{/* 
icon svg sample
================
<svg className="icon icon--size-small start-block__icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <path d="M41 6a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H7V12h31v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9 6zM11 9H7V6h4zm3 0V6h24v3zm27 12v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2h-3v-3h4a2 2 0 0 1 2 2zm-.87 10.67L27.5 25.81a1.5 1.5 0 0 0-2.1 1.68l3.13 14.33A1.5 1.5 0 0 0 29.79 43H30a1.5 1.5 0 0 0 1.33-.8l3.07-5.8 5.61-2a1.5 1.5 0 0 0 .14-2.78zm-7.29 2.1a1.5 1.5 0 0 0-.83.71l-1.43 2.69L29 29.81l6.53 3zM21 33h-3v-5h3zm3 7v1a1 1 0 0 1-1 1h-3a2 2 0 0 1-2-2v-4h3v3h2a1 1 0 0 1 1 1zm8-18h-5v-3h5zm-12-3h4v3h-3v3h-3v-4a2 2 0 0 1 2-2z"/>
</svg>
<svg className="icon icon--size-small start-block__icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <path d="M41.75,8.67,38,3.11A2.5,2.5,0,0,0,36,2H9A2.5,2.5,0,0,0,7,3.11L3.25,8.67A1.5,1.5,0,0,0,3,9.5v3a7.48,7.48,0,0,0,3,6H6v13A3.5,3.5,0,0,0,9.5,35H15v2.5A2.5,2.5,0,0,1,12.5,40H12a1.5,1.5,0,0,0,0,3H33a1.5,1.5,0,0,0,0-3h-.5A2.5,2.5,0,0,1,30,37.5V35h5.5A3.5,3.5,0,0,0,39,31.5v-13h0a7.48,7.48,0,0,0,3-6v-3A1.5,1.5,0,0,0,41.75,8.67ZM9.3,5H35.7l2.66,4H6.64Zm17.79,7a1.64,1.64,0,0,0-.09.5,4.5,4.5,0,0,1-9,0,1.64,1.64,0,0,0-.09-.5ZM6,12h9.09a1.64,1.64,0,0,0-.09.5,4.5,4.5,0,0,1-9,0ZM27.61,40H17.39A5.4,5.4,0,0,0,18,37.5V35h9v2.5A5.4,5.4,0,0,0,27.61,40ZM36,31.5a.5.5,0,0,1-.5.5H9.5a.5.5,0,0,1-.5-.5V19.85a7.41,7.41,0,0,0,1.5.15,7.49,7.49,0,0,0,6-3,7.47,7.47,0,0,0,12,0,7.49,7.49,0,0,0,6,3,7.41,7.41,0,0,0,1.5-.15ZM34.5,17A4.51,4.51,0,0,1,30,12.5a1.64,1.64,0,0,0-.09-.5H39v.5A4.51,4.51,0,0,1,34.5,17Z"/>
</svg>
<svg className="icon icon--size-small start-block__icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <path d="M42.5 11.82v28a1.5 1.5 0 0 1-3 0v-27L23 5.46 6.5 12.8v27a1.5 1.5 0 0 1-3 0v-28a1.5 1.5 0 0 1 .89-1.37l18-8a1.5 1.5 0 0 1 1.22 0l18 8a1.5 1.5 0 0 1 .89 1.39zM32.5 28a1.5 1.5 0 0 0-1.5 1.5A8.48 8.48 0 0 1 17.05 36h2.45a1.5 1.5 0 0 0 0-3h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 3 0v-2.32a11.47 11.47 0 0 0 19-8.68 1.5 1.5 0 0 0-1.5-1.5zM14 29.5A8.48 8.48 0 0 1 27.95 23H25.5a1.5 1.5 0 0 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-3 0v2.32a11.47 11.47 0 0 0-19 8.68 1.5 1.5 0 0 0 3 0z"/>
</svg>
<svg className="icon icon--size-small start-block__icon block__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <path d="M12.5 21A6.5 6.5 0 1 0 6 14.5a6.5 6.5 0 0 0 6.5 6.5zm0-10A3.5 3.5 0 1 1 9 14.5a3.5 3.5 0 0 1 3.5-3.5zM30 21a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm0-13a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm13 25.5v4a1.5 1.5 0 0 1-3 0v-4c0-3.77-2.52-6.5-6-6.5h-7.5a6.51 6.51 0 0 0-6.5 6.5v4a1.5 1.5 0 0 1-3 0v-4a9.51 9.51 0 0 1 9.5-9.5H34c5.13 0 9 4.08 9 9.5zm-27-8a1.5 1.5 0 0 1-1.5 1.5h-4A5.51 5.51 0 0 0 5 32.5V36a1.5 1.5 0 0 1-3 0v-3.5a8.51 8.51 0 0 1 8.5-8.5h4a1.5 1.5 0 0 1 1.5 1.5z"/>
</svg> 

*/}