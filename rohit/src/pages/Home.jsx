import React ,{useState} from 'react'
import { Header } from './AdminConfig'
import { HeroBox,Footer } from './HomeConfig'
import moment from "moment"
import { useSelector } from 'react-redux'

console.log(moment().format('LTS'))


function Home() {

  // const theme = useSelector(state=>state.ThemeReducer.theme)
  // document.body.style.backgroundColor = theme
 
  return (
    <div>
        <Header />
        <HeroBox/>
        <Footer/>
    </div>
  )
}

export default Home