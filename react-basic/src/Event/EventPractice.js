// eslint-disable-next-line
import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;