import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const PostsCard = ({ post }) => {
    const { authors } = useSelector(state => state.allData)
    const navigate = useNavigate()
    function setNavigate(slug, id) {
        navigate(`/posts/${slug}-${id}`)
    }
    const [authLoading, setAuthLoading] = useState(true)
    const [postImgLoading, setPostImgLoading] = useState(true)


    return (
        <>
            <div onClick={() => setNavigate(post?.slug, post?.id)}>
                <div className={`px-5 py-3 dark:bg-[#393939] duration-200 hover:bg-slate-100 rounded-md bg-slate-50 cursor-pointer dark:hover:bg-[#222222]`}>
                    <div className='flex justify-between lg:flex-row flex-col  items-cen gap-3'>
                        <div className="flex-[4]">
                            <div className="flex justify-start gap-4 items-center border-b-[1px] dark:border-b-gray-500 pb-2">
                                {authLoading && (
                                    <div className="flex justify-center dark:text-white items-center w-[50px] h-[50px] ">
                                        Loading...
                                    </div>
                                )}
                                <img
                                    className={`${authLoading ? "hidden" : "flex"} w-[50px] h-[50px] rounded-full object-cover`}
                                    src={authors?.find(auth => auth?.id === post?.authorId)?.avatar}
                                    alt="Person image"
                                    onLoad={() => setAuthLoading(false)} />
                                <span className="text-[20px] font-medium">
                                    {authors?.map(author => author?.id == post?.authorId ? author?.fullName : '')}
                                </span>
                            </div>
                            <h2 className='text-[22px] font-semibold'>{post?.title}</h2>
                            <p>{post?.excerpt}</p>
                        </div>
                        <div className="flex-1">
                            {postImgLoading && (
                                <div className="flex justify-center dark:text-white items-center lg:min-w-[220px] lg:h-[120px] w-full h-full">
                                    Loading...
                                </div>
                            )}
                            <img
                                className={` ${postImgLoading ? "hidden":"flex"} lg:min-w-[220px] lg:h-[120px] w-full h-full object-cover`}
                                src={post?.image}
                                alt="Post image" 
                                onLoad={() => setPostImgLoading(false)}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostsCard
