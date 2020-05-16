const Footer = props => (
    <footer className="footer--main" id="ShopifyMainFooter" role="contentinfo">
        <div className="footer-top">
            <div className="grid">
                <div className="grid__item">
                    <nav className="footer-nav">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Press and Media</a>
                        <a href="#">Shopify Plus</a>
                        <a href="#">Sitemap</a>
                    </nav>
                </div>


                <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-3">
                    <h3 className="footer-heading heading--5">Online store</h3>

                    <div className="gutter-bottom--mobile footer__column-list">
                        <a className="footer-link" href="#">Sell online</a>
                        <a className="footer-link" href="#">Features</a>
                        <a className="footer-link" href="#">Examples</a>
                        <a className="footer-link" href="#">Website editor</a>
                        <a className="footer-link" href="#">Online retail</a>
                        <a className="footer-link" href="#">Ecommerce website</a>
                        <a className="footer-link" href="#">Domain names</a>
                        <a className="footer-link" href="#">Themes</a>
                        <a className="footer-link" href="#">Shopping cart</a>
                        <a className="footer-link" href="#">Ecommerce hosting</a>
                        <a className="footer-link" href="#">Mobile commerce</a>
                        <a className="footer-link" href="#">Ecommerce software</a>
                        <a className="footer-link" href="#">Online store builder</a>
                        <a className="footer-link" href="#">Oberlo</a>
                        <a className="footer-link" href="#">Dropshipping Business</a>
                    </div>
                </div>

                <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
                    <h3 className="footer-heading heading--5">Point of sale</h3>

                    <div className="gutter-bottom--mobile">
                        <a className="footer-link" href="#">Point of sale</a>
                        <a className="footer-link" href="#">Features</a>
                        <a className="footer-link" href="#">Hardware</a>
                    </div>
                </div>

                <div class="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
                    <h3 class="footer-heading heading--5">Support</h3>

                    <div class="gutter-bottom--mobile">
                        <a class="footer-link" href="https://help.shopify.com/en/questions">24/7 support</a>
                        <a class="footer-link" href="https://help.shopify.com/en">Shopify Help Center</a>
                        <a class="footer-link" href="https://community.shopify.com/c/Shopify-Community/ct-p/en">Forums</a>
                        <a class="footer-link" href="https://shopify.dev">API documentation</a>
                        <a class="footer-link" href="tools.html">Free tools</a>
                        <a class="footer-link" href="https://burst.shopify.com">Free stock photos</a>
                        <a class="footer-link" href="https://exchangemarketplace.com">Websites for sale</a>
                        <a class="footer-link" href="https://hatchful.shopify.com">Hatchful</a>
                    </div>
                </div>

                <div class="grid__item grid__item--mobile-up-half grid__item--tablet-up-1">
                    <h3 class="footer-heading heading--5">Shopify</h3>

                    <div class="gutter-bottom--mobile">
                        <a class="footer-link" href="contact.html">Contact</a>
                        <a class="footer-link" href="partners.html">Partner program</a>
                        <a class="footer-link" href="affiliates.html">Affiliate program</a>
                        <a class="footer-link" href="https://developers.shopify.com">App developers</a>
                        <a class="footer-link" href="https://investors.shopify.com">Investors</a>
                        <a class="footer-link" href="blog/topics.html">Blog topics</a>
                    </div>
                </div>


            </div>
        </div>

        
        <div className="footer-bottom">
            <div className="grid">

                <div class="grid__item grid__item--tablet-up-2 footer-bottom__social text-center--mobile">
                    <a class="footer-social__icon" target="_blank" href="https://www.facebook.com/cabinfood.vn">
                        {/* <svg class="icon" aria-labelledby="icon-modules-social-facebook-55-title" role="img">
                            <title id="icon-modules-social-facebook-55-title">Facebook</title>
                            <use xlink:href="#modules-social-facebook" />
                        </svg> */}
                    </a>
                    
                    <a class="footer-social__icon" target="_blank" rel="me nofollow noopener" data-ga-event="Social" data-ga-action="Youtube" data-ga-label="Footer" href="https://www.youtube.com/user/shopify">
                        {/* <svg class="icon" aria-labelledby="icon-modules-social-youtube-57-title" role="img">
                            <title id="icon-modules-social-youtube-57-title">YouTube</title>
                            <use xlink:href="#modules-social-youtube" />
                        </svg> */}
                    </a>
                    <a class="footer-social__icon" target="_blank" rel="me nofollow noopener" data-ga-event="Social" data-ga-action="Instagram" data-ga-label="Footer" href="https://www.instagram.com/shopify/">
                        {/* <svg class="icon" aria-labelledby="icon-modules-social-instagram-58-title" role="img">
                            <title id="icon-modules-social-instagram-58-title">Instagram</title>
                            <use xlink:href="#modules-social-instagram" />
                        </svg> */}
                    </a>
                </div>



                <div className="grid__item grid__item--tablet-up-4 footer-bottom__links text-center--mobile text-right--tablet-up">
                    <a href="#l">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;