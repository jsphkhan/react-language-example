import React, { useState } from 'react';
import {translator} from '../lang.utils';

const UserCard = () => {
    const [data, setData] = useState('Joseph');
    return (
        <div>
            <h1>{translator.gettext('name')}{data}</h1>
            <p>
                {translator.gettext('description1')}
            </p>
            <p>{translator.gettext('description2')}</p>
        </div>
    );
}

export default UserCard;