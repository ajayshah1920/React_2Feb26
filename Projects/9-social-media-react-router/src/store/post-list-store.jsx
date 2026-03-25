import { useCallback, useState } from "react";
import { createContext, useReducer, useEffect } from "react";

export const PostList = createContext({
    postList: [],
    fetching: false,
    editPost: {},
    addPost: {},
    deletePost: {}
});

const postListReducer =(currentPostList, action)=> {
    debugger;
    let newPostList=currentPostList
    if(action.type==='DELETE_POST'){
        newPostList = currentPostList.filter((post)=> post.id !== action.payload.postId);
    }
    else if(action.type==='ADD_POST'){
        newPostList = [...currentPostList, action.payload];
    }
    else if(action.type==='ADD_INITIAL_POSTS'){
        newPostList = action.payload.posts;
    }
     else if(action.type==='EdIT_POST') {
        newPostList = currentPostList.filter((post)=> post.id === action.payload.postId)
     }
    return newPostList;
}

const PostListProvider =({children})=>{
    const [postList, dispatchPostList]= useReducer(postListReducer, []);
    //const [fetching, setFetching] = useState(false);

    const addPost=(post)=> {
        console.log("add post called",post);
        // const arr=[5,2,7,9,4]
        // const sortArr = useMemo(()=> arr.sort(), [arr]);
        
        dispatchPostList({
            type:'ADD_POST',
            payload: post
        });
    }

    const deletePost= useCallback((postId)=> {
        console.log(postId);
        const deleteItem={
            type:'DELETE_POST',
            payload:{
                postId
            }
        };

        dispatchPostList(deleteItem);
    }, [])

    const editPost=(postId)=>{
        const editItem={
            type:'EDIT_POST',
            payload:{
                postId
            }
        };
        dispatchPostList(editItem);
    }

     const addInitialPosts=(posts)=> {
        const addInitialposts={
            type:'ADD_INITIAL_POSTS',
            payload:{
                posts
            }
        };
        dispatchPostList(addInitialposts);
    }

  //call data on page load once
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

     //setFetching(true);
     fetch('https://dummyjson.com/posts',{ signal })
      .then(res=>res.json()).then(data=>{ 
        let allposts= data.posts.map(pst=>({...pst, photoUrl: './images/no-image.jpg', reactions: pst.reactions.likes}));
          //console.log(allposts);
          addInitialPosts(allposts); 
          //setFetching(false);
      });

    //   return ()=>{
    //     controller.abort();
    //   }
  }, [])

    return <PostList.Provider value={{postList, addPost, deletePost, editPost}}>
        {children}
    </PostList.Provider>
}


export default PostListProvider;