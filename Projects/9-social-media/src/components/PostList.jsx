import Post from "./Post";
import {PostList as PostListData} from '../store/post-list-store'
import { useContext } from "react";
import WelcomeMessage from './WelcomeMessage'

const PostList = () => {
  const items = Array.from({ length: 3 });
  const { postList, addInitialPosts }=useContext(PostListData);

  const handleGetPostClick=()=>
  {
      fetch('https://dummyjson.com/posts')
      .then(res=>res.json()).then(data=>{ 
        let allposts= data.posts.map(pst=>({...pst, photoUrl: './images/no-image.jpg', reactions: pst.reactions.likes}));
          console.log(allposts);
          addInitialPosts(allposts); 
      });
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
      {/* {items.map((_, index) => (
        <div className="col" key={index}>
          <Post />
        </div>
      ))} */}
      {
        postList.length==0 && (<WelcomeMessage onGetPostClick={handleGetPostClick}></WelcomeMessage>)
      }
      {
        postList.map((postData,index) => (
          <div className="col" key={index}>
              <Post postData={postData}/>
           </div>
        ))
      }
    </div>
  );
};

export default PostList;