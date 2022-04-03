import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RestoList from '../components/resto_list' 

export default function Home() {
  return (
    <div className={className.container}>
      <RestoList />
    </div>
  )
}

const className = {
  container: "flex place-content-center",
  headline_big: "text-4xl",
}