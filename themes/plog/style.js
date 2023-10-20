/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    // 底色
    .dark body{
        background-color: black;
    }
    
    // 层级
    .box{
      width:100%;
      height:100%;
    }
    .box:fist-child{
      position:relative;
    }
    
    // 绝对定位
    .inbox_pos{
      position:absolute;
    }

    .inbox_pos:nth-child(1){
      right:0;
      background-color:blue;
    }

    .inbox_pos:nth-child(2){
      right:0;
      background-color:red;
    }
  `}</style>
}

export { Style }

