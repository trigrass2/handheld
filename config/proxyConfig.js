module.exports = {
    proxy: {
          '/api': {
//            target: 'http://xatzht.sxxat.com',	//正式环境接口地址
              target: 'http://192.168.1.186:9030',	//测试环境接口地址
//            target:'/',
              changeOrigin: false,  //是否跨域
              pathRewrite: {
                  '^/api': ''   //需要rewrite的,
              }
          }
    }
  }