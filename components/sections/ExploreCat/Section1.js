export default class ExploreCatSection1 extends React.Component { 
    constructor(props){
        super(props);
    
        this.state = {
            dataExploreCatPage:[],
            dataCategoriesList:[]
        }
      }

    componentDidMount () {
        let currentComponent = this;

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

        // get page information
        base('Category_Page').find('rec9dJokuULLNiDPl', function(err, record) {
            if (err) { console.error(err); return; }
            currentComponent.setState({ dataExploreCatPage: record.fields })
        });

        // get list category
        var catList = [];
        base('Categories_FB').select({
            view: 'Grid view'
        }).firstPage(function(err, records) {
            if (err) { console.error(err); return; }
            records.forEach(function(record) {
                record.fields.image = record.fields[`image`][0].url;
                console.log(record);
                catList.push(record.fields);
            });
            // console.log(catList);
            currentComponent.setState({ dataCategoriesList: catList })
        });

    }

    render (){
        const {dataExploreCatPage,dataCategoriesList } = this.state;
        return (
            <section className="section">
                <div className="gird">
                    <div className="grid__item grid__item--desktop-up-10 grid__item--wide-up-8 grid__item--desktop-up-align-center">
                        <section className="section section--tight section--padding-bottom-only">
                            <div className="section-heading">
                                <h1 className="section-heading__kicker heading--5">{dataExploreCatPage.line1}</h1>
                                <h2 className="section-heading__heading heading--1">{dataExploreCatPage.line2}</h2>
                                <p className="section-heading__subhead heading--2 heading--3">{dataExploreCatPage.line3}</p>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid__item">
                        <section className="section section--tight">
                            <div className="example-merchants">
                                {dataCategoriesList.map((p) => (
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
        )
    }
}