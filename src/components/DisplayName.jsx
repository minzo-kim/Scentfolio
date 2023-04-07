import { useState } from 'react';
import React from 'react';
import FragranceContainer from './FragranceContainer.jsx';

const DisplayName = ({ updateFragrances }) => {
    // const [fragrances, setFragrances] = useState([]);
    // console.log(fragrances);
    const formSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        // console.log(name);

        fetch(`/api/name/${name}`, {
            method: 'GET',
        })
            .then((data) => {
                // data is the data we get back, is array of objects.
                // console.log('this should be data from submit', data);
                return data.json();
            })
            .then((json) => {
                // console.log(json);

                updateFragrances(json);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        // have an on submit
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="name" />
                <button type="submit">Find by Name</button>
            </form>
            {/* passed in the fragrances state as prop */}

            {/* my issue is that the fragrance container is not rendering? */}
            {/* <FragranceContainer fragrances={fragrances} /> */}
        </div>
    );
};

export { DisplayName };
