import React from 'react';
import styled from 'styled-components';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto; //위아래 여백 없이 중앙정렬
    @media screen and (max-width:768px) {
        width: 100%;
        overflow-x: auto; //내용이 넘어갈 경우
    }
    `;
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;