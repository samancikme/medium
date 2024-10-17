import { useDispatch, useSelector } from "react-redux"
import { selectedPosts } from "../../store/action"
import { useState } from "react"

const AuthorsCard = ({ item }) => {
  const dispatch = useDispatch()
  const { selectedPostId } = useSelector(state => state.pageActions)
  const [authLoading, setAuthLoading] = useState(true)

  return (
    <div onClick={() => dispatch(selectedPosts(item.id))}>
      <div className={`px-2 py-1 rounded-md flex justify-start cursor-pointer relative items-center gap-3 duration-200 hover:bg-gray-200 dark:hover:bg-[#262626] ${selectedPostId === item.id ? "dark:bg-[#4d4d4d] bg-gray-100" : ""}`}>
        <div className="">
          {authLoading && (
            <div className="flex justify-center dark:text-white items-center w-[50px] h-[50px] ">
              Loading...
            </div>
          )}
          <img
            className='w-[50px] h-[50px] object-cover rounded-full'
            src={item.avatar}
            alt="image" 
            onLoad={() => setAuthLoading(false)}
            />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[18px] font-semibold ">{item.fullName}</h1>
          <h1 className="text-[14px] dark:text-gray-200">{item.job}</h1>
        </div>
        {item.new ? <div className="absolute top-0 right-[20px] w-[50px] animate-pulse h-5 justify-center rounded-[2px] items-center flex bg-green-400">
          New
        </div> : ""}
      </div>
    </div>
  )
}

export default AuthorsCard
