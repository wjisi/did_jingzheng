import React from 'react'

const Main = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 bg-white">
      {/* DID服务图标 - 纯CSS绘制 */}
      <div className="w-[270px] h-[209px] mb-8 flex items-center justify-center">
        <div className="relative w-full h-full ml-10">
          {/* 主要文档形状 */}
          <div className="absolute bottom-0 w-3/4 h-1/2 bg-blue-50 rounded-t-lg"></div>
          <div className="absolute top-1/4 w-3/4 h-1/3 bg-blue-100 rounded-t-lg transform -rotate-3"></div>
          
          {/* 装饰性元素 */}
          <div className="absolute top-1/5 left-1/3 w-3 h-3 border-2 border-blue-200"></div>
          <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-blue-200 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 border-2 border-blue-200"></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-blue-200 rounded-full"></div>
          
          {/* 十字形装饰 */}
          <div className="absolute top-1/4 left-1/2 w-4 h-px bg-blue-200 -translate-x-1/2"></div>
          <div className="absolute top-1/4 left-1/2 w-px h-4 bg-blue-200 -translate-x-1/2"></div>
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-200 rounded-full -translate-x-1/2"></div>
          
          {/* 右侧十字形装饰 */}
          <div className="absolute top-1/5 right-1/3 w-4 h-px bg-blue-200 -translate-x-1/2"></div>
          <div className="absolute top-1/5 right-1/3 w-px h-4 bg-blue-200 -translate-x-1/2"></div>
        </div>
      </div>
      
      {/* 占位文字 */}
      <p className="text-gray-500 text-xl text-center">
        更多服务，敬请期待......
      </p>
    </main>
  )
}

export default Main
