module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    manifestOptions: {
      name: 'PWA Project',
      short_name: 'IManager',
      theme_color: '#F1333F',
      background_color: '#353434',
      icons: [
        { src: './img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: './img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
  },
};
