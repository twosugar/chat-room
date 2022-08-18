/*
 * @Description:
 * @Author: twosugar
 * @Date: 2022-07-22 14:52:26
 * @FilePath: /chat-room/pages/components/home/Nav.tsx
 * @LastEditTime: 2022-08-18 20:29:54
 */
import type { NextComponentType } from "next";
import { Modal, Input, message } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useState } from "react";

const Nav: NextComponentType = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [chatId, setChatId] = useState()

  const openSearchModal = () => {
    setIsSearchVisible(true);
  };

  /**
   * @description: 发起聊天
   * @Date: 2022-08-18 20:12:16
   */
  const createChat = () => {
    if (!chatId) {
        message.error('请输入群ID')
        return
    }
    console.log(chatId)
    setIsSearchVisible(false);
  }

  const inputChatId = (e: any) => {
    setChatId(e?.target?.value)
  }

  return (
    <div className="w-[60px] bg-slate-100 h-full py-2">
      <PlusSquareOutlined
        onClick={openSearchModal}
        style={{ color: "#818cf8", fontSize: 28, cursor: "pointer" }}
      />
      <Modal title="发起聊天" visible={isSearchVisible} onOk={createChat} onCancel={() => setIsSearchVisible(false)}>
        <Input placeholder="请输入群ID" onChange={inputChatId} value={chatId}></Input>
      </Modal>
    </div>
  );
};

export default Nav;
