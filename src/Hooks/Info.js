import React, { useReducer, useEffect } from 'react';

function reducer(state, action){
    return({
    ...state,
    [action.name] : action.value
    });
}
const Info = () =>{
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    useEffect(()=>{
        console.log('렌더링이 완료되었습니다!');
        console.log(state);
    })
    const onChange = e =>{
        dispatch(e.target);
    }
    
    return (
        <div>
            <div>
                <input name = "name" value={name} onChange = {onChange}/>
                <input name = "nickname" value={nickname} onChange = {onChange}/>
            </div>
            <div>
                <b>이름:</b> {name}
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    );
};

export default Info;