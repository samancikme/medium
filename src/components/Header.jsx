import { FiEdit } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs"
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import { useDispatch, useSelector } from "react-redux"
import { selectedPosts, showPro } from './../store/action'

const Header = () => {
  const { profile } = useSelector(state => state.allData)
  const dispatch = useDispatch()
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center gap-2 py-2 relative">
          <div>
            <Link
              to={'/'}
              onClick={() => dispatch(selectedPosts(null))}
              className="font-hand cursor-pointer dark:text-white text-[30px] font-extrabold ">
              Medium
            </Link>
          </div>
          <div className='flex items-center gap-[40px] dark:text-[#dcdcdc]'>
            <nav className='flex items-center'>
              <NavLink
                to={'/create-post'}
                className='font-medium flex justify-center opacity-80 gap-2 items-center'>
                <FiEdit className="text-[22px]" />
                <span className="text-[18px]">Write</span>
              </NavLink>
            </nav>
            <div
              onClick={() => dispatch(showPro())}
              className="border-[2px] border-gray-400  w-[50px] h-[50px] cursor-pointer rounded-full flex justify-center items-center">
              {profile?.avatar ?
                <img
                  className="rounded-full w-[45px] h-[45px]  object-cover"
                  src={profile?.avatar}
                  alt="profile" />
                :
                <BsFillPersonFill className="text-[26px] text-gray-600" />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header