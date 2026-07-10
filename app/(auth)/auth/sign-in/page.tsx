import React from 'react';
import Image from 'next/image';
import SignInFormClient from '@/modules/auth/components/sign-in-form-client';
const Page = () =>{
    return(
        <>
        <Image src={"/undraw_login_weas.svg"} alt = 'Login-Image' height = {300} width = {300} className='m-6 object-cover'/>
        <SignInFormClient/>
        </>
    )
}
export default Page