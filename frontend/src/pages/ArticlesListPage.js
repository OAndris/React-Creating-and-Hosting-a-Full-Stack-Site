import React from 'react';
import articleContent from '../assets/article-content';
import ArticlesList from '../components/ArticlesList/ArticlesList';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;
