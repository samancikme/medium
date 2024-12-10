import { useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import { setUpdPro, showPro } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import Menu from './../components/page-components/Menu';
import { getAllAuth, getAllPosts, getProfile } from '../api/getRequests'


const MainLayout = () => {
  const { theme, pageAct, showProfile, updPro } = useSelector(state => state?.pageActions)
  const cont = useSelector(state => state.allData)
  console.log(cont)
  const dispatch = useDispatch()
  const url = 'https://medium-database.onrender.com'

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllAuth(url))
      await dispatch(getAllPosts(url))
      if (localStorage.getItem('token')?.length > 0) {
        await dispatch(getProfile(url))
      }
    }
    fetchData()
    if (!localStorage.getItem('medium-theme')) {
      localStorage.setItem('medium-theme', pageAct?.theme)
    }
  }, [])

  console.log(theme)

  const location = useLocation()
  if (theme) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }

  return (
    <div
      onClick={() => {
        showProfile ? dispatch(showPro()) : ""
        updPro ? dispatch(setUpdPro()) : ""
      }}
      className='font-fredoka min-h-[calc(100vh - 30px)] duration-500 dark:bg-[#323232] flex flex-col gap-4 dark:text-white bg-[#f2fef8] relative overflow-hidden'>
      <div className='border-b-[1px] dark:border-gray-600 sticky top-0  dark:bg-[#262626] duration-500 bg-[#f2fef8]'>
        <Header />
      </div>
      <Container>
        <div className='flex w-full justify-between items-start min-h-[calc(100vh-80px)] duration-500 gap-5'>
          <div className={`${location.pathname === '/create-post' || location.pathname !== '/authentication/sign-up' || location.pathname !== '/authentication/login' || location.pathname !== '/set-profile' ? "w-[100%]" : " lg:w-[75%] w-[100%] justify-center"}  flex min-h-[calc(100vh-120px)]`}>
            <Outlet />
          </div>
          {location.pathname !== '/create-post' && location.pathname !== '/authentication/sign-up' && location.pathname !== '/authentication/login' && location.pathname !== '/set-profile' ?
            <div className=" w-[25%] min-w-[300px] lg:block hidden min-h-[calc(100vh-80px)] ">
              <Sidebar />
            </div> : ""}
        </div>
      </Container>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute h-[calc(100vh-40px)] bottom-[20px] top-[20px] right-[10px] md:w-[400px] w-[300px]  dark:bg-[#32373b] bg-slate-200 transition-all duration-500 ease-in-out transform flex justify-center rounded-tr-none items-end py-5 px-3 rounded-xl ${showProfile ? 'translate-x-0 translate-y-0  opacity-100 pointer-events-auto profile' : 'translate-x-[50px] translate-y-[-50px] opacity-0 pointer-events-none '}`}>
        <Menu />
      </div>
    </div>
  )
}

export default MainLayout