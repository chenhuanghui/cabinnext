import Head from 'next/head'
const Hero = props => (
  <div className="section section--padding-top-only homepage-hero" id="Hero">
      <div className="grid grid--equal-height grid--vertically-centered">
        <div className="grid__item grid__item--desktop-up-half homepage-hero__content">
            <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
                <h1 className="section-heading__heading heading--jumbo color-green-80 homepage-hero__heading gutter-bottom">Build an online business—no matter what business you’re&nbsp;in</h1>
            </div>
            <div className="homepage-hero__signup">
                <form className="js-signup-inline marketing-form--inline">
                    <div className="marketing-input-wrapper marketing-input-button-pair">
                        <div className="marketing-input-button-pair__field-wrapper">
                            <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" for="SignupEmail-9305">Email</label>
                            <input placeholder="Enter your email address" id="SignupEmail-9305" className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                            <button className="marketing-button marketing-form__button marketing-input-button-pair__button">Start free trial</button>
                        </div>
                        <span className="marketing-form__messages"></span>
                    </div>
                </form>
                <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">Due to the impact of COVID-19, Shopify is offering an extended 90-day
        free trial. By entering your email, you agree to receive marketing emails from Shopify.</p>
            </div>
        </div>
      </div>

    <div class="picture--cover homepage-hero__image">
        <img class="image" sizes="100vw" srcset="https://cdn.shopify.com/assets2/home/hero-small-7f6e425db758ac1743c1b556c59648a024300816d7c5afb90bef84f9bb743d95.jpg 1x, https://cdn.shopify.com/assets2/home/hero-large-0d97d3dfd511051e564ccb3ceb07c9ccf7afbeeae38acdbd6c181317a8d31a05.jpg 2x" />
    </div>
  </div>  
);
export default Hero;