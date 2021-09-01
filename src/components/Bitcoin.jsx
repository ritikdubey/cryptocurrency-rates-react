import axios from 'axios';
import React, { useEffect, useState } from 'react';


// https://api.nomics.com/v1/currencies/ticker?key=1d795ea1d5ad64dcc89ff6617afb779c22c357fb&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1


const Bitcoin = (props) => {


    let [data, changedata] = useState([]);




    /*
    using fetch to get api data
    const getData = async () => {
        const f = await fetch("https://api.nomics.com/v1/currencies/ticker?key=1d795ea1d5ad64dcc89ff6617afb779c22c357fb&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1");
        const response = await f.json();
        return response;
    }

    const response = getData();
    response.then((data) => {
        changer(data[0]);
        console.log("bitcoin--", data[0].id)
        console.log(data);
        console.log("response", response);
    });
    */

    /*
    async function getData() {
        data = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=1d795ea1d5ad64dcc89ff6617afb779c22c357fb&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1");
        changer(data);
    }
  getData();
  */




    useEffect(() => {
        async function getData() {
            let response = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=1d795ea1d5ad64dcc89ff6617afb779c22c357fb&ids=${props.cur}&interval=1d,30d&convert=EUR&per-page=100&page=1`);
            console.log("response", response);
            // console.log("data.data[0]", data.data[0]);
            // console.log("data.data[0].first_candle", data.data[0].first_candle);
            changedata(response.data[0]);
        }
        getData();
    }, []);


    return (
        <>
            <div className="grid-container">

                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>name</h4>
                        <h1>{data.name}</h1>
                    </div>
                </div>




                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>price</h4>
                        <h1>{data.price}</h1>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>currency</h4>
                        <h1>{data.currency}</h1>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>high</h4>
                        <h1>{data.high}</h1>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="inside-grid">
                        <img src={data.logo_url} style={{ height: "7.2rem" }} />
                    </div>
                </div>

                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>rank</h4>
                        <h1>{data.rank}</h1>
                    </div>
                </div>


                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>maximum supply</h4>
                        <h1>{data.max_supply}</h1>
                    </div>
                </div>



                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>circulating supply</h4>
                        <h1>{data.circulating_supply}</h1>
                    </div>
                </div>


                <div className="grid-item">
                    <div className="inside-grid">
                        <h4>status</h4>
                        <h1>{data.status}</h1>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Bitcoin;