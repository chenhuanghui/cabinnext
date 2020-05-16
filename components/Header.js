import Head from 'next/head'
const Header = props => (
        <div id="SiteNavContainer" className="site-nav-container is-sticky">
                <div className="marketing-nav-wrapper">
                        <nav className="marketing-nav--skin-light marketing-nav marketing-nav--primary marketing-nav--solid" id="ShopifyMainNav">
                                <div className="marketing-nav__logo ">
                                        <a href="/" className="marketing-nav__logo__shopify" >
                                                CABINFOOD LOGO
                                        </a>
                                </div>

                                <ul className="marketing-nav__items display--expanded-nav">
                                        <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> Start </button></li>
                                        <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> Sell </button></li>
                                        <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> Market </button></li>
                                        <li><button type="button" className="popover__trigger marketing-nav__item marketing-nav__item--primary"> Manage </button></li>
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
);
export default Header;