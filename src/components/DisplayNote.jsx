import React from 'react';

const DisplayNote = ({ updateFragrances }) => {
    const formSubmit = (e) => {
        e.preventDefault();
        const note = e.target[0].value;
        // console.log(name);

        fetch(`/api/note/${note}`, {
            method: 'GET',
        })
            .then((data) => {
                // data is the data we get back, is array of objects.
                // console.log('this should be data from submit', data);
                return data.json();
            })
            .then((json) => {
                // console.log(json);
                // console.log('this should be data from submit', json);
                // updating state with the response
                // setFragrances(json);
                // or update fragrances
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
                <input type="text" placeholder="note" />
                <button type="submit">Find by Note</button>
            </form>
        </div>
    );
};

export { DisplayNote };
