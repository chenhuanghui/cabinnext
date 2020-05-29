import Head from 'next/head'
import $ from 'jquery';

export default class Header extends React.Component {
        componentDidMount () {
                // popup menu
                $('.js-popover-dropdown').click(function(){
                        console.log('menu clicked');
                        $('.popover-wrapper--dropdown.is-active').removeClass('is-active');
                        
                        if ($(this).hasClass('is-active')) {
                                $(this).removeClass('is-active');
                                console.log('hide')
                        } else {
                                $(this).addClass('is-active');
                        }     
                });
                // click outside of menu close menu
                $('html').click(function(event) {
                        
                        if(!$(event.target).closest(".js-popover-dropdown").length){
                                $('.js-popover-dropdown').removeClass('is-active');
                                console.log('hide menu');
                        }
                });
                // open sidebar
                $('.js-drawer-open-right').click(function(){
                        $('#NavDrawer').addClass('js-drawer-open');
                });
                // close sidebar
                $('.js-drawer-close').click(function(){
                        $('#NavDrawer').removeClass('js-drawer-open');
                })
        }
        
        render() {
                return (
                        <div id="SiteNavContainer" className="site-nav-container is-sticky">
                                <div className="marketing-nav-wrapper">
                                        <nav className="marketing-nav--skin-light marketing-nav marketing-nav--primary marketing-nav--solid" >
                                                <div className="marketing-nav__logo ">
                                                        <a href="/" className="marketing-nav__logo__shopify" >
                                                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.14 69.82">
                                                                        <path d="M113.86,41.29a15.13,15.13,0,0,0-2.72-.62,19.44,19.44,0,0,0-2.56-.16,8.93,8.93,0,0,0-7.29,3.11q-2.57,3.09-2.56,9.23,0,5.35,2.79,8.38a9,9,0,0,0,6.83,3,15.61,15.61,0,0,0,5.28-1A22.68,22.68,0,0,0,119,60.45l3.57,5.27a34.65,34.65,0,0,1-4.43,3,20.93,20.93,0,0,1-4.57,1.94,19.37,19.37,0,0,1-5.43.7,21.06,21.06,0,0,1-9.74-2.13A14.89,14.89,0,0,1,92,63a21,21,0,0,1-2.25-10.12A22.4,22.4,0,0,1,92,42.3a14.89,14.89,0,0,1,6.44-6.44,21.62,21.62,0,0,1,10.08-2.18,31.26,31.26,0,0,1,6,.59,37.74,37.74,0,0,1,5.93,1.66l1.94,10-7.45,1.63Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M154,68.36a22.56,22.56,0,0,1-11.1,3q-7.22,0-11-2.76t-3.76-8.18q-.07-10.79,14.2-10.78H151c0-3.16-.65-5.47-1.94-7A6.41,6.41,0,0,0,144,40.51a21.5,21.5,0,0,0-3.25.23,20.7,20.7,0,0,0-2.95.7l-.7,3.8-7.29-1L131.23,36a42.14,42.14,0,0,1,6.33-1.67,38.35,38.35,0,0,1,6.71-.58q7.6,0,11.6,4t4,11.75V62.39l6.52,2.09L164,71.78Zm-11.41-13a5.61,5.61,0,0,0-4.07,1.32,4.82,4.82,0,0,0-1.36,3.64q0,4.43,6.05,4.42A14.41,14.41,0,0,0,151,62.54V55.48Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M189.11,71.39a33.23,33.23,0,0,1-8.65-1.09A25.28,25.28,0,0,1,173.05,67V27.87l-7.68-2.64,2.56-7.45,13.89,4.81v13.5a16.38,16.38,0,0,1,8.45-2.33q8.53,0,12.8,4.62t4.27,13.85q0,9.54-4.58,14.35T189.11,71.39ZM189,64.33c3.11,0,5.43-1,7-3s2.32-5,2.32-9.07q0-5.67-2.05-8.46A7.11,7.11,0,0,0,190.2,41a13.52,13.52,0,0,0-8.38,2.56V63A17.59,17.59,0,0,0,189,64.33Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M213.62,35.24H229V62.86h6.43v7h-21.8v-7h6.44V42.22h-6.44ZM223.71,18.4a5.07,5.07,0,0,1,5.35,5.35,5.07,5.07,0,0,1-5.35,5.36,5.1,5.1,0,0,1-3.84-1.48,5.3,5.3,0,0,1-1.44-3.88,5.29,5.29,0,0,1,1.44-3.87A5.1,5.1,0,0,1,223.71,18.4Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M240.78,69.91v-7h6.59V44l-7.45-2.56,2.25-7.06L253,38.11a29.15,29.15,0,0,1,6.13-3.18,20.84,20.84,0,0,1,7.37-1.17,14.58,14.58,0,0,1,7.75,1.86,11.13,11.13,0,0,1,4.47,5.16,18.74,18.74,0,0,1,1.43,7.49V62.86h6.44v7H268.08v-7h3.26V49.43a9.39,9.39,0,0,0-1.63-5.85c-1.08-1.43-2.87-2.14-5.35-2.14a13.3,13.3,0,0,0-4.46.78,15.69,15.69,0,0,0-3.76,1.86V62.86h3.18v7Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M317,31.9c0-4.66,1.21-8.22,3.64-10.71s6-3.72,10.79-3.72a21.64,21.64,0,0,1,6,.81,12.88,12.88,0,0,1,4.73,2.45l-3,6.13a12.91,12.91,0,0,0-6.83-2.17,6.76,6.76,0,0,0-5,1.82c-1.21,1.21-1.82,3.09-1.82,5.62v3.11h9.62v7h-9.62V62.86h7v7h-22v-7H317V42.22h-6.52v-7H317Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M357.46,33.76A20.44,20.44,0,0,1,367.39,36a15.06,15.06,0,0,1,6.28,6.48,22.08,22.08,0,0,1,2.17,10.2q0,8.78-4.85,13.73t-13.53,5a19.86,19.86,0,0,1-9.74-2.25,15,15,0,0,1-6.21-6.44,22,22,0,0,1-2.13-10.09,22.26,22.26,0,0,1,2.13-10.12A15,15,0,0,1,347.72,36,19.86,19.86,0,0,1,357.46,33.76Zm.07,7.22q-4.65,0-7.06,3t-2.4,8.65q0,5.67,2.37,8.69c1.57,2,3.94,3,7.09,3s5.54-1,7.14-3,2.41-4.91,2.41-8.69S366.27,46,364.67,44,360.69,41,357.53,41Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M400.51,33.76A20.41,20.41,0,0,1,410.44,36a15.08,15.08,0,0,1,6.29,6.48,22.08,22.08,0,0,1,2.17,10.2q0,8.78-4.85,13.73t-13.54,5a19.82,19.82,0,0,1-9.73-2.25,14.91,14.91,0,0,1-6.21-6.44,22,22,0,0,1-2.13-10.09,22.26,22.26,0,0,1,2.13-10.12A14.85,14.85,0,0,1,390.78,36,19.82,19.82,0,0,1,400.51,33.76Zm.08,7.22c-3.1,0-5.46,1-7.06,3s-2.41,4.88-2.41,8.65.79,6.68,2.37,8.69,3.94,3,7.1,3,5.54-1,7.14-3,2.4-4.91,2.4-8.69-.8-6.65-2.4-8.65S403.74,41,400.59,41Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M463.82,71.78l-9.93-3.42a18,18,0,0,1-10.32,3q-8.69,0-13.5-5t-4.81-14.12q0-8.7,4.81-13.58t13.5-4.89a19.19,19.19,0,0,1,3.49.35,28.87,28.87,0,0,1,3.73,1V27.87l-7.69-2.64,2.49-7.45,14,4.81V62l6.67,2.25Zm-20.17-7.45a13.74,13.74,0,0,0,3.6-.54,14.54,14.54,0,0,0,3.54-1.48V42.45a18.32,18.32,0,0,0-3.38-1.05,18.12,18.12,0,0,0-3.76-.42A8.56,8.56,0,0,0,436.78,44a12.26,12.26,0,0,0-2.6,8.19,13.86,13.86,0,0,0,2.6,8.76A8.26,8.26,0,0,0,443.65,64.33Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                        <path d="M34.83,35.88l4.85,4.54a9.07,9.07,0,0,0,7.88,2.28l22.62-4.33A5.38,5.38,0,0,0,69.1,36l-4.25-5.32a5.45,5.45,0,0,0-5.41-1.91L52,30.39a9,9,0,0,1-8.12-2.23l-5.27-4.93A5.47,5.47,0,0,0,36.51,22Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                        <path d="M22,54l6.41-3.54A9.05,9.05,0,0,0,33,43.58l2.63-21.76a5.48,5.48,0,0,0-2.59.3l-6.68,2.51a5.45,5.45,0,0,0-3.49,4.55l-.7,7.18a9.06,9.06,0,0,1-4.63,7l-6.64,3.66a5.39,5.39,0,0,0-1.8,1.62Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                        <path d="M70.28,39.27,55.45,42.11l-2.69,5.75a9,9,0,0,0,.44,8.51L65.52,76.78a5.39,5.39,0,0,0,2-1.78l3.45-5.25A5.41,5.41,0,0,0,71.08,64L67,57a9.07,9.07,0,0,1-.39-8.41l3.22-6.87A5.4,5.4,0,0,0,70.28,39.27Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                        <path d="M35.85,71.63l-1.38-7.15A9.08,9.08,0,0,0,29,57.82L8.63,49.47a5.44,5.44,0,0,0-.54,2.59l.32,6.81a5.42,5.42,0,0,0,3.24,4.72l7,3a9,9,0,0,1,5.26,6.58l1.55,8a5.23,5.23,0,0,0,1,2.19" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                        <path d="M56.54,63.65l-6.75-.84a9,9,0,0,0-8.13,3.27L27,84.1a5.34,5.34,0,0,0,2.32,1.33l6.06,1.67a5.43,5.43,0,0,0,5.5-1.63l5.42-6.11a9.1,9.1,0,0,1,7.89-3l8.1,1a5.34,5.34,0,0,0,2.42-.25Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                </svg>
                                                        </a>
                                                </div>

                                                <ul className="marketing-nav__items display--expanded-nav">
                                                        <li>
                                                                <div className="popover-wrapper js-popover-dropdown popover-wrapper--dropdown" data-position="bottom" data-align="left" >
                                                                        <button className="popover__trigger marketing-nav__item marketing-nav__item--primary"> 
                                                                        Giải pháp 
                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563">
                                                                                <path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" />
                                                                        </svg>
                                                                        </button>
                                                                        <div className="popover">
                                                                                <div className="popover__content">
                                                                                        <ul className="popover__list">
                                                                                                {/* <li>
                                                                                                        <p className="marketing-nav__item marketing-nav__item--separated marketing-nav__item--child">
                                                                                                        Bundle Delivery
                                                                                                        </p>
                                                                                                </li> */}
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/find" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Find Location Right
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/setup" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Setup Store Smart
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/run" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Run Business Lean
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/growth" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Growth Business Sustainable
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                        </ul>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </li>
                                                        <li>
                                                                <div className="popover-wrapper js-popover-dropdown popover-wrapper--dropdown" data-position="bottom" data-align="left" >
                                                                        <a className="popover__trigger marketing-nav__item marketing-nav__item--primary" href="/stores">  Store</a>
                                                                </div>
                                                        </li>
                                                </ul>

                                                {/* <ul className="marketing-nav__items marketing-nav__items--primary-mobile hide--desktop">
                                                        <li> <a className="marketing-nav__item marketing-nav__item--primary" href="https://www.shopify.com/login">Log in</a></li>
                                                </ul> */}
                                                <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
                                                        <li><a href="/pricing" className="marketing-nav__item marketing-nav__item--user"> Pricing </a></li>
                                                        <li><a href="/about" className="marketing-nav__item marketing-nav__item--user"> Our Story </a></li>
                                                        <li><a href="#" className="marketing-nav__item marketing-nav__item--user"> Blog </a></li>
                                                </ul>
                                                <button name="button" type="button" className="marketing-nav__hamburger hide--expanded-nav js-drawer-open-right" aria-controls="NavDrawer" aria-expanded="false">
                                                        <svg className="icon" aria-labelledby="icon-modules-mobile-hamburger-40-title" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <title id="icon-modules-mobile-hamburger-40-title">Open Main Navigation</title>
                                                                <path d="M19 11H1c-.552 0-1-.447-1-1s.448-1 1-1h18c.552 0 1 .447 1 1s-.448 1-1 1zm0-7H1c-.552 0-1-.447-1-1s.448-1 1-1h18c.552 0 1 .447 1 1s-.448 1-1 1zm0 14H1c-.552 0-1-.447-1-1s.448-1 1-1h18c.552 0 1 .447 1 1s-.448 1-1 1z"/>
                                                        </svg>
                                                </button>
                                        </nav>
                                </div>
                                {/* menu mobile */}
                                <div id="NavDrawer" className="drawer drawer--right ">
                                        <div className="drawer__inner">
                                                <div className="drawer__top">
                                                        <div className="marketing-nav__logo">
                                                                <a href="index.html" className="marketing-nav__logo__shopify">
                                                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.14 69.82">
                                                                                <path d="M113.86,41.29a15.13,15.13,0,0,0-2.72-.62,19.44,19.44,0,0,0-2.56-.16,8.93,8.93,0,0,0-7.29,3.11q-2.57,3.09-2.56,9.23,0,5.35,2.79,8.38a9,9,0,0,0,6.83,3,15.61,15.61,0,0,0,5.28-1A22.68,22.68,0,0,0,119,60.45l3.57,5.27a34.65,34.65,0,0,1-4.43,3,20.93,20.93,0,0,1-4.57,1.94,19.37,19.37,0,0,1-5.43.7,21.06,21.06,0,0,1-9.74-2.13A14.89,14.89,0,0,1,92,63a21,21,0,0,1-2.25-10.12A22.4,22.4,0,0,1,92,42.3a14.89,14.89,0,0,1,6.44-6.44,21.62,21.62,0,0,1,10.08-2.18,31.26,31.26,0,0,1,6,.59,37.74,37.74,0,0,1,5.93,1.66l1.94,10-7.45,1.63Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M154,68.36a22.56,22.56,0,0,1-11.1,3q-7.22,0-11-2.76t-3.76-8.18q-.07-10.79,14.2-10.78H151c0-3.16-.65-5.47-1.94-7A6.41,6.41,0,0,0,144,40.51a21.5,21.5,0,0,0-3.25.23,20.7,20.7,0,0,0-2.95.7l-.7,3.8-7.29-1L131.23,36a42.14,42.14,0,0,1,6.33-1.67,38.35,38.35,0,0,1,6.71-.58q7.6,0,11.6,4t4,11.75V62.39l6.52,2.09L164,71.78Zm-11.41-13a5.61,5.61,0,0,0-4.07,1.32,4.82,4.82,0,0,0-1.36,3.64q0,4.43,6.05,4.42A14.41,14.41,0,0,0,151,62.54V55.48Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M189.11,71.39a33.23,33.23,0,0,1-8.65-1.09A25.28,25.28,0,0,1,173.05,67V27.87l-7.68-2.64,2.56-7.45,13.89,4.81v13.5a16.38,16.38,0,0,1,8.45-2.33q8.53,0,12.8,4.62t4.27,13.85q0,9.54-4.58,14.35T189.11,71.39ZM189,64.33c3.11,0,5.43-1,7-3s2.32-5,2.32-9.07q0-5.67-2.05-8.46A7.11,7.11,0,0,0,190.2,41a13.52,13.52,0,0,0-8.38,2.56V63A17.59,17.59,0,0,0,189,64.33Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M213.62,35.24H229V62.86h6.43v7h-21.8v-7h6.44V42.22h-6.44ZM223.71,18.4a5.07,5.07,0,0,1,5.35,5.35,5.07,5.07,0,0,1-5.35,5.36,5.1,5.1,0,0,1-3.84-1.48,5.3,5.3,0,0,1-1.44-3.88,5.29,5.29,0,0,1,1.44-3.87A5.1,5.1,0,0,1,223.71,18.4Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M240.78,69.91v-7h6.59V44l-7.45-2.56,2.25-7.06L253,38.11a29.15,29.15,0,0,1,6.13-3.18,20.84,20.84,0,0,1,7.37-1.17,14.58,14.58,0,0,1,7.75,1.86,11.13,11.13,0,0,1,4.47,5.16,18.74,18.74,0,0,1,1.43,7.49V62.86h6.44v7H268.08v-7h3.26V49.43a9.39,9.39,0,0,0-1.63-5.85c-1.08-1.43-2.87-2.14-5.35-2.14a13.3,13.3,0,0,0-4.46.78,15.69,15.69,0,0,0-3.76,1.86V62.86h3.18v7Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M317,31.9c0-4.66,1.21-8.22,3.64-10.71s6-3.72,10.79-3.72a21.64,21.64,0,0,1,6,.81,12.88,12.88,0,0,1,4.73,2.45l-3,6.13a12.91,12.91,0,0,0-6.83-2.17,6.76,6.76,0,0,0-5,1.82c-1.21,1.21-1.82,3.09-1.82,5.62v3.11h9.62v7h-9.62V62.86h7v7h-22v-7H317V42.22h-6.52v-7H317Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M357.46,33.76A20.44,20.44,0,0,1,367.39,36a15.06,15.06,0,0,1,6.28,6.48,22.08,22.08,0,0,1,2.17,10.2q0,8.78-4.85,13.73t-13.53,5a19.86,19.86,0,0,1-9.74-2.25,15,15,0,0,1-6.21-6.44,22,22,0,0,1-2.13-10.09,22.26,22.26,0,0,1,2.13-10.12A15,15,0,0,1,347.72,36,19.86,19.86,0,0,1,357.46,33.76Zm.07,7.22q-4.65,0-7.06,3t-2.4,8.65q0,5.67,2.37,8.69c1.57,2,3.94,3,7.09,3s5.54-1,7.14-3,2.41-4.91,2.41-8.69S366.27,46,364.67,44,360.69,41,357.53,41Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M400.51,33.76A20.41,20.41,0,0,1,410.44,36a15.08,15.08,0,0,1,6.29,6.48,22.08,22.08,0,0,1,2.17,10.2q0,8.78-4.85,13.73t-13.54,5a19.82,19.82,0,0,1-9.73-2.25,14.91,14.91,0,0,1-6.21-6.44,22,22,0,0,1-2.13-10.09,22.26,22.26,0,0,1,2.13-10.12A14.85,14.85,0,0,1,390.78,36,19.82,19.82,0,0,1,400.51,33.76Zm.08,7.22c-3.1,0-5.46,1-7.06,3s-2.41,4.88-2.41,8.65.79,6.68,2.37,8.69,3.94,3,7.1,3,5.54-1,7.14-3,2.4-4.91,2.4-8.69-.8-6.65-2.4-8.65S403.74,41,400.59,41Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M463.82,71.78l-9.93-3.42a18,18,0,0,1-10.32,3q-8.69,0-13.5-5t-4.81-14.12q0-8.7,4.81-13.58t13.5-4.89a19.19,19.19,0,0,1,3.49.35,28.87,28.87,0,0,1,3.73,1V27.87l-7.69-2.64,2.49-7.45,14,4.81V62l6.67,2.25Zm-20.17-7.45a13.74,13.74,0,0,0,3.6-.54,14.54,14.54,0,0,0,3.54-1.48V42.45a18.32,18.32,0,0,0-3.38-1.05,18.12,18.12,0,0,0-3.76-.42A8.56,8.56,0,0,0,436.78,44a12.26,12.26,0,0,0-2.6,8.19,13.86,13.86,0,0,0,2.6,8.76A8.26,8.26,0,0,0,443.65,64.33Z" transform="translate(-8.09 -17.47)" fill="#15365d"/>
                                                                                <path d="M34.83,35.88l4.85,4.54a9.07,9.07,0,0,0,7.88,2.28l22.62-4.33A5.38,5.38,0,0,0,69.1,36l-4.25-5.32a5.45,5.45,0,0,0-5.41-1.91L52,30.39a9,9,0,0,1-8.12-2.23l-5.27-4.93A5.47,5.47,0,0,0,36.51,22Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                                <path d="M22,54l6.41-3.54A9.05,9.05,0,0,0,33,43.58l2.63-21.76a5.48,5.48,0,0,0-2.59.3l-6.68,2.51a5.45,5.45,0,0,0-3.49,4.55l-.7,7.18a9.06,9.06,0,0,1-4.63,7l-6.64,3.66a5.39,5.39,0,0,0-1.8,1.62Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                                <path d="M70.28,39.27,55.45,42.11l-2.69,5.75a9,9,0,0,0,.44,8.51L65.52,76.78a5.39,5.39,0,0,0,2-1.78l3.45-5.25A5.41,5.41,0,0,0,71.08,64L67,57a9.07,9.07,0,0,1-.39-8.41l3.22-6.87A5.4,5.4,0,0,0,70.28,39.27Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                                <path d="M35.85,71.63l-1.38-7.15A9.08,9.08,0,0,0,29,57.82L8.63,49.47a5.44,5.44,0,0,0-.54,2.59l.32,6.81a5.42,5.42,0,0,0,3.24,4.72l7,3a9,9,0,0,1,5.26,6.58l1.55,8a5.23,5.23,0,0,0,1,2.19" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                                <path d="M56.54,63.65l-6.75-.84a9,9,0,0,0-8.13,3.27L27,84.1a5.34,5.34,0,0,0,2.32,1.33l6.06,1.67a5.43,5.43,0,0,0,5.5-1.63l5.42-6.11a9.1,9.1,0,0,1,7.89-3l8.1,1a5.34,5.34,0,0,0,2.42-.25Z" transform="translate(-8.09 -17.47)" fill="#ee4824"/>
                                                                        </svg>
                                                                </a>
                                                                </div>

                                                                <button name="button" type="button" className="drawer__close-button js-drawer-close" aria-controls="NavDrawer" aria-expanded="true">
                                                                        <svg className="icon" aria-labelledby="icon-modules-cancel-42-title" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                                <title id="icon-modules-cancel-42-title">Close Main Navigation</title>
                                                                                <path
                                                                                        d="M11.414 10l6.293-6.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L10 8.586 3.707 2.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L8.586 10l-6.293 6.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L10 11.414l6.293 6.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L11.414 10z"
                                                                                />
                                                                        </svg>
                                                                </button>
                                                </div>

                                                <nav aria-label="Main Navigation">
                                                        <ul className="drawer__items drawer__items--primary" id="DrawerNavPrimaryAccordion">
                                                                <li className="accordion-item">
                                                                        <a href="/find" className="drawer__item drawer__item--primary accordion-link">
                                                                                Find Location Right
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="/setup" className="drawer__item drawer__item--primary accordion-link">
                                                                                Setup Store Smart
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="/run" className="drawer__item drawer__item--primary accordion-link">
                                                                                Run Business Lean
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="/growth" className="drawer__item drawer__item--primary accordion-link">
                                                                                Growth Business Sustainable
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                        </ul>

                                                        <ul className="drawer__items drawer__items--user" id="DrawerNavSecondaryAccordion">
                                                                <li><a href="/pricing" className="drawer__item">Bảng giá</a></li>
                                                                <li><a href="/#" className="drawer__item">Điểm kinh doanh</a></li>
                                                                <li><a href="#" className="drawer__item"> Blog</a></li>
                                                        </ul>

                                                        <ul className="drawer__items drawer__items--corporate">
                                                                <li><a href="/about" className="drawer__item">Our Story</a></li>
                                                                <li>
                                                                        <form className="button_to" method="post" action="#">
                                                                                <input className="js-open-signup drawer__item drawer__item--signup marketing-nav__button marketing-button marketing-button--small" defaultValue="Đăng ký tư vấn"/>
                                                                        </form>
                                                                </li>
                                                        </ul>
                                                </nav>
                                        </div>
                                </div>

                                <style jsx>{`
                                        .js-drawer-open {
                                                display: block;
                                                -webkit-transform: translateX(0);
                                                transform: translateX(0);
                                        }
                                        .marketing-nav__logo__shopify {
                                                margin-top: 10px;
                                            }
                                        .marketing-nav__logo__shopify {
                                                width: 150px !important;
                                                height: auto !important;
                                        }
                                `}</style>
                        </div>
                        
                )
        }
}