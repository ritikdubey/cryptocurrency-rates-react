import React, { useState } from 'react';
import Bitcoin from './Bitcoin';

import 'react-dropdown/style.css';
const SearchCrypto = (props) => {

    const options = ['BTC', 'ETH', 'DOGE', 'ADA', 'VET', 'SHIB', 'HBAR', 'MATIC', 'LTC', 'XMR', 'ATOM'];
    const [option, changeoption] = useState(options[3]);
    const [a, changea] = useState(<Bitcoin key={options[2]} cur={options[0]} />)



    return (
        <>

            <div className="btnDiv">
                {options.map((option) => {
                    return <button className="crypBtn" value={option} onClick={(e) => {
                        console.log("e.target.value", e.target.value);
                        changea(<Bitcoin key={e.target.value} cur={e.target.value} />);
                        // console.log(a);
                    }}>{option}</button>
                })
                }
            </div>
            {a}
        </>
    )
}

export default SearchCrypto;