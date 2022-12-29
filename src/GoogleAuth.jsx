import React from 'react'
import GoogleButton from 'react-google-button'
import {
    GoogleAuthProvider,
    signInWithPopup,
   } from "firebase/auth"
import { auth } from './firebase'

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
         <GoogleButton
              onClick={() => handleClick()}
            />
    </div>
  )
}

export default GoogleAuth