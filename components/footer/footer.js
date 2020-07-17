import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount () {
        
    }

    componentDidUpdate(prevProps) {
               
    }

    render () {
        const {data} = this.state

        return (
            //Section Type 5
            <footer className="footer--main" id="ShopifyMainFooter" role="contentinfo">
                <div className="footer-top">
                    <div className="grid">
                        <div className="grid__item">
                            <nav className="footer-nav">
                                <a href="/about">Về Cabin Food</a>
                                <a href="/stations">Điểm kinh doanh</a>
                                <a href="/categories">Món ăn thức uống phù hợp</a>
                                {/* <a href="/pricing">Bảng giá</a> */}

                            </nav>
                        </div>
                    </div>
                </div>

                
                <div className="footer-bottom">
                    <div className="grid">

                        <div className="grid__item grid__item--tablet-up-2 footer-bottom__social text-center--mobile">
                            <a className="footer-social__icon" target="_blank" href="https://www.facebook.com/cabinfood.vn">
                                <svg className="icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                        <path d="M15.6 30V19.4h5V15h-5v-3.1c0-1 .6-1.9 1.3-1.9h3.8V5.6h-3.8c-3.1 0-5.6 2.8-5.6 6.3V15H7.5v4.4h3.8v10.1C4.8 27.9 0 22 0 15 0 6.7 6.7 0 15 0s15 6.7 15 15c0 8.1-6.4 14.7-14.4 15z" />
                                    </svg>
                            </a>
                            
                            <a className="footer-social__icon" target="_blank" rel="me nofollow noopener" data-ga-event="Social" data-ga-action="Youtube" data-ga-label="Footer" href="#">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M30 15c0 8.3-6.7 15-15 15S0 23.3 0 15 6.7 0 15 0s15 6.7 15 15zm-5.6 0c0-6.9 0-6.9-9.4-6.9s-9.4 0-9.4 6.9 0 6.9 9.4 6.9 9.4 0 9.4-6.9zm-11.9-3.7l6.3 3.8-6.3 3.8v-7.6z" />
                                </svg>
                            </a>
                            <a className="footer-social__icon" target="_blank" rel="me nofollow noopener" data-ga-event="Social" data-ga-action="Instagram" data-ga-label="Footer" href="#">
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M15 30C6.7 30 0 23.3 0 15c0-1.1.1-2.1.3-3.1h7.2c-.4 1-.6 2-.6 3.1 0 4.5 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1c0-1.1-.2-2.2-.6-3.1h7.2c.2 1 .3 2 .3 3.1 0 8.3-6.7 15-15 15zm5.9-20.6c-1.5-1.5-3.6-2.5-5.9-2.5s-4.4 1-5.9 2.5h-8C3.3 3.9 8.7 0 15 0s11.7 3.9 13.9 9.4h-8zm-.3 5.6c0 3.1-2.5 5.6-5.6 5.6-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6z"/>
                                </svg>
                            </a>
                        </div>

                        <div className="grid__item grid__item--tablet-up-4 footer-bottom__links text-center--mobile text-right--tablet-up">
                            <a href="#">Điều khoản dịch vụ</a>
                            <a href="#">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .footer-nav {margin-bottom:0px !important;}
                    .footer-top {padding-bottom: 0px !important;}
                    .footer-bottom {border: none !important;}
                `}</style>
            </footer>
            
        )
    }
}