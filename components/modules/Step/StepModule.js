export default class Header extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataStep:[]
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        base('Step_List').find('recGoNwKrEvQwwD2a', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('Step Store List', record.fields);
            currentComponent.setState({dataStep:record.fields})
        });
        
    }
    
    render() {
        const {dataStep} = this.state;
        return(
            <div className="A0_Wj">
                <section className="_3dkyZ">
                    <div className="xCnWT">
                        <div className="_1YJNz">
                            <div className="_2w12M">
                                <div className="_24BiD _1osS7"><h4 className="oaimY _3ZtUV">{dataStep.title}</h4></div>
                                <div className="_2OXun">
                                    <div className="_1F9Hq _3zwi9"><img aria-hidden="true" alt="1" src="https://cdn.shopify.com/shopifycloud/start-web/assets/25a65837ca1ae46a3d33839f3d54924b.svg" /></div>
                                    <div className="_3cHUR _3zwi9">{dataStep.step1}</div>
                                    <div className="a6STt _3zwi9">
                                        <div className="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div>
                                    </div>
                                    <div className="_1F9Hq _3TUx6"><img aria-hidden="true" alt="2" src="https://cdn.shopify.com/shopifycloud/start-web/assets/3f805a9d31c193f7c49b58965d85072f.svg" /></div>
                                    <div className="_3cHUR _3TUx6">{dataStep.step2}</div>
                                    <div className="a6STt _3TUx6">
                                        <div className="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div>
                                    </div>
                                    <div className="_1F9Hq _31X8p"><img aria-hidden="true" alt="3" src="https://cdn.shopify.com/shopifycloud/start-web/assets/c214e4562ee8dbc175cd4b3a9c525d2b.svg" /></div>
                                    <div className="_3cHUR _31X8p">{dataStep.step3}</div>
                                    <div className="a6STt _31X8p">
                                        <div className="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div>
                                    </div>
                                    <div className="_1F9Hq _3gPeS"><img aria-hidden="true" alt="4" src="https://cdn.shopify.com/shopifycloud/start-web/assets/6654ea59e4193d3accd86b88213c48ab.svg" /></div>
                                    <div className="_3cHUR _3gPeS">{dataStep.step4}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        <style jsx>{`
            ._1YJNz{grid-column: span 12;}
        `}</style>
            </div>
        )
    }
}