import PillarItem1 from '../modules/Pillars/PillarItem1'
import PillarItem2 from '../modules/Pillars/PillarItem2'
import PillarItem3 from '../modules/Pillars/PillarItem3'
import PillarItem4 from '../modules/Pillars/PillarItem4'

const Pillars = props => (
    <section className="section homepage-pillars js-waypoint-track">
        <div className="grid">
            <div className="section-heading pillars__heading-wrapper">
                <h2 className="section-heading__heading heading--1 heading--2" heading_style="2">{props.dataPillar.title}</h2>
                <p className="section-heading__subhead heading--2 text-major pillars__subhead">{props.dataPillar.desc}</p>
            </div>
            
            <PillarItem1 dataItem1={props.dataPillar}/>
            <PillarItem2 dataItem2={props.dataPillar} />
            <PillarItem3 dataItem3={props.dataPillar} />
            <PillarItem4 dataItem4={props.dataPillar} />
            {/* <PillarItemManage /> */}
            
        </div>

        
    </section>
);
export default Pillars;