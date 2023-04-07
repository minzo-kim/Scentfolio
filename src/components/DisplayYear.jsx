import React from 'react';

const DisplayYear = ({ updateFragrances }) => {
    // const [fragrances, setFragrances] = useState([]);
    // console.log(fragrances);
    const formSubmit = (e) => {
        e.preventDefault();
        const year = e.target[0].value;
        // console.log(name);

        fetch(`/api/year/${year}`, {
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
                <input type="text" placeholder="year" />
                <button type="submit">Find by Year</button>
            </form>
            {/* passed in the fragrances state as prop */}
        </div>
    );
};

export { DisplayYear };
