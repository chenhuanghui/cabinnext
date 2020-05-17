import PillarItemSell from '../modules/Pillars/PillarItemSell'
import PillarItemMarket from '../modules/Pillars/PillarItemMarket'
import PillarItemManage from '../modules/Pillars/PillarItemManage'
// import PillarItemManage from '../modules/Pillars/PillarItemManage'

const Pillars = props => (
    <section className="section homepage-pillars js-waypoint-track">
        <div className="grid">
            <div className="section-heading pillars__heading-wrapper">
                <h2 className="section-heading__heading heading--1 heading--2" heading_style="2">{props.dataPillar.title}</h2>
                <p className="section-heading__subhead heading--2 text-major pillars__subhead">{props.dataPillar.desc}</p>
            </div>
            
            <PillarItemSell dataItemSell={props.dataPillar}/>
            <PillarItemMarket dataItemMarket={props.dataPillar} />
            <PillarItemManage dataItemManage={props.dataPillar} />
            {/* <PillarItemManage /> */}
            
        </div>

        
    </section>
);
export default Pillars;