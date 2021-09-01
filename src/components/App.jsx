import React from 'react';
import Bitcoin from './Bitcoin';
import SearchCrypto from './SearchCrypto'
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
// API KEY - 1d795ea1d5ad64dcc89ff6617afb779c22c357fb

const App = () => {

    /*
    const getData = async () => {
        const f = await fetch("https://api.nomics.com/v1/currencies/ticker?key=1d795ea1d5ad64dcc89ff6617afb779c22c357fb&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1");
        const response = await f.json();
        return response;
    }

    const response = getData();
    response.then((data) => {
        // console.log(data);
    });
    */

    return (
        <>

            {/* <Bitcoin /> */}
            {/* <SearchCrypto /> */}

            <Menu />

            {/* For Routing */}
            <Switch>
                <Route exact path="/" component={SearchCrypto}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>

        </>
    )
}
export default App;