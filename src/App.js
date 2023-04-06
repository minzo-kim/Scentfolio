import React, { Component } from 'react';
import FragranceContainer from './components/FragranceContainer.jsx';
import { AddFragrance } from './components/AddFragrance.jsx';
import { DisplayName } from './components/DisplayName.jsx';
import './stylesheets/styles.css';

const App = () => {
    return (
        <div className="full-page">
            <AddFragrance />
            <DisplayName />
        </div>
    );
};

export default App;
