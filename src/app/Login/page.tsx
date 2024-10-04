"use client"
import PasswordInput from '@/components/PasswordInput/PasswordInput'
import Link from 'next/link'
import React, { useState } from 'react'
import { validateEmail } from '@/app/Login/helper';
 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async(e: { preventDefault: () => void; }) =>{
    e.preventDefault();
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
    <>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7'>Login</h4>
            <input type="text" placeholder='Email' className='input-box' onChange={(e) => setEmail(e.target.value)}/>
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Password'}/>
            <p className='text-red-500 text-xs pb-1'>{error}</p>
            <button type='submit' className='btn-primary'>Login</button>
            <p className='text-sm text-center mt-4'>
              Not registered yet?
              <Link href="/SignUp" className='font-medium text-primary underline'>
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login