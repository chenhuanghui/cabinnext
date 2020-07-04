import React from 'react';

export default class StationItem extends React.Component {
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

        base('Station_Item').find(this.props.stationID, function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
            console.log('station Item: ', record.fields)
        });
    }

    componentDidUpdate(prevProps) {
        

    }

    render () {
        const {data} = this.state;
        console.log('station data: ', data);

        return (
            <div>
                
            { data && data.is_available == true 
            ? 
                <div className="_1xizdrk video-modal">
                    <div>
                        <div className="_1xl0u0x" role="presentation">
                            <div className="_6lth7f">
                                <div className="_6i8igo">
                                    <div className="_e296pg">
                                        <div className="_hxt6u1e">
                                            <div className="_4626ulj">
                                                {
                                                    data.image
                                                    ? <img className="_91slf2a" aria-hidden="true"src={ data.image[0].url}/>
                                                    : ''
                                                }
                                                
                                                <div className="_10xjrv2u"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="_1ycij1l">{ data.name}</div>
                                <div className="_1qusvl7">{ data.addr}</div>
                                <div className="_8fcvqx">
                                    <ul className="_11hau3k">
                                        <li className="_g86r3e"><span>Tình trạng:</span> { data.status}</li>
                                        <li className="_g86r3e"><span>Loại cabin:</span> { data.type} 
                                            (<span className="_1cfjn4v">
                                                <svg className="star-icon" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></svg>
                                            </span>)
                                        </li>
                                        <li className="_g86r3e"><span>Bàn giao:</span> { data.release_date}</li>
                                        <li className="_g86r3e"><span>Thời gian làm việc:</span> { data.time}</li>
                                        <li className="_g86r3e concept"><span>{ data.concept}</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="_1lso56r">
                                <div className="_1vl7zve8 ready_for_sale">{data.status}</div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div className="_1xizdrk">
                    <div>
                        <div className="_1xl0u0x" role="presentation">
                            <div className="_6lth7f">
                                <div className="_6i8igo">
                                    <div className="_e296pg">
                                        <div className="_hxt6u1e">
                                            <div className="_4626ulj">
                                                {
                                                    data.image
                                                    ? <img className="_91slf2a" aria-hidden="true"src={ data.image[0].url}/>
                                                    : ''
                                                }
                                                <div className="_10xjrv2u"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="_1ycij1l">{ data.name}</div>
                                <div className="_1qusvl7">{ data.addr}</div>
                                <div className="_8fcvqx">
                                    <ul className="_11hau3k">
                                        <li className="_g86r3e"><span>Tình trạng:</span> { data.status}</li>
                                        <li className="_g86r3e"><span>Loại cabin:</span> { data.type} 
                                            (<span className="_1cfjn4v"><svg className="star-icon" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path></svg></span>)
                                        </li>
                                        <li className="_g86r3e"><span>Bàn giao:</span> { data.release_date}</li>
                                        <li className="_g86r3e"><span>Thời gian làm việc:</span> { data.time}</li>
                                        <li className="_g86r3e concept"><span>{ data.concept}</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="_1lso56r">
                                <div className="_1vl7zve8">{ data.status}</div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <style jsx>{`
                    ._hxt6u1e {
                        padding-top: 133.33%;
                    }
                `}</style>
            </div>
        )
    }
}