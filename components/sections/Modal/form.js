import $ from 'jquery';

export default class Header extends React.Component {
    componentDidMount() {
        // js-is-active
    }

    render() {
        return(
            <div className="modal-container modal-container--lowlight signup-modal" id="ModalContainer" aria-hidden="false" tabindex="-1">
                <div className="modal__header">
                    <div className="modal__controls">
                        <button type="button" className="modal__close" id="CloseModal"> 
                            <span className="icon icon-modules-close-white" id="CloseIcon">
                                <span className="visuallyhidden">Close</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="modal" role="dialog" tabindex="-1" aria-labelledby="ModalTitle" aria-modal="true">
                    <div className="signup-modal__content">
                        <h2 className="modal__heading" id="ModalTitle">Start your free 14-day trial of CabinFood</h2>
                        <div className="signup-form-wrapper signup--hidden ">
                            <form className="marketing-form signup-form stateful-form">
                                <div className="stateful-field email ">
                                    <div >
                                        <label className="marketing-input-wrapper">
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Email address</span>
                                            <input placeholder="Email address" className="marketing-input marketing-input--floating" id="0_signup_email"/>
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
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Name</span>
                                            <input placeholder="Your name" className="marketing-input marketing-input--floating" id="0_signup_email"/>
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
                                            <span className="marketing-label marketing-label--in-field marketing-label--floating">Store</span>
                                            <input placeholder="Store name" className="marketing-input marketing-input--floating" id="0_signup_email"/>
                                            <span className="marketing-form__messages">
                                                <span className="suggest hide" ></span>
                                                <span className="error hide"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                
                                
                                <div className="">
                                    <button className="marketing-button marketing-form__button ">Create your store</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <style jsx>{`
                // .js-is-active {overflow-y: hidden;}
            `}</style>
            </div>
        )
    }
}
