"use client"
import PasswordInput from '@/components/PasswordInput/PasswordInput'
import Link from 'next/link'
import React, { useState } from 'react'
import { validateEmail } from '../Login/helper'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if(!name){
      setError("Please enter your name.")
      return
    }
    if (!validateEmail(email)){
      setError("Please enter a valid email address.")
      return
    }
    if (!password || password.trim() === "") {
      setError("Please enter a valid password.");
      return;
    }
    setError("")
  }

  return (
    <div className='flex item-center justify-center mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleSignUp}>
          <h4 className='text-2xl mb-7'>SignUp</h4>
          <input type="text" placeholder='Name' className='input-box' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder='Eamil' className='input-box' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'}/>
          <p className='text-red-500 text-xs pb-1'>{error}</p>
            <button type='submit' className='btn-primary'>Register</button>
            <p className='text-sm text-center mt-4'>
              Already registered?
              <Link href="/Login" className='font-medium text-primary underline'>
                Sign in
              </Link>
            </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp