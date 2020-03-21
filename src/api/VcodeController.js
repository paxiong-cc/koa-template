import svgCaptcha from 'svg-captcha'
import { setValue } from '@/config/RedisConfig'

class VcodeController {
  constructor() {}
  async getCaptcha(ctx) {
    // 获取客户端对应的唯一值
    const sid = ctx.request.query.sid
    // 获取图形验证码
    const newCaptca = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 40,
    })

    // 添加到redis中
    setValue(sid, newCaptca.text, 5 * 60)

    ctx.body = {
      code: 200,
      data: newCaptca.data,
    }
  }
}

export default new VcodeController()
