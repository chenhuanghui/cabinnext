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
            // <section className="section section--tight">
            //     <div className="grid">
            //             <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
            //                 <div className="block start-block">
            //                     <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/707876133647c5b92234e7171d999d4b.svg" />
            //                     <h3 className="block__heading heading--4">{dataExploreStoreList.block1_line1}</h3>
            //                     <p className="block__content">{dataExploreStoreList.block1_line2}</p>
            //                 </div>
            //             </div>

            //             <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
            //                 <div className="block start-block">
            //                     <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/707876133647c5b92234e7171d999d4b.svg" />
            //                     <h3 className="block__heading heading--4">{dataExploreStoreList.block2_line1}</h3>
            //                     <p className="block__content">{dataExploreStoreList.block2_line2}</p>
            //                 </div>
            //             </div>

            //             <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
            //                 <div className="block start-block">
            //                     <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/707876133647c5b92234e7171d999d4b.svg" />
            //                     <h3 className="block__heading heading--4">{dataExploreStoreList.block3_line1}</h3>
            //                     <p className="block__content">{dataExploreStoreList.block3_line2}</p>
            //                 </div>
            //             </div>

            //             <div className="grid__item grid__item--tablet-up-half grid__item--desktop-up-quarter">
            //                 <div className="block start-block">
            //                     <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/707876133647c5b92234e7171d999d4b.svg" />
            //                     <h3 className="block__heading heading--4">{dataExploreStoreList.block4_line1}</h3>
            //                     <p className="block__content">{dataExploreStoreList.block4_line2}</p>
            //                 </div>
            //             </div>
            //     </div>
            //     <style jsx>{`
            //     .start-block .block__heading {
            //         font-size: 1.125rem;
            //         line-height: 1.5rem;
            //         font-weight: 600;
            //         color: #004c3f;
            //         margin: 10px 0px 5px 0px;
            //     }
            //     .start-block .block__heading .block__content{}
            //     `}</style>
            // </section>
            <div className="A0_Wj">
                <section className="_3dkyZ">
                    <div className="xCnWT">
                        <div className="_1YJNz">
                            <div className="_2w12M">
                                <div className="_24BiD _1osS7">
                                    <h4 className="oaimY _3ZtUV">Build an online business, fast</h4>
                                </div>
                                <div className="_2OXun">
                                    <div className="a6STt _3zwi9 align_center"></div>
                                    <div className="_1F9Hq _3zwi9 align_center">
                                        <img aria-hidden="true" alt="1" src="https://cdn.shopify.com/shopifycloud/start-web/assets/25a65837ca1ae46a3d33839f3d54924b.svg"/>
                                    </div>
                                    {/* <div className="_3cHUR _3zwi9">Start your free trial</div> */}
                                    <div className="a6STt _3zwi9 align_center">
                                        <div className="_2b5gw">
                                            <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg"/>
                                        </div>
                                    </div>
                                    <div className="_1F9Hq _3TUx6 align_center">
                                        <img aria-hidden="true" alt="2" src="https://cdn.shopify.com/shopifycloud/start-web/assets/3f805a9d31c193f7c49b58965d85072f.svg"/>
                                    </div>
                                    {/* <div className="_3cHUR _3TUx6">Learn with Shopify Compass</div> */}
                                    <div className="a6STt _3TUx6 align_center">
                                        <div className="_2b5gw">
                                            <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg"/>
                                        </div>
                                    </div>
                                    <div className="_1F9Hq _31X8p align_center">
                                        <img aria-hidden="true" alt="3" src="https://cdn.shopify.com/shopifycloud/start-web/assets/c214e4562ee8dbc175cd4b3a9c525d2b.svg"/>
                                    </div>
                                    {/* <div className="_3cHUR _31X8p">Launch your online store</div> */}
                                    <div className="a6STt _31X8p align_center">
                                        <div className="_2b5gw">
                                            <img aria-hidden="true" alt="" src="https://cdn.shopify.com/shopifycloud/start-web/assets/14c0c40a91126d36957b951628260ca8.svg"/>
                                        </div>
                                    </div>
                                    <div className="_1F9Hq _3gPeS align_center">
                                        <img aria-hidden="true" alt="4" src="https://cdn.shopify.com/shopifycloud/start-web/assets/6654ea59e4193d3accd86b88213c48ab.svg"/>
                                    </div>
                                    <div className="a6STt _3zwi9 align_center"></div>
                                    {/* <div className="_3cHUR _3gPeS">Make your first online sale, then your second. You get the idea</div> */}
                                </div>
                                <div className="group_content">
                                    <div className="_3cHUR _3zwi9 align_center">Start your free trial</div>
                                    <div className="_3cHUR _3zwi9 align_center">Learn with Shopify Compass</div>
                                    <div className="_3cHUR _3zwi9 align_center">Launch your online store</div>
                                    <div className="_3cHUR _3zwi9 align_center">Make your first online sale, then your second. You get the idea</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <style jsx>{`
                .A0_Wj {
                    padding: 9rem 0;
                    background: #faf9f8;
                }
                .xCnWT {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(12,1fr);
                    grid-column-gap: 4rem;
                }
                ._1osS7 {
                    white-space: pre-wrap;
                }
                ._1osS7 h4 {
                    color: #008060;
                    line-height: 2.4rem;
                    margin-bottom: 7.5rem;
                    font-size: 35px;
                    font-weight: 400;
                }

                ._2OXun {    
                    display: grid;
                    grid-template-columns: 1fr 1fr 3fr 1fr 3fr 1fr 3fr 1fr 1fr;
                    grid-column-gap: 20px;
                    padding-bottom: 20px;
                }

                .group_content {    
                    display: grid;
                    grid-template-columns: 3fr 3fr 3fr 3fr;
                    grid-column-gap: 20px;
                }
                .align_center {text-align:center}
                

            `}</style>
            </div>
        )
    }
}