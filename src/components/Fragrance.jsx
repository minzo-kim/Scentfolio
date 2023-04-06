import React, { Component } from 'react';
// this is a singular fragrance box

const Fragrance = (props) => {
    // we'll be getting props
    return (
        <div className="fragrance">
            <div className="name">{props.name}</div>
            <div className="house">House: {props.house}</div>
            <div className="year">Year: {props.year}</div>
            <div className="notes">Notes: {props.notes}</div>
            <div className="comments">Comments: {props.comments}</div>
        </div>
    );
};

export default Fragrance;
