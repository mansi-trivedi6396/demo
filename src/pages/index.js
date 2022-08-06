import React from "react"
import { Match } from '@reach/router'
import Appbar from "./Admin/Component/Appbar"



export default function Home() {
  
  <>
    <Match path="/">
      {
        window.location.href="/Admin/Pages/homepage"
      }
    </Match>
{/* <Appbar/>
   */}
   
    
  </>

}
