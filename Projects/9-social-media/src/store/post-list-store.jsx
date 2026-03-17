import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
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
        newPostList = [...currentPostList, action.payload]
    }
     else if(action.type==='EdIT_POST'){
        newPostList = currentPostList.filter((post)=> post.id === action.payload.postId)
    //    newPostList =  currentPostList.map(post => 
    //     (action.payload.postId==post.id) ? {...post, title:editItem.title, body: editItem.body, reactions} : post )
     }
    return newPostList;
}

const PostListProvider =({children})=>{
    const [postList, dispatchPostList]= useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost=(userId,postTitle,postBody,postReactions,tags)=> {
        console.log(`${userId} ${postTitle} ${postBody} ${postReactions} ${tags}`);
        
        const addpostData ={
            type:'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: postReactions,
                photoUrl: './images/no-image.jpg',
                userId: userId,
                tags: tags
            }
        }

        dispatchPostList(addpostData);
    }
    const deletePost=(postId)=> {
        console.log(postId);
        const deleteItem={
            type:'DELETE_POST',
            payload:{
                postId
            }
        };

        dispatchPostList(deleteItem);
    }

    const editPost=(postId)=>{
        const editItem={
            type:'EDIT_POST',
            payload:{
                postId
            }
        };
        dispatchPostList(editItem);
    }
    

    return <PostList.Provider value={{postList, addPost, deletePost, editPost}}>
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