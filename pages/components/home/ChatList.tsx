/*
 * @Description: 
 * @Author: twosugar
 * @Date: 2022-07-22 14:59:10
 * @FilePath: /chat-room/pages/components/home/ChatList.tsx
 * @LastEditTime: 2022-07-22 18:57:10
 */
import type { NextComponentType } from 'next'
import Image from 'next/image'

const contactList = [
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' },
    { name: '孤勇者', imgurl: 'http://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' }
]
const ChatList: NextComponentType = () => {
    return <div className='w-3/12 h-full backdrop-blur-md bg-blue-100/50'>
        <div className='overflow-auto h-full chat-container'>
            {
                contactList.map((it, index) => {
                    return <div key={index} className="h-[80px] flex flex-row items-center border-b border-gray-300 px-4 py-4">
                        <Image className='rounded-sm' src={it.imgurl} height={50} width={50} style={{overflow: 'hidden'}} objectFit='cover' />
                        <div className='flex flex-col items-start ml-2 justify-between h-full'>
                            <div className='text-xs font-sans text-slate-800'>{it.name}</div>
                            <div className='text-xs font-sans text-slate-400'>xxxxxxxxxxx</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default ChatList