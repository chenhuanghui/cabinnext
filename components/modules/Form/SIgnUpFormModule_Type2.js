export default class SignUpFormModuleType2 extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataForm: []
        }
    }
    
    componentDidMount() {
    }
    
    componentDidUpdate(prevProps) {

        if (this.props.formID !== prevProps.formID) {
            console.log('form update');
            
            let currentComponent = this;
            var Airtable = require('airtable');
            var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');
            
            console.log('formid=',this.props.formID);
            base('Form_List').find(this.props.formID, function(err, record) {
                if (err) { console.error(err); return; }
                console.log('dataForm2', record.fields)
                currentComponent.setState({ dataForm: record.fields })
            });
        }
        
    }

    render() {
        const {dataForm} = this.state;
        return(
            <div className="grid">
                <div className="grid__item grid__item--desktop-up-half">
                    <div className="section-heading gutter-bottom--reset text-center--tablet-down">
                        <h2 className="section-heading__heading heading--2">{dataForm.hero_message}</h2>
                    </div>
                </div>
                <div className="grid__item grid__item--desktop-up-5 grid__item--desktop-up-offset-1">
                    <div className="js-signup-inline marketing-form--inline">
                        <div className="marketing-input-wrapper marketing-input-button-pair">
                            <div className="marketing-input-button-pair__field-wrapper">
                                <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" htmlFor="SignupEmail-2ae4">Email</label>
                                <input placeholder={dataForm.btn_hint} id="SignupEmail-2ae4" className="marketing-input-button-pair__input marketing-input marketing-input--floating" type="email" name="signup[email]" />
                                <button className="marketing-button marketing-form__button marketing-input-button-pair__button" name="button" data-ga-event="Email capture signup" data-ga-action="CTA button click" aria-haspopup="dialog" type="submit">{dataForm.btn_title}</button>
                            </div>
                            <span className="marketing-form__messages">{dataForm.note}</span>
                        </div>
                    </div>
                    {/* <p className="marketing-form__fallback-cta text-center">{dataForm.note}</p> */}
                </div>
            </div>

        )
    }
}
