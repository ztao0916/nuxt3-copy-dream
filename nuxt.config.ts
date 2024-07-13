// https://nuxt.com/docs/api/configuration/nuxt-config

//定义变量

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  elementPlus: {
    //配置项
    icon: 'ElIcon'
  },
  compatibilityDate: '2024-07-13',
  //定义应用的配置，这些配置可以在运行时动态地被访问
  runtimeConfig: {
    // 私密变量,获取使用
    apiSecret: '123456',
    dbPassword: process.env.PRIVATE_DB_PASSWORD || '',
    // 公共变量,获取使用
    public: {
      baseUrl: '/api'
    }
  }
});
