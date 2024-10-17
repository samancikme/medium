import { IoIosArrowBack } from "react-icons/io";
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const PostsDetail = () => {
    const { slug } = useParams()
    const { posts, authors, isPostLoaded } = useSelector(state => state.allData)
    const selPost = posts?.find(p => `${p.slug}-${p.id}` === `${slug}`)
    const selAuth = authors?.find(a => `${a.id}` === `${selPost?.authorId}`)
    const navigate = useNavigate()

    return (
        <div className="w-[100%] h-[calc(100vh-135px)] px-3 py-2">
            <div
                onClick={() => navigate('/')}
                className="cursor-pointer w-[30px] sticky top-0 translate-x-[-20px]  duration-500 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md ">
                <IoIosArrowBack className=" active:scale-90 duration-500 text-[26px] " />
            </div>
            <div className=" overflow-y-scroll h-full">
                {isPostLoaded ?
                    <div className="flex justify-center items-center h-full">
                        <div className="loader"></div>
                    </div>
                    :
                    <div className="w-full  flex flex-col gap-4 cursor-default pb-5">
                        <div className="">
                            <div className="flex w-full justify-start items-center gap-2 border-b-[1px] pb-3 dark:border-gray-400">
                                <img className='w-[55px] h-[55px] object-cover rounded-full' src={selAuth?.avatar} alt={selAuth?.fullName} />
                                <h1 className="text-[24px] font-normal">{selAuth?.fullName}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-[20px] font-semibold">
                                {selPost?.title}
                            </div>
                            <div className="text-[16px] font-normal">
                                {selPost?.excerpt}
                            </div>
                        </div>
                        <div className="">
                            <img
                                className='w-full'
                                src={selPost?.image}
                                alt={selAuth?.fullName} />
                        </div>
                        <div
                            className='text-[16px] font-medium'
                            dangerouslySetInnerHTML={{ __html: selPost?.content }}></div>
                    </div>}
            </div>
        </div>
    )
}

export default PostsDetail


