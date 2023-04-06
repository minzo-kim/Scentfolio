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

// class Fragrance extends Component {
//     render() {
//         <div className="fragrance">
//             {/* we can get the names and details through props, which will be passed from container */}
//             <h2>Name of fragrance</h2>
//             <ul>
//                 <li>House</li>
//                 <li>Year</li>
//                 <li>Top Notes</li>
//                 <li>Middle Notes</li>
//                 <li>Base Notes</li>
//                 <li>Comments</li>
//             </ul>
//         </div>;
//     }
// }

export default Fragrance;
