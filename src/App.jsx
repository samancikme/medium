import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import CreatePost from './pages/CreatePost'
import NotFound from './pages/NotFound'
import PostsDetail from './components/page-components/PostsDetail'
import Authentication from './pages/Authentication'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/posts/:slug' element={<PostsDetail />} />
          <Route path='/authentication/:type' element={<Authentication />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App