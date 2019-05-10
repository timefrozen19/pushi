module.exports = {
  title: 'HTML&CSS 朴实教程',
  description: '一个简单的 HTML 和 CSS 的教程',

  themeConfig: {
    sidebar: [
        ['', '首页'],
        'software',
        'general-concepts',
        'html',
        // 'html-advanced',
        'html-common-elements',
        'resource-path',
        ['css-intro', 'CSS 概述'],
        'css-selector',
        'css-size-unit',
        'css-box-model',
        'css-flow-and-position',
        'css-flexbox'
    ],
    nav: [
      { text: '关于', link: 'about.md' },
      { text: '源码', link: 'https://github.com/seekerlee/pushi' }
    ]
  }
}