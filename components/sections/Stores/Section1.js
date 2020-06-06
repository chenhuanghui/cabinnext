export default class Header extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataForm: []
        }
    }

    componentDidMount() {
        let currentComponent = this;
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');
        

        base('Form_List').find('recUlH3EWGAdbTsPY', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('form list explore', record);
            currentComponent.setState({ dataForm: record.fields })
        });
    }
    

    render() {
        const {dataForm} = this.state;
        return(
            <div className="section section--padding-top-only homepage-hero" id="Hero">
                <div className="grid grid--equal-height grid--vertically-centered">
                    <div className="grid__item grid__item--desktop-up-half homepage-hero__content">
                        <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
                            <h1 className="section-heading__heading heading--jumbo color-green-80 homepage-hero__heading gutter-bottom">
                                
                                {/* Learn while you <br/>
                                build your business */}
                                {this.props.dataExploreStoreList.line1}
                            </h1>
                        </div>
                        <p className="">{this.props.dataExploreStoreList.line2}</p>
                        <div className="homepage-hero__signup">
                            <div className="js-signup-inline marketing-form--inline">
                                <div className="marketing-input-wrapper marketing-input-button-pair">
                                    <div className="marketing-input-button-pair__field-wrapper">
                                        <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" >Email</label>
                                        <input placeholder={dataForm.btn_hint} id="SignupEmail-9305" className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                                        <button className="marketing-button marketing-form__button marketing-input-button-pair__button">{dataForm.btn_title}</button>
                                    </div>
                                    <span className="marketing-form__messages"></span>
                                </div>
                            </div>
                            <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">{dataForm.note}</p>
                        </div>
                    </div>
                </div>

                <div className="picture--cover homepage-hero__image">
                    <img className="image"src={this.props.dataExploreStoreList.img} />
                </div>
                
            </div>  
        )
    }
}
