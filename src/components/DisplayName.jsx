const DisplayName = () => {
    // grab all inputs, store in object?
    return (
        <form
        // onSubmit={(e) => {
        //     const name = e.target[0].value;
        //     fetch('/api/name', {
        //         method: 'GET',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             name,
        //         }),
        //     });
        // }}
        >
            <input type="text" placeholder="name" />

            {/* on button click, send all info to back end */}
            <button type="submit">Get by Name</button>
        </form>
    );
};

export { DisplayName };
