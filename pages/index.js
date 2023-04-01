import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import data from '../database/data.json';
// import { BiUserPlus } from "react-icons/bi";
import EmpForm from '../components/EmpForm';
import { useState } from 'react';
import Table from '../components/Table';

export async function getServerSideProps(){
    const data = await fetch(`http://localhost:3000/api/users`);
    const users = await data.json();
    return {
      props:{users}
    }
}

export default function Home({users}) {
  const [visible,setVisible] = useState(false);
  const handler = ()=>{
    setVisible(!visible);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Employee Crud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={`${styles.main} py-5`}>
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>
        Employee Managment
        </h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
        <div className='left flex gap-3'>
        <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-100 hover:border-indigo-500 hover:text-gray-800'>
          {/* Add Emplyee <span className='px-1'><BiUserPlus size={23}/></span> */}
          Add Emplyee
        </button>
        </div>      
        </div>
        <div className='container'>
        {
          visible ? <EmpForm/> : null
        }
        </div> 
        <div className='table-section container'>
        <Table data = {users}/>
        </div> 
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/gkgautam"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={`${styles.logo} w-auto`}>
            <Image src="/logo.png" alt="Vercel Logo" width={30} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}
