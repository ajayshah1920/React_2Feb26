import { useCallback, useState } from "react";
import { createContext, useReducer, useEffect } from "react";

export const PostList = createContext({
    postList: [],
    fetching: false,
    editPost: {},
    addPost: {},
    //addInitialPosts:{},
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
    //    newPostList =  currentPostList.map(post => 
    //     (action.payload.postId==post.id) ? {...post, title:editItem.title, body: editItem.body, reactions} : post )
     }
    return newPostList;
}

const PostListProvider =({children})=>{
    // const [postList, dispatchPostList]= useReducer(postListReducer, DEFAULT_POST_LIST);
    const [postList, dispatchPostList]= useReducer(postListReducer, []);
    const [fetching, setFetching] = useState(false);

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

     setFetching(true);
     fetch('https://dummyjson.com/posts',{ signal })
      .then(res=>res.json()).then(data=>{ 
        let allposts= data.posts.map(pst=>({...pst, photoUrl: './images/no-image.jpg', reactions: pst.reactions.likes}));
          //console.log(allposts);
          addInitialPosts(allposts); 
          setFetching(false);
      });

      return ()=>{
        controller.abort();
      }
  }, [])

    return <PostList.Provider value={{postList, addPost, deletePost, editPost, fetching}}>
        {children}
    </PostList.Provider>
}

const DEFAULT_POST_LIST =[
    {
        id:"1",
        title:"Going to Mumbai",
        body:"Hi Friends, I am going to Mumbai for my vacation. Hope to enjoy a lot.",
        reactions:2,
        photoUrl: './images/no-image.jpg',
        userId: "user-9",
        tags:["Vacation","Mumbai", "Enjoy"]
    },
     {
        id:"2",
        title:"Passing Graduation",
        body:"Hi Friends, I have passed my Graduation finally.",
        reactions:10,
        photoUrl:'./images/grad-cap.jpg',
        userId: "user-10",
        tags:["Graduation","Pass"]
    }
]

export default PostListProvider;