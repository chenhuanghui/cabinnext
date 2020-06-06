import $ from 'jquery';

export default class Header extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            // dataStep:[]
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');
        
        // base('Step_List').find('recGoNwKrEvQwwD2a', function(err, record) {
        //     if (err) { console.error(err); return; }
        //     console.log('Step Store List', record.fields);
        //     currentComponent.setState({dataStep:record.fields})
        // });
    }
    

    render() {
        return(
            <div className="uHRtj">
                <section className="_3dkyZ">
                    <div className="xCnWT">
                        <div className="_1YJNz A5Odc">
                            <div className="QiiJu _3h6xd">
                                <div className="_24BiD iDgOU">
                                    <h4 className="oaimY _3ZtUV">{this.props.dataExploreStoreList.section3_line1}</h4>
                                </div>
                                <p className="oaimY _3ZtUV">{this.props.dataExploreStoreList.section3_line2}</p>
                            </div>

                            <div className="_3unZR">
                                <div className="HQy2y">
                                    <img src={this.props.dataExploreStoreList.section3_img1} className="_3vrr0"/>
                                    <a className="_2at62" href="#">
                                        <p className="TGPP5"><span>Create an online presence for your business</span>
                                            <svg className="C6-9n" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="11" height="8" fill="white"></rect>
                                                <path d="M7.17157 0.146446L10.3536 3.32843C10.5488 3.52369 10.5488 3.84027 10.3536 4.03553L7.17157 7.21751C6.97631 7.41278 6.65973 7.41278 6.46447 7.21751C6.2692 7.02225 6.2692 6.70567 6.46447 6.51041L8.79289 4.18198L3.65601e-07 4.18198L2.78178e-07 3.18198L8.79289 3.18198L6.46447 0.853553C6.2692 0.658291 6.2692 0.341708 6.46447 0.146446C6.65973 -0.0488161 6.97631 -0.0488162 7.17157 0.146446Z" fill="currentColor"></path>
                                            </svg>
                                        </p>
                                    </a>
                                </div>
                                <div className="HQy2y">
                                    <img src={this.props.dataExploreStoreList.section3_img2} className="_3vrr0"/>
                                    <a className="_2at62" href="#">
                                        <p className="TGPP5"><span>Create an online presence for your business</span>
                                            <svg className="C6-9n" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="11" height="8" fill="white"></rect>
                                                <path d="M7.17157 0.146446L10.3536 3.32843C10.5488 3.52369 10.5488 3.84027 10.3536 4.03553L7.17157 7.21751C6.97631 7.41278 6.65973 7.41278 6.46447 7.21751C6.2692 7.02225 6.2692 6.70567 6.46447 6.51041L8.79289 4.18198L3.65601e-07 4.18198L2.78178e-07 3.18198L8.79289 3.18198L6.46447 0.853553C6.2692 0.658291 6.2692 0.341708 6.46447 0.146446C6.65973 -0.0488161 6.97631 -0.0488162 7.17157 0.146446Z" fill="currentColor"></path>
                                            </svg>
                                        </p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <style jsx>{`
                        ._1YJNz {grid-column:span 12}
                        h4._3ZtUV {
                            line-height:1.8; 
                            font-size: 2rem !important;
                            color: var(--light-color);
                            font-weight; 800;
                        }
                        p._3ZtUV {
                            line-height:1.8; 
                            font-size: 1rem;
                            margin-top: 0px;
                        }
                        
                        .uHRtj {
                            background-color: #fff;
                            padding: 5rem 0 !important;
                        }

                        ._3unZR {
                            display: grid;
                            grid-template-columns: repeat(12,1fr);
                            grid-column-gap: 4rem;
                        }
                        .HQy2y {
                            grid-column: span 6;
                            transition: box-shadow .2s;
                            cursor: pointer;
                        }
                        ._3vrr0 {
                            height: 200px;
                            margin-right: 3.2rem;
                        }
                        .TGPP5 {
                            color: #008060;
                            font-size: 1.1rem;
                            line-height: 1.5rem;
                            font-weight: 600;
                            margin-top: 1.2rem;
                        }
                    `}</style>
            </div>
            
            
        )
    }
}