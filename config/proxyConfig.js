module.exports = {
    proxy: {
          '/api': {
//            target: 'http://xatzht.sxxat.com',	//正式环境接口地址
              target: 'http://192.168.1.160:8010',	//测试环境接口地址
//            target:'/',
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/api': ''   //需要rewrite的,
              }
          }
    }
  }