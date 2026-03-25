import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Createpost, {createPostAction} from '../src/components/CreatePost'
import PostList,{ postLoader } from '../src/components/PostList'

const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  children: [
    {path:"/", element: <PostList/>, loader: postLoader},
    {path:"/home", element: <PostList/>,  loader: postLoader},
    {path:"/create-post", element: <Createpost/>, action: createPostAction},
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
)
