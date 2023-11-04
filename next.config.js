module.exports = {
  reactStrictMode: true,
  basePath: '/caracol',
  // assetPrefix: '/caracol',
  images: {
    loader: 'cloudinary',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: 'https://res.cloudinary.com/dnliyglel/image/upload/',
  },
  async exportPathMap() {
    const paths = {
      '/': { page: '/' },
    };
    return paths;
  },
};
