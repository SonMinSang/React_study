import React from "react";
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering</div> //jsx를 넣어서 호출하면 렌더링 결과를 문자열로 반환합니다.
)