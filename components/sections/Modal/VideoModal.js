import $ from 'jquery';

export default class Header extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            dataForm: []
        }
    }
    componentDidMount() {
        let currentComponent = this;
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');        

        // modal action
        $(document).on('click', `.video-modal` , function() {
            console.log('btn open modal click 2');

            $(`body`).addClass(`js-modal-open`);
            $(`#ModalVideo`).addClass(`js-is-active`);
        });

        $(document).on('click', `#CloseModalVideo` , function() {
            console.log('btn closed modal click 2');

            $(`body`).removeClass(`js-modal-open`);
            $(`#ModalVideo`).removeClass(`js-is-active`);
        });

        base('Form_List').find('recScfQH0nm1u6MZB', function(err, record) {
            if (err) { console.error(err); return; }
            console.log('form list explore', record);
            currentComponent.setState({ dataForm: record.fields })
        });
    }
    

    render() {
        const {dataForm} = this.state;
        return(
            <div className="modal-container modal-container--lowlight signup-modal" id="ModalVideo" aria-hidden="false" tabIndex="-1">
                
                <div className="modal__header">
                    <div className="modal__controls">
                        <button type="button" className="modal__close" id="CloseModalVideo"> 
                            <span className="icon icon-modules-close-black" id="CloseIcon">
                                <span className="visuallyhidden">Close</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="modal" role="dialog" tabIndex="-1" aria-labelledby="ModalTitle" aria-modal="true">
                    <div className="signup-modal__content" id="ModalVideoContent">
                        <h2 className="modal__heading" id="ModalTitle">Khám phá điểm kinh doanh cùng CabinFood</h2>
                        <div className="signup-form-wrapper signup--hidden" id="video-inside">
                            
                            <div className="wistia_responsive_padding">
                                <div className="wistia_responsive_wrapper">
                                    <div className="wistia_embed wistia_async_flvkbseogu videoFoam=true">
                                        <div className="wistia_swatch">
                                            {/* <img src="https://fast.wistia.com/embed/medias/flvkbseogu/swatch" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <a className="marketing-button-wrapper" href={dataForm.btn_href}>
                    <button className="marketing-button js-open-signup signup-footer__button">{dataForm.btn_title}</button>
                </a>
                
            <style jsx>{`
                // .js-is-active {overflow-y: hidden;}
                // #0_signup_msg {height: 140px !important}
                #ModalVideo {background-color: var(--sub-color-1);}
                #ModalVideoContent {max-width: 100% !important;}
                #ModalTitle {color: var(--main-color) !important;}
                .wistia_responsive_padding {padding:56.25% 0 0 0;position:relative;}
                .wistia_responsive_wrapper {height:100%;left:0;position:absolute;top:0;width:100%;}
                .wistia_embed {height:100%;position:relative;width:100%}
                .wistia_swatch {height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;}
                .wistia_swatch img {filter:blur(5px);height:100%;object-fit:contain;width:100%;}
            `}</style>
            </div>
        )
    }
}
