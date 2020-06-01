const Footer = props => (
    <footer className="footer--main" id="ShopifyMainFooter" role="contentinfo">
        <div className="footer-top">
            <div className="grid">
                <div className="grid__item">
                    <nav className="footer-nav">
                        <a href="/about">Về Cabin Food</a>
                        <a href="/stores">Điểm kinh doanh</a>
                        <a href="/categories">Món ăn thức uống phù hợp</a>
                        <a href="/pricing">Bảng giá</a>

                    </nav>
                </div>


                {/* <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-3">
                    <h3 className="footer-heading heading--5">Giải pháp</h3>

                    <div className="gutter-bottom--mobile footer__column-list">
                        <a className="footer-link" href="#">Bắt đầu dễ dàng</a>
                        <a className="footer-link" href="#">Vận hành tinh gọn</a>
                        <a className="footer-link" href="#">Mở rộng thị trường</a>
                        <a className="footer-link" href="#">Quản lý tối ưu</a>
                    </div>
                </div> */}

                {/* <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
                    <h3 className="footer-heading heading--5">Point of sale</h3>

                    <div className="gutter-bottom--mobile">
                        <a className="footer-link" href="#">Point of sale</a>
                        <a className="footer-link" href="#">Features</a>
                        <a className="footer-link" href="#">Hardware</a>
                    </div>
                </div> */}

                {/* <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
                    <h3 className="footer-heading heading--5">Support</h3>

                    <div className="gutter-bottom--mobile">
                        <a className="footer-link" href="https://help.shopify.com/en/questions">24/7 support</a>
                        <a className="footer-link" href="https://help.shopify.com/en">Shopify Help Center</a>
                        <a className="footer-link" href="https://community.shopify.com/c/Shopify-Community/ct-p/en">Forums</a>
                        <a className="footer-link" href="https://shopify.dev">API documentation</a>
                        <a className="footer-link" href="tools.html">Free tools</a>
                        <a className="footer-link" href="https://burst.shopify.com">Free stock photos</a>
                        <a className="footer-link" href="https://exchangemarketplace.com">Websites for sale</a>
                        <a className="footer-link" href="https://hatchful.shopify.com">Hatchful</a>
                    </div>
                </div> */}

                {/* <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
                    <h3 className="footer-heading heading--5">Shopify</h3>

                    <div className="gutter-bottom--mobile">
                        <a className="footer-link" href="contact.html">Contact</a>
                        <a className="footer-link" href="partners.html">Partner program</a>
                        <a className="footer-link" href="affiliates.html">Affiliate program</a>
                        <a className="footer-link" href="https://developers.shopify.com">App developers</a>
                        <a className="footer-link" href="https://investors.shopify.com">Investors</a>
                        <a className="footer-link" href="blog/topics.html">Blog topics</a>
                    </div>
                </div> */}


            </div>
        </div>

        
        <div className="footer-bottom">
            <div className="grid">

                <div className="grid__item grid__item--tablet-up-2 footer-bottom__social text-center--mobile">
                    <a className="footer-social__icon" target="_blank" href="https://www.facebook.com/cabinfood.vn">
                        {/* <svg className="icon" aria-labelledby="icon-modules-social-facebook-55-title" role="img">
                            <title id="icon-modules-social-facebook-55-title">Facebook</title>
                            <use xlink:href="#modules-social-facebook" />
                        </svg> */}
                    </a>
                    
                    <a className="footer-social__icon" target="_blank" rel="me nofollow noopener" data-ga-event="Social" data-ga-action="Youtube" data-ga-label="Footer" href="https://www.youtube.com/user/shopify">
                        {/* <svg className="icon" aria-labelledby="icon-modules-social-youtube-57-title" role="img">
                            <title id="icon-modules-social-youtube-57-title">YouTube</title>
                            <use xlink:href="#modules-social-youtube" />
                        </svg> */}
                    </a>
                    <a className="footer-social__icon" target="_blank" rel="me nofollow noopener" data-ga-event="Social" data-ga-action="Instagram" data-ga-label="Footer" href="https://www.instagram.com/shopify/">
                        {/* <svg className="icon" aria-labelledby="icon-modules-social-instagram-58-title" role="img">
                            <title id="icon-modules-social-instagram-58-title">Instagram</title>
                            <use xlink:href="#modules-social-instagram" />
                        </svg> */}
                    </a>
                </div>



                <div className="grid__item grid__item--tablet-up-4 footer-bottom__links text-center--mobile text-right--tablet-up">
                    <a href="#l">Điều khoản dịch vụ</a>
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
);
export default Footer;