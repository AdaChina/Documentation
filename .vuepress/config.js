module.exports = {
  base: '/',
  title: '广州艾道',
  description: 'ADAChina Backend Documentation',
  serviceWorker: true,
  themeConfig: {
    repo: 'AdaChina/Documentation',
    serviceWorker: {
      updatePopup: true
    },
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '中心',
        link: '/central/'
      },
      {
        text: '班牌',
        link: '/class_brand/'
      },
      {
        text: '艾口算',
        link: '/arithmetic/'
      },
    ],
    sidebar: {
      '/class_brand/': [
        '',
        {
          title: '班牌端',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '后台管理',
          collapsable: true,
          children: [
            'session',
          ]
        },
        {
          title: '微信小程序端',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/arithmetic/': [
      ]
    }
  }
}
