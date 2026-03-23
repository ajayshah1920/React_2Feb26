import Post from "./Post";
import {PostList as PostListData} from '../store/post-list-store'
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const items = Array.from({ length: 3 });
  const { postList, fetching } = useContext(PostListData);





  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
      { 
        fetching && (<LoadingSpinner/>) 
      }
      {
        (!fetching && postList.length==0 && (<WelcomeMessage></WelcomeMessage>))
      }
      { !fetching && postList.map((postData,index) => (
          <div className="col" key={index}>
              <Post postData={postData}/>
           </div>
        ))
      }
    </div>
  );
};

export default PostList;