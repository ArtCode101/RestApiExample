
import { useRouter } from 'next/router';
import * as React from 'react';
import {
  // API_SERVER_GETBASKET,
  API_SERVER_INSERTBASKET
}from '../next.apiServer.config'
export default function Home() {
  const router = useRouter()
  
  React.useEffect(()=>{
    router.push('/fruitsProduct')
  })

  return (
    <></>
  )
}
