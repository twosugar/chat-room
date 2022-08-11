/*
 * @Description:
 * @Author: twosugar
 * @Date: 2022-07-22 15:34:47
 * @FilePath: /chat-room/pages/components/home/ChatContainer.tsx
 * @LastEditTime: 2022-08-11 20:16:56
 */
import type { NextComponentType } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "antd";
import SocketIO, { Socket } from "socket.io-client";

const ChatContainer: NextComponentType = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState<any>(SocketIO());
  const [chatList, setChatList] = useState<any>([]);
  const ref: any = useRef();
  const sendMessage = useCallback(
    (e: any) => {
      if (e.keyCode !== 13 || !message) {
        return;
      }
      console.log(message, !message);
      socket.emit("send-message", message);
      setTimeout(() => {
        setMessage("");
      }, 0);
    },
    [message]
  );

  useEffect(() => {
    //Strictmode 会触发两次
    socket.on("update-server", (data: any) => {
      if (!ref.current) {
        ref.current = [];
      }
      ref.current = [...ref.current, data];
      setChatList(ref.current);
    });
    socket.on("connect", () => {
      console.log(socket.connected, socket.id); // x8WIv7-mJelg7on_ALbx
    });
    socket.on("disconnect", () => {
      console.log(socket.connected, socket.id); // undefined
    });
    return () => {
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
            if (e.target.value.trim()) {
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
