/*
 * @Description:
 * @Date: 2022-07-22 10:43:51
 * @FilePath: /chat-room/pages/index.tsx
 * @LastEditTime: 2022-08-18 20:30:39
 */
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import socket from "./components/home/socket";
import Head from "next/head";
import Image from "next/image";
import Nav from "./components/home/Nav";
import ChatList from "./components/home/ChatList";
import ChatContainer from "./components/home/ChatContainer";

const Home: NextPage = () => {
  const ref: any = useRef();
  const [roomMessageList, setRoomMessageList] = useState<any>([]);
  useEffect(() => {
    //Strictmode模式 会触发两次
    socket.on("update-server", (data: any) => {
      console.log("客户端收到的数据", data);
      if (!ref.current) {
        ref.current = [];
      }
      ref.current = [...ref.current, data];
      console.log(ref.current);
      // setChatList(ref.current);
    });

    socket.on("connect", () => {
      console.log(socket.connected, socket.id);
    });

    socket.on("disconnect", () => {
      console.log(socket.connected, socket.id);
    });

    return () => {
      console.log("unmount");
      if (socket && socket.connected) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-14">
      <Image src="/img/home-bg.jpeg" objectFit="cover" layout="fill" />
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
  );
};

export default Home;
