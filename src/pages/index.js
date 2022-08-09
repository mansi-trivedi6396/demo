import React from "react"
import { Match } from '@reach/router'
import Appbar from "./Admin/Component/Appbar"



export default function Home() {
  
  <>
    <Match path="/">
    if (typeof window !== `undefined`){
           window.location.href="/Admin/Pages/homepage"// Window call
      }
    </Match>
{/* <Appbar/> */}
  
   
    
  </>

}
// import React from 'react'
// import Appbar from "./Admin/Component/Appbar"
// import Footer from './Admin/Component/Footer'
// import Home from './Admin/Component/Home'
// import StepperMain from './Admin/Component/Stapper/StapperMain'
// export default function index() {
//   return (
//     <>
//     <Appbar/>
    
//     <Home/>
    
//     <Footer/>
//     </>
//   )
// }


