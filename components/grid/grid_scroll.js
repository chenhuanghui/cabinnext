import GridItemType1 from './grid_item_type1';

export default class PartnerListing extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.partner_data !== prevProps.partner_data) {
            let currentComponent = this;
            
            currentComponent.setState({data:this.props.partner_data})
            
            console.log('partner data udpated');
        }        
    }
    
    render() {
        const {data} = this.state;
        return(
            <div>
                <div className="_1sx1020z">
                    <h2 className="section-heading__heading heading--2 next-steps__sign-up-heading">Đối tác của chúng tôi </h2>
                    <div>
                        <div className="_14iivyb">
                            {/* block item */}
                            {data && data.map((p) => (
                                <GridItemType1 mId = {p} />
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}