import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux'
import PostsCard from '../components/page-components/PostsCard'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  const { selectedPostId } = useSelector(state => state.pageActions)
  const { posts, isPostLoaded, profile } = useSelector(state => state.allData)
  const selPost = posts?.filter(post => post?.authorId === selectedPostId)
  return (
    <>
      <div className='w-full'>
        {isPostLoaded ?
          <div className='h-full flex justify-center items-center'>
            <div className="loader"></div>
          </div>
          :
          <>
            {!selPost.length ?
              <div className='flex flex-col gap-3 h-[calc(100vh-120px)] overflow-y-scroll'>
                {posts?.map(post => (
                  <PostsCard key={post.id} post={post} />
                ))}
              </div>
              :
              <div className='flex flex-col gap-3 overflow-y-scroll'>
                {selPost?.map(post => (
                  <PostsCard key={post.id} post={post} />
                ))}
              </div>
            }
          </>
        }
      </div>
      <ToastContainer />
    </>
  )
}

export default Home