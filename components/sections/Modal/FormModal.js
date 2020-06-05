import $ from 'jquery';

export default class Header extends React.Component {
    componentDidMount() {
        // init airtable variable
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appQtpfUoOs9WdGUD');
        
        // modal action
        $(`.marketing-button`).click(function(){
            console.log('btn open modal click');
            $(`body`).addClass(`js-modal-open`);
            $(`.modal-container`).addClass(`js-is-active`);
        })
        $(`#CloseModal`).click(function(){
            console.log('btn close modal click');
            $(`body`).removeClass(`js-modal-open`);
            $(`.modal-container`).removeClass(`js-is-active`);
        })
        $(`#btn_create_lead`).click(function(){
            // create data in Lead Table
            console.log('create lead start');
            base('Lead').create([
            {
                "fields": {
                    "Name":$(`#0_signup_name`).val(),
                    "Email":$(`#0_signup_email`).val(),
                    "Tel":$(`#0_signup_tel`).val(),
                    "Brand":$(`#0_signup_brand`).val(),
                    "Message":$(`#0_signup_msg`).val()
                }
            }
            ], function(err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    // console.log(record.getId());
                    $(`body`).removeClass(`js-modal-open`);
                    $(`.modal-container`).removeClass(`js-is-active`);
                    $(`.js-signup-inline.marketing-form--inline`).css(`display`,`none`);
                });
            });
            console.log('create lead done');
        })
    }
    

    render() {
        return(
            <div className="modal-container modal-container--lowlight signup-modal" id="ModalContainer" aria-hidden="false" tabIndex="-1">
                <div className="modal__header">
                    <div className="modal__controls">
                        <button type="button" className="modal__close" id="CloseModal"> 
                            <span className="icon icon-modules-close-white" id="CloseIcon">
                                <span className="visuallyhidden">Close</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="modal" role="dialog" tabIndex="-1" aria-labelledby="ModalTitle" aria-modal="true">
                    <div className="signup-modal__content">
                        <h2 className="modal__heading" id="ModalTitle">Start your free 14-day trial of CabinFood</h2>
                        <div className="signup-form-wrapper signup--hidden ">
                            <div className="marketing-form signup-form stateful-form">
                                <div className="stateful-field name ">
                                    <div >
                                        <label className="marketing-input-wrapper">
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Tên của bạn</span>
                                            <input placeholder="Tên của bạn" className="marketing-input marketing-input--floating" id="0_signup_name"/>
                                            <span className="marketing-form__messages">
                                                <span className="suggest hide" ></span>
                                                <span className="error hide"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="stateful-field email ">
                                    <div >
                                        <label className="marketing-input-wrapper">
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Email</span>
                                            <input placeholder="Nhập địa chỉ Email" className="marketing-input marketing-input--floating" id="0_signup_email"/>
                                            <span className="marketing-form__messages">
                                                <span className="suggest hide" ></span>
                                                <span className="error hide"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                

                                <div className="stateful-field tel ">
                                    <div >
                                        <label className="marketing-input-wrapper">
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Số điện thoại</span>
                                            <input placeholder="Nhập số điện thoại" className="marketing-input marketing-input--floating" id="0_signup_tel"/>
                                            <span className="marketing-form__messages">
                                                <span className="suggest hide" ></span>
                                                <span className="error hide"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="stateful-field brand ">
                                    <div >
                                        <label className="marketing-input-wrapper">
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Tên cửa hàng</span>
                                            <input placeholder="Tên cửa hàng" className="marketing-input marketing-input--floating" id="0_signup_brand"/>
                                            <span className="marketing-form__messages">
                                                <span className="suggest hide" ></span>
                                                <span className="error hide"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="stateful-field msg ">
                                    <div >
                                        <label className="marketing-input-wrapper">
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Lời nhắn</span>
                                            <textarea placeholder="Lời nhắn của bạn" className="marketing-input marketing-input--floating" id="0_signup_msg"/>
                                            <span className="marketing-form__messages">
                                                <span className="suggest hide" ></span>
                                                <span className="error hide"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                
                                
                                <div className="">
                                    <button className="marketing-button marketing-form__button" id="btn_create_lead">Create your store</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <style jsx>{`
                // .js-is-active {overflow-y: hidden;}
                #0_signup_msg {height: 140px !important}
            `}</style>
            </div>
        )
    }
}
