const SetupSection1 =props => (
    <section className="section section pillar-intro__wrapper color-black start-pillar-intro__hero">
        <div className="grid">
            <div className="grid__item pillar-intro">
                <div className="section-heading section-heading--tablet-up-align-left pillar-intro__heading-container">
                    <h1 className="section-heading__heading heading--jumbo text-left color-green-80 pillar-intro__heading"><span className="pillar-intro__highlight">Start &mdash;</span> your business</h1>
                    <p className="section-heading__subhead text-left color-gray-80 heading--3 pillar-intro__subhead">Take the steps to move from ambition to&nbsp;action.</p>
                </div>
                <nav className='pillar-nav' role='navigation' aria-label="In-page navigation">
                    <ul className="pillar-nav__list">
                        <li className="pillar-nav__item">
                            <a className="pillar-nav__link link-scroll-to" data-ga-event="start" data-ga-action="intro" data-ga-label="brand" href="start.html#BuildYourBrand">
                                <p className="text-major pillar-nav__item-name">Build your brand</p>
                                <p className="pillar-nav__item-description color-gray-80">Create a business name and&nbsp;logo</p>
                                <svg className="icon pillar-nav__link-icon" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563"><path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" /></svg>
                            </a>
                        </li>
                        <li className="pillar-nav__item">
                            <a className="pillar-nav__link link-scroll-to" data-ga-event="start" data-ga-action="intro" data-ga-label="online" href="start.html#BuildYourOnlinePresence">
                                <p className="text-major pillar-nav__item-name">Build your online presence</p>
                                <p className="pillar-nav__item-description color-gray-80">Find a domain, explore stock images, and amplify your&nbsp;brand</p>
                                <svg className="icon pillar-nav__link-icon" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563"><path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" /></svg>
                            </a>
                        </li>
                        <li className="pillar-nav__item">
                            <a className="pillar-nav__link link-scroll-to" data-ga-event="start" data-ga-action="intro" data-ga-label="store" href="start.html#BuildYourStore">
                                <p className="text-major pillar-nav__item-name">Build your store</p>
                                <p className="pillar-nav__item-description color-gray-80">Use Shopify’s powerful features to start&nbsp;selling</p>
                                <svg className="icon pillar-nav__link-icon" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 10.289 6.563"><path d="M5.212 6.563L0 1.423 1.404 0l3.788 3.735L8.865.01l1.424 1.404" /></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="pillar-intro-image__wrapper start-intro-image__wrapper">
                    <div className="pillar-intro-image__dimension-container start-intro-image__dimension-container">
                        <div className="pillar-intro-image__image-container start-intro-image__image-container">
                            <picture className="picture pillar-intro-image start-intro-image start-intro-image--merchant hide--mobile">
                                <source srcSet="https://cdn.shopify.com/assets2/merchants/union-los-angeles/union-los-angeles-start-pillar-hero@tablet-00e0470fc871863917c243d854b8ce0be278adf56d3c0c8c3cba3e034e773183.jpg 1x, https://cdn.shopify.com/assets2/merchants/union-los-angeles/union-los-angeles-start-pillar-hero@tablet-2x-387fe66e7a5881aeb550bb79f7910e7df3af0784ff9b4f358f8a04ebb7efa15b.jpg 2x" media="(min-width: 750px)" />
                                <img alt="" />
                            </picture>
                            <picture className="picture pillar-intro-image start-intro-image start-intro-image--writing">
                                <source srcSet="https://cdn.shopify.com/assets2/pillar/start/intro/writing@tablet-34fd2256c250dc644736ba04c346c545005888688b8adc29ab6a0123eb348e35.jpg 1x, https://cdn.shopify.com/assets2/pillar/start/intro/writing@tablet-2x-35061327fe9cbc0b37dcd676688f505af36188e86cec914dad616dfa01f904ac.jpg 2x" media="(min-width: 750px)" />
                                <img srcSet="https://cdn.shopify.com/assets2/pillar/start/intro/writing@mobile-0eeef1d58fe121df7279430aabca8d55e1f7023fbc74e23068a5bc8b5661a91e.jpg 1x, https://cdn.shopify.com/assets2/pillar/start/intro/writing@mobile-2x-41d91d9a0c1d889a17bfee58b652889d727ef987b753016bf9f326fba0b02ed2.jpg 2x" alt="" />
                            </picture>
                            <picture className="picture pillar-intro-image start-intro-image start-intro-image--desk">
                                <source srcSet="https://cdn.shopify.com/assets2/pillar/start/intro/desk@tablet-808fc116357e4b18f3f8c4705d41e30367c39f5ecdcba8bec62e0ec36db06e41.jpg 1x, https://cdn.shopify.com/assets2/pillar/start/intro/desk@tablet-2x-d8a54a49d3011ea31507163e838dd43f31ca436d8d4364461be1aa16eba23997.jpg 2x" media="(min-width: 750px)" />
                                <img srcSet="https://cdn.shopify.com/assets2/pillar/start/intro/desk@mobile-c856864399fcb4870fc224cfbdd25302dc92724869fe6ed4391f83b48aff5e28.jpg 1x, https://cdn.shopify.com/assets2/pillar/start/intro/desk@mobile-2x-be627a21f4923b1d0b67a4f788b86f5a6e3cdf08c262646487ca676edfc22a34.jpg 2x" alt="" />
                            </picture>
                            <picture className="picture pillar-intro-image start-intro-image start-intro-image--chalkboard hide--mobile">
                                <source srcSet="https://cdn.shopify.com/assets2/pillar/start/intro/chalkboard@tablet-2da766a06d6285b7c741be8dbb7e6629b1f2aabe13b32bf7fd575fb320d5aa31.jpg 1x, https://cdn.shopify.com/assets2/pillar/start/intro/chalkboard@tablet-2x-a80013374d0ddc5a2bd5ba2091749a81acd619c5a510afcd895a026f6517db15.jpg 2x" media="(min-width: 750px)" />
                                <img alt="" />
                            </picture>
                            <picture className="picture pillar-intro-image start-intro-image start-intro-image--retail hide--mobile">
                                <source srcSet="https://cdn.shopify.com/assets2/pillar/start/intro/retail@tablet-f2a2520ee9b8ba2f92df46244f514eb2193291b837d8180f941c9fbda62ee819.jpg 1x, https://cdn.shopify.com/assets2/pillar/start/intro/retail@tablet-2x-08e21010089262c0b010617937c926c68366cb21b24cf3e49c7bc13a7aa03576.jpg 2x" media="(min-width: 750px)" />
                                <img alt="" />
                            </picture>
                        </div>
                        <p className='pillar-intro__caption hide--mobile'>Featured merchant — Union Los Angeles</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default SetupSection1;