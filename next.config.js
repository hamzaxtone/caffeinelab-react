/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com","localhost:3000"],
	  unoptimized: true
  },
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts/' 
        }
      }]
    });
    return config;
   },
};
module.exports = nextConfig;