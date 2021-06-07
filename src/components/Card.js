import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const Card = ({ id, username, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;