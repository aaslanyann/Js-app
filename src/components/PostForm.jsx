import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm({create, ...props}) {
    const [post, setPost] = useState({title: '', body: ''})


    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    type="text"
                    placeholder="Post name"
                    onChange={event => setPost({...post, title: event.target.value})}/>
                <MyInput
                    value={post.body} type="text"
                    placeholder="Post description"
                    onChange={event => setPost({...post, body: event.target.value})}/>
                <MyButton onClick={addNewPost}>
                    Create Post
                </MyButton>
            </form>
        </div>
    );
}

export default PostForm;