import { useState } from 'react';
import React from 'react';
import FragranceContainer from './FragranceContainer.jsx';

const DisplayName = () => {
    const [fragrances, setFragrances] = useState([]);
    // console.log(fragrances);
    return (
        // have an on submit
        <div>
            <form
                onSubmit={(e) => {
                    const name = e.target[0].value;
                    // console.log(name);

                    fetch(`/api/name/${name}`, {
                        method: 'get',
                    })
                        .then((data) => {
                            // data is the data we get back, is array of objects.
                            data.json();
                        })
                        .then((json) => {
                            // console.log(json);
                            // updating state with the response
                            setFragrances(json);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                <input type="text" placeholder="name" />
                <button type="submit">Find by Name</button>
            </form>
            {/* passed in the fragrances state as prop */}

            {/* my issue is that the fragrance container is not rendering? */}
            <FragranceContainer fragrances={fragrances} />
        </div>
    );
};

export { DisplayName };
