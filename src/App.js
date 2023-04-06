import React, { useState, useEffect } from 'react';
import FragranceContainer from './components/FragranceContainer.jsx';
import { AddFragrance } from './components/AddFragrance.jsx';
import { DisplayName } from './components/DisplayName.jsx';
import { DisplayAll } from './components/DisplayAll.jsx';
import { DisplayHouse } from './components/DisplayHouse.jsx';
import { DisplayYear } from './components/DisplayYear.jsx';
import { DisplayNote } from './components/DisplayNote.jsx';
import './stylesheets/styles.css';

const App = () => {
    const [fragrances, setFragrances] = useState([]);

    // here is a function that will be uesd inside display components, to set fragrances to be passed to fragrance container
    const updateFragrances = (newFragrances) => [
        // console.log(newFragrances),
        setFragrances(newFragrances),
    ];
    return (
        <div className="full-page">
            <div className="search-criteria">
                <h1>This is an expensive hobby</h1>
                <div className="add-display">
                    <div>
                        <AddFragrance />
                    </div>
                    <div>
                        <DisplayName updateFragrances={updateFragrances} />
                        <DisplayHouse updateFragrances={updateFragrances} />
                        <DisplayYear updateFragrances={updateFragrances} />
                        <DisplayAll updateFragrances={updateFragrances} />
                        {/* <DisplayNote updateFragrances={updateFragrances} /> */}
                    </div>
                </div>
            </div>
            <FragranceContainer fragrances={fragrances} />
            <div className="img-container">
                <img className="img" src="https://tinyurl.com/36euc4wb" />
                <img className="img" src="https://tinyurl.com/yckj5wjj" />
                <img className="img" src="https://tinyurl.com/yckk29bx" />
            </div>
        </div>
    );
};

{
    /* <DisplayName />
<DisplayAll /> */
}
export default App;
