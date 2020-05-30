const StoresSection4 =props => (
    <section className="section section--border section--padding-top-only">
        <div className="grid">
            <div className="grid__item location_list">
                <div className="section-heading section-heading--tablet-up-align-left">
                    <h2 className="section-heading__heading heading--2">Cabin Food tại Hồ Chí Minh</h2>
                    <p className="section-heading__subhead heading--4">
                        Set up your store in minutes and bring your brand to life Set up your store in minutes and bring your brand to life Set up your store in minutes and bring your brand to life Set up your store in minutes and bring your brand to life
                    </p>
                </div>
                
                <section className="section location__group_item">
                    <div className="example-merchants block">
                        {props.dataHCMStore.map((p) => (
                            <div className=" example-merchant__block">
                                <a href="/store-31">
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_store_name heading--5">{p.name}</p>
                                        <p className="header_addr heading--5">{p.addr}</p>
                                        <p className="desc_block">
                                            {p.desc}
                                        </p>
                                        <p className=" _is-ready">Sẵn sàng phục vụ</p>
                                    </div>    
                                </a>
                            </div>
                        ))}
                    </div>
                </section> 
            </div>

            <div className="grid__item location_list">
                <div className="section-heading section-heading--tablet-up-align-left">
                    <h2 className="section-heading__heading heading--2">Cabin Food tại Hà Nội</h2>
                    <p className="section-heading__subhead heading--4">
                        Set up your store in minutes and bring your brand to life Set up your store in minutes and bring your brand to life Set up your store in minutes and bring your brand to life Set up your store in minutes and bring your brand to life
                    </p>
                </div>
                
                <section className="section location__group_item">
                    <div className="example-merchants block">
                        {props.dataHNStore.map((p) => (
                            <div className=" example-merchant__block">
                                <a href="/store-31">
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_store_name heading--5">{p.name}</p>
                                        <p className="header_addr heading--5">{p.addr}</p>
                                        <p className="desc_block">
                                            {p.desc}
                                        </p>
                                        <p className=" _is-ready">Sẵn sàng phục vụ</p>
                                    </div>    
                                </a>
                            </div>
                        ))}
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
            .location__group_item {padding:50px 0px;}
            .section-heading {margin-bottom:0px}
            .heading--5 {height: 30px; overflow: hidden;}
            .group_list {margin-bottom: 50px}
            .example-merchant__block {background-color:#eee; font-size: 12px !important; margin-bottom:50px;}
            .block_detail {padding:0px 15px;}
            .block_detail p {    
                line-height: 1.5;
                font-size: 1.05em;
                color: #6b7177;
                font-weight: 400;
            }
            .desc_block{ height: 5.5rem; color: black; overflow: hidden;}
            .header_store_name {
                margin-top:10px; 
                font-weight:bold !important; 
                margin-bottom:0px; 
                margin-top: 20px;
                height:15px; 
                overflow:hidden;
            }
            .header_addr {padding:5px 0px 10px 0px; text-align: right; }                                
            ._is-ready {color: #008060 !important; font-weight:bold; padding: 10px 10px 20px 0px; text-align: right; font-size:11px}            
            ._is-ready a{text-decoration:none; text-transform: uppercase;}
            ._is-ready a:hover{text-decoration:underline}
        `}</style>
    </section>

    // <div className="_3PhQ1">
    //     <section className="_3dkyZ">
            
    //         <div className="grid group_list" id="hochiminh">
    //             <div className="header_location">
    //                 <h2 className="header_content">Địa điểm kinh doanh tại Hồ Chí Minh</h2>
    //             </div>

    //             <div className="grid__item">
    //                 <section className="section section--tight">
    //                     <div className="example-merchants">
    //                         {props.dataHCMStore.map((p) => (
    //                             <div className="block example-merchant__block">
    //                                 <span className="image block__image">
    //                                     <img src={p.image} />
    //                                 </span>
    //                                 <div className="block_detail">
    //                                     <p className="header_store_name heading--5">{p.name}</p>
    //                                     <p className="header_addr heading--5">{p.addr}</p>
    //                                     <p className="desc_block">
    //                                         {p.desc}
    //                                     </p>
                                        
    //                                     <p className=" _is-ready"><a href="/store-31">Sẵn sàng phục vụ</a></p>
                                        
                                       
    //                                 </div>    
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </section>
    //             </div>
    //         </div>

    //         <div className="grid group_list" id="hanoi">
    //             <div className="header_location">
    //                 <h2 className="header_content">Địa điểm kinh doanh tại Hà Nội</h2>
    //             </div>

    //             <div className="grid__item">
    //                 <section className="section section--tight">
    //                     <div className="example-merchants">
    //                         {props.dataHNStore.map((p) => (
    //                             <div className="block example-merchant__block">
    //                                 <span className="image block__image">
    //                                     <img src={p.image} />
    //                                 </span>
    //                                 <div className="block_detail">
    //                                     <p className="header_store_name heading--5">{p.name}</p>
    //                                     <p className="header_addr heading--5">{p.addr}</p>
    //                                     <p className="desc_block">
    //                                         {p.desc}
    //                                     </p>
                                        
    //                                     <p className=" _is-ready"><a href="#">Sẵn sàng phục vụ</a></p>
                                        
                                       
    //                                 </div>    
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </section>
    //             </div>
    //         </div>
    //     </section>
    //     <style jsx>{`
    //         .header_location {padding-left:18px}
    //         .header_location h4{ color: #004c3f; margin-left:15px}
    //         .header_content {font-size: 2.5rem;}
    //         .heading--5 {height: 30px; overflow: hidden;}
    //         .group_list {margin-bottom: 50px}
    //         .example-merchant__block {background-color:#eee; font-size: 12px !important; margin-bottom:50px;}
    //         .block_detail {padding:0px 15px;}
    //         .block_detail p {font-size: 12px;}
    //         .desc_block{ height: 5.5rem; color: black; overflow: hidden;}
    //         .header_store_name {margin-top:10px; font-size:11px; margin-bottom:0px; height:15px; overflow:hidden}
    //         .header_addr {padding:5px 0px 10px 0px; text-align: right; }                                
    //         ._is-ready {color: #008060 !important; font-weight:bold; padding: 10px 10px 20px 0px; text-align: right; font-size:11px}            
    //         ._is-ready a{text-decoration:none; text-transform: uppercase;}
    //         ._is-ready a:hover{text-decoration:underline}
    //     `}</style>
    // </div>
);
export default StoresSection4;