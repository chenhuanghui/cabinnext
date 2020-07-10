import $ from 'jquery';
import HubspotForm from 'react-hubspot-form'

export default class ModalForm extends React.Component {
    componentDidMount() {
        // modal action
        $(`.marketing-button, .contact-form`).click(function(){
            console.log('btn open modal click');
            $(`body`).addClass(`js-modal-open`);
            $(`#FormModal`).addClass(`js-is-active`);
        })
        $(`#CloseModal`).click(function(){
            console.log('btn close modal click');
            $(`body`).removeClass(`js-modal-open`);
            $(`#FormModal`).removeClass(`js-is-active`);
        })
    }
    

    render() {
        return(
            <div className="modal-container modal-container--lowlight signup-modal" id="FormModal" aria-hidden="false" tabIndex="-1">
                <div className="modal__header">
                    <div className="modal__controls">
                        <button type="button" className="modal__close" id="CloseModal"> 
                            <span className="icon icon-modules-close-black" id="CloseIcon">
                                <span className="visuallyhidden">Close</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="modal" role="dialog" tabIndex="-1" aria-labelledby="ModalTitle" aria-modal="true">
                    <div className="signup-modal__content">
                        <div className="signup-form-wrapper signup--hidden ">
                            <HubspotForm
                                portalId='7453021'
                                formId='94f4a76d-25ed-4003-bf3d-4cf18c015fd9'
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />
                        </div>
                    </div>
                </div>    
                <style jsx>{`
                    #FormModal {background-color: var(--sub-color-1);}
                `}</style>
            </div>
        )
    }
}
