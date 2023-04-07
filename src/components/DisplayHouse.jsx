import React from 'react';

const DisplayHouse = ({ updateFragrances }) => {
    const formSubmit = (e) => {
        e.preventDefault();
        const house = e.target[0].value;
        // console.log(name);

        fetch(`/api/house/${house}`, {
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
                <input type="text" placeholder="house" />
                <button type="submit">Find by House</button>
            </form>
        </div>
    );
};

export { DisplayHouse };
