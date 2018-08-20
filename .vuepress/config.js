module.exports = {
  base: '/documentation/',
  title: '广州艾道',
  description: 'ADAChina Backend Documentation',
  serviceWorker: true,
  themeConfig: {
    repo: 'AdaChina/documentation',
    lastUpdated: 'Last Updated',
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
      '/central/': [
        '',
        {
          title: '班牌端',
          collapsable: true,
          children: [
            'device/',
            'error_code',
            'device/device'
          ]
        },
        {
          title: '后台管理',
          collapsable: true,
          children: [
            'management/',
            'error_code',
            'management/session'
          ]
        },
        {
          title: '微信小程序端',
          collapsable: true,
          children: []
        }
      ],
      '/class_brand/': [
        '',
        {
          title: '班牌端',
          collapsable: true,
          children: [
            'device/',
            'error_code',
            'device/device',
            'device/utility',
            'device/classroom/',
            'device/classroom/schedule'
          ]
        },
        {
          title: '后台管理',
          collapsable: true,
          children: [
            'management/',
            'error_code',
            'management/session',
            'management/system/',
            'management/system/school',
            'management/system/system_admin',
            'management/school/',
            'management/school/school',
            'management/school/homeroom',
            'management/school/teacher',
            'management/school/student',
            'management/school/parent',
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
