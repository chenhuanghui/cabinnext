import $ from 'jquery';

export default class Header extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataExploreStoreList:[]
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');
        
        // load data page
        base('Explore_Store_List').find('recVEvGkcO1yZjJMH', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('data page explore stores list', record);
            currentComponent.setState({dataExploreStoreList:record.fields})
        });
    }
    

    render() {
        const {dataExploreStoreList} = this.state;
        return(
            <div class="A0_Wj">
                <section class="_3dkyZ">
                    <div class="xCnWT">
                        <div class="_1YJNz">
                            <div class="_2w12M">
                                <div class="_24BiD _1osS7"><h4 class="oaimY _3ZtUV">Build an online business, fast</h4></div>
                                <div class="_2OXun">
                                    <div class="_1F9Hq _3zwi9"><img aria-hidden="true" alt="1" src="https://cdn.shopify.com/shopifycloud/start-web/assets/25a65837ca1ae46a3d33839f3d54924b.svg" /></div>
                                    <div class="_3cHUR _3zwi9">Start your free trial</div>
                                    <div class="a6STt _3zwi9">
                                        <div class="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div>
                                    </div>
                                    <div class="_1F9Hq _3TUx6"><img aria-hidden="true" alt="2" src="https://cdn.shopify.com/shopifycloud/start-web/assets/3f805a9d31c193f7c49b58965d85072f.svg" /></div>
                                    <div class="_3cHUR _3TUx6">Learn with Shopify Compass</div>
                                    <div class="a6STt _3TUx6">
                                        <div class="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div>
                                    </div>
                                    <div class="_1F9Hq _31X8p"><img aria-hidden="true" alt="3" src="https://cdn.shopify.com/shopifycloud/start-web/assets/c214e4562ee8dbc175cd4b3a9c525d2b.svg" /></div>
                                    <div class="_3cHUR _31X8p">Launch your online store</div>
                                    <div class="a6STt _31X8p">
                                        <div class="_2b5gw"><img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg" /></div>
                                    </div>
                                    <div class="_1F9Hq _3gPeS"><img aria-hidden="true" alt="4" src="https://cdn.shopify.com/shopifycloud/start-web/assets/6654ea59e4193d3accd86b88213c48ab.svg" /></div>
                                    <div class="_3cHUR _3gPeS">Make your first online sale, then your second. You get the idea</div>
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