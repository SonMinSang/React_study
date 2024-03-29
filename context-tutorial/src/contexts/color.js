import React, { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => { },
        setSubColor: () => { }
    }
});
const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};
// ColorConsumer = ColorContext.Consumer
const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };

export default ColorContext;