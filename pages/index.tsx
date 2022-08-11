/*
 * @Description: 
 * @Date: 2022-07-22 10:43:51
 * @FilePath: /chat-room/pages/index.tsx
 * @LastEditTime: 2022-08-11 20:02:52
 */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from './components/home/Nav'
import ChatList from './components/home/ChatList'
import ChatContainer from './components/home/ChatContainer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-14">
      <Image src='/img/home-bg.jpeg' objectFit="cover" layout="fill" />
      <Head>
        <title>chat room</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="z-10 flex h-[80vh] overflow-hidden items-center text-center w-5/6 rounded-md">
        <Nav />
        <ChatList />
        <ChatContainer />
      </main>
    </div>
  )
}

export default Home
