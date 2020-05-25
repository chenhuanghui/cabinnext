const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                
            })
        )

        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
              test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        
        return config
    }
}