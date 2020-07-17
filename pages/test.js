import LayoutTest from '../layouts/LayoutTest'

const Test = ({name}) => (
    <LayoutTest name={name}/>
);

Test.getInitialProps = async () => {
    return { name: 'Charlie' }
}  
export default Test;