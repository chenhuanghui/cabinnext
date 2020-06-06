const StoresSection4 =props => (
    <section className="section section--border section--padding-top-only">
        <div className="grid">
            <div className="grid__item location_list">
                <div className="section-heading section-heading--tablet-up-align-left">
                    <h2 className="section-heading__heading heading--2">{props.dataExploreStoreList.block1_line1}</h2>
                    <p className="section-heading__subhead heading--4">
                        {props.dataExploreStoreList.block1_line2}
                    </p>
                </div>
                
                <section className="section location__group_item">
                    <div className="example-merchants stores-list block">
                        {props.dataHCMStore.map((p) => {
                            return p.is_available==true 
                            ? 
                            <div className=" example-merchant__block store_ready_to_sell">
                                <a href={p.href}>
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_store_name heading--5">{p.name}</p>
                                        <p className="header_addr heading--5">{p.addr}</p>
                                        <ul className="store_info">
                                            <li><p><span>- Tình trạng: </span> {p.status}</p></li>
                                            <li><p><span>- Loại cabin: </span>{p.type}</p></li>
                                            <li><p><span>- Bàn giao: </span>{p.release_date}</p></li>
                                        </ul>
                                        <p className=" _is-ready">Xem thông tin chi tiết</p>
                                    </div>    
                                </a>
                            </div>
                            :
                            <div className=" example-merchant__block store_construction">
                                <a href={p.href}>
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_store_name heading--5">{p.name}</p>
                                        <p className="header_addr heading--5">{p.addr}</p>
                                        <ul className="store_info">
                                            <li><p><span>- Tình trạng: </span> {p.status}</p></li>
                                            <li><p><span>- Loại cabin: </span>{p.type}</p></li>
                                            <li><p><span>- Bàn giao: </span>{p.release_date}</p></li>
                                        </ul>
                                        {/* <p className=" _is-ready">Xem thông tin chi tiết</p> */}
                                    </div>    
                                </a>
                            </div>
                        })}

                    </div>
                </section> 
            </div>

            <div className="grid__item location_list">
                <div className="section-heading section-heading--tablet-up-align-left">
                    <h2 className="section-heading__heading heading--2">{props.dataExploreStoreList.block2_line1}</h2>
                    <p className="section-heading__subhead heading--4">
                        {props.dataExploreStoreList.block2_line2}
                    </p>
                </div>
                
                <section className="section location__group_item">
                    <div className="example-merchants stores-list block">
                    {props.dataHNStore.map((p) => {
                            return p.is_available==true 
                            ? 
                            <div className=" example-merchant__block store_ready_to_sell">
                                <a href={p.href}>
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_store_name heading--5">{p.name}</p>
                                        <p className="header_addr heading--5">{p.addr}</p>
                                        <ul className="store_info">
                                            <li><p><span>- Tình trạng: </span> {p.status}</p></li>
                                            <li><p><span>- Loại cabin: </span>{p.type}</p></li>
                                            <li><p><span>- Bàn giao: </span>{p.release_date}</p></li>
                                        </ul>
                                        <p className=" _is-ready">Xem thông tin chi tiết</p>
                                    </div>    
                                </a>
                            </div>
                            :
                            <div className=" example-merchant__block store_construction">
                                <a href={p.href}>
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_store_name heading--5">{p.name}</p>
                                        <p className="header_addr heading--5">{p.addr}</p>
                                        <ul className="store_info">
                                            <li><p><span>- Tình trạng: </span> {p.status}</p></li>
                                            <li><p><span>- Loại cabin: </span>{p.type}</p></li>
                                            <li><p><span>- Bàn giao: </span>{p.release_date}</p></li>
                                        </ul>
                                        {/* <p className=" _is-ready">Xem thông tin chi tiết</p> */}
                                    </div>    
                                </a>
                            </div>
                        })}
                    </div>
                </section> 
            </div>
        </div>
        <style jsx>{`
            .header_location {padding-left:18px}
            .header_location h4{ color: #004c3f; margin-left:15px}
            .header_content {font-size: 2.5rem;}
            .location_list{
                padding-right: calc(5% + 9px);
                padding-left: calc(5% + 9px);
            }
            .section-heading__subhead.heading--4 {
                font-size: 15px !important;
                line-height: 1.5 !important;
            }
            .location__group_item {padding:50px 0px;}
            .section-heading {margin-bottom:0px}
            .heading--5 {height: 30px; overflow: hidden;}
            .group_list {margin-bottom: 50px}
            .example-merchant__block {
                background-color: var(--sub-color-1); 
                font-size: 12px !important; 
                margin-bottom:50px;
                height: 350px;
                overflow: hidden;
            }
            .example-merchant__block.store_construction {
                background-color: #eee; 
            }
            .block_detail {padding:0px 15px;}
            .block_detail p {    
                line-height: 1.5;
                font-size: 13px;
                color: #6b7177;
                font-weight: 400;
            }
            .desc_block{ 
                height: 5.5rem; 
                color: black; 
                overflow: hidden;
                color: var(--dark-color-3);
            }
            .header_store_name {
                margin-top:10px; 
                font-weight:bold !important; 
                margin-bottom:0px; 
                margin-top: 20px;
                height:15px; 
                overflow:hidden;
                color:black !important;
            }
            .header_addr {
                padding:5px 0px; 
                text-align: left; 
                margin: 0px;
            }                                
            ._is-ready {
                color: var(--main-color) !important; 
                font-weight: bold !important; 
                padding: 20px 10px 10px 0px; 
                text-align: right; 
                font-size: 12px !important;
                text-transform: uppercase;
                text-decoration:underline
            }            
            
            ul.store_info {
                margin: 10px 0px;
            }
            ul.store_info li {
                margin: 5px 0px;
            }
            ul.store_info li p{
                color: var(--dark-color-3);
                margin: 0px;
            }
            ul.store_info li span {
                font-weight: bold;
            }
        `}</style>
    </section>
);
export default StoresSection4;