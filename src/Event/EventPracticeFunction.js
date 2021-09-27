import React, { useState } from 'react';

const EventPracticeFunction = () =>{
    const [username, setUsername] = useState('');
    const [message, setMessage] =useState('');
    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);
    const handleClick = () => {
        alert(username + ':' + message);
        setUsername('');
        setMessage('');
    };
    return (
        <div>
            <h1>이벤트연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                onChange={onChangeMessage}
            />
            <button onClick={handleClick}>확인</button>
        </div>
        );

};

export default EventPracticeFunction;