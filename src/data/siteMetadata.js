const fr = require('./fr')
const en = require('./en')

module.exports = {
  fr,
  en,
  author: {
    name: 'Benoit Maigret'
  },
  work: [
    {
      title: 'Hozana',
      link: 'https://hozana.org',
      image: 'hozana.jpg',
      skills: 'React - Redux - Webpack'
    },
    {
      title: 'Lilith',
      link: 'https://www.lilithparis.com',
      image: 'logo_lilith.jpg',
      skills: 'Shopify'
    },
    {
      link: 'https://cec-zev.eu',
      image: 'logo_CEC.jpg',
      skills: 'Typo3 - Sass - Gulp'
    },
    {
      title: 'Zbäeren',
      link: 'http://zbaeren.ch',
      image: 'zbaeren.jpg',
      skills: 'Wordpress - Sass - JS'
    }
  ],
  contact: [
    {
      type: 'email',
      value: 'Email',
      link: 'mailto:contact+fwebsite@benoitmaigret.com'
    },
    {
      type: 'github',
      value: 'Github',
      link: 'https://github.com/BenMt'
    },
    {
      type: 'twitter',
      value: 'Twitter',
      link: 'https://twitter.com/benoitmaigret'
    },
    {
      type: 'linkedin',
      value: 'Linkedin',
      link: 'https://www.linkedin.com/in/benoitmaigret/'
    }
  ]
}
