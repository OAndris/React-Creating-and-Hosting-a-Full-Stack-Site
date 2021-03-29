import React, { useState } from 'react';
import './AddCommentForm.scss';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    };

    return (
        <div className="add-comment-form">
            <h3 className="title">Add a Comment</h3>
            <label className="form-input">
                Name:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label className="form-input">
                Comment:
                <textarea
                    rows="4"
                    cols="50"
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default AddCommentForm;
