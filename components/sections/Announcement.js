const Announcement = props => (
    <div id="Announcements">
        <div className="covid-19-announcement-banner"> 
            <section className="announcement js-announcement is-active">
                <div className="announcement__content">
                    {props.announcementData.content} 
                    <a className="body-link" href={props.announcementData.href}> {props.announcementData.highlight}</a>
                </div>
            </section>
        </div>
    <style jsx>{`
        .covid-19-announcement-banner .body-link {
            color: var(--lighter-color);
        }
    `}</style>
    </div>
);
export default Announcement;