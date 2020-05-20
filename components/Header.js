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
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608 173.7">
                                                                        <title id="icon-logos-shopify-black-41-title">Home</title>
                                                                        <path
                                                                                fill="#95BF47"
                                                                                d="M130.7 32.9c-.1-.9-.9-1.3-1.5-1.4-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8-2.9-.7-3.7-.5c0 0-1.9.6-5.1 1.6-.5-1.7-1.3-3.8-2.4-5.9-3.6-6.9-8.8-10.5-15.2-10.5-.4 0-.9 0-1.3.1-.2-.2-.4-.4-.6-.7-2.8-3-6.3-4.4-10.5-4.3-8.2.2-16.3 6.1-23 16.7-4.7 7.4-8.2 16.7-9.2 23.9-9.4 2.9-16 4.9-16.1 5-4.7 1.5-4.9 1.6-5.5 6.1C12.4 55.3 0 151.4 0 151.4l104.1 18 45.1-11.2S130.8 33.7 130.7 32.9zm-39.2-9.7c-2.4.7-5.1 1.6-8.1 2.5-.1-4.1-.6-9.9-2.5-14.9 6.3 1.2 9.3 8.2 10.6 12.4zM78 27.4c-5.5 1.7-11.4 3.5-17.4 5.4 1.7-6.4 4.9-12.8 8.8-17 1.5-1.6 3.5-3.3 5.9-4.3 2.3 4.7 2.7 11.4 2.7 15.9zM66.8 5.8c1.9 0 3.5.4 4.9 1.3-2.2 1.1-4.4 2.8-6.4 5-5.2 5.6-9.2 14.2-10.8 22.6-5 1.5-9.8 3-14.3 4.4 3-13.2 14-32.9 26.6-33.3z"
                                                                        />
                                                                        <path fill="#5E8E3E" d="M129.2 31.5c-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8c-.4-.4-.9-.6-1.4-.6v149.5l45.1-11.2S130.8 33.8 130.7 32.9c-.2-.9-.9-1.3-1.5-1.4z" />
                                                                        <path
                                                                                fill="#FFF"
                                                                                d="M79.1 54.7l-5.2 19.6s-5.8-2.7-12.8-2.2c-10.2.6-10.3 7-10.2 8.7.6 8.8 23.6 10.7 24.9 31.2 1 16.2-8.6 27.2-22.4 28.1-16.6 1-25.7-8.7-25.7-8.7l3.5-14.9s9.2 6.9 16.5 6.5c4.8-.3 6.5-4.2 6.3-7-.7-11.4-19.5-10.8-20.7-29.5-1-15.8 9.4-31.8 32.3-33.3 9-.8 13.5 1.5 13.5 1.5z"
                                                                        />
                                                                        <g>
                                                                                <path
                                                                                d="M210.3 96.5c-5.2-2.8-7.9-5.2-7.9-8.5 0-4.2 3.7-6.9 9.6-6.9 6.8 0 12.8 2.8 12.8 2.8l4.8-14.6s-4.4-3.4-17.3-3.4c-18 0-30.5 10.3-30.5 24.8 0 8.2 5.8 14.5 13.6 19 6.3 3.6 8.5 6.1 8.5 9.9 0 3.9-3.1 7-9 7-8.7 0-16.9-4.5-16.9-4.5l-5.1 14.6s7.6 5.1 20.3 5.1c18.5 0 31.8-9.1 31.8-25.5.1-8.9-6.6-15.2-14.7-19.8zM284.1 65.7c-9.1 0-16.3 4.3-21.8 10.9l-.3-.1 7.9-41.4h-20.6l-20 105.3h20.6l6.9-36c2.7-13.6 9.7-22 16.3-22 4.6 0 6.4 3.1 6.4 7.6 0 2.8-.3 6.3-.9 9.1l-7.8 41.2h20.6l8.1-42.6c.9-4.5 1.5-9.9 1.5-13.4 0-11.5-6.2-18.6-16.9-18.6zM347.6 65.7c-24.8 0-41.2 22.4-41.2 47.4 0 16 9.9 28.8 28.4 28.8 24.3 0 40.8-21.8 40.8-47.4-.1-14.7-8.8-28.8-28-28.8zm-10.2 60.4c-7 0-10-6-10-13.4 0-11.8 6.1-31.1 17.3-31.1 7.3 0 9.7 6.3 9.7 12.4 0 12.7-6.1 32.1-17 32.1zM428.2 65.7c-13.9 0-21.8 12.2-21.8 12.2h-.3l1.2-11.1h-18.2c-.9 7.5-2.5 18.8-4.2 27.3l-14.3 75.4h20.6l5.7-30.5h.4s4.2 2.7 12.1 2.7c24.2 0 40-24.8 40-49.9.1-13.7-6.1-26.1-21.2-26.1zm-19.7 60.7c-5.4 0-8.5-3-8.5-3l3.4-19.3c2.4-12.8 9.1-21.4 16.3-21.4 6.3 0 8.2 5.8 8.2 11.4 0 13.3-7.9 32.3-19.4 32.3zM478.9 36.2c-6.6 0-11.8 5.2-11.8 12 0 6.1 3.9 10.3 9.7 10.3h.3c6.4 0 12-4.3 12.1-12 0-6-4-10.3-10.3-10.3zM450.1 140.4h20.6l14-73h-20.8zM537.1 67.2h-14.3l.7-3.4c1.2-7 5.4-13.3 12.2-13.3 3.7 0 6.6 1 6.6 1l4-16.1s-3.6-1.8-11.2-1.8c-7.3 0-14.6 2.1-20.2 6.9-7 6-10.3 14.6-12 23.3l-.6 3.4h-9.6l-3 15.5h9.6l-10.9 57.7H509l10.9-57.7h14.2l3-15.5zM586.7 67.4s-12.9 32.5-18.7 50.2h-.3c-.4-5.7-5.1-50.2-5.1-50.2H541l12.4 67.1c.3 1.5.1 2.4-.4 3.4-2.4 4.6-6.4 9.1-11.2 12.4-3.9 2.8-8.2 4.6-11.7 5.8l5.7 17.5c4.2-.9 12.8-4.3 20.2-11.2 9.4-8.8 18.1-22.4 27-40.9l25.2-54.1h-21.5z"
                                                                                />
                                                                        </g>
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
                                                                                                <li>
                                                                                                        <p className="marketing-nav__item marketing-nav__item--separated marketing-nav__item--child">
                                                                                                        Bundle Delivery Right
                                                                                                        </p>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="/location" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Phát triển điểm kinh doanh
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="#" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Đầu tư hiệu quả
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="#" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Vận hành tối ưu
                                                                                                                        <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                                                                <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                                                        </svg>

                                                                                                                </a>
                                                                                                        </div>
                                                                                                </li>
                                                                                                <li>
                                                                                                        <div className="popover-wrapper js-popover-flyout popover-wrapper--flyout" data-position="right" data-align="top">
                                                                                                                <a href="#" className="popover__trigger marketing-nav__item marketing-nav__item--child">
                                                                                                                        Xây dựng khách hàng
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
                                                        {/* <li>
                                                                <div className="popover-wrapper js-popover-dropdown popover-wrapper--dropdown" data-position="bottom" data-align="left" >
                                                                        <button className="popover__trigger marketing-nav__item marketing-nav__item--primary"> 
                                                                                Khám phá điểm kinh doanh
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563">
                                                                                        <path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" />
                                                                                </svg>
                                                                        </button>
                                                                </div>
                                                        </li> */}
                                                        <li>
                                                                <div className="popover-wrapper js-popover-dropdown popover-wrapper--dropdown" data-position="bottom" data-align="left" >
                                                                        <button className="popover__trigger marketing-nav__item marketing-nav__item--primary"> 
                                                                                Về Cabin Food
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563">
                                                                                        <path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" />
                                                                                </svg>
                                                                        </button>
                                                                </div>
                                                        </li>
                                                </ul>

                                                {/* <ul className="marketing-nav__items marketing-nav__items--primary-mobile hide--desktop">
                                                        <li> <a className="marketing-nav__item marketing-nav__item--primary" href="https://www.shopify.com/login">Log in</a></li>
                                                </ul> */}
                                                <ul className="marketing-nav__items marketing-nav__user display--expanded-nav">
                                                        <li><a href="#" className="marketing-nav__item marketing-nav__item--user"> Discover </a></li>
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
                                                                        <svg className="icon" aria-labelledby="icon-logos-shopify-black-41-title" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608 173.7">
                                                                                <title id="icon-logos-shopify-black-41-title">Home</title>
                                                                                <path
                                                                                        fill="#95BF47"
                                                                                        d="M130.7 32.9c-.1-.9-.9-1.3-1.5-1.4-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8-2.9-.7-3.7-.5c0 0-1.9.6-5.1 1.6-.5-1.7-1.3-3.8-2.4-5.9-3.6-6.9-8.8-10.5-15.2-10.5-.4 0-.9 0-1.3.1-.2-.2-.4-.4-.6-.7-2.8-3-6.3-4.4-10.5-4.3-8.2.2-16.3 6.1-23 16.7-4.7 7.4-8.2 16.7-9.2 23.9-9.4 2.9-16 4.9-16.1 5-4.7 1.5-4.9 1.6-5.5 6.1C12.4 55.3 0 151.4 0 151.4l104.1 18 45.1-11.2S130.8 33.7 130.7 32.9zm-39.2-9.7c-2.4.7-5.1 1.6-8.1 2.5-.1-4.1-.6-9.9-2.5-14.9 6.3 1.2 9.3 8.2 10.6 12.4zM78 27.4c-5.5 1.7-11.4 3.5-17.4 5.4 1.7-6.4 4.9-12.8 8.8-17 1.5-1.6 3.5-3.3 5.9-4.3 2.3 4.7 2.7 11.4 2.7 15.9zM66.8 5.8c1.9 0 3.5.4 4.9 1.3-2.2 1.1-4.4 2.8-6.4 5-5.2 5.6-9.2 14.2-10.8 22.6-5 1.5-9.8 3-14.3 4.4 3-13.2 14-32.9 26.6-33.3z"
                                                                                />
                                                                                <path fill="#5E8E3E" d="M129.2 31.5c-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8c-.4-.4-.9-.6-1.4-.6v149.5l45.1-11.2S130.8 33.8 130.7 32.9c-.2-.9-.9-1.3-1.5-1.4z" />
                                                                                <path
                                                                                        fill="#FFF"
                                                                                        d="M79.1 54.7l-5.2 19.6s-5.8-2.7-12.8-2.2c-10.2.6-10.3 7-10.2 8.7.6 8.8 23.6 10.7 24.9 31.2 1 16.2-8.6 27.2-22.4 28.1-16.6 1-25.7-8.7-25.7-8.7l3.5-14.9s9.2 6.9 16.5 6.5c4.8-.3 6.5-4.2 6.3-7-.7-11.4-19.5-10.8-20.7-29.5-1-15.8 9.4-31.8 32.3-33.3 9-.8 13.5 1.5 13.5 1.5z"
                                                                                />
                                                                                <g>
                                                                                        <path
                                                                                        d="M210.3 96.5c-5.2-2.8-7.9-5.2-7.9-8.5 0-4.2 3.7-6.9 9.6-6.9 6.8 0 12.8 2.8 12.8 2.8l4.8-14.6s-4.4-3.4-17.3-3.4c-18 0-30.5 10.3-30.5 24.8 0 8.2 5.8 14.5 13.6 19 6.3 3.6 8.5 6.1 8.5 9.9 0 3.9-3.1 7-9 7-8.7 0-16.9-4.5-16.9-4.5l-5.1 14.6s7.6 5.1 20.3 5.1c18.5 0 31.8-9.1 31.8-25.5.1-8.9-6.6-15.2-14.7-19.8zM284.1 65.7c-9.1 0-16.3 4.3-21.8 10.9l-.3-.1 7.9-41.4h-20.6l-20 105.3h20.6l6.9-36c2.7-13.6 9.7-22 16.3-22 4.6 0 6.4 3.1 6.4 7.6 0 2.8-.3 6.3-.9 9.1l-7.8 41.2h20.6l8.1-42.6c.9-4.5 1.5-9.9 1.5-13.4 0-11.5-6.2-18.6-16.9-18.6zM347.6 65.7c-24.8 0-41.2 22.4-41.2 47.4 0 16 9.9 28.8 28.4 28.8 24.3 0 40.8-21.8 40.8-47.4-.1-14.7-8.8-28.8-28-28.8zm-10.2 60.4c-7 0-10-6-10-13.4 0-11.8 6.1-31.1 17.3-31.1 7.3 0 9.7 6.3 9.7 12.4 0 12.7-6.1 32.1-17 32.1zM428.2 65.7c-13.9 0-21.8 12.2-21.8 12.2h-.3l1.2-11.1h-18.2c-.9 7.5-2.5 18.8-4.2 27.3l-14.3 75.4h20.6l5.7-30.5h.4s4.2 2.7 12.1 2.7c24.2 0 40-24.8 40-49.9.1-13.7-6.1-26.1-21.2-26.1zm-19.7 60.7c-5.4 0-8.5-3-8.5-3l3.4-19.3c2.4-12.8 9.1-21.4 16.3-21.4 6.3 0 8.2 5.8 8.2 11.4 0 13.3-7.9 32.3-19.4 32.3zM478.9 36.2c-6.6 0-11.8 5.2-11.8 12 0 6.1 3.9 10.3 9.7 10.3h.3c6.4 0 12-4.3 12.1-12 0-6-4-10.3-10.3-10.3zM450.1 140.4h20.6l14-73h-20.8zM537.1 67.2h-14.3l.7-3.4c1.2-7 5.4-13.3 12.2-13.3 3.7 0 6.6 1 6.6 1l4-16.1s-3.6-1.8-11.2-1.8c-7.3 0-14.6 2.1-20.2 6.9-7 6-10.3 14.6-12 23.3l-.6 3.4h-9.6l-3 15.5h9.6l-10.9 57.7H509l10.9-57.7h14.2l3-15.5zM586.7 67.4s-12.9 32.5-18.7 50.2h-.3c-.4-5.7-5.1-50.2-5.1-50.2H541l12.4 67.1c.3 1.5.1 2.4-.4 3.4-2.4 4.6-6.4 9.1-11.2 12.4-3.9 2.8-8.2 4.6-11.7 5.8l5.7 17.5c4.2-.9 12.8-4.3 20.2-11.2 9.4-8.8 18.1-22.4 27-40.9l25.2-54.1h-21.5z"
                                                                                        />
                                                                                </g>
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
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Phát triển điểm kinh doanh
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Đầu tư hiệu quả
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Vận hành tối ưu
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                                <li className="accordion-item">
                                                                        <a href="#" className="drawer__item drawer__item--primary accordion-link">
                                                                                Xây dựng khách hàng
                                                                                <svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-242.1 245.6 6.6 10.3">
                                                                                        <path d="M-235.6 250.7l-5.1 5.2-1.4-1.4 3.7-3.8-3.7-3.7 1.4-1.4" />
                                                                                </svg>
                                                                        </a>
                                                                </li>
                                                        </ul>

                                                        <ul className="drawer__items drawer__items--user" id="DrawerNavSecondaryAccordion">
                                                                <li><a href="#" className="drawer__item">Khám phá điểm kinh doanh</a></li>
                                                                <li><a href="#" className="drawer__item"> Blog</a></li>
                                                                {/*<li className="accordion-item">
                                                                        <button name="button" type="button" className="drawer__item accordion-link">
                                                                        Learn<svg className="icon marketing-nav__arrow" aria-hidden="true" focusable="false"><use xlink:href="#modules-caret-down" /></svg>
                                                                        </button>
                                                                        <div className="drawer__items-wrapper accordion-content">
                                                                        <ul className="drawer__items drawer__items--nested">
                                                                                <li>
                                                                                <a
                                                                                        href="https://help.shopify.com/"
                                                                                        className="drawer__item"
                                                                                        data-ga-event="Main Nav"
                                                                                        data-ga-action="Help Center"
                                                                                        data-trekkie-event="Main Nav"
                                                                                        data-trekkie-action="Help Center"
                                                                                        data-trekkie-id="Main Nav Help Center"
                                                                                        rel="nofollow"
                                                                                >
                                                                                        Help Center
                                                                                </a>
                                                                                </li>
                                                                                <li><a href="blog.html" className="drawer__item" data-ga-event="Main Nav" data-ga-action="Blog" data-trekkie-event="Main Nav" data-trekkie-action="Blog" data-trekkie-id="Main Nav Blog">Blog</a></li>
                                                                                <li>
                                                                                <a
                                                                                        href="https://www.shopifycompass.com"
                                                                                        className="drawer__item"
                                                                                        data-ga-event="Main Nav"
                                                                                        data-ga-action="Compass"
                                                                                        data-trekkie-event="Main Nav"
                                                                                        data-trekkie-action="Compass"
                                                                                        data-trekkie-id="Main Nav Compass"
                                                                                        rel="nofollow"
                                                                                >
                                                                                        Compass
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                <a
                                                                                        href="blog/topics/guides.html"
                                                                                        className="drawer__item"
                                                                                        data-ga-event="Main Nav"
                                                                                        data-ga-action="Guides"
                                                                                        data-trekkie-event="Main Nav"
                                                                                        data-trekkie-action="Guides"
                                                                                        data-trekkie-id="Main Nav Guides"
                                                                                >
                                                                                        Guides
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                <a
                                                                                        href="https://community.shopify.com/c/Shopify-Community/ct-p/en"
                                                                                        className="drawer__item"
                                                                                        data-ga-event="Main Nav"
                                                                                        data-ga-action="Forums"
                                                                                        data-trekkie-event="Main Nav"
                                                                                        data-trekkie-action="Forums"
                                                                                        data-trekkie-id="Main Nav Forums"
                                                                                        rel="nofollow"
                                                                                >
                                                                                        Forums
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                <a href="tools.html" className="drawer__item" data-ga-event="Main Nav" data-ga-action="Free tools" data-trekkie-event="Main Nav" data-trekkie-action="Free tools" data-trekkie-id="Main Nav Free tools">
                                                                                        Free tools
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                <a href="podcasts.html" className="drawer__item" data-ga-event="Main Nav" data-ga-action="Podcasts" data-trekkie-event="Main Nav" data-trekkie-action="Podcasts" data-trekkie-id="Main Nav Podcasts">
                                                                                        Podcasts
                                                                                </a>
                                                                                </li>
                                                                                <li>
                                                                                <a
                                                                                        href="encyclopedia.html"
                                                                                        className="drawer__item"
                                                                                        data-ga-event="Main Nav"
                                                                                        data-ga-action="Business encyclopedia"
                                                                                        data-trekkie-event="Main Nav"
                                                                                        data-trekkie-action="Business encyclopedia"
                                                                                        data-trekkie-id="Main Nav Business encyclopedia"
                                                                                >
                                                                                        Business encyclopedia
                                                                                </a>
                                                                                </li>
                                                                        </ul>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <a href="https://www.shopify.com/login" className="drawer__item" data-ga-event="Main Nav" data-ga-action="Login" data-trekkie-event="Main Nav" data-trekkie-action="Login" data-trekkie-id="Main Nav Login">
                                                                        Log in
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <form className="button_to" method="post" action="https://accounts.shopify.com/store-signup/setup">
                                                                        <input
                                                                                className="js-open-signup drawer__item drawer__item--signup marketing-nav__button marketing-button marketing-button--small"
                                                                                data-ga-event="Main Nav"
                                                                                data-ga-action="Get Started"
                                                                                data-trekkie-event="Main Nav"
                                                                                data-trekkie-action="Get Started"
                                                                                data-trekkie-id="Main Nav Get Started"
                                                                                type="submit"
                                                                                value="Start free trial"
                                                                        />
                                                                        </form>
                                                                </li> */}
                                                        </ul>

                                                        <ul className="drawer__items drawer__items--corporate">
                                                                <li><a href="#" className="drawer__item">Về CabinFood</a></li>
                                                                {/* <li><a href="about.html" className="drawer__item">About</a></li>
                                                                <li><a href="careers.html" className="drawer__item">Careers</a></li>
                                                                <li><a href="https://news.shopify.com" className="drawer__item">Press and Media</a></li>
                                                                <li>
                                                                        <a href="plus.html" className="drawer__item">
                                                                        Shopify Plus <svg className="icon marketing-nav__external-indicator" aria-hidden="true" focusable="false"><use xlink:href="#modules-nav-external-indicator" /></svg>
                                                                        </a>
                                                                </li>
                                                                <li><a href="sitemap.html" className="drawer__item">Sitemap</a></li> */}
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
                                `}</style>
                        </div>
                        
                )
        }
}