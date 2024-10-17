import { CgClose } from "react-icons/cg"
import { CgLogOut } from "react-icons/cg"
import { BiEditAlt } from "react-icons/bi"
import { BiMoon, BiSun } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs"
import { getProfile } from './../../api/getRequests'
import { useDispatch, useSelector } from 'react-redux'
import { authorization, setTheme, setUpdPro, showPro } from '../../store/action'
import { useRef } from "react"
import SetProfile from "./SetProfile"
import { CSSTransition } from 'react-transition-group'

const Menu = () => {
    const { theme, userStatus, updPro } = useSelector(state => state.pageActions)
    const { profile, authors } = useSelector(state => state.allData)
    const nodeRef = useRef(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function refreshPage() {
        window.location.reload();
    }
    // console.log(authors)

    return (
        <div className='flex justify-between items-center w-full flex-col h-full z-30'>
            <div className="flex flex-col w-full h-full">
                <div className="flex justify-start items-start w-full pl-4 pt-2">
                    <button onClick={() => {
                        if (updPro) {
                            dispatch(setUpdPro())
                        }
                        dispatch(showPro())
                    }}>
                        <CgClose className="text-[18px]" />
                    </button>
                </div>
                <div className="flex justify-center gap-5 pt-6 h-full">
                    {userStatus
                        ?
                        <div className="w-full flex-col justify-between flex pb-10">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between border-b-2 pb-2 dark:border-gray-500 pl-5 items-center md:gap-4 gap-1">
                                    <div className="flex justify-start items-center md:gap-4 gap-2">
                                        <div className="border-[2px] border-gray-400 rounded-full md:w-[80px] w-[60px] md:h-[80px] h-[60px] flex justify-center items-center">
                                            {profile?.avatar ?
                                                <img className="rounded-full md:w-[75px] w-[55px] md:h-[75px] h-[55px] object-cover" src={profile?.avatar} alt="profile" />
                                                :
                                                <BsFillPersonFill className="text-[60px] text-gray-500" />}
                                        </div>
                                        <div className="flex flex-col justify-start items-start">
                                            <h1 className="md:text-[24px] text-[18px]  font-medium truncate w-[150px] md:w-[200px]">{profile?.fullName?.length > 0 ? profile?.fullName : "Your Name"}</h1>
                                            <h1 className="text-[12px] md:text-[16px] dark:text-gray-200 truncate w-[150px] ">{profile?.job?.length > 0 ? profile?.job : "Your Job"}</h1>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <button onClick={() => {
                                            dispatch(setUpdPro())
                                        }}>
                                            <BiEditAlt className="text-[24px] opacity-20 group-hover:opacity-80 duration-300 active:scale-95 " />
                                        </button>
                                    </div>
                                </div>

                                <div className="duration-500">
                                    <CSSTransition
                                        in={updPro}
                                        timeout={500}
                                        classNames="fade"
                                        unmountOnExit
                                        nodeRef={nodeRef}>
                                        <SetProfile />
                                    </CSSTransition>
                                    {!updPro &&
                                        <div className="">
                                            <div className={`pl-4  text-[18px] ${updPro ? "hidden" : ""}`}>
                                                You haven't created post yet :(
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                <button
                                    className="hover:bg-[#ff8888] dark:hover:bg-[#db6e6e] text-black duration-500 active:scale-95 dark:text-white rounded-md px-10 py-1 w-max flex justify-start items-center gap-2"
                                    onClick={() => {
                                        localStorage.clear()
                                        dispatch(showPro())
                                        dispatch(getProfile())
                                        refreshPage()
                                        navigate('/')
                                        if (updPro) {
                                            dispatch(setUpdPro())
                                        }
                                    }}>
                                    <CgLogOut className="text-[24px]" />
                                    <span className="text-[16px] font-medium">Log out</span>
                                </button>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col gap-3 justify-center text-center">
                            <h1 className="text-[18px] font-semibold">
                                You are not registered this site :(
                            </h1>
                            <h1 className="text-[16px] font-normal">
                                Go to the Sign Up page
                            </h1>
                            <div className="flex justify-center gap-4">
                                <button
                                    className="px-3 py-1 border duration-500 active:scale-95 hover:bg-[#dfdfdf65] rounded-md dark:border-gray-400 border-blue-400"
                                    onClick={() => {
                                        setTimeout(() => navigate('/authentication/sign-up'), 1000)
                                        dispatch(showPro())
                                        dispatch(authorization('sign-up'))
                                        dispatch()}}>
                                    <span className="dark:text-white font-bold">Sign Up</span>
                                </button>

                                <button
                                    className="px-3 py-1 border duration-500 active:scale-95 hover:bg-[#dfdfdf65] rounded-md dark:border-gray-400 border-blue-400"
                                    onClick={() => {
                                        setTimeout(() => navigate('/authentication/login'), 1000)
                                        dispatch(showPro())
                                        dispatch(authorization('login'))
                                        dispatch()
                                    }}>
                                    <span className="dark:text-white font-bold">Log in</span>
                                </button>
                            </div>
                        </div>}
                </div>
            </div>
            <button
                onClick={() => { dispatch(setTheme()) }}
                className={`${theme ? "bg-gray-300" : "bg-gray-800"} relative w-[70px] h-[35px] rounded-full text-[24px] flex justify-between px-2 items-center`}>
                <div className={`${theme ? "translate-x-0 bg-gray-100" : "translate-x-[35px] bg-gray-600"} flex justify-center items-center absolute duration-500 top-[1px] left-[2px] w-[32px] h-[32px] rounded-full`}>
                    {theme ?
                        <BiSun className="text-yellow-400" /> :
                        <BiMoon className="text-blue-500" />}
                </div>
            </button>
        </div>
    )
}

export default Menu
