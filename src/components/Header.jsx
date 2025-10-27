import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className="relative py-16 px-6 bg-gradient-to-b from-blue-900 to-blue-500 overflow-hidden">
      {/* 背景装饰圆圈 */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-300/10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-300/10"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-blue-300/10"></div>
      
      {/* 品牌标识 */}
      <img src={logo}/>
      
      {/* 主标题区域 */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">
          符合W3C标准的DID服务
        </h1>
        <p className="text-white text-lg md:text-xl text-center max-w-2xl">
          提供去中心化身份解决方案，让每个人都能拥有安全、自主的数字身份
        </p>
      </div>
    </header>
  )
}

export default Header
