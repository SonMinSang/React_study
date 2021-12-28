import React, { useState } from 'react';

const Practice = () =>{
    const [form,setForm] =useState({
        username: '',
        message: ''
    });

    const onChange= e =>{
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }
    const onClick = () =>{
        alert(form.username + ':' + form.message);
        setForm({
            username: '',
            message: ''
        });
    }
    return (
        <div>
            <input
                type = "text"
                placeholder = "이름"
                name = "username"
                value ={form.username}
                onChange= {onChange}
                />
            <input
                type = "text"
                placeholder = "아무거나"
                name = "message"
                value ={form.message}
                onChange= {onChange}
                />
            <button onClick = {onClick}>확인</button>
        </div>);

}

export default Practice;