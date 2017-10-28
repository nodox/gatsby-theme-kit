module.exports = {
    initialLinks: {
      paths: [
        {
          path: '/',
          title: 'Home',
        },
        {
          path: '/about',
          title: 'About'
        },
        {
          path: '/speaking',
          title: 'Speaking'
        },
        {
          path: '/contact',
          title: 'Contact'
        },
      ],
      socialLinks: [
        {
          path: 'https://www.twitter.com/stevennatera',
          icon: 'fa-twitter',
          name: 'Twitter',
        },
        {
          path: 'https://www.linkedin.com/in/snatera',
          icon: 'fa-linkedin',
          name: 'LinkedIn',
        },
        {
          path: 'https://www.github.com/nodox',
          icon: 'fa-github',
          name: 'Github',
        }
      ]
    },
    copyright: {
      owner: '© Steven Natera',
    },
    introText: {
      '/': 'Hi! I\'m Steven Natera. I write this blog, teach software engineering workshops, and explore emerging technologies.',
      '/about': 'Hi! I\'m Steven Natera. I write this blog, teach software engineering workshops, and explore emerging technologies.',
      '/speaking': 'I deliver talks on NodeJS and I teach software engineering workshops.',
      '/contact': 'I\'m pretty easy to get hold of, here\'s how I use different channels to communicate with people and how best to contact me'
    }
}
