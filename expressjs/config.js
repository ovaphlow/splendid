const prodConfig = {
  app: {
    env: 'development',
    logLevel: 'info',
    port: 9010,
    secretKey: 'ovaphlow'
  },
  auth: {
    excludeUrl: [
      '/api/user/login'
    ]
  },
  storage: {
    user: 'ovaphlow',
    password: 'ovaph@HD.1123',
    host: '192.168.1.154',
    database: 'haxi'
  }
}

const develConfig = {
  app: {
    env: 'development',
    logLevel: 'debug',
    port: 9010,
    secretKey: 'ovaphlow'
  },
  auth: {
    excludeUrl: [
      '/api/user/login',
      '/api/user/register'
    ]
  },
  storage: {
    user: 'ovaphlow',
    password: 'ovaph@CDT.1123',
    host: '192.168.1.161',
    database: 'splendid'
  }
}

module.exports = develConfig