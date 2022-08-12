/*
 * @Description:
 * @Author: twosugar
 * @Date: 2022-07-22 15:34:47
 * @FilePath: /chat-room/pages/components/home/ChatContainer.tsx
 * @LastEditTime: 2022-08-12 19:28:18
 */
import type { NextComponentType } from "next";
import Context from "@/context/index";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Input } from "antd";
import socket from "./socket";

const ChatContainer: NextComponentType = () => {
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState<any>([]);
  const ref: any = useRef();
  const context = useContext(Context);

  const sendMessage = useCallback(
    (e: any) => {
      if (e.keyCode !== 13 || !message) {
        return;
      }
      socket.emit("send-message", { message, roomId: context.roomId });
      setTimeout(() => {
        setMessage("");
      }, 0);
    },
    [message]
  );

  useEffect(() => {
    //Strictmode模式 会触发两次
    socket.on("update-server", (data: any) => {
      console.log("客户端收到的数据", data);
      if (!ref.current) {
        ref.current = [];
      }
      ref.current = [...ref.current, data];
      setChatList(ref.current);
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
    <div className="flex flex-col flex-1 bg-violet-100 h-full">
      <div className="h-14 border-b border-slate-300 flex items-center justify-start box-border px-6">
        群
      </div>
      <div className="flex-1">
        {chatList.map((it: string, index: number) => {
          return <div key={index}>{it}</div>;
        })}
      </div>
      <div className="border-t border-slate-300">
        <Input.TextArea
          value={message}
          onChange={(e) => {
            if (e.target.value && e.target.value !== "\n") {
              setMessage(e.target.value);
            }
          }}
          onPressEnter={sendMessage}
          bordered={false}
          className="w-full block"
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
