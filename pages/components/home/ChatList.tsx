/*
 * @Description:
 * @Author: twosugar
 * @Date: 2022-07-22 14:59:10
 * @FilePath: /chat-room/pages/components/home/ChatList.tsx
 * @LastEditTime: 2022-08-12 19:28:08
 */
import type { NextComponentType } from "next";
import Context from "@/context/index";
import Image from "next/image";
import { useContext } from "react";
import socket from "./socket";

const contactList = [
  {
    name: "畅所欲言群(公开)",
    roomId: "abc",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    roomId: "121212",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  {
    name: "孤勇者",
    imgurl:
      "http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
];

interface IChatItem {
  name: string;
  roomId?: string | null | undefined;
  imgurl: string;
}

const ChatList: NextComponentType = () => {
  const { setContext, roomId } = useContext(Context);

  const selectRoom = (params: IChatItem) => {
    // socket.emit("leave-room", roomId); //离开房间
    // socket.emit("join-room", params.roomId); //加入房间
    setContext({ key: "roomId", value: params.roomId });
    // fetch(`/api/hello?roomid=${params.roomId}`)
  };

  return (
    <div className="w-3/12 h-full backdrop-blur-md bg-blue-100/50">
      <div className="overflow-auto h-full chat-container">
        {contactList.map((it: IChatItem, index) => {
          return (
            <div
              key={index}
              className="h-[80px] flex flex-row items-center border-b border-gray-300 px-4 py-4"
              onClick={() => selectRoom(it)}
            >
              <Image
                className="rounded-sm"
                src={it.imgurl}
                height={50}
                width={50}
                style={{ overflow: "hidden" }}
                objectFit="cover"
              />
              <div className="flex flex-col items-start ml-2 justify-between h-full flex-1">
                <div className="flex justify-between items-center text-sm font-sans text-slate-800 w-full">
                  {it.name}
                  <div className="text-xs text-neutral-500">2022-08-09</div>
                </div>
                <div className="text-xs font-sans text-slate-600">
                  xxxxxxxxxxx
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
