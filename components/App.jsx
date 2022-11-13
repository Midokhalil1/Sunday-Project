export default function App()
const [fetchingData, setFetchingDataState ] = React.useState(true);
setTimeout(() => {
    setFetchingDataState(false);
} , 1000);

if (fetchingData){
    return <Loading />
} else {
    return <Home />
}