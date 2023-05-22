/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {};

module.exports = {
  nextConfig: nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
