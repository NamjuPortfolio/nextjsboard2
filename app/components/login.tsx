interface userInfo {
  user:{
    name: string;
    email?: string;
    image?: string;
    level?: number;
  }
}

interface PropsData {
  session?: userInfo | null
}

import { getServerSession } from 'next-auth';
import { signIn, signOut} from 'next-auth/react';

import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Login(){
  let session = await getServerSession(authOptions) as userInfo;
  const redirectTo = ()=>{
    sessionStorage.setItem('preUrl', window.location.href);
    window.location.href= "/login"
  }

  return (
    <>
    
      
      {
         session && session.user 
        ? 
          <>
            <p>{session && session.user?.name}님 반갑습니다.</p>
            <Link href="/logout">로그아웃</Link> 
          </>
        :
          <>
          <Link href="/register">회원가입</Link>
          <Link href="/login">로그인</Link>
        </>
      }
      
      
    </>
  )
}