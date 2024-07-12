import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import App from './App';
import generatePageSEO from '@/utils/generatePageSEO';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Debt Relief Company - A Better Debt Relief Option</title>
        {generatePageSEO(
              '', 
              'The Debt Relief Company - A Better Debt Relief Option', 
              `The Debt Relief Co., America's better debt relief option. Don’t let credit card debt steal your sunshine. Sign up in seconds and take back control from your high interest credit card debt.`,
              'homepage'
        )} 
      </Head>
      <App />
    </>
  )
}
