const siteMetadata = {
  title: 'Md Shamsuzzama Siddique',
  author: 'Md Shamsuzzama Siddique',
  headerTitle: 'Md Shamsuzzama Siddique',
  description: 'Software Developer at Aphex',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://md-portfolio.vercel.app/',
  siteRepo: 'https://github.com/mdshamsh20/md-portfolio-',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'mdshamsuzzama19@gmail.com',
  github: 'https://github.com/mdshamsh20',
  linkedin: 'https://www.linkedin.com/in/md-16aug02/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
