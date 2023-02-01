'use client'
import { Heading, Text, Box } from "@chakra-ui/layout"
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./Header"
import Practice from "./practice"
import Pricing from "./Pricing"
import Features from "./Features"

export default function Home() {
  return (
    <ChakraProvider>
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>
  )
    
}
