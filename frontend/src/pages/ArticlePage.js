import React from 'react';
import articleContent from '../assets/article-content';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);

    if (!article) return <NotFoundPage />;

    const otherArticles = articleContent.filter(
        (article) => article.name !== name
    );

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h2
                style={{
                    marginTop: '4em',
                    borderTop: '1px solid black',
                    paddingTop: '1em',
                }}
            >
                Other Articles:
            </h2>
            <ArticlesList articles={otherArticles} />
        </>
    );
};

export default ArticlePage;
