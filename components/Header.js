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
                $('.js-drawer-open-right').click(function(){
                        $('#NavDrawer').addClass('js-drawer-open');
                });

                $('.js-drawer-close').click(function(){
                        $('#NavDrawer').removeClass('js-drawer-open');
                })
        }
        
        render() {
                return (
                        <div id="SiteNavContainer" className="site-nav-container is-sticky">
                                <div className="marketing-nav-wrapper">
                                        <nav className="marketing-nav--skin-light marketing-nav marketing-nav--primary marketing-nav--solid" id="ShopifyMainNav">
                                                <div className="marketing-nav__logo ">
                                                        <a href="/" className="marketing-nav__logo__shopify" >
                                                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.38 18.85">
                                                                        <path fill="#e74a38" d="M38.44,7l1.39,2.2a3.15,3.15,0,0,0,3.45,1.37l2.52-.64-1.66,2a3.16,3.16,0,0,0-.24,3.7l1.39,2.2-2.41-1a3.14,3.14,0,0,0-3.6.92l-1.66,2,.17-2.6a3.16,3.16,0,0,0-2-3.13l-2.41-1,2.51-.65a3.15,3.15,0,0,0,2.38-2.85Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M7.82,25.83A5.87,5.87,0,0,1,4.65,25a5,5,0,0,1-1.9-2.13,7,7,0,0,1,0-5.8A5,5,0,0,1,4.65,15a5.87,5.87,0,0,1,3.17-.79,11.54,11.54,0,0,1,2.29.19A2.65,2.65,0,0,1,11.5,15,1.9,1.9,0,0,1,12,16.25c.05.5.07,1.21.07,2.11h-.71a3.32,3.32,0,0,0-.94-2.3,3.17,3.17,0,0,0-2.27-.79,2.32,2.32,0,0,0-1.49.51,3.31,3.31,0,0,0-1,1.57A8.68,8.68,0,0,0,5.33,20a8.89,8.89,0,0,0,.33,2.62,3.31,3.31,0,0,0,1,1.59,2.51,2.51,0,0,0,1.65.53,3.3,3.3,0,0,0,2-.57,6.84,6.84,0,0,0,1.39-1.4l.73.55a6.82,6.82,0,0,1-.89,1.1,4.52,4.52,0,0,1-1.45,1A5.45,5.45,0,0,1,7.82,25.83Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M17.76,25.83A5.63,5.63,0,0,1,16,25.59a3.58,3.58,0,0,1-1.26-.65,2.55,2.55,0,0,1-.77-1,3.08,3.08,0,0,1-.26-1.3,3.4,3.4,0,0,1,.53-1.94,3.47,3.47,0,0,1,1.93-1.21,14.9,14.9,0,0,1,3.94-.41h.36a7.88,7.88,0,0,0-.26-2.25,2.21,2.21,0,0,0-.77-1.19,2.08,2.08,0,0,0-1.23-.36,2.63,2.63,0,0,0-1.44.41,2.58,2.58,0,0,0-.93,1.73h-1.3a9.07,9.07,0,0,1,.08-1.26A1.9,1.9,0,0,1,15.15,15a2.39,2.39,0,0,1,1.41-.66,13,13,0,0,1,2.15-.17,6.52,6.52,0,0,1,2.06.3,4.09,4.09,0,0,1,1.53.93A3.87,3.87,0,0,1,23.25,17a6.67,6.67,0,0,1,.32,2.2v6.4h-2l-.83-1.06h-.12a2.82,2.82,0,0,1-1.05.9A3.68,3.68,0,0,1,17.76,25.83Zm.71-1.18a1.79,1.79,0,0,0,1.31-.53,3,3,0,0,0,.71-1v-3h-.36a3.84,3.84,0,0,0-2.45.61,2.31,2.31,0,0,0-.75,1.88,2.4,2.4,0,0,0,.41,1.51A1.39,1.39,0,0,0,18.47,24.65Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M31.92,25.83a3.38,3.38,0,0,1-1.73-.41,3.18,3.18,0,0,1-1-.89h-.11l-.83,1.06h-2V13a4.15,4.15,0,0,0-.3-1.72c-.2-.44-.65-.65-1.36-.65h-.24V9.94h2.85a2.47,2.47,0,0,1,1.29.28,1.53,1.53,0,0,1,.65.95A6.89,6.89,0,0,1,29.31,13v1.9a5.55,5.55,0,0,1,1.06-.49,4.25,4.25,0,0,1,1.43-.22,4.9,4.9,0,0,1,2.86.77,4.66,4.66,0,0,1,1.69,2.09,8,8,0,0,1,0,5.89,4.71,4.71,0,0,1-1.66,2.1A4.76,4.76,0,0,1,31.92,25.83Zm-.47-1.07a1.6,1.6,0,0,0,1.32-.61,4.11,4.11,0,0,0,.71-1.7A12,12,0,0,0,33.7,20a11.88,11.88,0,0,0-.22-2.44,3.83,3.83,0,0,0-.74-1.69,1.74,1.74,0,0,0-1.41-.62,2.79,2.79,0,0,0-1.2.25,6.25,6.25,0,0,0-.82.47v7.23a3.07,3.07,0,0,0,.82,1.07A1.94,1.94,0,0,0,31.45,24.76Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M39.66,25.59V17.53a4.15,4.15,0,0,0-.3-1.72c-.2-.44-.65-.65-1.36-.65h-.24v-.72h2.85a2.46,2.46,0,0,1,1.29.29,1.5,1.5,0,0,1,.65.95,6.89,6.89,0,0,1,.19,1.85v8.06Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M46,25.59V17.53a4.33,4.33,0,0,0-.29-1.72c-.19-.44-.64-.65-1.35-.65h-.24v-.72h2.35a3.34,3.34,0,0,1,1.27.2,1.48,1.48,0,0,1,.72.68,4.58,4.58,0,0,1,1.23-.76A5.58,5.58,0,0,1,52,14.21a6.09,6.09,0,0,1,2.49.45A3.13,3.13,0,0,1,56,16.07a5.31,5.31,0,0,1,.51,2.5v7H53.37v-7a4.7,4.7,0,0,0-.3-1.85,2.09,2.09,0,0,0-.79-1,2.21,2.21,0,0,0-1.16-.31,3.81,3.81,0,0,0-1.18.17,2.55,2.55,0,0,0-.84.43v9.6Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M65.64,25.47V15.39H64.21V14.32h1.43v-.64a4.62,4.62,0,0,1,.51-2.27A3.23,3.23,0,0,1,67.69,10a6.25,6.25,0,0,1,2.57-.46,7.49,7.49,0,0,1,1.24.1,2.53,2.53,0,0,1,.92.3,1.7,1.7,0,0,1,.53.43,2.45,2.45,0,0,1,.4.59l-.95.83a2.92,2.92,0,0,0-.88-.87,2.18,2.18,0,0,0-1.14-.32,1.37,1.37,0,0,0-1.23.66,4.6,4.6,0,0,0-.43,2.38v.64H71.8v1.07H68.72V25.47Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M78.31,25.71a5.79,5.79,0,0,1-3-.77,5.24,5.24,0,0,1-2-2.1,6.65,6.65,0,0,1,0-5.9,5.21,5.21,0,0,1,2-2.09,6.39,6.39,0,0,1,6.08,0,5.26,5.26,0,0,1,2,2.09,6.65,6.65,0,0,1,0,5.9,5.28,5.28,0,0,1-2,2.1A5.77,5.77,0,0,1,78.31,25.71Zm0-1.07A1.76,1.76,0,0,0,79.69,24a3.88,3.88,0,0,0,.83-1.69,9.54,9.54,0,0,0,.28-2.43,9.54,9.54,0,0,0-.28-2.45,3.9,3.9,0,0,0-.83-1.68,1.86,1.86,0,0,0-2.77,0,3.9,3.9,0,0,0-.83,1.68,9.54,9.54,0,0,0-.28,2.45,9.54,9.54,0,0,0,.28,2.43A3.88,3.88,0,0,0,76.92,24,1.76,1.76,0,0,0,78.31,24.64Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M91.4,25.71a5.84,5.84,0,0,1-3-.77,5.21,5.21,0,0,1-2-2.1,6.65,6.65,0,0,1,0-5.9,5.19,5.19,0,0,1,2-2.09,6.41,6.41,0,0,1,6.09,0,5.26,5.26,0,0,1,2,2.09,6.65,6.65,0,0,1,0,5.9,5.28,5.28,0,0,1-2,2.1A5.8,5.8,0,0,1,91.4,25.71Zm0-1.07A1.76,1.76,0,0,0,92.79,24a3.88,3.88,0,0,0,.83-1.69,10,10,0,0,0,.27-2.43,10,10,0,0,0-.27-2.45,3.9,3.9,0,0,0-.83-1.68,1.79,1.79,0,0,0-1.39-.62,1.82,1.82,0,0,0-1.39.62,4,4,0,0,0-.83,1.68,10,10,0,0,0-.27,2.45,10,10,0,0,0,.27,2.43A4,4,0,0,0,90,24,1.79,1.79,0,0,0,91.4,24.64Z" transform="translate(-2.12 -6.98)"/>
                                                                        <path fill="#2d272a" d="M103.81,25.71a4.47,4.47,0,0,1-4.42-2.87,7.41,7.41,0,0,1-.56-2.94,7.37,7.37,0,0,1,.56-3,4.65,4.65,0,0,1,1.69-2.09,5,5,0,0,1,2.85-.77,4.2,4.2,0,0,1,1.43.23,5.55,5.55,0,0,1,1.06.49V12.9a4.15,4.15,0,0,0-.3-1.72c-.19-.44-.65-.66-1.36-.66h-.24V9.81h2.85a2.46,2.46,0,0,1,1.29.29,1.5,1.5,0,0,1,.65,1,6.89,6.89,0,0,1,.19,1.85V25.47h-2l-.83-1.07h-.12a2.9,2.9,0,0,1-1,.89A3.3,3.3,0,0,1,103.81,25.71Zm.47-1.07a1.91,1.91,0,0,0,1-.26,2.4,2.4,0,0,0,.71-.63,4.24,4.24,0,0,0,.43-.65V15.86a4.15,4.15,0,0,0-.85-.48,2.94,2.94,0,0,0-1.17-.23,1.76,1.76,0,0,0-1.4.62,3.84,3.84,0,0,0-.74,1.68A11.94,11.94,0,0,0,102,19.9a12.79,12.79,0,0,0,.21,2.43A3.82,3.82,0,0,0,103,24,1.59,1.59,0,0,0,104.28,24.64Z" transform="translate(-2.12 -6.98)"/>
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
                                                                                                                <a href="/location" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Find Location Right
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="#" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Setup Store Smart
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="#" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Run Business Lean
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="#" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Build Consumer Portrait
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
                                                                        <button className="popover__trigger marketing-nav__item marketing-nav__item--primary"> 
                                                                                Store
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563">
                                                                                        <path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" />
                                                                                </svg>
                                                                        </button>
                                                                        <div className="popover">
                                                                                <div className="popover__content">
                                                                                        <ul className="popover__list">
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/location" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Hồ Chí Minh
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3"><path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" /></svg>
                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/location" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Hà Nội
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3"><path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" /></svg>
                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                        </ul>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </li>
                                                </ul>

                                                {/* <ul className="marketing-nav__items marketing-nav__items--primary-mobile hide--desktop">
                                                        <li> <a className="marketing-nav__item marketing-nav__item--primary" href="https://www.shopify.com/login">Log in</a></li>
                                                </ul> */}
                                                <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
                                                        <li><a href="/pricing" className="marketing-nav__item marketing-nav__item--user"> Pricing </a></li>
                                                        <li><a href="#" className="marketing-nav__item marketing-nav__item--user"> Our Story </a></li>
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
                                                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.38 18.85">
                                                                                <path fill="#e74a38" d="M38.44,7l1.39,2.2a3.15,3.15,0,0,0,3.45,1.37l2.52-.64-1.66,2a3.16,3.16,0,0,0-.24,3.7l1.39,2.2-2.41-1a3.14,3.14,0,0,0-3.6.92l-1.66,2,.17-2.6a3.16,3.16,0,0,0-2-3.13l-2.41-1,2.51-.65a3.15,3.15,0,0,0,2.38-2.85Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M7.82,25.83A5.87,5.87,0,0,1,4.65,25a5,5,0,0,1-1.9-2.13,7,7,0,0,1,0-5.8A5,5,0,0,1,4.65,15a5.87,5.87,0,0,1,3.17-.79,11.54,11.54,0,0,1,2.29.19A2.65,2.65,0,0,1,11.5,15,1.9,1.9,0,0,1,12,16.25c.05.5.07,1.21.07,2.11h-.71a3.32,3.32,0,0,0-.94-2.3,3.17,3.17,0,0,0-2.27-.79,2.32,2.32,0,0,0-1.49.51,3.31,3.31,0,0,0-1,1.57A8.68,8.68,0,0,0,5.33,20a8.89,8.89,0,0,0,.33,2.62,3.31,3.31,0,0,0,1,1.59,2.51,2.51,0,0,0,1.65.53,3.3,3.3,0,0,0,2-.57,6.84,6.84,0,0,0,1.39-1.4l.73.55a6.82,6.82,0,0,1-.89,1.1,4.52,4.52,0,0,1-1.45,1A5.45,5.45,0,0,1,7.82,25.83Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M17.76,25.83A5.63,5.63,0,0,1,16,25.59a3.58,3.58,0,0,1-1.26-.65,2.55,2.55,0,0,1-.77-1,3.08,3.08,0,0,1-.26-1.3,3.4,3.4,0,0,1,.53-1.94,3.47,3.47,0,0,1,1.93-1.21,14.9,14.9,0,0,1,3.94-.41h.36a7.88,7.88,0,0,0-.26-2.25,2.21,2.21,0,0,0-.77-1.19,2.08,2.08,0,0,0-1.23-.36,2.63,2.63,0,0,0-1.44.41,2.58,2.58,0,0,0-.93,1.73h-1.3a9.07,9.07,0,0,1,.08-1.26A1.9,1.9,0,0,1,15.15,15a2.39,2.39,0,0,1,1.41-.66,13,13,0,0,1,2.15-.17,6.52,6.52,0,0,1,2.06.3,4.09,4.09,0,0,1,1.53.93A3.87,3.87,0,0,1,23.25,17a6.67,6.67,0,0,1,.32,2.2v6.4h-2l-.83-1.06h-.12a2.82,2.82,0,0,1-1.05.9A3.68,3.68,0,0,1,17.76,25.83Zm.71-1.18a1.79,1.79,0,0,0,1.31-.53,3,3,0,0,0,.71-1v-3h-.36a3.84,3.84,0,0,0-2.45.61,2.31,2.31,0,0,0-.75,1.88,2.4,2.4,0,0,0,.41,1.51A1.39,1.39,0,0,0,18.47,24.65Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M31.92,25.83a3.38,3.38,0,0,1-1.73-.41,3.18,3.18,0,0,1-1-.89h-.11l-.83,1.06h-2V13a4.15,4.15,0,0,0-.3-1.72c-.2-.44-.65-.65-1.36-.65h-.24V9.94h2.85a2.47,2.47,0,0,1,1.29.28,1.53,1.53,0,0,1,.65.95A6.89,6.89,0,0,1,29.31,13v1.9a5.55,5.55,0,0,1,1.06-.49,4.25,4.25,0,0,1,1.43-.22,4.9,4.9,0,0,1,2.86.77,4.66,4.66,0,0,1,1.69,2.09,8,8,0,0,1,0,5.89,4.71,4.71,0,0,1-1.66,2.1A4.76,4.76,0,0,1,31.92,25.83Zm-.47-1.07a1.6,1.6,0,0,0,1.32-.61,4.11,4.11,0,0,0,.71-1.7A12,12,0,0,0,33.7,20a11.88,11.88,0,0,0-.22-2.44,3.83,3.83,0,0,0-.74-1.69,1.74,1.74,0,0,0-1.41-.62,2.79,2.79,0,0,0-1.2.25,6.25,6.25,0,0,0-.82.47v7.23a3.07,3.07,0,0,0,.82,1.07A1.94,1.94,0,0,0,31.45,24.76Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M39.66,25.59V17.53a4.15,4.15,0,0,0-.3-1.72c-.2-.44-.65-.65-1.36-.65h-.24v-.72h2.85a2.46,2.46,0,0,1,1.29.29,1.5,1.5,0,0,1,.65.95,6.89,6.89,0,0,1,.19,1.85v8.06Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M46,25.59V17.53a4.33,4.33,0,0,0-.29-1.72c-.19-.44-.64-.65-1.35-.65h-.24v-.72h2.35a3.34,3.34,0,0,1,1.27.2,1.48,1.48,0,0,1,.72.68,4.58,4.58,0,0,1,1.23-.76A5.58,5.58,0,0,1,52,14.21a6.09,6.09,0,0,1,2.49.45A3.13,3.13,0,0,1,56,16.07a5.31,5.31,0,0,1,.51,2.5v7H53.37v-7a4.7,4.7,0,0,0-.3-1.85,2.09,2.09,0,0,0-.79-1,2.21,2.21,0,0,0-1.16-.31,3.81,3.81,0,0,0-1.18.17,2.55,2.55,0,0,0-.84.43v9.6Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M65.64,25.47V15.39H64.21V14.32h1.43v-.64a4.62,4.62,0,0,1,.51-2.27A3.23,3.23,0,0,1,67.69,10a6.25,6.25,0,0,1,2.57-.46,7.49,7.49,0,0,1,1.24.1,2.53,2.53,0,0,1,.92.3,1.7,1.7,0,0,1,.53.43,2.45,2.45,0,0,1,.4.59l-.95.83a2.92,2.92,0,0,0-.88-.87,2.18,2.18,0,0,0-1.14-.32,1.37,1.37,0,0,0-1.23.66,4.6,4.6,0,0,0-.43,2.38v.64H71.8v1.07H68.72V25.47Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M78.31,25.71a5.79,5.79,0,0,1-3-.77,5.24,5.24,0,0,1-2-2.1,6.65,6.65,0,0,1,0-5.9,5.21,5.21,0,0,1,2-2.09,6.39,6.39,0,0,1,6.08,0,5.26,5.26,0,0,1,2,2.09,6.65,6.65,0,0,1,0,5.9,5.28,5.28,0,0,1-2,2.1A5.77,5.77,0,0,1,78.31,25.71Zm0-1.07A1.76,1.76,0,0,0,79.69,24a3.88,3.88,0,0,0,.83-1.69,9.54,9.54,0,0,0,.28-2.43,9.54,9.54,0,0,0-.28-2.45,3.9,3.9,0,0,0-.83-1.68,1.86,1.86,0,0,0-2.77,0,3.9,3.9,0,0,0-.83,1.68,9.54,9.54,0,0,0-.28,2.45,9.54,9.54,0,0,0,.28,2.43A3.88,3.88,0,0,0,76.92,24,1.76,1.76,0,0,0,78.31,24.64Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M91.4,25.71a5.84,5.84,0,0,1-3-.77,5.21,5.21,0,0,1-2-2.1,6.65,6.65,0,0,1,0-5.9,5.19,5.19,0,0,1,2-2.09,6.41,6.41,0,0,1,6.09,0,5.26,5.26,0,0,1,2,2.09,6.65,6.65,0,0,1,0,5.9,5.28,5.28,0,0,1-2,2.1A5.8,5.8,0,0,1,91.4,25.71Zm0-1.07A1.76,1.76,0,0,0,92.79,24a3.88,3.88,0,0,0,.83-1.69,10,10,0,0,0,.27-2.43,10,10,0,0,0-.27-2.45,3.9,3.9,0,0,0-.83-1.68,1.79,1.79,0,0,0-1.39-.62,1.82,1.82,0,0,0-1.39.62,4,4,0,0,0-.83,1.68,10,10,0,0,0-.27,2.45,10,10,0,0,0,.27,2.43A4,4,0,0,0,90,24,1.79,1.79,0,0,0,91.4,24.64Z" transform="translate(-2.12 -6.98)"/>
                                                                                <path fill="#2d272a" d="M103.81,25.71a4.47,4.47,0,0,1-4.42-2.87,7.41,7.41,0,0,1-.56-2.94,7.37,7.37,0,0,1,.56-3,4.65,4.65,0,0,1,1.69-2.09,5,5,0,0,1,2.85-.77,4.2,4.2,0,0,1,1.43.23,5.55,5.55,0,0,1,1.06.49V12.9a4.15,4.15,0,0,0-.3-1.72c-.19-.44-.65-.66-1.36-.66h-.24V9.81h2.85a2.46,2.46,0,0,1,1.29.29,1.5,1.5,0,0,1,.65,1,6.89,6.89,0,0,1,.19,1.85V25.47h-2l-.83-1.07h-.12a2.9,2.9,0,0,1-1,.89A3.3,3.3,0,0,1,103.81,25.71Zm.47-1.07a1.91,1.91,0,0,0,1-.26,2.4,2.4,0,0,0,.71-.63,4.24,4.24,0,0,0,.43-.65V15.86a4.15,4.15,0,0,0-.85-.48,2.94,2.94,0,0,0-1.17-.23,1.76,1.76,0,0,0-1.4.62,3.84,3.84,0,0,0-.74,1.68A11.94,11.94,0,0,0,102,19.9a12.79,12.79,0,0,0,.21,2.43A3.82,3.82,0,0,0,103,24,1.59,1.59,0,0,0,104.28,24.64Z" transform="translate(-2.12 -6.98)"/>
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
                                                                        <a href="/location" className="drawer__item drawer__item--primary accordion-link">
                                                                                Find Location Right
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Setup Store Smart
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Run Business Lean
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Build Consumer Portrait
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                        </ul>

                                                        <ul className="drawer__items drawer__items--user" id="DrawerNavSecondaryAccordion">
                                                                <li><a href="#" className="drawer__item">Điểm kinh doanh</a></li>
                                                                <li><a href="#" className="drawer__item"> Blog</a></li>
                                                        </ul>

                                                        <ul className="drawer__items drawer__items--corporate">
                                                                <li><a href="#" className="drawer__item">Our Story</a></li>
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
                                                margin-top: 8px;
                                            }
                                `}</style>
                        </div>
                        
                )
        }
}