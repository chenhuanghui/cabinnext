export default class GridItemType1 extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appPlNerLpniDebcQ');

        base('Partner_Listing').find(this.props.mId, function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({data:record.fields})
        });
    }
    
    render() {
        const {data} = this.state;
        return(
            
        <div>
            {
                data && data.logo
                ?
                <div className="_192cr6q3">
                    <div className="_11odcm8a">
                        <div className="_7mus82a">
                            <div className="_hxt6u1e">
                                <div className="_4626ulj">
                                    <img className="_1cb9q3xq" src={data.logo[0].url} />
                                    <div className="_10xjrv2u"></div>
                                </div>
                            </div>
                            <div className="_18sw8pz">
                                <div className="_h1esue">{data.type}</div>
                            </div>
                        </div>
                        <div className="_csxadw">
                            <div className="_138jip5">
                                <div className="_ford54"><span className="item-title">{data.name}</span></div>
                                <div className="_18va8m6">
                                    <span className="item_desc">{data.desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ''
            }
            
        </div>
                           
        )
    }
}