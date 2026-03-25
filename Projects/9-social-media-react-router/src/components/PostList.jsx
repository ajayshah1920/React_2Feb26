import Post from "./Post";
import {PostList as PostListData} from '../store/post-list-store'
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const items = Array.from({ length: 3 });
  //const { postList, fetching } = useContext(PostListData);
  const postList = useLoaderData();

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
      {/* { 
        fetching && (<LoadingSpinner/>) 
      } */}
      {
        (postList.length==0 && (<WelcomeMessage></WelcomeMessage>))
      }
      { postList.map((postData,index) => (
          <div className="col" key={index}>
              <Post postData={postData}/>
           </div>
        ))
      }
    </div>
  );
};

 export const postLoader =() => fetch('https://dummyjson.com/posts')
      .then(res=>res.json()).then(data=>{ 
        let allposts= data.posts.map(pst=>({...pst, photoUrl: './images/no-image.jpg', reactions: pst.reactions.likes}));
        return allposts;
      });

export default PostList;