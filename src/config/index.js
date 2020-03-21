// 邮箱配置
const emailConfig = {
  host: 'smtp.qq.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '576303283@qq.com',
      pass: 'lwfekslmdvhdbdbc', // 授权码
    },
}

// redis配置
const redisConfig = {
  host: '192.168.0.108',
  port: 15001,
  password: '123456',
}

export {
  emailConfig,
  redisConfig
}