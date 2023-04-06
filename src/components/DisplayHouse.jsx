import React from 'react';

const DisplayHouse = () => {
    return (
        // have an on submit
        <form
            onSubmit={(e) => {
                const house = e.target[0].value;
                // console.log(name);

                fetch(`/api/house/${house}`, {
                    method: 'get',
                })
                    .then((data) => {
                        // console.log(data);
                        // data is now an array with a bunch of info.
                        // how do i render just this card? add it somehow to fragrance container? then how do i render it?
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }}
        >
            <input type="text" placeholder="name" />
            <button type="submit">Find by House</button>
        </form>
    );
};

export { DisplayHouse };
