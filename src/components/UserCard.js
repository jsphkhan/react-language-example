import React, { useState } from 'react';

const UserCard = () => {
    const [data, setData] = useState('Joseph');
    return (
        <div>
            <h1>My name is : {data}</h1>
            <p>
                I am a computer engineer and work with great enthusiasm. 
            </p>
            <p>You can work with me too.</p>
        </div>
    );
}

export default UserCard;