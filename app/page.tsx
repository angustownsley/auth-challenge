'use client'

import Navbar from "../components/navigation/navbar"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react"


export default function Page() {    
    const router = useRouter()
    
    const [token, setToken] = useState('')

    useEffect(() => {
      setToken(localStorage.getItem('token') || '')
      if(token) {
        router.push('/')
      }
    }, [])
    
    return (
        <>
            <Navbar token={token}/>
            <h1>Welcome to my last Boolean Exercise</h1>
        </>
    )
}
