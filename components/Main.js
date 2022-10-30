import Image from "next/image"

const Main = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div>
          {/* <Image className="h-[89px] w-[273px]" src="https://ppc.co/wp-content/uploads/2021/01/Google.png" alt="google Logo" width="40" height="40" /> */}
        </div>
        <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
          <div className="pl-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input type="text" className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none" />
          <div className="pr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>
        <div className="flex mt-3 space-x-12">
          <div className="bg-[#f8f9fa] px-2 py-1">Google Search</div>
          <div className="bg-[#f8f9fa] px-2 py-1">I'm Feeling Lucky</div>
        </div>
      </div>

    </div>
  )
}

export default Main