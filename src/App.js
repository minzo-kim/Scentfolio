import React, { Component } from 'react';
import FragranceContainer from './components/FragranceContainer.jsx';
import { AddFragrance } from './components/AddFragrance.jsx';
import { DisplayName } from './components/DisplayName.jsx';
import './stylesheets/styles.css';

const App = () => {
    return (
        <div className="full-page">
            <AddFragrance />
            {/* <DisplayName /> */}
            <FragranceContainer />
            {/* add buttons to take you to either view all or search by specific */}
            {/* on both view all or specific, have an add fragrance? perhaps just on view all. */}
        </div>
    );
};

export default App;
