import React from 'react';

export default class Back2Top extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
               
    }

    render () {
        const {data} = this.state

        return (
            //Back To Top
            <div className="grid">
                <div className="grid__item back-to-top-link-wrapper">
                    <a className="back-to-top-link link-scroll-to styled-link styled-link--skin-inherit" href="#PageContainer">
                        Back to top
                        <svg className="icon styled-link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M17.707 9.293l-5-5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L14.586 9H3c-.553 0-1 .448-1 1s.447 1 1 1h11.586l-3.293 3.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l5-5c.39-.39.39-1.023 0-1.414z"/>
                        </svg>
                    </a>
                </div>
            </div>
                       
        )
    }
}