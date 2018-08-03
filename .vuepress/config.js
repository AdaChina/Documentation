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
      '/class_brand/': [
        '',
        {
          title: '班牌端',
          collapsable: true,
          children: [
            'error_code'
          ]
        },
        {
          title: '后台管理',
          collapsable: true,
          children: [
            'mgmt_readme',
            'error_code',
            'mgmt_session',
            'system_mgmt/',
            'system_mgmt/school',
            'system_mgmt/system_admin',
            'school_mgmt/',
            'school_mgmt/school',
            'school_mgmt/homeroom',
            'school_mgmt/teacher',
            'school_mgmt/student',
            'school_mgmt/parent',
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
