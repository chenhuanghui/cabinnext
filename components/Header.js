import Head from 'next/head'
import $ from 'jquery';

export default class Header extends React.Component {
        componentDidMount () {
                $('.js-popover-dropdown').click(function(){
                        console.log('menu clicked');
                        if ($(this).hasClass('is-active')) {
                                $(this).removeClass('is-active');
                                console.log('hide')
                        } else {
                                $(this).addClass('is-active');
                        }     
                });
        }
        
        render() {
                return (
                        <div id="SiteNavContainer" className="site-nav-container is-sticky">
                                <div className="marketing-nav-wrapper">
                                        <nav className="marketing-nav--skin-light marketing-nav marketing-nav--primary marketing-nav--solid" id="ShopifyMainNav">
                                                <div className="marketing-nav__logo ">
                                                        <a href="/" className="marketing-nav__logo__shopify" >
                                                                CABINFOOD LOGO
                                                        </a>
                                                </div>

                                        <ul className="marketing-nav__items display--expanded-nav">
                                        <li>
                                                <div className="popover-wrapper js-popover-dropdown popover-wrapper--dropdown is-active" data-position="bottom" data-align="left" >
                                                        <button className="popover__trigger marketing-nav__item marketing-nav__item--primary"> 
                                                        Giải pháp 
                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563">
                                                                <path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" />
                                                        </svg>
                                                        </button>
                                                        <div className="popover">
                                                                <div className="popover__content">
                                                                        <ul className="popover__list">
                                                                                <li>
                                                                                        <a href="#" className="marketing-nav__item marketing-nav__item--separated marketing-nav__item--child">
                                                                                        Bundle Delivery Right
                                                                                        </a>
                                                                                </li>
                                                                                <li>
                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                        <button className="popover__trigger marketing-nav__item marketing-nav__item--child"
                                                                                        >
                                                                                                Phát triển điểm kinh doanh
                                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                </svg>
                                                                                        </button>
                                                                                        </div>
                                                                                </li>
                                                                                <li>
                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                        <button
                                                                                                type="button"
                                                                                                className="popover__trigger marketing-nav__item marketing-nav__item--child"
                                                                                                itemProp="name"
                                                                                                data-ga-event="Main Nav"
                                                                                                data-ga-action="Online presence Nav"
                                                                                                data-trekkie-event="Main Nav"
                                                                                                data-trekkie-action="Online presence Nav"
                                                                                                data-trekkie-id="Main Nav Online presence Nav"
                                                                                        >
                                                                                                Đầu tư hiệu quả cao
                                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                </svg>
                                                                                        </button>
                                                                                        </div>
                                                                                </li>
                                                                                <li>
                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                        <button
                                                                                                type="button"
                                                                                                className="popover__trigger marketing-nav__item marketing-nav__item--child"
                                                                                                itemProp="name"
                                                                                                data-ga-event="Main Nav"
                                                                                                data-ga-action="Store set up Nav"
                                                                                                data-trekkie-event="Main Nav"
                                                                                                data-trekkie-action="Store set up Nav"
                                                                                                data-trekkie-id="Main Nav Store set up Nav"
                                                                                        >
                                                                                                Vận hành tối ưu
                                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                </svg>
                                                                                        </button>
                                                                                        </div>
                                                                                </li>
                                                                                <li>
                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                        <button
                                                                                                type="button"
                                                                                                className="popover__trigger marketing-nav__item marketing-nav__item--child"
                                                                                                itemProp="name"
                                                                                                data-ga-event="Main Nav"
                                                                                                data-ga-action="Store set up Nav"
                                                                                                data-trekkie-event="Main Nav"
                                                                                                data-trekkie-action="Store set up Nav"
                                                                                                data-trekkie-id="Main Nav Store set up Nav"
                                                                                        >
                                                                                                Xây dựng khách hàng
                                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                </svg>
                                                                                        </button>
                                                                                        </div>
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </li>
                                </ul>

                                                <ul className="marketing-nav__items marketing-nav__items--primary-mobile hide--desktop">
                                                        <li> <a className="marketing-nav__item marketing-nav__item--primary" href="https://www.shopify.com/login">Log in</a></li>
                                                </ul>
                                                <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
                                                        <li><a href="pricing.html" className="marketing-nav__item marketing-nav__item--user"> Pricing </a></li>
                                                        <li><a href="pricing.html" className="marketing-nav__item marketing-nav__item--user"> Learn </a></li>
                                                </ul>
                                        </nav>
                                </div>
                        </div>
                        
                )
        }
}


