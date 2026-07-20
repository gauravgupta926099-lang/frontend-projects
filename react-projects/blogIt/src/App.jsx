import React, { useState, useEffect } from "react"
import AuthService from "./appwrite/auth.js"
import './App.css'
import {login,logout} from "./features/authSlice.js"
import {useDispatch} from "react-redux"
import {Header,Footer} from "./components/index.js"
import {Outlet} from "react-router-dom"
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
      
    }).catch((error)=>{
      dispatch(logout())
      setLoading(false)
    })
    .finally(()=>{setLoading(false);})
  },[])
  if(!loading){
     return(<><div className="flex flex-wrap content-between bg-gray-900 min-h-screen ">
     <Header />
     <main>
    
     </main>
     <Footer />
      </div></>)
  }
  else{
    return(<><div className="flex justify-center items-center bg-gray-900 h-screen w-full">
      <div className="text-white text-2xl">Loading...</div>
      </div></>)
  }
}
export default App
