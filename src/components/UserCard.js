import React, { useState } from 'react';
import translator from '../lang.utils';

const UserCard = () => {
    const data = 'Joseph';
    return (
        <div className="card-wrapper">
            <div className="card-avatar"></div>
            <div>
                <h1>{translator.getText('name')}{' '}{data}</h1>
                <p>
                    {translator.getText('description1')}
                </p>
                <p>{translator.getText('description2')}</p>
            </div>
        </div>
    );
}

export default UserCard;