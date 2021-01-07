
// 引入用axios封装的ajax文件
import ajax from './ajax'

// 1、根据经纬度获取位置详情
export const reqAddRess = geohash => ajax(`/position/${{geohash}}`)
// 2、获取食品分类列表
export const reqAddFoodTypes = () => ajax(`/index_category`)
// 3、根据经纬度获取商铺列表
export const reqAddShops = (longitude, latitude) => ajax(`/shops`, {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqAddSearchShop = (geohash, keyword) => ajax(`/search_shops`, {geohash, keyword})
// 5、获取一次性验证码
export const reqAddCaptcha = (captcha) => ajax(`/captcha`, {captcha})
// 6、用户名密码登陆
export const reqAddLongin = (name, pwd, captcha) => ajax(`/login_pwd`, {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqAddSendCode = (phone) => ajax(`/sendcode`, {phone})
// 8、手机号验证码登陆
export const reqAddPhoneCode = (phone, code) => ajax(`/login_sms`, {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqAddUserInfo = () => ajax(`/userinfo`)
// 10、用户登出
export const reqAddLogOut = () => ajax(`/logout`)
