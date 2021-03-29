import React, { useState } from 'react';
import axios from 'axios';
import './AddCommentForm.scss';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await axios.post(
            `/api/articles/${articleName}/add-comment`,
            { username, text: commentText }
        );
        const body = await result.data;
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
