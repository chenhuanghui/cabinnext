const Test = ({name}) => <div>Hello world, meet {name}!</div>
Test.getInitialProps = async () => {
    return { name: 'Charlie' }
}
  
export default Test