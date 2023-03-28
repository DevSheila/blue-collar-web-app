import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Works from '../../components/works'
import Schedule from '../../components/schedule'
import Appoint from '../../components/appoint'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Works/>
    <Schedule/>
    <Appoint/>
    </>
  )
}
