import React, { Component } from 'react';

class ScrollBox extends Component{
    scrollTo
    render (){
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }
        const innerstyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        return (
            <div
                style={style}
                ref={(ref) => (this.box=ref)}>
                <div style={innerstyle}/>
            </div>
            );
    }
}
export default ScrollBox;