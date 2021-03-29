import React from 'react';
import './CommentsList.scss';

const CommentsList = ({ comments }) => (
    <div className="comments-list">
        <h3 className="title">Comments:</h3>
        {comments.map((comment, key) => (
            <div key={key} className="comment">
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
);

export default CommentsList;
