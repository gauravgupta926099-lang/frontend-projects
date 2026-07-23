import React from "react"
import {useDispatch} from "react-redux"
import AuthService from "../../appwrite/auth.js"
import {logout} from "../../features/authSlice.js"

function LogoutBtn(){
    const dispatch=useDispatch();
    const handleLogout=()=>{
        try{
        AuthService.logout()
        .then((userData)=>{
            if(userData){
             dispatch(logout());
            }})}
        catch(error){
            
        }
        
    }
    return(<button className="px-6 py-2 duration-200 inline-block hover:bg-blue-100 rounded-full">
    Logout
    </button>)
}

export default LogoutBtn;