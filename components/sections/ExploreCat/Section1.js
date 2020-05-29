const ExploreCatSection1 =props => (
    
    <section className="section">
        <div className="gird">
            <div class="grid__item grid__item--desktop-up-10 grid__item--wide-up-8 grid__item--desktop-up-align-center">
                <section class="section section--tight section--padding-bottom-only">
                    <div class="section-heading">
                        <h1 class="section-heading__kicker heading--5">Online store examples</h1>
                        <h2 class="section-heading__heading heading--1">Find the way forward for your business</h2>
                        <p class="section-heading__subhead heading--2 heading--3">From shoe stores to snack shops, browse Shopify store examples and get inspired to get online.</p>
                    </div>
                </section>
            </div>
        </div>

        <div className="grid">
            <div className="grid__item">
                <section className="section section--tight">
                    <div className="example-merchants">
                        {props.dataCategories.map((p) => (
                            <div className="block example-merchant__block">
                                <span className="image block__image">
                                    <img src={p.image} />
                                </span>
                                <p className="block__content heading--5">{p.name}</p>
                            </div>            
                        ))}
                    </div>
                </section>
            </div>
        </div>
        <style global jsx>{`

                .image.lazyload-image.block__image{max-width: 267px; max-height: 472px;}
                .example-merchant__block {padding-bottom:50px;}
                .heading--1 {
                    font-size: 3em !important;
                    margin-bottom: 0.25em !important;
                    font-weight:800 !important;
                }
                .section-heading__subhead {
                    font-weight: 400 !important;
                    color: #6b7177 !important;
                }
                
        `}</style>
    </section>
    
);
export default ExploreCatSection1;