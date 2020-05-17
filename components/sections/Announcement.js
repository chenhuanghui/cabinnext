const Announcement = props => (
    <div id="Announcements">
        <div className="covid-19-announcement-banner"> 
            <section className="announcement js-announcement is-active">
                <div className="announcement__content">
                    The world needs independent businesses.
                    <a className="body-link" href="covid19.html">Learn about the actions we’re taking to address the impact of&nbsp;COVID&#8209;19</a>
                </div>
                {/* <button name="button" type="button" className="announcement__close js-announcement__close"> */}
                    {/* <svg className="icon announcement__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-close" /></svg> */}
                {/* </button> */}
            </section>
        </div>
    </div>
);
export default Announcement;