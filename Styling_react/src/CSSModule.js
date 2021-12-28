import React from 'react';
import style from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(style);

const CSSMoudule = () =>{
    return (
        <div className={cn('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
        );
};

export default CSSMoudule;