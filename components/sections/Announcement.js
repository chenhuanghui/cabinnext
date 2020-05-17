const Announcement = props => (
    <div id="Announcements">
        <div className="covid-19-announcement-banner"> 
            <section className="announcement js-announcement is-active">
                <div className="announcement__content">
                    {props.announcementData.content}
                    <a className="body-link" href="covid19.html">{props.announcementData.highlight}</a>
                </div>
                {/* <button name="button" type="button" className="announcement__close js-announcement__close"> */}
                    {/* <svg className="icon announcement__icon" aria-hidden="true" focusable="false"><use xlink:href="#modules-close" /></svg> */}
                {/* </button> */}
            </section>
        </div>
    </div>
);
export default Announcement;