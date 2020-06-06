export default class StoreSection3 extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');
        
    }
    

    render() {
        return(
            <div className="_1sx1020z">
                <div>
                    <div className="_aov0j6">
                        <div>
                            <div className="_115dvcs">
                                <div className="_1ahen39n">
                                    <div>
                                        <div className="_1jhv5oh">
                                            <h3 className="_1mafdrow"><div>{this.props.title}</div></h3>
                                            <div className="_2glt9f">{this.props.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="_kbiv5c">
                                <div className="_19iz9mwo">
                                    {this.props.dataStore.map((p) => {
                                        return p.is_available==true 
                                        ? 
                                            <div className="_1xizdrk">
                                                <div>
                                                    <div className="_1xl0u0x" role="presentation">
                                                        <a target="_blank" href={p.href} className="_6lth7f">
                                                            <div className="_6i8igo">
                                                                <div className="_e296pg">
                                                                    <div className="_hxt6u1e">
                                                                        <div className="_4626ulj">
                                                                            <img className="_91slf2a" aria-hidden="true"
                                                                                src={p.image}
                                                                            />
                                                                            <div className="_10xjrv2u"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="_1ycij1l">{p.name}</div>
                                                            <div className="_1qusvl7">{p.addr}</div>
                                                            <div className="_8fcvqx">
                                                                <ul className="_11hau3k">
                                                                    <li className="_g86r3e"><span>Tình trạng:</span> {p.status}</li>
                                                                    <li className="_g86r3e"><span>Loại cabin:</span> {p.type} 
                                                                         (<span className="_1cfjn4v">
                                                                            <svg className="star-icon" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
                                                                                <path
                                                                                    d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>)
                                                                    </li>
                                                                    <li className="_g86r3e"><span>Bàn giao:</span> {p.release_date}</li>
                                                                    <li className="_g86r3e concept"><span>{p.concept}</span></li>
                                                                </ul>
                                                            </div>
                                                        </a>

                                                        <div className="_1lso56r">
                                                            <div className="_1vl7zve8 ready_for_sale">{p.status}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                            <div className="_1xizdrk">
                                                <div>
                                                    <div className="_1xl0u0x" role="presentation">
                                                        <a target="_blank" href={p.href} className="_6lth7f">
                                                            <div className="_6i8igo">
                                                                <div className="_e296pg">
                                                                    <div className="_hxt6u1e">
                                                                        <div className="_4626ulj">
                                                                            <img className="_91slf2a" aria-hidden="true"
                                                                                src={p.image}
                                                                            />
                                                                            <div className="_10xjrv2u"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="_1ycij1l">{p.name}</div>
                                                            <div className="_1qusvl7">{p.addr}</div>
                                                            <div className="_8fcvqx">
                                                                <ul className="_11hau3k">
                                                                    <li className="_g86r3e"><span>Tình trạng:</span> {p.status}</li>
                                                                    <li className="_g86r3e"><span>Loại cabin:</span> {p.type} 
                                                                        (<span className="_1cfjn4v">
                                                                            <svg className="star-icon" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
                                                                                <path
                                                                                    d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>)
                                                                    </li>
                                                                    <li className="_g86r3e"><span>Bàn giao:</span> {p.release_date}</li>
                                                                    <li className="_g86r3e concept"><span>{p.concept}</span></li>
                                                                </ul>
                                                            </div>
                                                        </a>

                                                        <div className="_1lso56r">
                                                            <div className="_1vl7zve8">{p.status}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    })}


                                    

                                    


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    ._1sx1020z{background-color: transparent;}
                    ._hxt6u1e{padding-top: 133.333%;}
                    ._10xjrv2u{
                        background-image: url('https://a0.muscache.com/im/pictures/a2a3a611-011b-48be-86f7-5d16cb8a443a.jpg?aki_policy=poster'); 
                        background-size: cover;
                    }
                    ._91slf2a{
                        object-fit: cover;
                    }

                `}</style>
            </div>

            
        )
    }
}