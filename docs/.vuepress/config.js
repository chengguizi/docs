const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`,{skipEmptySidebar: false, addReadMeToFirstGroup:false})


// module.exports = {
//   themeConfig: {
//     ...barConfig,
//     displayAllHeaders: true // Default: false
//   }
// };


// Mixed style
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Tutorials', link: '/1-tutorials/' },
      // { text: 'External', link: 'https://google.com' },
     ...barConfig.nav],
    sidebar: barConfig.sidebar,
    lastUpdated: 'Last Updated',
    editLinks: false,
    displayAllHeaders: true // Default: false
  },
  base: '/docs/'
};


// module.exports = {
//   themeConfig: {
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Hardware', link: '/hardware/' },
//     ],
//     sidebar: {
//       '/hardware/realsense/': [
//         '',
//         'build-librealsense'
//       ],
//       '/hardware/': [
//         '',
//         'realsense/',
//         'nvidia-intel-driver'
//       ]
//     },
//     lastUpdated: 'Last Updated', // string | boolean
//     displayAllHeaders: true // Default: false
//   }
// }
