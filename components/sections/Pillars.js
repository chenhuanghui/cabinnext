import PillarItemSell from './modules/PillarItemSell'
import PillarItemMarket from './modules/PillarItemMarket'
import PillarItemManage from './modules/PillarItemManage'

const Pillars = props => (
    <section className="section homepage-pillars js-waypoint-track">
        <div className="grid">
            <div className="section-heading pillars__heading-wrapper">
                <h2 className="section-heading__heading heading--1 heading--2" heading_style="2">With you wherever you’re going</h2>
                <p className="section-heading__subhead heading--2 text-major pillars__subhead">One platform with all the ecommerce and point of sale features you
need to start, run, and grow your&nbsp;business.</p>
            </div>
            
            <PillarItemSell />
            <PillarItemMarket />
            <PillarItemManage />
            
        </div>

        
    </section>
);
export default Pillars;