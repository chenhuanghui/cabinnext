const StoresSection4 =props => (
    <div className="_3PhQ1">
        <section className="_3dkyZ">
            
            <div className="grid group_list" id="hochiminh">
                <div className="header_location">
                    <h4 className="header_content">Địa điểm kinh doanh tại Hồ Chí Minh</h4>
                </div>

                <div className="grid__item">
                    <section className="section section--tight">
                        <div className="example-merchants">
                            {props.dataHCMStore.map((p) => (
                                <div className="block example-merchant__block">
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_block heading--5">{p.name}</p>
                                        <p className="desc_block">
                                            {p.desc}
                                        </p>
                                        
                                        <p className=" _is-ready"><a href="#">Sẵn sàng phục vụ</a></p>
                                        
                                       
                                    </div>    
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className="grid group_list" id="hanoi">
                <div className="header_location">
                    <h4 className="header_content">Địa điểm kinh doanh tại Hà Nội</h4>
                </div>

                <div className="grid__item">
                    <section className="section section--tight">
                        <div className="example-merchants">
                            {props.dataHNStore.map((p) => (
                                <div className="block example-merchant__block">
                                    <span className="image block__image">
                                        <img src={p.image} />
                                    </span>
                                    <div className="block_detail">
                                        <p className="header_block heading--5">{p.name}</p>
                                        <p className="desc_block">
                                            {p.desc}
                                        </p>
                                        
                                        <p className=" _is-ready"><a href="#">Sẵn sàng phục vụ</a></p>
                                        
                                       
                                    </div>    
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <style jsx>{`
            .header_location { font-size: 3.6rem ; margin-bottom: 6rem;}
            .header_location h4{ color: #004c3f; margin-left:15px}
            .group_list {margin-bottom: 50px}
            .example-merchant__block {background-color:#eee; font-size: 12px !important; margin-bottom:50px;}
            .block_detail {padding:0px 15px}
            .desc_block{ height: 5.5rem; color: black; overflow: hidden;}
            .header_block {margin-top:10px; font-size:11px;}
            ._is-ready {color: #008060 !important; font-weight:bold; padding: 10px 10px 20px 0px; text-align: right; font-size:11px}            
            ._is-ready a{text-decoration:none; text-transform: uppercase;}
            ._is-ready a:hover{text-decoration:underline}
        `}</style>
    </div>
);
export default StoresSection4;