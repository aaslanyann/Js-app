import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript 1", body: "Description"},
        {id: 2, title: "JavaScript 2", body: "Description"},
        {id: 3, title: "JavaScript 3", body: "Description"},
        {id: 4, title: "JavaScript 4", body: "Description"}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts

    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, posts])


    function createPost(post) {
        setPosts([...posts, {...post, id: posts.length + 1 }])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
  return (
    <div className="App">
        <MyModal>
            <PostForm create={createPost} />
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts for JS"} />
    </div>
  );
}

export default App;
