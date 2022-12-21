import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeroBox = () => {
  // const navigate = useNavigate();
  const Theme = useSelector(state => state.ThemeReducer.theme)
  console.log(Theme);
  return (




    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>Get With US
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className={`mb-8 leading-relaxed  "text-[#000]" : "text-[#fff]"}`}>Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine.</p>
      <div className="flex justify-center">
        <Link to="/Admin" className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${Theme === "#fff" ? "text-[#000]" : "text-[#fff]"}`}>Company</Link>
        <Link to="/User"  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg " style={{textDecoration:"none"}}>Token</Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/1159847028/photo/medical-stethoscope-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=pWg7zs2AZmeSvdjnWRxlx5Y0wwgnGMpJlOQi065D6mM="/>
    </div>
  </div>
</section>
  )
}

export default HeroBox