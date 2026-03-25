import { useState } from 'react'
import Header from '../components/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'
// import Createpost from '../components/CreatePost'
// import PostList from '../components/PostList'


function App() {

  return (
    <>
    <PostListProvider>
      <div className='app-container'>  
        <Sidebar></Sidebar>
        <div className='container'>
          <Header></Header>
          <div className="bodySection">
            <Outlet></Outlet>
            {/* {selectedTab==='Home' ? <PostList></PostList> : <Createpost></Createpost>}  */}
          </div>      
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>      
    </>
  )
}

export default App