// const Header = props => (
//         <div id="SiteNavContainer" className="site-nav-container is-sticky">
//                 <div className="marketing-nav-wrapper">
//                         <nav className="marketing-nav--skin-light marketing-nav marketing-nav--primary marketing-nav--solid" id="ShopifyMainNav">
//                                 <div className="marketing-nav__logo ">
//                                         <a href="/" className="marketing-nav__logo__shopify" >
//                                                 CABINFOOD LOGO
//                                         </a>
//                                 </div>

//                                 {/* <ul className="marketing-nav__items display--expanded-nav">
//                                         <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> Delivery Right </button></li>
//                                         <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> About us </button></li>
//                                         <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> Store </button></li>
//                                 </ul> */}

//                         <ul className="marketing-nav__items display--expanded-nav">
//                         <li>
//                             <div className="popover-wrapper js-popover-dropdown popover-wrapper--dropdown is-active" data-position="bottom" data-align="left">
//                                 <button
//                                     type="button"
//                                     className="popover__trigger marketing-nav__item marketing-nav__item--primary"
//                                     itemProp="name"
//                                     data-ga-event="Main Nav"
//                                     data-ga-action="Start Nav"
//                                     data-trekkie-event="Main Nav"
//                                     data-trekkie-action="Start Nav"
//                                     data-trekkie-id="Main Nav Start Nav"
//                                 >
//                                     Start
//                                     {/* <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-down" /></svg> */}
//                                 </button>
//                                 <div className="popover">
//                                     <div className="popover__content">
//                                         <ul className="popover__list">
//                                             <li>
//                                                 <a
//                                                     href="start.html"
//                                                     className="marketing-nav__item marketing-nav__item--separated marketing-nav__item--child"
//                                                     itemProp="name"
//                                                     data-ga-event="Main Nav"
//                                                     data-ga-action="Start"
//                                                     data-trekkie-event="Main Nav"
//                                                     data-trekkie-action="Start"
//                                                     data-trekkie-id="Main Nav Start"
//                                                 >
//                                                     Start your business
//                                                 </a>
//                                             </li>
//                                             <li>
//                                                 <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
//                                                     <button
//                                                         type="button"
//                                                         className="popover__trigger marketing-nav__item marketing-nav__item--child"
//                                                         itemProp="name"
//                                                         data-ga-event="Main Nav"
//                                                         data-ga-action="Branding Nav"
//                                                         data-trekkie-event="Main Nav"
//                                                         data-trekkie-action="Branding Nav"
//                                                         data-trekkie-id="Main Nav Branding Nav"
//                                                     >
//                                                         Branding
//                                                         {/* <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-right" /></svg> */}
//                                                     </button>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
//                                                     <button
//                                                         type="button"
//                                                         className="popover__trigger marketing-nav__item marketing-nav__item--child"
//                                                         itemProp="name"
//                                                         data-ga-event="Main Nav"
//                                                         data-ga-action="Online presence Nav"
//                                                         data-trekkie-event="Main Nav"
//                                                         data-trekkie-action="Online presence Nav"
//                                                         data-trekkie-id="Main Nav Online presence Nav"
//                                                     >
//                                                         Online presence
//                                                         {/* <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-right" /></svg> */}
//                                                     </button>
//                                                 </div>
//                                             </li>
//                                             <li>
//                                                 <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
//                                                     <button
//                                                         type="button"
//                                                         className="popover__trigger marketing-nav__item marketing-nav__item--child"
//                                                         itemProp="name"
//                                                         data-ga-event="Main Nav"
//                                                         data-ga-action="Store set up Nav"
//                                                         data-trekkie-event="Main Nav"
//                                                         data-trekkie-action="Store set up Nav"
//                                                         data-trekkie-id="Main Nav Store set up Nav"
//                                                     >
//                                                         Store set up
//                                                         {/* <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-right" /></svg> */}
//                                                     </button>
//                                                 </div>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>

//                                 <ul className="marketing-nav__items marketing-nav__items--primary-mobile hide--desktop">
//                                         <li> <a className="marketing-nav__item marketing-nav__item--primary" href="https://www.shopify.com/login">Log in</a></li>
//                                 </ul>
//                                 <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
//                                         <li><a href="pricing.html" className="marketing-nav__item marketing-nav__item--user"> Pricing </a></li>
//                                         <li><a href="pricing.html" className="marketing-nav__item marketing-nav__item--user"> Learn </a></li>
//                                 </ul>
//                         </nav>
//                 </div>
//         </div>
// );
// export default Header;