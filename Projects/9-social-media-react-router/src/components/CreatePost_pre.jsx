import { useRef } from "react";
import { PostList } from '../store/post-list-store'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Createpost=()=>{
    const { addPost } = useContext(PostList); 
    const navigate = useNavigate();

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const postReactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();

        const userId= userIdElement.current.value;
        const postTitle= postTitleElement.current.value;
        const postBody= postBodyElement.current.value;
        const postReactions= postReactionsElement.current.value;
        //const tags= tagsElement.current.value.split(/(\s+)/);
        const tags= tagsElement.current.value.split(' ');

        userIdElement.current.value='';
        postTitleElement.current.value='';
        postBodyElement.current.value='';
        postReactionsElement.current.value='';
        tagsElement.current.value='';

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',     
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
             id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: postReactions,
                //photoUrl: './images/no-image.jpg',
                userId: userId,
                tags: tags
            })
        })
        .then(res => res.json())
        .then(post=> { 
            post={...post, photoUrl: './images/no-image.jpg'};
            addPost(post);
            navigate("/");
        });
    
    }

    return (
        <form className="w-75 m-4" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId" aria-describedby="userIdHelp" placeholder="Enter your User Id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" ref={postTitleElement} className="form-control" id="title" aria-describedby="emailHelp" placeholder="How you are feeling today?"/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" ref={postBodyElement} rows="5" cols="50" className="form-control" id="body" placeholder="tell us more about it."/>
            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Number of Reactions</label>
                <input type="text" ref={postReactionsElement} className="form-control" id="reaction" placeholder="How many people reacted on post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter your Hashtags with space"/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}

export default Createpost;