import React from 'react'
import {
    GoogleAuthProvider,
    signInWithPopup,
   } from "firebase/auth"
import { auth } from './firebase'
import { Google } from '@mui/icons-material';

function GoogleAuth() {


    const googleSignIn = ()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
    }

    const handleClick = async()=>{
        try {
          await googleSignIn()  
        } catch (error) {
           console.log(error) 
        }
    }


  return (
    <div className='google'>
      <button  onClick={() => handleClick()}>
        Sign In with
      <Google sx={{ml:1}}/>
      </button>
    </div>
  )
}

export default GoogleAuth