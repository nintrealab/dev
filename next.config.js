const withTM    = require('next-transpile-modules')(['three'])
const isProd = process.env.NODE_ENV === 'production'

module.exports  = withTM()
module.exports  = {
    assetPrefix: isProd ? '/your-github-repo-name/' : '',
    images: {
        domains: [
            '2.bp.blogspot.com',
            's.gravatar.com',
            'www.gfxkh.com',
            'telegra.ph',
            'static01.nyt.com',
            'cdn.filestackcontent.com',
            'i.mydramalist.com',
            '855-files.netlify.app',
            'nintrea.org',
            'nintrea.live',
            'nintrea.xyz',
            'mir-s3-cdn-cf.behance.net',
            'media-exp1.licdn.com',
            'www.nintrea.org',
            'v1.nintrea.org',
            'unsplash.com',
            'images.unsplash.com',
            'novel.nintrea.org',
            'file.nintrea.org',
            'bedok.nintrea.org',
            'bundit.nintrea.org',
            'sophat.nintrea.org',
            'nintrea.netlify.app',
        ],
    },
}   
