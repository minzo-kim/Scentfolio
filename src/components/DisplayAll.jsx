import { useState } from 'react';
import React from 'react';
import FragranceContainer from './FragranceContainer.jsx';

const DisplayAll = ({ updateFragrances }) => {
    // const [fragrances, setFragrances] = useState([]);
    // console.log(fragrances);
    const formSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/display`, {
            method: 'GET',
        })
            .then((data) => {
                // data is the data we get back, is array of objects.
                return data.json();
            })
            .then((json) => {
                // console.log(json);
                // updating state with the response
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
                <button type="submit">Display Full Collection!</button>
            </form>
        </div>
    );
};

export { DisplayAll };
