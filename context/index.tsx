/*
 * @Description:
 * @Date: 2022-08-12 15:31:49
 * @FilePath: /chat-room/context/index.tsx
 * @LastEditTime: 2022-08-12 17:28:24
 */
import { createContext } from "react";

interface IInitState {
    setContext(params: any): void;
    roomId: string;
}

export const initState: IInitState = {
    setContext: () => {},
    roomId: '',
}

const Context = createContext(initState);

export default Context