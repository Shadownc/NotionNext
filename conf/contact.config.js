/**
 * 社交按钮相关的配置同意放这
 */
module.exports = {
  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/Shadownc', // 你的github个人主页 例如 https://github.com/Shadownc
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/web_lmyself
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', // 小红书主页
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '' // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect
}