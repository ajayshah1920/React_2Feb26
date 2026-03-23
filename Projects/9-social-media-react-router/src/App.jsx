import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Createpost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'

function App() {
  const [selectedTab, setSelectedTab] = useState('Create Post')
  return (
    <>
    <PostListProvider>
      <div className='app-container'>  
        <Sidebar selectedTab = { selectedTab } setSelectedTab={ setSelectedTab }></Sidebar>
        <div className='container'>
          <Header></Header>
          <div className="bodySection">
            {
              selectedTab==='Home' ? 
              <PostList></PostList> :
              <Createpost></Createpost>
           } 
          </div>      
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>      
    </>
  )
}

export default App
