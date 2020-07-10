export default class GridItemType1 extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
    
    }
    
    render() {
        return(
            <div>
                {
                    <div className="_192cr6q3">
                        <div className="_11odcm8a">
                            <div className="_7mus82a">
                                <div className="_hxt6u1e">
                                    <div className="_4626ulj">
                                        <img className="_1cb9q3xq" src={this.props.logo} />
                                        <div className="_10xjrv2u"></div>
                                    </div>
                                </div>
                                <div className="_18sw8pz">
                                    <div className="_h1esue">{this.props.type}</div>
                                </div>
                            </div>
                            <div className="_csxadw">
                                <div className="_138jip5">
                                    <div className="_ford54"><span className="item-title">{this.props.name}</span></div>
                                    <div className="_18va8m6">
                                        <span className="item_desc">{this.props.desc}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>          
        )
    }
}