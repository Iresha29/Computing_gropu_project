import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Doctor_signin from '@/pages/doctor_signin'
import Doctor_signup from '@/pages/doctor_signup'
import Patient_signin from '@/pages/patient_signin'
import Patient_signup from '@/pages/patient_signup'
import User_signin from '@/pages/user_signin'
import User_signup from '@/pages/user_signup'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      <div className='col-span-4 justify-start'>
        <Sidebar />
      </div>

      <div className='col-span-8'>
        <Doctor_signin/>
        <Doctor_signup/>
        <Patient_signin/>
        <Patient_signup/>
        <User_signin/>
        <User_signup/>
      </div>
      </main>
    </>
  )
}
