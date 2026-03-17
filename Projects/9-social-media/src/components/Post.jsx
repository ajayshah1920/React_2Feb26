import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { PostList } from '../store/post-list-store'
import { useContext } from 'react';

const Post =({ postData }) =>{
    console.log(postData);
    const { deletePost, editPost } = useContext(PostList);

    return (
        <div className="card m-2">
       
            <img src={postData.photoUrl} className="card-img-top" alt="..." width="60" height="240"/>
            <div className="card-body">
                <h5 className="card-title">{postData.title}</h5>
                <p className="card-text">{postData.body}</p>
                <div>
                    {
                        postData.tags.map(tg=>(
                            <span className="badge text-bg-primary m-1" key={tg}>{ tg }</span>
                        ))
                    }                 
                </div>
                <span className="position-absolute top-0 start-0 translate-middle p-2 bg-primary border border-light" 
                onClick={()=> editPost(postData.id)}>
                   <AiFillEdit/>
                </span>
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" 
                onClick={()=> deletePost(postData.id)}>
                   <AiFillDelete/>
                </span>
            </div>
            <span className="position-absolute top-100 start-50 translate-middle p-2 bg-primary border border-light rounded-circle">
                <img src="./images/thumbsup.jpg" className="img-fluid img-thumbnail" alt="thumbnail" width="30" height="30"></img>
                   {postData.reactions}
            </span>
        </div> 
    )
}

export default Post