const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['static.xx.fbcdn.net', "lh3.googleusercontent.com", "cdn.mos.cms.futurecdn.net", "firebasestorage.googleapis.com"]
  }
})
