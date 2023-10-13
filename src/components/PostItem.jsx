import React from 'react';
import MyButton from "./UI/button/MyButton";

function PostItem({remove, ...props}) {
   const {title, id, body} = props.post

    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;