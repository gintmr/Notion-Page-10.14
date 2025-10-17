/**
 * 网站字体相关配置
 *
 */
module.exports = {
  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  // FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-serif font-medium', 
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-serif font-light', 
  
  // 字体CSS
  FONT_URL: [
    'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css2?family=Kalnia:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap'
  ],

  // 字体优化配置
  FONT_DISPLAY: process.env.NEXT_PUBLIC_FONT_DISPLAY || 'swap',
  FONT_PRELOAD: process.env.NEXT_PUBLIC_FONT_PRELOAD || true,
  FONT_SUBSET: process.env.NEXT_PUBLIC_FONT_SUBSET || 'chinese-simplified',
  // 无衬线字体
  FONT_SANS: [
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体
  FONT_SERIF: [
    '"Cormorant Garamond"',                    // 主要英文字体
    '"LXGW WenKai"',             // 主要中文字体
    'Georgia',                   // 备用英文字体
    'SimSun',                    // 备用中文字体
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'

  // END ************网站字体*****************
}