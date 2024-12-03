"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { UserRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { registerClient } from '@/services/auth';
import { redirect } from 'next/navigation';

function RegisterPage() {
  const [name, setName] = useState("")  
  const [email, setEmail] = useState("")  
  
  const btnFunc = async () => {
    const response = await registerClient(name, email)
    
    if(response !== "Client already exists with this email" && response !== "Failed to register client"){
      const token = response;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("clientName", name);
      alert("Successfully registered")
      redirect("/order")
    }else{
      alert(response)
    }
  }

  return (
    <div className='flex flex-col gap-8 text-white'>
     <h1 className='text-center text-4xl font-bold mb-[20px]'>Create an Account</h1>

     <div className='flex gap-4 m-auto'>
      <UserRound size={30}/>
        <Input
          placeholder='Enter your name'
          className='w-[350px] bg-slate-600'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     </div>

     <div className='flex gap-4 m-auto'>
       <Mail size={30}/>
        <Input
          placeholder='Enter your email'
          className='w-[350px] bg-slate-600'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
     </div>

     <Button
        className='py-6 px-12 text-[24px] font-base m-auto'
        onClick={btnFunc}
        >
        Register
      </Button>

    </div>
  )
}

export default RegisterPage