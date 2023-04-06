import React from 'react';

// we're creating a form that will take input info and create a new fragrance in the database

const AddFragrance = () => {
    // grab all inputs, store in object?
    return (
        <form
            onSubmit={(e) => {
                const name = e.target[0].value;
                const house = e.target[1].value;
                const year = e.target[2].value;
                const notes = e.target[3].value.split(`,`);
                const comments = e.target[4].value;
                fetch('/api/store', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        house,
                        year,
                        notes,
                        comments,
                    }),
                });
            }}
        >
            <input type="text" placeholder="name" />
            <input type="text" placeholder="house" />
            <input type="text" placeholder="year" />
            <input type="text" placeholder="notes" />
            <input type="text" placeholder="comments" />
            {/* on button click, send all info to back end */}
            <button type="submit">Add Fragrance</button>
        </form>
    );
};

export { AddFragrance };
