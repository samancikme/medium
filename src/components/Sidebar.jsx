import { useSelector } from 'react-redux'
import AuthorsCard from './page-components/AuthorsCard'

const Sidebar = () => {
  const { authors, isAuthorLoaded } = useSelector(state => state.allData)
  console.log(authors)
  return (
    <div>
      <div className="flex flex-col gap-2 px-3 py-5 last:border-b-0 border-b-[1px] rounded-md" >
        {isAuthorLoaded ?
          <div className="">
            {[1, 2, 3, 4, 5, 6, 7, 8 , 9 ].map((item , index) => (
              <div key={index} className="px-2 py-1 flex justify-start cursor-pointer relative items-center gap-3 ">
                <div className="w-[50px] h-[50px] dark:bg-[#1f1f1fcf] bg-gray-300 duration-500 animate-pulse rounded-full">
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="w-[80px] h-[20px] dark:bg-[#1f1f1fcf] bg-gray-300 duration-500 animate-pulse"></h1>
                  <h1 className="w-[200px] h-[20px] dark:bg-[#1f1f1fcf] bg-gray-300 duration-500 animate-pulse"></h1>
                </div>
              </div>
            ))}
          </div>
          :
          <div className='flex flex-col gap-2'>{authors?.map((author, index) => (
            <div key={author.id} className={`${index === authors.length - 1 ? '' : 'border-b-[1px]'} dark:border-gray-600 border-gray-200 pb-1`}>
              <AuthorsCard item={author} />
            </div>
          ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Sidebar
