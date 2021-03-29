import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    };
    return (
        <>
            <button onClick={upvoteArticle}>Add Upvote</button>
            <p
                style={{ marginBottom: '1em' }}
            >{`This post has been upvoted ${upvotes} times.`}</p>
        </>
    );
};

export default UpvotesSection;
