import Head from 'next/head'
const Hero = props => (
  <div className="section section--padding-top-only homepage-hero" id="Hero">
      <div className="grid grid--equal-height grid--vertically-centered">
        <div className="grid__item grid__item--desktop-up-half homepage-hero__content">
            <div className="section-heading section-heading--mobile-up-align-left gutter-bottom--reset">
<h1 className="section-heading__heading heading--jumbo color-green-80 homepage-hero__heading gutter-bottom">{props.dataHero.hero_message}</h1>
            </div>
            <div className="homepage-hero__signup">
                <form className="js-signup-inline marketing-form--inline">
                    <div className="marketing-input-wrapper marketing-input-button-pair">
                        <div className="marketing-input-button-pair__field-wrapper">
                            <label className="marketing-label marketing-label--in-field marketing-label--floating marketing-input-button-pair__label" >Email</label>
                            <input placeholder={props.dataHero.hint_input} id="SignupEmail-9305" className="marketing-input-button-pair__input marketing-input marketing-input--floating" />
                            <button className="marketing-button marketing-form__button marketing-input-button-pair__button">{props.dataHero.btn_title}</button>
                        </div>
                        <span className="marketing-form__messages"></span>
                    </div>
                </form>
                <p className="marketing-form__fallback-cta text-center text-minor color-gray-80 text-left">{props.dataHero.note}</p>
            </div>
        </div>
      </div>

    <div className="picture--cover homepage-hero__image">
        <img className="image" sizes="100vw" srcSet={props.dataHero.img_src} />
    </div>
  </div>  
);
export default Hero;