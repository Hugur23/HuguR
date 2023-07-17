import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
// import styles from './page.module.css'
import hamburgerIcon from "/public/images/hamburger.svg"
import Header from '@/components/header'



const inter = Inter({ subsets: ['latin'] })

interface MetadataProps {
  title: string,
  description: string
}

export const metadata: MetadataProps = {
  title: 'HuguR',
  description: 'HuguR Mental Health Support',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " h-screen"}>
        <Header />
      <div className='w-full h-auto m-auto relative z-10'>
        {children}
      </div>
      </body>
    </html>
  )
}
