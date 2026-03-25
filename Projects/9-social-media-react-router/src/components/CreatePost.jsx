import { Form, redirect } from "react-router-dom";

const Createpost=()=>{
    return (
        <Form className="w-75 m-4" method="POST">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input type="text" name="userId" className="form-control" id="userId" aria-describedby="userIdHelp" placeholder="Enter your User Id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="title" aria-describedby="emailHelp" placeholder="How you are feeling today?"/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" name="body" rows="5" cols="50" className="form-control" id="body" placeholder="tell us more about it."/>
            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Number of Reactions</label>
                <input type="text" name="reactions" className="form-control" id="reaction" placeholder="How many people reacted on post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" name="tags" className="form-control" id="tags" placeholder="Enter your Hashtags with space"/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    )
}

export async function createPostAction(data){
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags=postData.tags.split(' ');

    fetch('https://dummyjson.com/posts/add', {
            method: 'POST',     
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post=> { 
            post={...post, photoUrl: './images/no-image.jpg'};
            console.log(post);
            // addPost(post);
            // navigate("/");
        });

        return redirect("/");
} 

export default Createpost;