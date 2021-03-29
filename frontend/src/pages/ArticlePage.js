import React, { useEffect, useState } from 'react';
import articleContent from '../assets/article-content';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);

    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />;

    const otherArticles = articleContent.filter(
        (article) => article.name !== name
    );

    return (
        <>
            <h1>{article.title}</h1>
            <p
                style={{ marginBottom: '1em' }}
            >{`This post has been upvoted ${articleInfo.upvotes} times.`}</p>
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
