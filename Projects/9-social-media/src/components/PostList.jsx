import Post from "./Post";
import {PostList as PostListData} from '../store/post-list-store'
import { useContext } from "react";

const PostList = () => {
  const items = Array.from({ length: 3 });
  const {postList}=useContext(PostListData);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
      {/* {items.map((_, index) => (
        <div className="col" key={index}>
          <Post />
        </div>
      ))} */}
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