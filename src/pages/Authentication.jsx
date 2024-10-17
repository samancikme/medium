import { BiArrowBack } from "react-icons/bi";
import React from 'react'
import { useSelector } from 'react-redux'
import Register from '../components/page-components/Register'
import Login from '../components/page-components/Login'
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Authentication = () => {
  const { authorizationType } = useSelector(state => state.pageActions)
  const navigate = useNavigate()
  return (
    <>
      <div
        onClick={() => {
          setTimeout(() => navigate('/'), 500)
        }}
        className="hover:bg-[#1ef1ed23] duration-300 active:scale-95 w-[40px] flex justify-center items-center rounded-md h-[40px] absolute">
        <BiArrowBack className="text-[24px]" />
      </div>
      {authorizationType === "sign-up" ?
        <>
          <Register />
        </>
        :
        <>
          <Login />
        </>}
        <ToastContainer />
    </>
  )
}

export default Authentication