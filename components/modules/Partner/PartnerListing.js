export default class PartnerListing extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataPartnerListing:[]
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');        

        var partnerListing = [];
        base('Partner_Listing').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                record.fields.logo = record.fields.logo[0].url
                partnerListing.push(record.fields);
            });
            currentComponent.setState({dataPartnerListing: partnerListing})
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }
    
    render() {
        const {dataPartnerListing} = this.state;
        return(
            <div>
                <div className="_1sx1020z">
                    <h2 className="section-heading__heading heading--2 next-steps__sign-up-heading">Đối tác của chúng tôi </h2>
                    <div>
                        <div className="_14iivyb">
                            {/* block item */}
                            {dataPartnerListing.map((p) => (
                                <div>
                                    <div className="_192cr6q3">
                                        <div className="_11odcm8a">
                                            <div className="_7mus82a">
                                                <div className="_hxt6u1e">
                                                    <div className="_4626ulj">
                                                        <img className="_1cb9q3xq" src={p.logo} />
                                                        <div className="_10xjrv2u"></div>
                                                    </div>
                                                </div>
                                                <div className="_18sw8pz">
                                                    <div className="_h1esue">{p.type}</div>
                                                </div>
                                            </div>
                                            <div className="_csxadw">
                                                <div className="_138jip5">
                                                    <div className="_ford54"><span className="item-title">{p.name}</span></div>
                                                    <div className="_18va8m6">
                                                        <span className="item_desc">{p.desc}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <style jsx>{`
                ._1sx1020z{background-color: transparent;}
                ._14iivyb{
                    gap: 12px; 
                    margin: 0px -24px; 
                    padding: 4px 24px 8px; 
                    scroll-padding: 0px 24px;
                }
                ._hxt6u1e{
                    padding-top: 67%;
                }
                ._h1esue{
                    background-color: rgb(255, 255, 255); 
                    color: rgb(34, 34, 34);
                }
                ._10xjrv2u{
                    background-image: url('https://a0.muscache.com/im/pictures/7ee8ad00-0480-4b75-843f-1d2e4c01dde6.jpg'); 
                    background-size: cover;
                }
                .item-title {color: rgb(34, 34, 34);}
                .item_desc {color: rgb(113, 113, 113);}
                

                ._1sx1020z {
                    padding-left: 5% !important;
                    padding-right: 5% !important;
                    margin-top: 20px !important;
                    margin-bottom: 20px !important;
                    max-width: 1600px !important;
                }
                ._14iivyb {
                    display: grid !important;
                    grid-auto-flow: column !important;
                    overflow-x: auto !important;
                    overflow-y: hidden !important;
                    scroll-snap-type: x mandatory !important;
                }
                ._14iivyb:nth-child(n) > * {
                    scroll-snap-align: start !important;
                }
                ._192cr6q3 {
                    cursor: pointer !important;
                    position: relative !important;
                    font-family: inherit !important;
                    font-size: inherit !important;
                    line-height: inherit !important;
                    font-weight: inherit !important;
                    color: inherit !important;
                    display: block !important;
                    text-align: inherit !important;
                    height: 100% !important;
                    width: 100% !important;
                    border-radius: 0px !important;
                    outline: none !important;
                    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
                    background: transparent !important;
                    border-width: initial !important;
                    border-style: none !important;
                    border-color: initial !important;
                    border-image: initial !important;
                    margin: 0px !important;
                    padding: 0px !important;
                    text-decoration: none !important;
                }
                ._11odcm8a {
                    width: 272px !important;
                    height: 100% !important;
                    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px !important;
                    border-radius: 16px !important;
                }
                ._7mus82a {
                    position: relative !important;
                    border-top-left-radius: 16px !important;
                    border-top-right-radius: 16px !important;
                    background: rgb(72, 72, 72) !important;
                    overflow: hidden !important;
                }
                ._hxt6u1e {
                    position: relative !important;
                    background-position: 50% 50% !important;
                    background-repeat: no-repeat !important;
                }
                ._4626ulj {
                    -webkit-box-pack: center !important;
                    -webkit-box-align: center !important;
                    position: absolute !important;
                    top: 0px !important;
                    bottom: 0px !important;
                    left: 0px !important;
                    right: 0px !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                ._1cb9q3xq {
                    height: 100% !important;
                    width: 100% !important;
                }
                ._1cb9q3xq {
                    // top: 0px !important;
                    // bottom: 0px !important;
                    // left: 0px !important;
                    // right: 0px !important;
                    // height: 0px !important;
                    // width: 0px !important;
                    // position: absolute !important;
                }
                ._18sw8pz {
                    right: 16px !important;
                    position: absolute !important;
                    top: 16px !important;
                }
                ._h1esue {
                    font-size: 10px !important;
                    line-height: 12px !important;
                    display: inline-block !important;
                    font-weight: 800 !important;
                    padding-bottom: 4px !important;
                    padding-left: 6px !important;
                    padding-right: 6px !important;
                    padding-top: 4px !important;
                    text-transform: uppercase !important;
                    border-radius: 4px !important;
                }
                ._csxadw {
                    padding-left: 16px !important;
                    padding-top: 12px !important;
                    padding-right: 16px !important;
                    padding-bottom: 16px !important;
                }
                ._138jip5 {
                    white-space: normal !important;
                }
                ._ford54 {
                    font-size: 15px !important;
                    line-height: 22px !important;
                    max-height: 44px !important;
                    text-overflow: ellipsis !important;
                    display: -webkit-box !important;
                    -webkit-line-clamp: 2 !important;
                    -webkit-box-orient: vertical !important;
                    color: rgb(34, 34, 34) !important;
                    font-weight: 600 !important;
                    white-space: pre-line !important;
                    overflow: hidden !important;
                }
                ._18va8m6 {
                    font-size: 13px !important;
                    line-height: 18px !important;
                    max-height: 54px !important;
                    text-overflow: ellipsis !important;
                    display: -webkit-box !important;
                    -webkit-line-clamp: 3 !important;
                    -webkit-box-orient: vertical !important;
                    color: rgb(113, 113, 113) !important;
                    font-weight: 400 !important;
                    margin-top: 4px !important;
                    white-space: pre-line !important;
                    overflow: hidden !important;
                }

                @media screen and (min-width: 46.875em){
                 
                }
                
                @media screen and (min-width: 67.5em){
                    ._1sx1020z {
                        padding-left: 80px !important;
                        padding-right: 80px !important;
                    }
                }



                `}</style>
            </div>
        )
    }
}