import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import userPromise from '../lib/userPromise';

const NewsListBlock = styled.div`
  box-sizing: border-box; //안쪽 여백및 선 포함한 크기 조절 대부분 이 방법 채택
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
  }
`;
const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ce1d26225ed943aab28503fa929ad7c3`,
        );
    }, [category]);
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    if (!response) {
        return null;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (error) {
        return <NewsListBlock>에러 밯생</NewsListBlock>;
    }
    const { articles } = response.data;
    //response 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList;