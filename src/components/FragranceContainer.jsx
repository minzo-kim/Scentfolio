import React, { useState, useEffect } from 'react';
import Fragrance from './Fragrance.jsx';

// const [fragrance, setfragrance] = useState([]);

const FragranceContainer = () => {
    // declaring initial fragrances state using useState
    // inital state is an empty array
    const [fragrances, setFragrances] = useState([]);
    // // on click handler will add a new one to state
    // use effect here to make the call
    // const test = 'display';

    useEffect(() => {
        // get response, turn to json, then pass into newFragrances
        // possibly have a function to change /api/value
        fetch(`/api/display`)
            .then((data) => data.json())
            // might have to spread fragrances into new fragrances
            .then((json) => setFragrances(json));
    }, [fragrances]);

    // create fragrance array
    const fragranceArr = [];
    for (let i = 0; i < fragrances.length; i++) {
        fragranceArr.push(
            <Fragrance
                key={i}
                name={fragrances[i].name}
                house={fragrances[i].house}
                year={fragrances[i].year}
                notes={fragrances[i].notes}
                comments={fragrances[i].comments}
            />
        );
        // console.log(fragrances[i].notes);
    }

    return (
        <div className="fragrance-container">
            {/* for each fragrance in fragrance state, returns one fragrance. need to pass props */}
            {fragranceArr}
        </div>
    );
};

export default FragranceContainer;
