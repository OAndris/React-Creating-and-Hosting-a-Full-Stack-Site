import React, { useEffect, useState } from 'react';
import articleContent from '../assets/article-content';
import NotFoundPage from './NotFoundPage';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import AddCommentForm from '../components/AddCommentForm/AddCommentForm';
import CommentsList from '../components/CommentsList/CommentsList';
import UpvotesSection from '../components/UpvotesSection/UpvotesSection';

const INITIAL_ARTICLE_INFO = {
    upvotes: 0,
    comments: [],
};

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);

    const [articleInfo, setArticleInfo] = useState(INITIAL_ARTICLE_INFO);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            if (body) {
                setArticleInfo(body);
            } else {
                setArticleInfo(INITIAL_ARTICLE_INFO);
            }
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
            <UpvotesSection
                articleName={name}
                upvotes={articleInfo.upvotes}
                setArticleInfo={setArticleInfo}
            />

            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />

            <AddCommentForm
                articleName={name}
                setArticleInfo={setArticleInfo}
            />

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
