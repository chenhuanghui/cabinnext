import $ from 'jquery';
import YouTube from 'react-youtube-embed'

export default class Header extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            youtubeID: this.props.yID
        }
    }
    componentDidMount() {
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
    }
    

    render() {
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
                            <YouTube id='oigiXW6XyCQ' />
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/oigiXW6XyCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </div>
                    </div>
                    
                </div>
                
                
            <style jsx>{`
                // .js-is-active {overflow-y: hidden;}
                // #0_signup_msg {height: 140px !important}
                #ModalVideo {background-color: var(--sub-color-1);}
                #ModalVideoContent {max-width: 100% !important;}
                #ModalTitle {color: var(--main-color) !important;}
            `}</style>
            </div>
        )
    }
}
