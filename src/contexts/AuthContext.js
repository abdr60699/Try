// import React, { useContext,useState,useEffect } from 'react'
//  //import { auth } from '../firebase'


// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export default function AuthProvider({ children }) {

// const [currentUser,setCurrentUser] = useState()

//function Signup(email,password){
   // return auth.createUserWithEmailandPassword(email,password)
//}

// useEffect(()=>{

//     const unsubcribe = auth.onAuthStateChanged(user =>{
//          setCurrentUser(user)
//      })

// return 'unsubcribe'

// },[])

//     const value = {
//         currentUser,
//         Signup

//     }
//     return (
//         <AuthContext>
//             {children}
//         </AuthContext>
//     )
// }
